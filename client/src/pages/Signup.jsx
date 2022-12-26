import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import axios from 'axios';
import '../styles/login.css'

import { toast } from 'react-toastify'
const Signup = () => {
    const [username, setUsername] = useState('')
    const [adress, setAdress] = useState('')
    const [pnumber, setPnumber] = useState('')

    const navigate = useNavigate()
    
    const signup = (e) => {
        e.preventDefault()
        console.log(username)
        axios.post("http://localhost:8080/signup",{nickname:username,adress:adress,number:pnumber})
        .then((res) => {
                console.log(res)
                toast.success('Account created')
                navigate('/login')
            }            
            );
            
    }


    return (
        <Helmet title='Signup'>
            <section>
                <Container>
                    <Row>
                        {
                            // loading ? <Col lg='12' className='text-center'><h5 className='fw-bold'>Loading .....</h5></Col>
                            //     :
                                <Col lg='6' className='m-auto text-center'>
                                    <h3 className='fw-bold mb-4'>Signup</h3>
                                    <Form className='auth__form' onSubmit={signup}>
                                        <FormGroup className='form__group'>
                                            <input type="text" placeholder='닉네임' value={username} onChange={e => setUsername(e.target.value)} />
                                        </FormGroup>
                                        <FormGroup className='form__group'>
                                            <input type="adress" placeholder='주소' value={adress} onChange={e => setAdress(e.target.value)} />
                                        </FormGroup>
                                        <FormGroup className='form__group'>
                                            <input type="pnumber" placeholder='전화번호' value={pnumber} onChange={e => setPnumber(e.target.value)} />
                                        </FormGroup>
                                        <button type='submit' className='buy__btn auth__btn'>
                                            회원가입
                                        </button>
                                    </Form>
                                </Col>
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Signup