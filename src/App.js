import './App.css';
import {Button, Navbar, Nav, Container, Row, Col}  from 'react-bootstrap';
import bannerImgSrc from './img/shop-banner.png';
import itemImg1 from './img/shop-korea.png'
import itemImg2 from './img/shop-messi01.png'
import itemImg3 from './img/shop-spain.png'

import data from './data.js';
import { useState } from 'react';

function App() {

  let [goods, setGoods] = useState(data);
  let [itemImgSrc, setItemImgSrc] = useState([itemImg1,itemImg2, itemImg3]);

  return (
    <div className="App">
            
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Kick&Kit.com</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">New Arrivals</Nav.Link>            
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={ {backgroundImage:'url('+bannerImgSrc+')'}}></div>
      <Goods goods={goods} imgSrc={itemImgSrc}></Goods>
    </div>
    
  );
}

function Goods(props) {
  props.goods.map(function(a){
    console.log("@ :: ",a)
  })
  let data = props.goods;
  console.log("# ::", data);
  return (
    
    <Container>
        <Row>
        {
          props.goods.map(function(a, i){
            return (
            <Col>
              <div className="main-bg" style={ {backgroundImage:'url('+props.imgSrc[i]+')'}}></div>
              <h4>{a.title}</h4>
              <p>{a.price}원</p>
            </Col>
            )
          })
        }
        </Row>
      </Container>
  )
}
export default App;
