/* =========================================================
   REGISTRATION HEADER
   Purpose : Page badge, title and subtitle at the top
             of the player registration form.
   ========================================================= */
export default function RegistrationHeader() {
  return (
    <div className="registration-header">
      <span className="registration-header__badge">BPL OFFICIAL</span>
      <h1 className="registration-header__title">Player Registration</h1>
      <p className="registration-header__subtitle">
        Register yourself for Bhalawani Premier League.
      </p>
    </div>
  );
}