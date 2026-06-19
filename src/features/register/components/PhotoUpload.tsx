/* =========================================================
   PHOTO UPLOAD
   Purpose : Player photo preview + file input field.
   ========================================================= */

/* eslint-disable @next/next/no-img-element */

interface PhotoUploadProps {
  preview:    string;
  error?:     string;
  touched?:   boolean;
  disabled:   boolean;
  onChange:   (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PhotoUpload({
  preview,
  error,
  touched,
  disabled,
  onChange,
}: PhotoUploadProps) {
  return (
    <div className="photo-upload">

      {/* ── Preview ── */}
      <div className="photo-upload__preview">
        {preview ? (
          <img src={preview} alt="Player preview" />
        ) : (
          <span className="photo-upload__placeholder">
            <span className="photo-upload__icon">📷</span>
            Upload Photo
          </span>
        )}
      </div>

      {/* ── Input ── */}
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        disabled={disabled}
        className="photo-upload__input"
      />

      {/* ── Error ── */}
      {touched && error && (
        <p className="field-error">{error}</p>
      )}

    </div>
  );
}