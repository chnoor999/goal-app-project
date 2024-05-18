import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "system",
  mode: false,
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    enableDarkMode: (state) => {
      state.mode = true;
    },
    enableLightMode: (state) => {
      state.mode = false;
    },
    setModeType: (state, action) => {
      state.type = action.payload.text;
    },
  },
});

export const ModeActions = modeSlice.actions;

export const ModeReducer =  modeSlice.reducer;
