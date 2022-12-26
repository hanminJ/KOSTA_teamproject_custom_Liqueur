import React ,{useState , useEffect} from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import '../styles/cart.css'
import CommoSection from '../UI/CommoSection'
// import { motion } from 'framer-motion'
// import { useDispatch, useSelector } from 'react-redux'
import '../styles/cart.css'
// import { cartActions } from '../redux/slices/cartSlice'
// import { Link } from 'react-router-dom'
import '../styles/productdetails.css'

import axios from 'axios';


const Mypage = () => {
    axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
    // 서로 다른 도메인간 쿠키 전달 허용
    axios.defaults.withCredentials = true;
  const [order,setOrder] = useState([]);
    console.log(order)

  useEffect(() => {
  axios.get('http://localhost:8080/order/get').then((res)=>{
    let order= res.data

    setOrder(order);
  })},[])


    return (
        <Helmet title='Cart'>
        <CommoSection title='쇼핑카트' />
        <section>
            <Container>
                <Row>
                <Col lg='3'>
                        <div>
                            <h1 className='d-flex align-items-center justify-content-between'>주문내역
                            </h1>
                        </div>
                    </Col>
                    <Col lg='9'>
                        {
                           (
                                <table className='table bordered'>
                                    <thead>
                                        <tr>
                                            <th>상품</th>
                                            <th>수신자</th>
                                            <th>수량</th>
                                            <th>주문금액</th>
                                            <th>주문일자</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            order.map((item, index) => (
                                                <Tr item={item} key={index} />
                                            ))
                                        }
                                    </tbody>
                                </table>
                            )
                        }

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
            <img src={item.memo} alt="" />
        </td>
        <td>
            {item.name}<br/>
            {item.adress}<br/>
            {item.p_number}<br/>
        </td>
        <td>
        {item.quantity}
        </td>
        <td>
        {item.total_price}
        </td>
        <td>
        {item.create_at}
        </td>
    </tr>
}

export default Mypage