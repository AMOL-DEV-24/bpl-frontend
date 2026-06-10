import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store/store";

/* =========================
   DISPATCH HOOK
========================= */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/* =========================
   SELECTOR HOOK
========================= */
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;