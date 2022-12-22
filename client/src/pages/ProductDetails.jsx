import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommoSection from '../UI/CommoSection'
import { motion } from 'framer-motion'
import '../styles/productdetails.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'
import axios from 'axios';

const ProductDetails = () => {



  
  const [product, setproduct] = useState(null);



    const [tab, setTab] = useState('desc')
    const { id } = useParams()
    
    
    const dispatch = useDispatch()


    useEffect(() => {
        axios.get(`http://localhost:8080/products/getbyid/${id}`)
            .then(response => {
                console.log(response.data[0])
                setproduct(response.data[0]);
            })},[id])

            console.log(product)

    const { image, title, price,product_detail, brand, category } = {image:'../images/붉은 차나락.png',title:'붉은 차나락',price:'20000',product_detail:'붉은 차니락',brand:'정한민',category:'막걸리'}
  
    const addToCart = () => {
        dispatch(cartActions.addItem(
            {
                id,
                image,
                title,
                price
            }
        ))
            
        toast.success("Product added successfully")
    }
    useEffect(() => {
        window.scrollTo(0, 110)
    }, [product])
    
    return (
        <Helmet title={title}>
            <CommoSection title={title} />
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={image} alt="" />
                        </Col>

                        <Col lg='6'>
                            <div className='product__details'>
                                <h2>{title}</h2>
                                <div className='product__rating d-flex align-items-center gap-5 mb-3'>
                                    <div>
                                        <span>
                                            <i className='ri-star-fill'></i>
                                        </span>
                                        <span>
                                            <i className='ri-star-fill'></i>
                                        </span>
                                        <span>
                                            <i className='ri-star-fill'></i>
                                        </span>
                                        <span>
                                            <i className='ri-star-fill'></i>
                                        </span>
                                        <span>
                                            <i className='ri-star-half-fill'></i>
                                        </span>
                                    </div>
                                    <p>(<span>{3}</span> ratings)</p>
                                </div>
                                <div className='d-flex align-items-center gap-5'>
                                    <span className='product__price'>${price}</span>
                                    <span>Category: {category}</span>
                                </div>
                                <p className='mt-3'>{brand}</p>
                                <motion.button whileTap={{ scale: 1.2 }} className='buy__btn' onClick={addToCart}>Add to Cart</motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="tab__wrapper d-flex align-items-center gap-5">
                                <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`}
                                    onClick={() => setTab('desc')}
                                >상품설명</h6>
                            </div>
                            {
                                tab === 'desc' ? (<div className="tab__content mt-5">
                                    <p>{product_detail}</p>
                                </div>) : (
                                    <div className='product__review mt-5'>

                                    </div>
                                )
                            }

                        </Col>
                        <Col lg='12'>
                            <h2 className='related__title'>You might also like</h2>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet >
    )
}

export default ProductDetails