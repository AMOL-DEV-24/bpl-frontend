// hooks/usePayment.ts

import { useState } from "react";
import { useCreateOrderMutation, useVerifyPaymentMutation } from "./paymentApi";

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => { open(): void };
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill?: { name?: string; email?: string; contact?: string };
  theme?: { color?: string };
  handler(response: RazorpayResponse): void;
  modal?: { ondismiss?(): void };
}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface OpenPaymentParams {
  email: string;
  name: string;
  contact: string;
}

interface UsePaymentReturn {
  openPayment: (params: OpenPaymentParams) => Promise<string>; // resolves with orderId
  isLoading: boolean;
  stepMessage: string;
  error: string;
  clearError: () => void;
}


function getErrorMessage(err: unknown): string {
  if (err && typeof err === "object") {
    if ("data" in err && (err as { data?: { message?: string } }).data?.message)
      return (err as { data: { message: string } }).data.message;
    if ("message" in err)
      return (err as { message: string }).message;
  }
  return "Something went wrong.";
}

export function usePayment(): UsePaymentReturn {
  const [stepMessage, setStepMessage] = useState("");
  const [error, setError] = useState("");

  const [createOrder, { isLoading: isCreating }] = useCreateOrderMutation();
  const [verifyPayment, { isLoading: isVerifying }] =
    useVerifyPaymentMutation();

  const isLoading = isCreating || isVerifying;

  const openPayment = ({
    email,
    name,
    contact,
  }: OpenPaymentParams): Promise<string> => {
    setError("");

    return new Promise(async (resolve, reject) => {
      try {
        // Step 1: Create order
        setStepMessage("Creating payment order…");
        const order = await createOrder({ email }).unwrap();

        // Step 2: Open Razorpay modal
        setStepMessage("Opening payment…");

        if (!window.Razorpay) {
          throw new Error(
            "Payment gateway not loaded. Please refresh and try again.",
          );
        }

        const rzp = new window.Razorpay({
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
          amount: order.amount,
          currency: order.currency,
          name: "Bhalawani Premier League",
          description: "Player Registration Fee",
          order_id: order.orderId,
          prefill: { name, email, contact },
          theme: { color: "#6c47ff" },

          handler: async (response: RazorpayResponse) => {
            try {
              setStepMessage("Verifying payment…");
              await verifyPayment({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }).unwrap();

              setStepMessage("");
              resolve(order.orderId);
            } catch (err: unknown) {
              const msg = getErrorMessage(err);
              setError(msg);
              setStepMessage("");
              reject(new Error(msg));
            }
          },

          modal: {
            ondismiss: () => {
              const msg = "Payment cancelled. You can try again.";
              setError(msg);
              setStepMessage("");
              reject(new Error(msg));
            },
          },
        });

        rzp.open();
      } catch (err: any) {
        const msg =
          err?.data?.message ?? err?.message ?? "Something went wrong.";
        setError(msg);
        setStepMessage("");
        reject(new Error(msg));
      }
    });
  };

  return {
    openPayment,
    isLoading,
    stepMessage,
    error,
    clearError: () => setError(""),
  };
}
