import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todoSlice";
import counterReducer from "./counter/counterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "./services/services";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);
