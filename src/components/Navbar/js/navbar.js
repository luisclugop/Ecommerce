import '../css/navbar.css';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import CartWidget from '../../CartWidget/js/CartWidget.js';

const NavBar = () => {
  return (
    <nav className='NavBar'>
        <div className='LeftNav'>
            <div className='NavOptionsLeft'>
                <Link to="/" className='TitleNav Option'>Ecommerce</Link>
            </div>
        </div>
        <div className='RightNav'>
            <div className='NavOptionsRight'>
                <NavLink to="/" activeClassName="navlink" className='Option'>Home</NavLink>
                <NavLink to="/Collections" activeClassName="navlink" className='Option'>Collections</NavLink>
                <NavLink to="/" activeClassName="navlink" className='Option'><AiOutlineUser /></NavLink>
                <NavLink to="/" activeClassName="navlink" className='Option'><AiOutlineHeart /></NavLink>
                <div className='Option'><CartWidget /></div>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;