import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // здесь будут ваши редьюсеры
  },
});

// Типы для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
