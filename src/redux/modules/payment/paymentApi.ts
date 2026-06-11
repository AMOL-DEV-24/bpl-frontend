import { baseApi } from "../../api/baseApi";

interface CreateOrderResponse {
  orderId: string;
  amount: number;
  currency: string;
}

interface VerifyPaymentRequest {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    createOrder: builder.mutation<CreateOrderResponse, { email: string }>({
      query: (body) => ({
        url: "/payment/create-order",
        method: "POST",
        body,
      }),
      transformResponse: (response: { data: { id: string; amount: number; currency: string } }) => ({
        orderId:  response.data.id,       // backend: data.id → frontend: orderId
        amount:   response.data.amount,
        currency: response.data.currency,
      }),
    }),

    verifyPayment: builder.mutation<void, VerifyPaymentRequest>({
      query: (body) => ({
        url: "/payment/verify",
        method: "POST",
        body,
      }),
    }),

  }),
});

export const { useCreateOrderMutation, useVerifyPaymentMutation } = paymentApi;