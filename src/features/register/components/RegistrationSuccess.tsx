/* eslint-disable react/no-unescaped-entities */
/* =========================================================
   REGISTRATION SUCCESS
   Purpose : Full-page success confirmation screen shown
             after a player completes registration + payment.
   ========================================================= */
export default function RegistrationSuccess() {
  return (
    <section className="reg-success">
      <div className="reg-success__card">

        {/* ── Animated Icon ── */}
        <div className="reg-success__icon-wrap">
          <svg
            className="reg-success__checkmark"
            viewBox="0 0 52 52"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle className="reg-success__circle" cx="26" cy="26" r="25" fill="none" />
            <path  className="reg-success__check"  fill="none" d="M14 27l7 7 16-16" />
          </svg>
        </div>

        {/* ── Badge ── */}
        <span className="reg-success__badge">BPL OFFICIAL</span>

        {/* ── Heading ── */}
        <h2 className="reg-success__title">Registration Submitted!</h2>

        {/* ── Body ── */}
        <p className="reg-success__body">
          Your profile is now under review. Once an admin approves
          your registration, you'll appear on the BPL players page.
        </p>

        {/* ── Divider ── */}
        <div className="reg-success__divider" />

        {/* ── Meta Row ── */}
        <ul className="reg-success__meta">
          <li>
            <span className="reg-success__meta-icon">🏏</span>
            Player registered
          </li>
          <li>
            <span className="reg-success__meta-icon">💳</span>
            Payment confirmed
          </li>
          <li>
            <span className="reg-success__meta-icon">⏳</span>
            Awaiting admin approval
          </li>
        </ul>

      </div>
    </section>
  );
}