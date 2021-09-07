import '../css/navbar.css';
import React from 'react';
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import CartWidget from '../../CartWidget/js/CartWidget.js';

const NavBar = () => {
  return (
    <nav className='NavBar'>
        <div className='LeftNav'>
            <div className='NavOptionsLeft'>
                <a href='./' className='TitleNav Option'>Ecommerce</a>
            </div>
        </div>
        <div className='RightNav'>
            <div className='NavOptionsRight'>
                <a href='./' className='Option'>Home</a>
                <a href='./' className='Option'>Collections</a>
                <a href='./' className='Option'><AiOutlineUser /></a>
                <a href='./' className='Option'><AiOutlineHeart /></a>
                <div className='Option'><CartWidget /></div>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;