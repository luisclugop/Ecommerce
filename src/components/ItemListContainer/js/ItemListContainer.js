import React from 'react';
import ItemCount from '../../ItemCount/js/ItemCount';

const ItemListContainer = ({ mensaje }) => {
    return(
        <>
            <h1>{mensaje}</h1>
            <ItemCount />
        </>
    );
    
}

export default ItemListContainer;