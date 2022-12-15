import React from "react";

import {NavLink} from "react-router-dom";
import './header.css'

import {motion} from 'framer-motion'

import logo from '../../assets/images/teamlogo.png';
import userIcon from '../../assets/images/user-icon.png';

import {Container,Row} from "reactstrap";

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
]

const Header = () => {
  return  <header className="header">
    <Container>
      <Row>
            { /* 로고 */ }
        <div className="nav__wrapper">
          <div className="logo">
            <img src ={logo} alt= "logo"/>
            
              <h1>FUNDRINK</h1>
              <p>Toward a better life</p>
            
          </div>
           { /* 메뉴 */ }
          <div className="navigation">
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
            <span className="cart__icon">
              <i class="ri-shopping-bag-line"></i>
              <span className="badge">2</span>
            </span>
              {/*클릭시 유저아이콘 움직임*/}        
            <span><motion.img whileTap={{scale:1.2}} src={userIcon} alt="" /></span>
          </div>

          <div className="mobile__menu">
            <span><i class="ri-menu-line"></i></span>
          </div>
        </div>
      </Row >
    </Container>
  </header>
};

export default Header;
