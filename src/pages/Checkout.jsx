import React from "react";
import{Container,Row,Col,Form,FormGroup} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/checkout.css";
import {useSelector} from "react-redux";

const Checkout = () => {
  
  const totalQty = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)

  return(
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="이름을 입력해주세요"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="이메일을 입력해주세요"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="핸드폰 번호"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="주소"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="도시"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="우편번호"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="지역"/>
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>Total Qty: <span>{totalQty}개</span></h6>
                <h6>총합: <span>${totalAmount}</span>
                </h6>
                <h6><span>shipping: <br/>무료 배송 </span><span>$0                  
                </span></h6>
                
                <h4>최종 금액:<span>${totalAmount}</span></h4>
                   <button className="buy__btn1 auth__btn w-100">주문하기</button>
              </div>
            
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
};

export default Checkout;
