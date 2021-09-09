import React from 'react';
import '../css/CartWidget.css';
import { AiOutlineShopping } from "react-icons/ai";

const CartWidget = () => {
    
    return (
        <div className='cartWidget'>
            <div>
                <AiOutlineShopping />           
                <span>0</span>
            </div>
        </div>        
    );
}

export default CartWidget;