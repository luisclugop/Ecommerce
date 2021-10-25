import React, { useContext } from 'react';
import '../css/CartWidget.css';
import { AiOutlineShopping } from "react-icons/ai";
import Context from '../../../context/Context';

const CartWidget = () => {
    const { getCount } = useContext(Context);

    return (
        <div className='cartWidget'>
            <div>
                <AiOutlineShopping /> 
                <span>{ getCount() }</span>
            </div>
        </div>        
    );
}

export default CartWidget;