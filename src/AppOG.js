import "./App.css";
import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import bannerImgSrc from "./img/shop-banner.png";

import data from "./data.js";
import { useEffect, useState, createContext, lazy, Suspense } from "react";
import axios from "axios";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  Navigate,
  useParams,
  Router,
} from "react-router-dom";
import Goods from "./Goods.js";
//import Detail from "./routes/Detail.js";
//import Cart from "./routes/Cart.js";

import TodoList from "./TodoList";

import { useQuery } from "@tanstack/react-query";
import TestCompo from "./routes/TestCompo";

const Detail = lazy(() => import("./routes/Detail.js"));
const Cart = lazy(() => import("./routes/Cart.js"));

//export let Context1 = createContext();

function App() {
  let [goods, setGoods] = useState(data);
  //let [itemImgSrc, setItemImgSrc] = useState([itemImg1, itemImg2, itemImg3]);
  let [btnCount, setBtnCount] = useState(1);
  let [moreBtnSwitch, setMoreBtnSwitch] = useState({
    display: "block",
    margin: "auto",
  });
  let [detailClick, setDetailClick] = useState(0);
  let [fade, setFade] = useState("");
  let navigate = useNavigate();
  let [stock, setStock] = useState([10, 11, 20]);
  useEffect(() => {}, [detailClick]);

  useEffect(() => {
    //메인 화면 로딩 시 최근 본 상품리스트 로컬에 생성
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  const result = useQuery(
    ["getName"],
    () => {
      return axios
        .get("https://codingapple1.github.io/userdata.json")
        .then((a) => {
          console.log(a.data);
          return a.data;
        });
    },
    { staleTime: 2000 }
  );
  console.log(result.data);
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Kick&Kit.com</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>

            {/* <Link to="/">홈 이동 </Link>
            <Link to="/detail">상세페이지 이동</Link> */}
          </Nav>
          <Nav className="ms-auto">
            {result.isLoading && "로딩중"}
            {result.error && "error"}
            {result.data && result.data.name}
          </Nav>
        </Container>
      </Navbar>

      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div
                  className="main-bg"
                  style={{
                    backgroundImage: "url(" + bannerImgSrc + ")",
                  }}
                ></div>
                {/* <Goods goods={goods} imgSrc={itemImgSrc}></Goods> */}

                {goods.map((item, idx) => {
                  return <Goods key={item.id} goods={item}></Goods>;
                })}

                <Button
                  onClick={() => {
                    let addGoods = [...goods];

                    setBtnCount(++btnCount);

                    axios
                      .get(
                        "https://codingapple1.github.io/shop/data" +
                          btnCount +
                          ".json "
                      )
                      .then((res) => {
                        {
                          res.data &&
                            res.data.map((item, i) => {
                              return addGoods.push(item);
                            });
                        }
                        setGoods(addGoods);
                        console.log(
                          "goods :: ",
                          goods,
                          " / btn count num :: ",
                          btnCount
                        );
                      });

                    if (btnCount > 2) {
                      setMoreBtnSwitch({ display: "none" });
                    }
                  }}
                  style={moreBtnSwitch}
                >
                  더 보기
                </Button>
              </>
            }
          />

          {/* <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ stock, goods }}>
              <Detail goods={goods} imgSrc={itemImgSrc}></Detail>
            </Context1.Provider>
          }
        /> */}
          <Route
            path="/detail/:id"
            element={<Detail goods={goods}></Detail>}
          ></Route>

          <Route path="/event" element={<Event />}>
            <Route path="one" element={<div>첫 주문시 스포츠 양말 증정</div>} />
            <Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
          </Route>
          <Route path="/todo" element={<TodoList />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/test" element={<TestCompo />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h3>오늘의 이벤트</h3>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
