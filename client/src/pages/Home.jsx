import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from '../assets/data/products';

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import customeImg from '../assets/images/custome.jpg';

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

import Clock  from "../components/UI/Clock";

import counterImg from '../assets/images/counter-timer-img.png';


const Home = () => {
  
  const [trendingProducts,setTrendingProducts] = useState([]);
  const [bestSalesProducts,setBestSalesProducts] = useState([]);

  useEffect(() => {
  axios.get('http://localhost:8080/products/trending').then((res)=>{
    let trend= res.data
    setTrendingProducts(trend);
  })},[])

  useEffect(() => {
    axios.get('http://localhost:8080/products/hotsale').then((res)=>{

      let hot= res.data
      setBestSalesProducts(hot);
    })},[])


  const [mobileProducts, setMobileProducts] =useState([]);
  const [wirelessProducts, setWirelessProducts] =useState([]);
   const [popularProducts, setPopularProducts] =useState([]);
  
  
  const year = new Date().getFullYear(); /*각해에 맞게 업데이트됨*/

  useEffect(()=>{
      const filteredMobileProducts = products.filter(
      (item)=> item.category === "mobile"
      );

      const filteredWirelessProducts = products.filter(
      (item)=> item.category === "wireless"
      );

      const filteredPopularProducts = products.filter(
      (item)=> item.category === "wireless"
      );

      setMobileProducts(filteredMobileProducts);
       setWirelessProducts(filteredWirelessProducts);
       setPopularProducts(filteredPopularProducts);
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
          <h2 className="section__title">최신 트렌드</h2>
        </Col>
        <ProductsList data={trendingProducts} />        
        </Row>
      </Container>
    </section>
    <section className="best__sales">
      <Container>
        <Row>
        <Col lg='12' className="text-center">
          <h2 className="section__title">Best Sales</h2>
        </Col>  

        <ProductsList data = {bestSalesProducts}/>
        </Row>
      </Container>
    </section>
    <section className="timer__count">
    <Container>
       
      <Row> 
        <Col lg='6' md='12' className="Count__down-col">
         
          <div className="Clock__top-content">
          <h4 className="text-white fs-6 mb-2">Limited offers</h4>
          <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
          </div>
          <Clock />
          
        <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn">
          <Link to="/shop">보러가기</Link>
        </motion.button>
        </Col>
        <Col lg='6' md='12' className="text-end counter__img">
          <img src={counterImg} alt="" />
           </Col>
      </Row>
    </Container>
    </section>
    <section className="new__arrivals">
      <Container>
        <Row>
          <Col lg='12' className="text-center mb-5">
          <h2 className="section__title">신상품</h2>
        </Col>  
        <ProductsList data = {mobileProducts}/>
         <ProductsList data = {wirelessProducts}/>
        </Row>
      </Container>
    </section>
    <section className="popular__category">
       <Container>
        <Row>
          <Col lg='12' className="text-center mb-5">
          <h2 className="section__title">인기 상품</h2>
        </Col>  
        <ProductsList data = {popularProducts}/>
         <ProductsList data = {wirelessProducts}/>
        </Row>
      </Container>
    </section>
  </Helmet>
  );
};


export default Home;
