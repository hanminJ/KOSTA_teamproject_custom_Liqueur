import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import '../styles/productcard.css'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'
// import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
const ProductCart = ({ item, index }) => {

    const dispatch = useDispatch()

    const addToCart = () => {
        // axios
        dispatch(cartActions.addItem({
            id: item.product_id,
            productName: item.title,
            price: item.price,
            imgUrl: item.image
        }))

        toast.success("product added to the cart")
    }
    return (
        <Col lg='3' md='4'>
            <div className='product__item'>
                <div className='product__img'>
                    <motion.img whileHover={{ scale: 0.9 }} src={item.image} style={{height:200}} alt="aimchair" />
                </div>
                <div className='product__info'>
                    <h3 className='product__name'><Link className='link' to={`/shop/${item.product_id}`}> {item.title}</Link></h3>
                    <span>{item.category}</span>
                </div>
                <div className='product__card-bottom'>
                    <span className='product__price'>${item.price}</span>
                    <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}><i className="ri-add-line"></i></motion.span>
                </div>
            </div>
        </Col >
    )
}

export default ProductCart