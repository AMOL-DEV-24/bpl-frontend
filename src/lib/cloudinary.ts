const CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;

export async function uploadToCloudinary(
  file: File,
  uploadPreset: string,
): Promise<string> {

  console.log("Cloud Name:", CLOUD_NAME);
  console.log("Upload Preset:", uploadPreset);

   if (!uploadPreset) {
    throw new Error(
      "Cloudinary upload preset is missing."
    );
  }


  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    },
  );

  const data = await res.json();

  console.log("Cloudinary Response:", data);

  if (!res.ok) {
    throw new Error(
      data?.error?.message ||
      "Photo upload failed",
    );
  }

  return data.secure_url;
}