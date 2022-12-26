import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import '../styles/cart.css'
import CommoSection from '../UI/CommoSection'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/cart.css'
import { cartActions } from '../redux/slices/cartSlice'
import { Link } from 'react-router-dom'
const Cart = () => {
    
    const carItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    return (
        <Helmet title='Cart'>
            <CommoSection title='쇼핑카트' />
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {
                                carItems.length === 0 ? (<h2 className='fs-4 text-center'>No item added to the cart</h2>) : (
                                    <table className='table bordered'>
                                        <thead>
                                            <tr>
                                                <th>상품</th>
                                                <th>상품명</th>
                                                <th>가격</th>
                                                <th>수량</th>
                                                <motion.th whileTap={{ scale: 1.2 }}>삭제</motion.th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                carItems.map((item, index) => (
                                                    <Tr item={item} key={index} />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                )
                            }

                        </Col>
                        <Col lg='3'>
                            <div>
                                <h6 className='d-flex align-items-center justify-content-between'>예상금액
                                    <span className='fs-4 fw-bold'>${totalAmount}</span>
                                </h6>
                            </div>
                            <p className='fs-6 mt-2'>배송료와 합계비용은 계산서에서 확인하세요</p>
                            <div>
                                <button className='buy__btn w-100'><Link className='' to='/checkout'>주문</Link>
                                </button>
                                <button className='buy__btn w-100'><Link className='' to='/shop'>쇼핑 계속</Link>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

const Tr = ({ item }) => {

    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }

    return <tr>
        <td>
            <img src={item.imgUrl} alt="" />
        </td>
        <td>
            {item.productName}
        </td>
        <td>
            ${item.price}
        </td>
        <td>
            {item.quantity}
        </td>
        <td>
            <motion.i whileTap={{ scale: 1.2 }}
                onClick={deleteProduct}
                className='ri-delete-bin-line'></motion.i>
        </td>
    </tr>
}

export default Cart