import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import '../styles/login.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'
const Login = () => {
    

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const signIn = async (e) =>{

    e.preventDefault()
    setLoading(true)

    try{

      const userCredential = await signInWithEmailAndPassword(auth,email,
        password)

        const user = userCredential.user
        
        console.log(user)
        setLoading(false)
        toast.success("로그인이 성공적으로 이뤄졌습니다")
        navigate("/../src/pages/Checkout.jsx")

    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }

  }


    return (
        <Helmet title='Login'>
            
            <section>
                <Container>
                    <Row>
                        {   
                            <Col lg='6'className='m-auto text-center'>
                            <h3 className='fw-bold mb-4'>Login</h3>
                            <Form className='auth__form' onSubmit={signIn}>
                              <FormGroup className='form__group'>
                                <input type="email" placeholder='Enter your email' value={email} onChange={e=>setEmail(e.target.value)} />
                              </FormGroup>
                              <FormGroup className='form__group'>
                                  <input type="password" placeholder='Enter your password' value={password} onChange={e=>setPassword(e.target.value)} />
                              </FormGroup>
                              
                              <button type='submit' className='buy__btn auth__btn'>Login</button>
                              <Link to='/signup'> <p> 일반 회원가입</p></Link>
                              
                              <div><p>간편하고 쉬운 회원가입& 로그인</p> 
                              <a href="http://localhost:8080/auth/naver">
                              <button type="button" className="btm_image" id="img_btn" >
                              <img src='../images/네아로로그인.png'  style={{height:60,width:200}} alt='네이버'></img></button></a>
                              </div>
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