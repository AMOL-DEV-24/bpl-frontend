/* =========================================================
   STATISTICS SECTION
   Purpose : Matches, runs, wickets and strike rate fields.
   ========================================================= */

import { FormikProps } from "formik";
import { RegistrationValues } from "../../../types/register/registration.types";

interface Props {
  formik: FormikProps<RegistrationValues>;
}

export default function StatisticsSection({ formik }: Props) {
  return (
    <div className="form-section">
      <h2 className="form-section__title">Statistics</h2>

      <div className="form-section__grid">
        <input placeholder="Matches"     {...formik.getFieldProps("matches")} />
        <input placeholder="Runs"        {...formik.getFieldProps("runs")} />
        <input placeholder="Wickets"     {...formik.getFieldProps("wickets")} />
        <input placeholder="Strike Rate" {...formik.getFieldProps("strikeRate")} />
      </div>
    </div>
  );
}