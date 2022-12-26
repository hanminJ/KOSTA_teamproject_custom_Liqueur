import React, {useState} from 'react'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommoSection from '../UI/CommoSection'
import '../styles/checkout.css'
import {  useSelector } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'






const Checkout = () => {
    const carItems = useSelector(state => state.cart.cartItems)
    const totalQty = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const [name, setName] = useState('')
    const [adress, setAdress] = useState('')
    const [number, setNumber] = useState('')
  
    axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
    // 서로 다른 도메인간 쿠키 전달 허용
    axios.defaults.withCredentials = true;
    const navigate = useNavigate()
    const f1 = () => {
        console.log(carItems[0].id)
        axios.post('http://localhost:8080/order/buy',{product:carItems,
                                                    adress:adress,
                                                    name:name,
                                                    number:number,
                                                }).then((res) => {
        console.log(res)
            toast.success('주문성공')
            navigate('/mypage')
        }).catch(err => {
            toast.error(err.message)
        })
    };
    

    return (
        <Helmet title='Checkout'>
            <CommoSection title="Checkout" />
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>


                        {
                                carItems.length === 0 ? (<h2 className='fs-4 text-center'>카트에 아무것도 없습니다.</h2>) : (
                                    <table className='table bordered'>
                                        <thead>
                                            <tr>
                                                <th>상품</th>
                                                <th>상품명</th>
                                                <th>가격</th>
                                                <th>수량</th>
  
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


                            <h6 className='mb-4 fw-bold'>
                                주문서
                            </h6>
                            <Form className='billing__form'>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='배송 받는분 성함' value={name} onChange={e => setName(e.target.value)}/>
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='배송지 ' value={adress} onChange={e => setAdress(e.target.value)} />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='배송지 전화번호' value={number} onChange={e => setNumber(e.target.value)}/>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col lg='4'>
                            <div className='checkout__cart'>
                                <h6>총 수량: <span>{totalQty}</span></h6>
                                <h6>금액: <span>${totalAmount}</span></h6>
                                <h6><span>배달비 : <br /> 무료 배달</span>
                                    <span>0</span></h6>
                                <h4>주문금액: <span>${totalAmount}</span></h4>
                                <button className='buy__btn auth__btn w-100' onClick={f1}>주문</button>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

const Tr = ({ item }) => {



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
    </tr>
}

export default Checkout