import '../css/navbar.css';
import React, { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import CartWidget from '../../CartWidget/js/CartWidget.js';

const NavBar = ( {products, cartProducts} ) => {
    const [productQuantity, setProductQuantity] = useState(0)

    useEffect( () => {
        if(cartProducts.length === 0) {
            setProductQuantity(0)
        }else{
            cartProducts.forEach(element => {
                setProductQuantity(productQuantity + element.count)
            })
        }
    }, [cartProducts])

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
                    {products.map(cat => <NavLink key={cat.id} to={`/category/${cat.category}`} activeClassName="navlink" className='Option'>{cat.category}</NavLink>)}
                    <NavLink to="/" activeClassName="navlink" className='Option'><AiOutlineUser /></NavLink>
                    <NavLink to="/" activeClassName="navlink" className='Option'><AiOutlineHeart /></NavLink>
                    <div className='Option'>
                        <Link to='/cart'>
                            <CartWidget quantity={productQuantity}/>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;