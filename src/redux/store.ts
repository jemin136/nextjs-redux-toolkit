import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todo-slice";
import userReducer from "./users/users-slice";


export const store = configureStore({
  reducer: {
    todoReducer,
    userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;