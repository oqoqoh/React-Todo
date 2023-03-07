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
      state[actions.payload].count++;
      //arr.findIndex(), arr.find()
    },
    addCart(state, actions) {
      let res = actions.payload;

      const checkItem = state.findIndex((a) => {
        return a.id === res.id;
      });
      console.log("checkItem idx : ", checkItem);
      if (checkItem < 0) {
        //장부구니 추가
        console.log("장바구니 추가");
        let data = {
          id: state[state.length - 1].id + 1,
          name: res.title,
          count: 1,
        };
        state.push(data);
        console.log(state[state.length - 1]);
      } else {
        //장바구니 수량만 증가
        console.log("장바구니 수량만 증가");
        state[checkItem].count++;
      }
    },
    deleteItem(state, actions) {
      console.log("payload", actions.payload);
      let res = state.findIndex((a) => {
        return a.id === actions.payload;
      });

      state.splice(res, 1);
      console.log("left state", state);
    },
  },
});

export let { addCart, addCount, deleteItem } = cartItems.actions;

export default configureStore({
  reducer: {
    //state 등록
    user: user.reducer,
    cartItems: cartItems.reducer,
  },
});
