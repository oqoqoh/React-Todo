import { configureStore, createSlice } from "@reduxjs/toolkit";

//useState와 비슷
let user = createSlice({
  name: "user",
  initialState: "oh",
});

let cartItems = createSlice({
  name: "cartItems",
  initialState: [
    { id: 0, name: "White and Black", count: 1 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state) {
      return state[0].count++;
    },
  },
});

export let { addCount } = cartItems.actions;

export default configureStore({
  reducer: {
    //state 등록
    user: user.reducer,
    cartItems: cartItems.reducer,
  },
});
