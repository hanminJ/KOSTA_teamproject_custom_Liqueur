import React from "react";

import {motion} from "framer-motion";
import '../../styles/product-card.css';
import {Col} from "reactstrap";
import {Link} from "react-router-dom";
import {toast } from "react-toastify";

import{useDispatch} from "react-redux";
import{cartActions} from "../../redux/slices/cartSlice";

const ProductCard = ({item}) => {
const dispatch = useDispatch();

const addToCart =()=>{
    dispatch(cartActions.addItem({
     id: item.product_id,
     productName:item.title,
     price: item.price,
     imgUrl: item.image,
 })
 );
toast.success('상품이 장바구니에 들어갔습니다');
}
  return (
       <Col lg='3' md='4' className="mb-2">
        <div className="product__item">
            <div className="product__img">
                <motion.img whileHover={{scale: 0.9}} src={item.image} style={{height : 200 }} alt = " "/>
            </div>
           <div className="p-2 product__info">
            {/*아래는 상품을 카드 형태로 소개*/}
             <h3 className="product__name"><Link to={`/shop/${item.product_id}`}>{item.title}</Link></h3>
         
            <span >{item.category}</span>
           </div>
            <div className="product__card-bottom d-flex align-items-center
            justify-content-between p-2">
                <span className="price">${item.price}</span>
                <motion.span whileTap={{scale: 1.2}} onClick={addToCart}><i class="ri-add-line"></i></motion.span>
            </div>
        </div>
       </Col>
  );
};

export default ProductCard;