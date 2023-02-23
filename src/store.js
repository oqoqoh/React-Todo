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
    { id: 1, name: "Grey Yordan", count: 1 },
    { id: 2, name: "Yellow poppy", count: 1 },
  ],

  reducers: {
    addCount(state, actions) {
      state[actions.payload].count += 1;
    },
    addCart(state, actions) {
      let res = actions.payload;

      let data = {
        id: state[state.length - 1].id + 1,
        name: res.title,
        count: 1,
      };
      state.push(data);
      console.log(state[state.length - 1]);
    },
  },
});

export let { addCart, addCount } = cartItems.actions;

export default configureStore({
  reducer: {
    //state 등록
    user: user.reducer,
    cartItems: cartItems.reducer,
  },
});
