import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Application {
  id: number;
  name: string;
  description: string;
  image: string;
  route: string;
}

interface ApplicationState {
  list: Application[];
}

const initialState: ApplicationState = {
  list: [
    {
      id: 1,
      name: "Touch Typing Trainer",
      description:
        "Train your touch typing skills with this interactive typing app.",
      image:
        "https://wl-ideasen5minutos.cf.tsp.li/resize/1200x630/jpg/3d2/3a7/e4333251b09ef10f5bfce9910a.jpg", // замените на реальный URL
      route: "blind-type",
    },
  ],
};

export const applicationSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    setApplications(state, action: PayloadAction<Application[]>) {
      state.list = action.payload;
    },
    addApplication(state, action: PayloadAction<Application>) {
      state.list.push(action.payload);
    },
  },
});

export const { setApplications, addApplication } = applicationSlice.actions;
export default applicationSlice.reducer;
