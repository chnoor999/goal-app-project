import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const ModeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setDarkMode: () => {
      return true;
    },
    steLightMode: () => {
      return false;
    },
  },
});

export const ModeReducer = ModeSlice.reducer;
export const ModeActions = ModeSlice.actions;
