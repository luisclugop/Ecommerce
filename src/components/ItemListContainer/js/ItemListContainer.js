import React from 'react';
import ItemList from '../../ItemList/js/ItemList';
import CarouselEcommerce from '../../Carousel/js/Carousel';


const ItemListContainer = ({ mensaje }) => {
    return(
        <>
            <CarouselEcommerce />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ItemList />
            </div>
            { <h1>{mensaje}</h1> }
        </>
    );
    
}

export default ItemListContainer;