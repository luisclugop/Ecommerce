import React from 'react';
import ItemList from '../../ItemList/js/ItemList';


const ItemListContainer = ({ mensaje }) => {
    return(
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ItemList />
            </div>
            { <h1>{mensaje}</h1> }
        </>
    );
    
}

export default ItemListContainer;