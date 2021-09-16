import React from 'react';
import ItemList from '../../ItemList/js/ItemList';
import CarouselEcommerce from '../../Carousel/js/Carousel';
import ItemDetailContainer from '../../ItemDetailContainer/js/ItemDetailContainer';


const ItemListContainer = ({ mensaje }) => {
    return(
        <>
            <CarouselEcommerce />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ItemList />
            </div>
            { <h1>{mensaje}</h1> }
            <ItemDetailContainer />
        </>
    );
    
}

export default ItemListContainer;