import React,{useRef,useEffect} from "react";

import {NavLink, useNavigate} from "react-router-dom";
import './header.css';

import {motion} from 'framer-motion';

import logo from '../../assets/images/teamlogo.png';
import userIcon from '../../assets/images/user-icon.png';

import {Container,Row} from "reactstrap";
import {useSelector} from "react-redux";
//import { useEffect } from "react";

const nav__links = [
  {
    path: 'home',
    display: 'Home'
  },
   {
    path: 'shop',
    display: 'Shop'
  },
   {
    path: 'cart',
    display: 'Cart'
  },
];

const Header = () => {

  const headerRef =useRef(null);
  const totalQuantity = useSelector(state=> state.cart.totalQuantity)

  const menuRef =useRef(null);
  const navigate = useNavigate();

  const stickyHeaderFunc = ()=>{
    window.addEventListener("scroll",()=>{
      if(document.body.scrollTop > 80|| document.documentElement.scrollTop
        > 80){
          headerRef.current.classList.add('sticky__header')
        }else {
        headerRef.current.classList.remove('sticky__header')
        }
      });
  };

  useEffect(()=>{
    stickyHeaderFunc();
    
    return () =>window.removeEventListener("scroll",stickyHeaderFunc);
  });

  const menuToggle = ()=> menuRef.current.classList.toggle("active__menu");
  
  const navigateToCart =()=>{
    navigate("/cart");
  }
  
  return (
   <header className="header" ref={headerRef}>
    <Container>
      <Row>
            { /* 로고 */ }
        <div className="nav__wrapper">
          <div className="logo">
            <img src ={logo} alt= "logo"/>
            
              <h1>FUNDRINK</h1>
             
            
          </div>
           { /* 메뉴 */ }
          <div className="navigation" ref={menuRef} onClick={menuToggle}>
            <ul className="menu">
             {nav__links.map((item,index)=>(
                <li className="nav_item" key={index}>
                      { /* 메뉴 활성화 버튼 */ }
                  <NavLink
                   to={item.path}
                   className={(navClass)=>
                    navClass.isActive ?"nav__active" :""}>{item.display}</NavLink>
                </li>
             
              ))}
              
            </ul>
          </div>
          <div className="nav__icons">

            {/*상단 우측 뱃지들*/}
            <span className="fav__icon"><i class="ri-heart-line"></i><span className="badge">2</span>
            </span>
            {/*장바구니로 이동*/}
            <span className="cart__icon" onClick={navigateToCart}>
              <i class="ri-shopping-bag-line"></i>
              <span className="badge">{totalQuantity}</span>
            </span>
              {/*클릭시 유저아이콘 움직임*/}        
            <span><motion.img whileTap={{scale:1.2}} src={userIcon} alt="" /></span>
            <div className="mobile__menu">
            <span onClick={menuToggle}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
          </div>

          
        </div>
      </Row >
    </Container>
  </header>
  );
};

export default Header;
