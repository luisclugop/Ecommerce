import React from 'react';
import '../css/CartWidget.css';
import { AiOutlineShopping } from "react-icons/ai";

const CartWidget = ({ quantity }) => {
    
    return (
        <div className='cartWidget'>
            <div>
                <AiOutlineShopping />           
                <span>{quantity}</span>
            </div>
        </div>        
    );
}

export default CartWidget;