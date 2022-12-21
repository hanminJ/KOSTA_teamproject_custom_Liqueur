import React, {useState,useRef} from "react";
import axios from 'axios';
import {Container, Row,Col} from "reactstrap";
import { useParams } from "react-router-dom";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/product-details.css";
import {motion} from "framer-motion";
import ProductsList from "../components/UI/ProductsList";
import { useDispatch } from "react-redux";
import{cartActions}from "../redux/slices/cartSlice";
import{toast} from "react-toastify";
import { useEffect } from "react";

const  ProductDetails = () => {

  const[tab,setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch()
  const[rating,setRating] = useState(null);
  

 
  // const {id} = useParams();
  // const [products, setProductsData] = useState({});

  // useEffect(() => {
  //   axios.get(`http://localhost:8080/products/getbyid/${id}`).then((res) => {
  //     let product= res.data[0]
  //     console.log(product);
  //     setProductsData(product);
  //   })},[id])  

  const [products, setProductsData] = useState({});
  const { dataId } = useParams();

  useEffect(() => {
    axios.get(`/api/data/data_id?id=${dataId}&type=single`).then((res) => {
      let product= res.data[0]
      console.log(product);
      setProductsData(product);
    });
  }, [dataId]);
    
  // useEffect(() => {
  //   axios.get('http://localhost:8080/products/all').then((res)=>{
  //     let products= res.data
  //     setProductsData(products);
  //   })},[id])  
  

    const relatedProducts = products.filter(item=> item.category===products.category);

    const submitHandler =(e)=>{
      e.preventDefault();

   
      const reviewUserName = reviewUser.current.value;
      const reviewUserMsg = reviewMsg.current.value;

      const reviewObj = {
        userName: reviewUserName,
        text: reviewUserMsg,
        rating,
      };

      console.log(reviewObj);
      toast.success("후기가 입력되었습니다")
      
    };

    const addToCart = () => {
      dispatch(
        cartActions.addItem({
        id:products.product_id,
        image:products.image,
        productsName:products.title,
        price:products.price,
      })
      );
    
    toast.success("제품이 성공적으로 추가되었습니다");
  };
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, [products]);
  return (
          <Helmet title={products.title}>{/*상품명이 헤더에 나옴*/}
            <CommonSection title={products.title}/>
            <section className="pt-0">
              <Container>
                <Row>
                  <Col lg="6">
                    <img src={products.image} alt="" />
                  </Col>

                  <Col lg="6">
                    <div className="product__details">
                      <h2>{products.title}</h2>
                      <div className="product__rating d-flex align-items-center gap-5 mb-3">
                        <div>
                          <span ><i class="ri-star-s-fill"></i></span>
                           <span ><i class="ri-star-s-fill"></i></span>
                            <span ><i class="ri-star-s-fill"></i></span>
                           <span><i class="ri-star-s-fill"></i></span>
                           <span ><i class="ri-star-half-s-line"></i></span>
                        </div>

                        <p><span>{products.funding}</span>Ratings</p>
                      </div>
                     <div className="d-flex align-items-center gap-5">
                       <span className="product__price"> ₩{products.price}</span>
                       <span>종류:{products.category}</span>
                     </div>
                      <p className="mt-3">{products.product_detail}</p>
                      
                      <motion.button whileTap={{scale: 1.2}} className="buy__btn" onClick={addToCart}>장바구니에 담기
                      </motion.button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            <section>
              <Container>
                <Row>
                  <Col lg='12'>
                    <div className="tab__wrapper d-flex align-items-center
                    gap-5">
                       <h6 className={`${tab ==="desc" ? "active__tab" : ""}`}
                        onClick={()=>setTab('desc')}>제품 설명</h6>
                       <h6 className={`${tab ==="rev" ? "active__tab" : ""}`}
                        onClick={()=>setTab('rev')}>
                        리뷰 ({products.reviews.length})</h6>
                    </div>

                    
                      {tab==='desc' ?  (
                      <div className="tab__content mt-5">
                      <p>{products.product_detail}</p>
                    </div> 
                   ) : (
                    <div className="product__review mt-5">
                      <div className="review__wrapper">
                        <ul>
                          {
                            products.reviews?.map((item,index)=> (
                              <li kew={index} className="mb-4">
                                <h6>John Doe</h6>
                                <span>{item.Rating}{rating}</span>
                              <p>{item.text}</p>
                              </li>
                            ))}
                        </ul>

                        <div className="review__form">
                          <h4>고객님의 후기를 남겨주세요</h4>
                        <form action="" onSubmit = {submitHandler}>
                          <div className="form__group">
                            <input type="text" placeholder="이름을 입력하세요" ref={reviewUser} required/>
                          </div>
                          <div className="form__group d-flex align-items-center gap-5 rating__group">
                          <motion.span whileTap ={{scale:1.2}} onClick={()=> setRating(1)}>1<i class="ri-star-fill"></i></motion.span>
                          <motion.span whileTap ={{scale:1.2}} onClick={()=> setRating(2)}>2<i class="ri-star-fill"></i></motion.span>
                          <motion.span whileTap ={{scale:1.2}} onClick={()=> setRating(3)}>3<i class="ri-star-fill"></i></motion.span>
                          <motion.span whileTap ={{scale:1.2}} onClick={()=> setRating(4)}>4<i class="ri-star-fill"></i></motion.span>
                          <motion.span whileTap ={{scale:1.2}} onClick={()=> setRating(5)}>5<i class="ri-star-fill"></i></motion.span>                    
                          </div>
                         <div className="form__group">
                          <textarea ref={reviewMsg} type="text" placeholder="후기를 작성해주세요" required/>
                          </div>

                         <motion.button whileTap ={{scale:1.2}}type="submit" className="buy__btn">
                          입력
                         </motion.button>
                          </form>
                        </div>
                      </div>
                    </div>
                    )}
                  </Col>
                  <Col lg="12" className="mt-5">
                    <h2 className="related__title">추천 리스트 </h2>
                  </Col>

                  <ProductsList data={relatedProducts}/>
                </Row>
              </Container>
            </section>
          </Helmet>
    );
};

export default ProductDetails;