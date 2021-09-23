import React from "react";
import Item from "../../Item/js/Item";
import '../css/ItemList.css'

const ItemList = ( { listProducto } ) => {

    if(!listProducto){
        return <h1>Cargando</h1>
    }

    // console.log(listProducto);

    return (
        <>
            <div className="itemList">
                { listProducto.map(producto => 
                    <div className="itemListProduct" key={producto?.id}>
                        <Item
                            item={producto}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default ItemList;
