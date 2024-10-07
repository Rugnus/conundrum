import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "./applicationSlice";

const store = configureStore({
  reducer: {
    applicationReducer: applicationSlice,
    // здесь будут редьюсеры
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
