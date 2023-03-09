import { configureStore, createSlice } from "@reduxjs/toolkit";

//useState와 비슷
let user = createSlice({
  name: "user",
  initialState: "oh",
});

let cartItems = createSlice({
  name: "cartItems",
  initialState: [
    { id: "aa", name: "White and Black", count: 1 },
    { id: "bb", name: "Grey Yordan", count: 1 },
    { id: "cc", name: "Yellow poppy", count: 1 },
  ],

  reducers: {
    addCount(state, actions) {
      //actions.payload -> id
      let findItem = state.find((data) => {
        return data.id === actions.payload;
      });

      findItem.count++;
    },
    addCart(state, actions) {
      //actions.payload -> item object
      let param = actions.payload;

      //기존 추가 되어있는지 아닌지 확인
      let checked = state.find((data) => {
        return data.name === param.title;
      });
      if (checked) {
        //수량만 증가
        console.log("수량만 증가 ", param.id);

        let findItem = state.find((data) => {
          return data.id === param.id;
        });
        findItem.count++;
      } else {
        //장바구니 추가
        console.log("장바구니 추가");

        let obj = { id: param.id, name: param.title, count: 1 };
        state.push(obj);
      }
      console.log("length :: ", state.length);
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
