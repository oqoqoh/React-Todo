import clsx from "clsx";
import { Fragment, useState } from "react";

let id = 0;
const TodoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todos);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleCreateTodo = (input) => {
    setTodos([...todos, { id: id++, text: input, checked: false }]);
  };
  const a = [
    {
      id: 0,
      text: "1",
      checked: false,
    },
    {
      id: 1,
      text: "12",
      checked: false,
    },
    {
      id: 2,
      text: "123",
      checked: false,
    },
    {
      id: 3,
      text: "1234",
      checked: false,
    },
    {
      id: 4,
      text: "12345",
      checked: false,
    },
  ];
  // todosTemp[res].checked = !todosTemp[res].checked; 이게 가장 쉽고 빠르다.
  const handleCheckTodo = (id) => {
    const res = todos.findIndex((item) => item.id === id);
    let todosTemp = [...todos]; //todos.slice();
    const selected = todosTemp[res];
    todosTemp.splice(res, 1, { ...selected, checked: !selected.checked });
    setTodos(todosTemp);
  };
  const handleDeleteTodo = () => {};

  return (
    <div
      style={{
        background: "red",
        width: "400px",
        height: "400px",
        padding: "30px 10px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "yellow",
          padding: "10px 20px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "green",
            marginLeft: "20px",
          }}
        ></div>
      </div>
    </div>
  );
};

const styles = {
  checkedText: {
    textDecoration: "line-through",
  },
  text: {
    fontWeight: 800,
    // fontSize: "",
  },
};

export default TodoList;
