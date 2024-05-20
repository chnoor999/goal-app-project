import { createSlice } from "@reduxjs/toolkit";

const undoSlice = createSlice({
  name: "undo",
  initialState: [],
  reducers: {
    setUndoData: (_, action) => {
      return action.payload;
    },
  },
});

export const undoReducer = undoSlice.reducer;
export const undoActions = undoSlice.actions;
