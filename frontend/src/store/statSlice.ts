import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameStat {
  gameName: string;
  stats: {
    correctLetters: number;
    mistakes: number;
    accuracy: string;
    lettersPerSecond: number;
    duration: string;
  };
}

interface StatState {
  gameStats: GameStat[];
}

const initialState: StatState = {
  gameStats: [],
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    addGameStats(state, action: PayloadAction<GameStat>) {
      state.gameStats.push(action.payload);
    },
  },
});

export const { addGameStats } = statsSlice.actions;
export default statsSlice.reducer;
