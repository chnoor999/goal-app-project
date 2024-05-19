import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const GoalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    setGoal: (_, action) => {
      return action.payload.data;
    },
    editGoal: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            text: action.payload.text,
          };
        } else {
          return item;
        }
      });
    },
    toggleFavourite: (state, action) => {
      return state.map((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            fav: !item.fav,
          };
        } else {
          return item;
        }
      });
    },
    deleteGoal: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    addGoal: (state, action) => {
      return [
        {
          id: nanoid(),
          text: action.payload.text,
          date: new Date().getDate() + "/" + (new Date().getMonth() + 1),
          fav: false,
        },
        ...state,
      ];
    },
  },
});

export const GoalReducer = GoalSlice.reducer;
export const GoalActions = GoalSlice.actions;
