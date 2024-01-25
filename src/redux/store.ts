import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./usersApi";
import userReducer from "./usersSlice";

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export default store;