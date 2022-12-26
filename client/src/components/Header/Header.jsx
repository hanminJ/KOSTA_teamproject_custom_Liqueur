import React, { useEffect, useRef,useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Container, Row } from 'reactstrap'
import logo from '../../assets/images/teamlogo.png';
import userIcon from '../../assets/images/user-icon.png'
import { motion } from 'framer-motion'
import './header.css'
import { toast } from 'react-toastify'
import axios from 'axios'

axios.defaults.withCredentials = true;

const nav__links = [
    {
        path: 'home',
        name: 'Home'
    },
    {
        path: 'shop',
        name: 'Shop'
    },
    {
        path: 'cart',
        name: 'Cart'
    }
]
const Header = () => {
    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const navigate = useNavigate()
    const profileActionsRef = useRef(null)
    const [currentUser, setCurrenUser] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8080/authcheck').then((res)=>{
            var user =res.data 
            console.log(user)
        if (user) {
            setCurrenUser(user)
        } else {
            setCurrenUser(null)
        }})
    })
    

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    const logout = () => {
        axios.get('http://localhost:8080/logout').then((res) => {
            console.log(res)
            toast.success('Logged out')
            setCurrenUser(null)            
        }).catch(err => {
            toast.error(err.message)
        })
    }

    useEffect(() => {
        stickyHeaderFunc();

        return () => window.removeEventListener('scroll', stickyHeaderFunc)
    })

    const menuToggle = () => {
        menuRef.current.classList.toggle('active__menu')
    }

    const navigateToCart = () => {
        navigate('/cart')
    }

    const toggleProfileActions = () => {
        profileActionsRef.current.classList.toggle('show__profileActions')
    }
    return (
        <header className='header' ref={headerRef}>
            <Container>
                <Row>
                { /* 로고 */ }
                    <div className='nav__wrapper' >
                        <div className='logo'>
                            <img className='logo__img me-2' src={logo} alt="logo" />
                            
                                            <h1>FUNDRINK</h1>
            
                        </div>
                        { /* 메뉴 */ }
                        <div className='navigation' ref={menuRef} onClick={menuToggle}>
                            <ul className='menu'>
                                {
                                    nav__links.map((item, index) =>
                                        <li className='nav__link'>
                                             { /* 메뉴 활성화 버튼 */ }
                                            <NavLink className={(navClass) => navClass.isActive ? 'nav__active link' : 'link'} to={item.path}>{item.name}</NavLink>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        {/*상단 우측 뱃지들*/}
                        <div className='nav__icons'>
                            
                            {/*장바구니로 이동*/}
                            <div className="cart__icon" onClick={navigateToCart}>
                                <i class="ri-shopping-bag-line"></i>
                                <span className='badge'>{totalQuantity}</span>
                            </div>
                            <div className='profile'>
                                {/*클릭시 유저아이콘 움직임*/}    
                                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" onClick={toggleProfileActions} />
                                <div className='profile__actions ' ref={profileActionsRef} onClick={toggleProfileActions}>
                                    {
                                        currentUser ? <div className='d-flex align-items-center justify-content-center flex-column'>
                                            <span onClick={logout}>Logout</span> 
                                            <Link to='/mypage'>Mypage</Link> 
                                            </div>: 
                                        <div className='d-flex align-items-center justify-content-center flex-column'>
                                            <Link to='/signup'>Signup</Link>
                                            <Link to='/login'>Login</Link>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className='mobile__menu'>
                                <span onClick={menuToggle}>
                                    <i class="ri-menu-line"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header