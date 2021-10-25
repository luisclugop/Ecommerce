import React from "react";
import Item from "../../Item/js/Item";
import '../css/ItemList.css'

const ItemList = ( { productos } ) => {

    if(!productos){
        return <h1>Cargando</h1>
    }

    // console.log(listProducto);

    return (
        <>
            <div className="itemList">
                { productos.map(producto => 
                    <div className="itemListProduct" key={producto?.id}>
                        <Item
                            productos={producto}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default ItemList;
