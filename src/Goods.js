import {Routes, Route, Link, useNavigate, Outlet, Navigate, useParams} from 'react-router-dom';
import {Button, Navbar, Nav, Container, Row, Col}  from 'react-bootstrap';


function Goods(props) {
    let navigate = useNavigate();
  
    return (
      
      <Container>
        <Row>
          {
            props.goods.map(function(a, i){
              return (
              <Col>
                <div className="main-bg" style={{backgroundImage:'url('+props.imgSrc[i]+')'}}
                 onClick={ ()=>{ navigate('/detail/'+a.id)}} ></div>
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
  
  export default Goods;