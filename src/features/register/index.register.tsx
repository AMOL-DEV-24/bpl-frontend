/* =========================================================
   REGISTRATION FORM
   Purpose : Orchestrates formik state, payment flow and
             photo upload. Delegates all UI to sub-sections.
   ========================================================= */

"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { usePayment }            from "@/redux/modules/payment/usePayment";
import { usePlayerRegistration } from "@/redux/modules/register/usePlayerRegistration";
import Loader                    from "@/components/loader/Loader";
import ToastMessage              from "@/components/toast/ToastMessage";

import RegistrationHeader   from "./components/RegistrationHeader";
import RegistrationSuccess  from "./components/RegistrationSuccess";
import PhotoUpload          from "./components/PhotoUpload";
import PersonalInfoSection  from "./components/PersonalInfoSection";
import CricketInfoSection   from "./components/CricketInfoSection";
import StatisticsSection    from "./components/StatisticsSection";
import AboutSection         from "./components/AboutSection";

import { RegistrationValues } from "../../types/register/registration.types";

/* =========================================================
   RAZORPAY TYPES
   ========================================================= */
declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => { open(): void };
  }
}
interface RazorpayOptions {
  key: string; amount: number; currency: string;
  name: string; description: string; order_id: string;
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

/* =========================================================
   COMPONENT
   ========================================================= */
export default function RegistrationForm() {
  const [preview,   setPreview]   = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);

  const { openPayment, stepMessage, error: paymentError } = usePayment();
  const { register } = usePlayerRegistration();

  /* ── Formik ── */
  const formik = useFormik<RegistrationValues>({
    initialValues: {
      photo: null, firstName: "", lastName: "", email: "",
      mobile: "", village: "", age: "", jerseyNumber: "",
      role: "", battingStyle: "", bowlingStyle: "",
      experience: "", matches: "", runs: "",
      wickets: "", strikeRate: "", about: "",
    },

    validationSchema: Yup.object({
      photo:        Yup.mixed().required("Photo is required"),
      firstName:    Yup.string().required("First name is required"),
      lastName:     Yup.string().required("Last name is required"),
      email:        Yup.string().email("Invalid email").required("Email is required"),
      mobile:       Yup.string().matches(/^[0-9]{10}$/, "Invalid mobile number").required("Mobile is required"),
      age:          Yup.number().typeError("Age must be a number").required("Age is required"),
      role:         Yup.string().required("Role is required"),
      battingStyle: Yup.string().required("Batting style is required"),
      bowlingStyle: Yup.string().required("Bowling style is required"),
    }),

    onSubmit: async (values, { setSubmitting }) => {
      try {
        const orderId = await openPayment({
          email:   values.email,
          name:    `${values.firstName} ${values.lastName}`,
          contact: values.mobile,
        });

        await register({ values, orderId });

        ToastMessage(200, "Registration submitted successfully!");
        setIsSuccess(true);

      } catch (err: unknown) {
        const e = err as { data?: { message?: string }; status?: number; message?: string };
        ToastMessage(e?.status ?? 400, e?.data?.message ?? e?.message ?? "Something went wrong.");

      } finally {
        setSubmitting(false);
      }
    },
  });

  /* ── Photo handler ── */
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    formik.setFieldValue("photo", file);
    setPreview(URL.createObjectURL(file));
  };

  /* ── Success screen ── */
  if (isSuccess) return <RegistrationSuccess />;

  /* ── Form ── */
  return (
    <section className="player-registration-page">

      {/* ── Global Loader ── */}
      <Loader isLoading={formik.isSubmitting} message={stepMessage || "Processing…"} />

      <div className="registration-container">

        <RegistrationHeader />

        <form className="player-form" onSubmit={formik.handleSubmit}>

          <PhotoUpload
            preview={preview}
            error={formik.errors.photo as string}
            touched={!!formik.touched.photo}
            disabled={formik.isSubmitting}
            onChange={handleImage}
          />

          <PersonalInfoSection formik={formik} />
          <CricketInfoSection  formik={formik} />
          <StatisticsSection   formik={formik} />
          <AboutSection        formik={formik} />

          {/* ── Payment error fallback ── */}
          {paymentError && (
            <p className="form-fatal-error" role="alert">{paymentError}</p>
          )}

          <button
            type="submit"
            className="submit-btn"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? stepMessage || "Processing…" : "Register & Pay ₹150"}
          </button>

        </form>
      </div>
    </section>
  );
}