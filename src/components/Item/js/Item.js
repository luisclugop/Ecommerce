import React from "react";
import "./../css/Item.css";
import ItemCount from '../../ItemCount/js/ItemCount';
import { Link } from 'react-router-dom';

const Item = ( { item } ) => {
    
    // console.log(item);

    return(
        <div className="productCard">
            <div className="badge">{ item?.badge }</div>
            <div className="productTumb">
                <img src={ item?.src } alt=""></img>
            </div>
            <div className="productDetails">
                <span className="productCategory">{ item?.category }</span>
                { <Link to={`/item/${ item?.id }`} className='productTitle'>{ item?.title }</Link> }
                <p className="productDescription">{ item?.description }</p>
                <div className="productBottomDetails">
                    <div className="productPrice">
                        <small>{ item?.productReal }</small>{ item?.productDiscount }
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