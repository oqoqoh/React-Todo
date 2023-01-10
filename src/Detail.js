import {Routes, Route, Link, useNavigate, Outlet, Navigate, useParams} from 'react-router-dom';
import {Button, Navbar, Nav, Container, Row, Col}  from 'react-bootstrap';
import styled from 'styled-components';
import { useEffect, useState } from 'react';


let Box = styled.div`
    padding : 20px;
    color : grey;
`;

let YellowBtn = styled.div`
    background : yellow;
    color : black;
    padding : 10px;
`;


function Detail(props) {
  
    let {id} = useParams();
    let [style, setStyle] = useState( {display:'block'}) 

    useEffect(()=>{
      console.log("hi")
      setTimeout(() => {
        setStyle({display:'none'})
      }, 3000);  
    })
    
    return (
    <>
      <div className="container">
        <div className="alert alert-warning" style={style}>
            3초 이내 구매시 할인
        </div>
        <div className="row">
          <div className="col-md-6" style={ {backgroundImage : 'url('+props.imgSrc[id]+')'} }>
            {/* <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" /> */}          
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.goods[id].title}</h4>
            <p>{props.goods[id].content}</p>
            <p>{props.goods[id].price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div>

      <Box>
        <YellowBtn>BTN</YellowBtn>
        {/* <Button>BTN</Button> */}
      </Box>
    </>
    )
  }
  
  
  export default Detail;