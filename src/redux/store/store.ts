import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";

// import playerReducer from "./modules/players/player.slice";
// import matchReducer from "./modules/matches/match.slice";
// import paymentReducer from "./modules/payment/payment.slice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

/* =========================
   ROOT REDUCER
========================= */
const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,

//   player: playerReducer,
//   match: matchReducer,
//   payment: paymentReducer,
});

/* =========================
   PERSIST CONFIG
========================= */
const persistConfig = {
  key: "bpl-root",
  storage,
  whitelist: ["player", "payment"], // only persist important data
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* =========================
   STORE
========================= */
export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

/* =========================
   PERSISTOR
========================= */
export const persistor = persistStore(store);

/* =========================
   TYPES
========================= */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;