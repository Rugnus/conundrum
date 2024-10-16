import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "./applicationSlice";
import statSlice from "./statSlice";

const store = configureStore({
  reducer: {
    applicationReducer: applicationSlice,
    statSlice: statSlice,
    // здесь будут редьюсеры
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
