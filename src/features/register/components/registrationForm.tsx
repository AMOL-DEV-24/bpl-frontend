/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { usePayment } from "@/redux/modules/payment/usePayment";
import { usePlayerRegistration } from "@/redux/modules/player/usePlayerRegistration";

/* =========================================================
   RAZORPAY TYPES
========================================================= */
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

/* =========================================================
   ERROR COMPONENT
========================================================= */
function ErrorMessage({
  touched,
  error,
}: {
  touched?: boolean;
  error?: string;
}) {
  if (!touched || !error) return null;
  return <p className="error">{error}</p>;
}

/* =========================================================
   COMPONENT
========================================================= */
export default function PlayerRegistrationForm() {
  const [preview, setPreview]       = useState<string>("");
  const [fatalError, setFatalError] = useState<string>("");
  const [isSuccess, setIsSuccess]   = useState(false);

  const { openPayment, stepMessage, error: paymentError } = usePayment();
  const { register } = usePlayerRegistration();

  const formik = useFormik({
    initialValues: {
      photo:        null as File | null,
      firstName:    "",
      lastName:     "",
      email:        "",
      mobile:       "",
      village:      "",
      age:          "",
      jerseyNumber: "",
      role:         "",
      battingStyle: "",
      bowlingStyle: "",
      experience:   "",
      matches:      "",
      runs:         "",
      wickets:      "",
      strikeRate:   "",
      about:        "",
    },

    validationSchema: Yup.object({
      photo:        Yup.mixed().required("Photo is required"),
      firstName:    Yup.string().required("First name is required"),
      lastName:     Yup.string().required("Last name is required"),
      email:        Yup.string().email("Invalid email").required("Email is required"),
      mobile:       Yup.string()
                      .matches(/^[0-9]{10}$/, "Invalid mobile number")
                      .required("Mobile is required"),
      age:          Yup.number().typeError("Age must be a number").required("Age is required"),
      role:         Yup.string().required("Role is required"),
      battingStyle: Yup.string().required("Batting style is required"),
      bowlingStyle: Yup.string().required("Bowling style is required"),
    }),

    onSubmit: async (values, { setSubmitting }) => {
      setFatalError("");

      try {
        // Step 1 + 2 + 3: payment (cloudinary upload happens inside register)
        const orderId = await openPayment({
          email:   values.email,
          name:    `${values.firstName} ${values.lastName}`,
          contact: values.mobile,
        });

        // Step 4: upload photo + register player
        await register({ values, orderId });

        setIsSuccess(true);

      } catch (err: unknown) {
        const e = err as { data?: { message?: string }; message?: string };
        setFatalError(e?.data?.message ?? e?.message ?? "Something went wrong. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  /* =========================================================
     HANDLE IMAGE
  ========================================================= */
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    formik.setFieldValue("photo", file);
    setPreview(URL.createObjectURL(file));
  };

  /* =========================================================
     SUCCESS SCREEN
  ========================================================= */
  if (isSuccess) {
    return (
      <section className="player-registration-page">
        <div className="registration-container">
          <div className="registration-success">
            <span className="registration-success__icon">✅</span>
            <h2>Registration Submitted!</h2>
            <p>
              Your registration is awaiting admin approval.
              You will appear on the site once approved.
            </p>
          </div>
        </div>
      </section>
    );
  }

  /* =========================================================
     FORM
  ========================================================= */
  return (
    <section className="player-registration-page">
      <div className="registration-container">

        {/* HEADER */}
        <div className="registration-header">
          <span>BPL OFFICIAL</span>
          <h1>Player Registration</h1>
          <p>Register yourself for Bhalawani Premier League.</p>
        </div>

        <form className="player-form" onSubmit={formik.handleSubmit}>

          {/* PHOTO */}
          <div className="field image-upload">
            <div className="preview">
              {preview ? (
                <img src={preview} alt="preview" />
              ) : (
                <span>Upload Photo</span>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              disabled={formik.isSubmitting}
            />
            <ErrorMessage
              touched={!!formik.touched.photo}
              error={formik.errors.photo as string}
            />
          </div>

          {/* PERSONAL INFORMATION */}
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="grid">

              <div className="field">
                <input placeholder="First Name" {...formik.getFieldProps("firstName")} />
                <ErrorMessage touched={formik.touched.firstName} error={formik.errors.firstName} />
              </div>

              <div className="field">
                <input placeholder="Last Name" {...formik.getFieldProps("lastName")} />
                <ErrorMessage touched={formik.touched.lastName} error={formik.errors.lastName} />
              </div>

              <div className="field">
                <input placeholder="Email" {...formik.getFieldProps("email")} />
                <ErrorMessage touched={formik.touched.email} error={formik.errors.email} />
              </div>

              <div className="field">
                <input placeholder="Mobile" {...formik.getFieldProps("mobile")} />
                <ErrorMessage touched={formik.touched.mobile} error={formik.errors.mobile} />
              </div>

              <input placeholder="Village" {...formik.getFieldProps("village")} />

              <div className="field">
                <input placeholder="Age" {...formik.getFieldProps("age")} />
                <ErrorMessage touched={formik.touched.age} error={formik.errors.age} />
              </div>

              <input placeholder="Jersey Number" {...formik.getFieldProps("jerseyNumber")} />

            </div>
          </div>

          {/* CRICKET INFORMATION */}
          <div className="form-section">
            <h2>Cricket Information</h2>
            <div className="grid">

              <div className="field">
                <select {...formik.getFieldProps("role")}>
                  <option value="">Select Role</option>
                  <option>Batsman</option>
                  <option>Bowler</option>
                  <option>All Rounder</option>
                  <option>Wicket Keeper</option>
                </select>
                <ErrorMessage touched={formik.touched.role} error={formik.errors.role} />
              </div>

              <div className="field">
                <select {...formik.getFieldProps("battingStyle")}>
                  <option value="">Batting Style</option>
                  <option>Right Hand Bat</option>
                  <option>Left Hand Bat</option>
                </select>
                <ErrorMessage touched={formik.touched.battingStyle} error={formik.errors.battingStyle} />
              </div>

              <div className="field">
                <select {...formik.getFieldProps("bowlingStyle")}>
                  <option value="">Bowling Style</option>
                  <option>Fast</option>
                  <option>Medium</option>
                  <option>Spin</option>
                </select>
                <ErrorMessage touched={formik.touched.bowlingStyle} error={formik.errors.bowlingStyle} />
              </div>

              <input placeholder="Experience (Years)" {...formik.getFieldProps("experience")} />

            </div>
          </div>

          {/* STATISTICS */}
          <div className="form-section">
            <h2>Statistics</h2>
            <div className="grid">
              <input placeholder="Matches"     {...formik.getFieldProps("matches")} />
              <input placeholder="Runs"        {...formik.getFieldProps("runs")} />
              <input placeholder="Wickets"     {...formik.getFieldProps("wickets")} />
              <input placeholder="Strike Rate" {...formik.getFieldProps("strikeRate")} />
            </div>
          </div>

          {/* ABOUT */}
          <div className="form-section">
            <h2>About Player</h2>
            <textarea
              rows={5}
              placeholder="Tell us about yourself..."
              {...formik.getFieldProps("about")}
            />
          </div>

          {/* STEP MESSAGE */}
          {stepMessage && (
            <p className="form-step-message" aria-live="polite">
              {stepMessage}
            </p>
          )}

          {/* PAYMENT ERROR */}
          {paymentError && (
            <p className="form-fatal-error" role="alert">
              {paymentError}
            </p>
          )}

          {/* FATAL ERROR */}
          {fatalError && (
            <p className="form-fatal-error" role="alert">
              {fatalError}
            </p>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            className="submit-btn"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting
              ? stepMessage || "Processing…"
              : "Register & Pay ₹1"}
          </button>

        </form>
      </div>
    </section>
  );
}