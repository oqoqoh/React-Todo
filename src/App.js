import './App.css';
import {Button, Navbar, Nav, Container, Row, Col}  from 'react-bootstrap';
import bannerImgSrc from './img/shop-banner.png';
import itemImg1 from './img/shop-korea.png'
import itemImg2 from './img/shop-messi01.png'
import itemImg3 from './img/shop-spain.png'

import data from './data.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Routes, Route, Link, useNavigate, Outlet, Navigate, useParams} from 'react-router-dom';
import Goods from './Goods.js';
import Detail from './Detail.js';

function App() {

  let [goods, setGoods] = useState(data);
  let [itemImgSrc, setItemImgSrc] = useState([itemImg1,itemImg2, itemImg3]);
  let [btnCount, setBtnCount] = useState(1);
  let [moreBtnSwitch, setMoreBtnSwitch] = useState({display:'block', margin : 'auto'});
  let [detailClick, setDetailClick] = useState(0);
  let [fade, setFade] = useState(''); 
  let navigate = useNavigate();

  useEffect(()=>{

  },[detailClick])

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
          {/* <Goods goods={goods} imgSrc={itemImgSrc}></Goods> */}

          {
            goods.map((item,idx) => {
              return (
                <Goods key={item.id} goods={item} imgSrc={itemImgSrc[idx]}></Goods>
              )
            })
          }

          <Button onClick={()=>{
                        
            let addGoods = [...goods];
            
            setBtnCount(++btnCount)
            
            axios.get('https://codingapple1.github.io/shop/data'+btnCount+'.json ')
            .then( (res)=>{ 
              
              { res.data &&
                res.data.map( (item, i) =>{
                  return addGoods.push(item)
                })
              }
              setGoods(addGoods);              
              console.log('goods :: ', goods, ' / btn count num :: ', btnCount);
            })
            
            if (btnCount > 2) {
              setMoreBtnSwitch({display:'none'});
            }
          } } style={ moreBtnSwitch}>더 보기</Button>
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
