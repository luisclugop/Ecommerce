import React from "react";
import "./../css/Item.css";
import ItemCount from '../../ItemCount/js/ItemCount';
import { Link } from 'react-router-dom';

const Item = ( { productos } ) => {
    const product = productos;
    
    if(!productos){
        return <h1>Cargando</h1>
    }

    return(
        <div className="productCard">
            <div className="badge">{ productos?.badge }</div>
            <div className="productTumb">
                <img src={ productos?.src } alt=""></img>
            </div>
            <div className="productDetails">
                <span className="productCategory">{ productos?.category }</span>
                { <Link to={`/productos/${ productos?.id }`} className='productTitle'>{ productos?.title }</Link> }
                <p className="productDescription">{ productos?.description }</p>
                <p className="productDescription">Stock: { productos?.stock }</p>
                <div className="productBottomDetails">
                    <div className="productPrice">
                        <small>${ productos?.productReal }</small>${ productos?.productDiscount }
                    </div>
                    <div className="productItemCount">
                    <ItemCount 
                        product={product}
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;