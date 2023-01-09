import './App.css';
import {Button, Navbar, Nav, Container, Row, Col}  from 'react-bootstrap';
import bannerImgSrc from './img/shop-banner.png';
import itemImg1 from './img/shop-korea.png'
import itemImg2 from './img/shop-messi01.png'
import itemImg3 from './img/shop-spain.png'

import data from './data.js';
import { useState } from 'react';
import {Routes, Route, Link, useNavigate, Outlet, Navigate, useParams} from 'react-router-dom';
import Goods from './Goods.js';
import Detail from './Detail.js';

function App() {

  let [goods, setGoods] = useState(data);
  let [itemImgSrc, setItemImgSrc] = useState([itemImg1,itemImg2, itemImg3]);
  let navigate = useNavigate();

  return (
    <div className="App">      
      

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Kick&Kit.com</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">New Arrivals</Nav.Link>

            <Link to="/">홈 이동</Link>
            <Link to="/detail">상세페이지 이동</Link>
          </Nav>
        </Container>
      </Navbar>

      

      <Routes>
        <Route path="/" element={
          <>
          <div className="main-bg" style={ {backgroundImage:'url('+bannerImgSrc+')'}}></div>
          <Goods goods={goods} imgSrc={itemImgSrc}></Goods>
          </>
        }/>
        <Route path="/detail/:id" element={
          <>
          <Detail goods={goods} imgSrc={itemImgSrc}></Detail> 
          </>
        }/>
        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 스포츠 양말 증정</div>}/>
          <Route path="two"element={<div>생일기념 쿠폰 받기</div>}/>
        </Route>
      </Routes>


      
    </div>
    
  );
}

function Event() {
  return (
    <div>
      <h3>오늘의 이벤트</h3>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
