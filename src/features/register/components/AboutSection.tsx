/* =========================================================
   ABOUT SECTION
   Purpose : Free-text bio / about player textarea.
   ========================================================= */

import { FormikProps } from "formik";
import { RegistrationValues } from "../../../types/register/registration.types";

interface Props {
  formik: FormikProps<RegistrationValues>;
}

export default function AboutSection({ formik }: Props) {
  return (
    <div className="form-section">
      <h2 className="form-section__title">About Player</h2>

      <textarea
        rows={5}
        placeholder="Tell us about yourself..."
        className="form-section__textarea"
        {...formik.getFieldProps("about")}
      />
    </div>
  );
}