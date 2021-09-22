import React from "react";
import "./../css/Item.css";
import ItemCount from '../../ItemCount/js/ItemCount';
import { Link } from 'react-router-dom';

const Item = ( { id, badge, src, category, titleUrl, title, description, productReal, productDiscount} ) => {
    return(
        <div className="productCard">
            <div className="badge">{ badge }</div>
            <div className="productTumb">
                <img src={ src } alt=""></img>
            </div>
            <div className="productDetails">
                <span className="productCategory">{ category }</span>
                { <Link to={`/item/${ id }`} className='productTitle'>{ title }</Link> }
                <p className="productDescription">{ description }</p>
                <div className="productBottomDetails">
                    <div className="productPrice">
                        <small>{ productReal }</small>{ productDiscount }
                    </div>
                    <div className="productItemCount">
                    <ItemCount />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;