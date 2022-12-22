import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Container, Row } from 'reactstrap'
import logo from '../../assets/images/teamlogo.png';
import userIcon from '../../assets/images/user-icon.png'
import useAuth from '../../custom-hooks/useAuth'
import { motion } from 'framer-motion'
import './header.css'
import { signOut } from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth } from '../../firebase.config'
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
    const { currentUser } = useAuth()
    const profileActionsRef = useRef(null)
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
        signOut(auth).then(() => {
            toast.success('Logged out')
            navigate('/home')
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
                            <div className='fav__icon'>
                                <i class="ri-heart-line"></i>
                                <span className='badge'>1</span>
                            </div>
                            
                            {/*장바구니로 이동*/}
                            <div className="cart__icon" onClick={navigateToCart}>
                                <i class="ri-shopping-bag-line"></i>
                                <span className='badge'>{totalQuantity}</span>
                            </div>
                            <div className='profile'>
                                {/*클릭시 유저아이콘 움직임*/}    
                                <motion.img whileTap={{ scale: 1.2 }} src={currentUser ? currentUser.photoURL : userIcon} alt="" onClick={toggleProfileActions} />
                                <div className='profile__actions ' ref={profileActionsRef} onClick={toggleProfileActions}>
                                    {
                                        currentUser ? <span onClick={logout}>Logout</span> : <div className='d-flex align-items-center justify-content-center flex-column'>
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