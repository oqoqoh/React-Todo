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
    let [inputValue, setInputValue] = useState(''); 
    let [alert, setAlert] = useState(true);
    let [inputWarning, setInputWarning] = useState('');
    let [tabIdx, setTabIdx] = useState(0);

    useEffect(()=>{
      
      let timer = setTimeout(()=>{
        setAlert(false) 
      },3000)

      // let timer = setTimeout(() => {
      //   setStyle({display:'none'})
      // }, 3000);
            
      //clean up function
      return ()=>{
        clearTimeout(timer);
      }
    })

    useEffect(()=>{
      
      if (isNaN(inputValue)) {
        setInputWarning('숫자만 입력가능합니다.')
        setInputValue('')        
      } 
    }, [inputValue])
    
    return (
    <>
      <div className="container">
        {/* <div className="alert alert-warning" style={style}>
            3초 이내 구매시 할인
        </div> */}
        
        {
          alert == true
          ? <div className="alert alert-warning">
              3초 이내 구매시 할인
            </div> 
          : null  
        }
        
        <div className="row">
          <div className="col-md-6" style={ {backgroundImage : 'url('+props.imgSrc[id]+')'} }>
            {/* <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" /> */}          
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.goods[id].title}</h4>
            <p>{props.goods[id].content}</p>
            <p>{props.goods[id].price}원</p>
            <input type="text" onInput={(e)=> {setInputValue(e.target.value)} } value={inputValue}></input>
            <p>{inputWarning}</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div>

      <Box>
        <YellowBtn>BTN</YellowBtn>
        {/* <Button>BTN</Button> */}
      </Box>
      
      <Nav variant="pills" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link onClick={ ()=> {setTabIdx(0)}} eventKey="link-0">Option 0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={ ()=> {setTabIdx(1)}} eventKey="link-1">Option 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={ ()=> {setTabIdx(2)}} eventKey="link-2">Option 2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tabIdx={tabIdx}></TabContent>

    </>
    )
  }
  
  function TabContent( {tabIdx}) {
    //tabIdx 변경될때마다 end 붙이기
    let [fade, setFade] = useState('');

    useEffect( ()=>{
      
      let a = setTimeout( ()=>{ setFade('end')}, 100)      

      return () => {
        clearTimeout(a);
        setFade('');
      }
    },[tabIdx])

    return (
      <div className= {'start ' + fade} >
        { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tabIdx] }
      </div>
    )
    
  }
  
  export default Detail;