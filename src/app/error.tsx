"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div>
        <h1>Something went wrong!</h1>

        <p>{error.message}</p>

        <button onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </div>
  );
}