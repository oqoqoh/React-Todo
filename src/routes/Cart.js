import { useEffect, useState, memo } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { addCount, deleteItem } from "../store.js";

const Child = memo(function () {
  console.log("re-rendering");
  return <div>child component</div>;
});

const Cart = () => {
  const state = useSelector((state) => state);
  //const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(state.cartItems);
  }, [state.cartItems]);

  return (
    <div>
      <Child count={count}></Child>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.cartItems.map((data, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{data.name}</td>
                <td>{data.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addCount(data.id));
                    }}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(deleteItem(data.id));
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
