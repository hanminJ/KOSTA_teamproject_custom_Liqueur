import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import '../styles/login.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'
const Login = () => {


    return (
        <Helmet title='Login'>
            <section>
                <Container>
                    <Row>
                        {
                            <Col lg='6' className='m-auto text-center'>
                                <h3 className='fw-bold mb-4'>Login</h3>
                                <Form className='auth__form'>
                                <a href="http://localhost:8080/auth/naver">
                                    <button type="button" className="btm_image" id="img_btn" >
                                        <img src='../images/네아로로그인.png'  style={{height:80,width:200}} alt='네이버'></img></button></a>
                                </Form>
                            </Col>
                        }
                        
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Login