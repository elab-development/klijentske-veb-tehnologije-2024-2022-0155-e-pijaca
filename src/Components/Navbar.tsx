import React, { useState } from 'react';
import '../css/Navbar.css';


import logo from '../assets/logo.png';
import { FaShoppingCart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';


interface NavbarProps{
  cartNum: number;
}




const Navbar: React.FC<NavbarProps> = ({cartNum}) => {
  const [menu, setMenu] = useState("none");




  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" style={{ width: "80px", borderRadius: '10px' }} />
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("home") }}>
          <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
            <IoHome />
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("voce") }}>
          <Link to="/voce" style={{ textDecoration: 'none', color: 'inherit' }}>
            VOĆE
          </Link>
          {menu === "voce" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("povrce") }}>
          <Link to='/povrce' style={{ textDecoration: 'none', color: 'inherit' }}>
            POVRĆE
          </Link>
          {menu === "povrce" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("recepti") }}>
          <Link to='/recepti' style={{ textDecoration: 'none', color: 'inherit' }}>
            RECEPTI
          </Link>
          {menu === "recepti" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
      <li onClick={() => { setMenu("signup") }}>
          <Link to='/signup' style={{ textDecoration: 'none', color: 'inherit' }}>
          <button>Sign Up</button>
          </Link>
          {menu === "signup" ? <></> : <></>}
        </li>
       
       
        <Link to='/cart' style={{ textDecoration: 'none', color: 'inherit' }}>
          <FaShoppingCart size="35" onClick={() => { setMenu("cart") }}/>
        </Link>
        {menu === "cart" ? <></> : <></>}
        <div className="nav-cart-count">{cartNum}</div>
      </div>
    </div>
  );
}


export default Navbar;