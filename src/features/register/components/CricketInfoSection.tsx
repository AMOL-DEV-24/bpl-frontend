/* =========================================================
   CRICKET INFO SECTION
   Purpose : Role, batting style, bowling style and
             experience fields.
   ========================================================= */

import { FormikProps } from "formik";
import { RegistrationValues } from "../../../types/register/registration.types";

interface Props {
  formik: FormikProps<RegistrationValues>;
}

function FieldError({ touched, error }: { touched?: boolean; error?: string }) {
  if (!touched || !error) return null;
  return <p className="field-error">{error}</p>;
}

export default function CricketInfoSection({ formik }: Props) {
  return (
    <div className="form-section">
      <h2 className="form-section__title">Cricket Information</h2>

      <div className="form-section__grid">

        <div className="form-field">
          <select {...formik.getFieldProps("role")}>
            <option value="">Select Role</option>
            <option>Batsman</option>
            <option>Bowler</option>
            <option>All Rounder</option>
            <option>Wicket Keeper</option>
          </select>
          <FieldError touched={formik.touched.role} error={formik.errors.role} />
        </div>

        <div className="form-field">
          <select {...formik.getFieldProps("battingStyle")}>
            <option value="">Batting Style</option>
            <option>Right Hand Bat</option>
            <option>Left Hand Bat</option>
          </select>
          <FieldError touched={formik.touched.battingStyle} error={formik.errors.battingStyle} />
        </div>

        <div className="form-field">
          <select {...formik.getFieldProps("bowlingStyle")}>
            <option value="">Bowling Style</option>
            <option>Fast</option>
            <option>Medium</option>
            <option>Spin</option>
          </select>
          <FieldError touched={formik.touched.bowlingStyle} error={formik.errors.bowlingStyle} />
        </div>

        <input placeholder="Experience (Years)" {...formik.getFieldProps("experience")} />

      </div>
    </div>
  );
}