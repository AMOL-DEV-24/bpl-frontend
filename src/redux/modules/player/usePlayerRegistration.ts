// hooks/usePlayerRegistration.ts

import { useState } from "react";
import { useRegisterPlayerMutation } from "./playerApi";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { CLOUDINARY_PRESETS } from "@/constants/cloudinary.presets";

interface RegisterParams {
  values: {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    village: string;
    age: string;
    jerseyNumber: string;
    role: string;
    battingStyle: string;
    bowlingStyle: string;
    experience: string;
    matches: string;
    runs: string;
    wickets: string;
    strikeRate: string;
    about: string;
    photo: File | null;
  };
  orderId: string;
}

interface UsePlayerRegistrationReturn {
  register: (params: RegisterParams) => Promise<void>;
  isLoading: boolean;
  stepMessage: string;
  error: string;
  clearError: () => void;
}

export function usePlayerRegistration(): UsePlayerRegistrationReturn {
  const [stepMessage, setStepMessage] = useState("");
  const [error, setError] = useState("");

  const [registerPlayer, { isLoading }] = useRegisterPlayerMutation();

  const register = async ({
    values,
    orderId,
  }: RegisterParams): Promise<void> => {
    setError("");

    try {
      /* =====================================================
         STEP 1 — Upload Player Image
      ===================================================== */

      setStepMessage("Uploading photo...");

      const imageUrl = await uploadToCloudinary(
        values.photo!,
        CLOUDINARY_PRESETS.PLAYER,
      );

      /* =====================================================
         STEP 2 — Register Player
      ===================================================== */

      setStepMessage("Submitting registration...");

      await registerPlayer({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        mobile: values.mobile,
        village: values.village,
        age: Number(values.age),
        jerseyNumber: Number(values.jerseyNumber),
        role: values.role,
        battingStyle: values.battingStyle,
        bowlingStyle: values.bowlingStyle,
        experience: Number(values.experience),

        stats: {
          matches: Number(values.matches),
          runs: Number(values.runs),
          wickets: Number(values.wickets),
          strikeRate: Number(values.strikeRate),
          economy: 0,
          catches: 0,
        },

        imageUrl,
        orderId,
        about: values.about,
      }).unwrap();

      setStepMessage("");
    } catch (err: any) {
      const msg =
        err?.data?.message ||
        err?.message ||
        "Registration failed. Please try again.";

      setError(msg);
      setStepMessage("");

      throw new Error(msg);
    }
  };

  return {
    register,
    isLoading,
    stepMessage,
    error,
    clearError: () => setError(""),
  };
}
