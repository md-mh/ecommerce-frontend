import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistedReducer from "./rootReducer";

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const persistor = persistStore(store);

export { persistor, store };
export type IRootState = ReturnType<typeof store.getState>;
