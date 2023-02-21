import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../store";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((data, idx) => {
            return (
              <tr key={idx}>
                <td>{idx}</td>
                <td>{data.name}</td>
                <td>{data.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addCount());
                    }}
                  >
                    +
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
