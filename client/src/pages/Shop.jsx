import React,{useState,useEffect} from "react";
import axios from 'axios';
import CommonSection from "../UI/CommoSection";
import Helmet from "../components/Helmet/Helmet";
import { Container,Row,Col } from "reactstrap";

import "../styles/shop.css";

import ProductsLists from '../UI/ProductList';

const Shop = () => {

  const [productsData, setProductsData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/products/all').then((res)=>{
      let products= res.data
      setProductsData(products);
    })},[])  


    
  const handleFilter = (e)=>{
    const filterValue = e.target.value
    /*여기서 if문은 카테고리 입력에 따른 업데이트*/
      if(filterValue==="청주"){
        const filteredProducts = productsData.filter(
          (item) => item.category ==="청주"
        );
          setProductsData(filteredProducts);
      }
          if(filterValue==="막걸리"){
        const filteredProducts = productsData.filter(
          (item) => item.category ==="막걸리"
        );
          setProductsData(filteredProducts);
      }
          if(filterValue==="양주"){
        const filteredProducts = productsData.filter(
          (item) => item.category ==="양주"
        );
          setProductsData(filteredProducts);
      }
          if(filterValue==="맥주"){
        const filteredProducts = productsData.filter(
          (item) => item.category ==="맥주"
        );
          setProductsData(filteredProducts);
      }
          if(filterValue==="와인"){
        const filteredProducts = productsData.filter(
          (item) => item.category ==="와인"
        );
          setProductsData(filteredProducts);
      }

      
      
  };

  const handleSearchObj = (e) => {
    const serachItems = e.target.value;
    const searchProducts = productsData.filter((item) =>
      item.title.toLowerCase().includes(serachItems.toLowerCase())
    );
    setProductsData(searchProducts)}

  return(
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
            <div className="filter__widget">
              <select onChange={handleFilter}>
                <option>종류별 카테고리</option>
                <option value="청주">청주</option>
                <option value="막걸리">막걸리</option>
                <option value="양주">양주</option>
                <option value="맥주">맥주</option>
                <option value="와인">와인</option>
              </select>
            </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input type="text" placeholder="Search...." onChange={handleSearchObj} />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
               <h1 className="text-center fs-4">상품이 존재하지 않습니다!</h1>
            ) : (
               <ProductsLists data ={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;