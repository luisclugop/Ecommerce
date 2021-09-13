import React, { Component } from "react";
import "./../css/Item.css";
import ItemCount from '../../ItemCount/js/ItemCount';

class Item extends Component {
    render(){
        let { id, badge, src, category, titleUrl, title, description, productReal, productDiscount } = this.props;
        return(
            <>
                <div className="productCard">
                    <div className="badge">{ badge }</div>
                    <div className="productTumb">
                        <img src={ src } alt=""></img>
                    </div>
                    <div className="productDetails">
                        <span className="productCategory">{ category }</span>
                        <a className="productTitle" href={ titleUrl }>{ title }</a>
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
            </>
        );
    }
}

export default Item;