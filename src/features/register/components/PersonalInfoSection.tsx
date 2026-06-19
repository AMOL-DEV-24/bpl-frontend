/* =========================================================
   PERSONAL INFO SECTION
   Purpose : First name, last name, email, mobile, village,
             age and jersey number fields.
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

export default function PersonalInfoSection({ formik }: Props) {
  return (
    <div className="form-section">
      <h2 className="form-section__title">Personal Information</h2>

      <div className="form-section__grid">

        <div className="form-field">
          <input placeholder="First Name" {...formik.getFieldProps("firstName")} />
          <FieldError touched={formik.touched.firstName} error={formik.errors.firstName} />
        </div>

        <div className="form-field">
          <input placeholder="Last Name" {...formik.getFieldProps("lastName")} />
          <FieldError touched={formik.touched.lastName} error={formik.errors.lastName} />
        </div>

        <div className="form-field">
          <input placeholder="Email" {...formik.getFieldProps("email")} />
          <FieldError touched={formik.touched.email} error={formik.errors.email} />
        </div>

        <div className="form-field">
          <input placeholder="Mobile" {...formik.getFieldProps("mobile")} />
          <FieldError touched={formik.touched.mobile} error={formik.errors.mobile} />
        </div>

        <input placeholder="Village"       {...formik.getFieldProps("village")} />
        <input placeholder="Jersey Number" {...formik.getFieldProps("jerseyNumber")} />

        <div className="form-field">
          <input placeholder="Age" {...formik.getFieldProps("age")} />
          <FieldError touched={formik.touched.age} error={formik.errors.age} />
        </div>

      </div>
    </div>
  );
}