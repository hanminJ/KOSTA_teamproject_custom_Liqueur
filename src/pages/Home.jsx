import React, {useState, useEffect} from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from '../assets/data/products';

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import customeImg from '../assets/images/custome.jpg';

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

const Home = () => {

  
  const [data,setData] = useState(products);
  const year = new Date().getFullYear(); /*각해에 맞게 업데이트됨*/

  useEffect(()=>{
    const filteredProducts = products.filter(
      (item)=> item.category = "chair"
      );

     setData(filteredProducts);
  },[]);
  return (
  <Helmet title={"Home"}>
    <section className="hero__section">
    <Container>
      <Row>
        <Col lg='6' md ='6'>
          <div className="hero__content">
            <p className="hero__subtitle">Trending product in {year} </p>
            <h2>Make your life enjoyable</h2>
            <p>모든 양조장의 전통주가 이 곳에 모여 있습니다.
                <br></br>흥미롭지 않으세요? <br></br>
               펀딩 및 구매를 해보시는 것은 어떨까요?
            </p>
            <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to='/shop'>쇼핑하기</Link></motion.button>
          </div>
        </Col>
        
      <Col lg='6' md ='6'>
        <div className="custome__img">
          <img src={customeImg} alt=""/>
        </div>
      </Col>
      </Row>
    </Container>
    </section>

    <Services />
    <section className="trending__products">
    <Container>
      <Row>
        <Col lg='12' className="text-center">
          <h2 className="section__title">신상품</h2>
        </Col>
        <ProductsList data={data} />        
        </Row>
      </Container>
    </section>
  </Helmet>
  );
};


export default Home;
