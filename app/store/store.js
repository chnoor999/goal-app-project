import { configureStore } from "@reduxjs/toolkit";

import { GoalReducer } from "./features/goalSlice";
import { ModeReducer } from "./features/modeSlice";

export const Store = configureStore({
  reducer: {
    goal: GoalReducer,
    mode: ModeReducer,
  },
});
