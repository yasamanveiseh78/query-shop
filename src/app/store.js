import {
  configureStore,
  createListenerMiddleware,
} from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  predicate: (action) => action.type.startsWith("cart/"),
  effect: async (action, listenerApi) => {
    const cartItems = listenerApi.getState().cart.items;

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  },
});

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});