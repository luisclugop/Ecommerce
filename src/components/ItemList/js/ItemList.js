import React, { useState, useEffect } from "react";
import Item from "../../Item/js/Item";
import '../css/ItemList.css'

const getList = () => {
    return new Promise( (resolve, reject) => {
        const productos = [
            {id: 1, badge:'Hot', src:'https://tumerchan.com/wp-content/uploads/2021/04/sudadera-manu-cort-negra.png', category:'Men,sweatshirt', titleUrl:'https://tumerchan.com/wp-content/uploads/2021/04/sudadera-manu-cort-negra.png', title:'Men Black Sweatshirt', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!', productReal:'$96.00', productDiscount:'$89.99' },
            {id: 2, badge:'Hot', src:'http://kaurisport.com/wp-content/uploads/web_sudaderagris_capuchabolsillocanguro.png', category:'Men,sweatshirt', titleUrl:'http://kaurisport.com/wp-content/uploads/web_sudaderagris_capuchabolsillocanguro.png', title:'Men Black Sweatshirt', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!', productReal:'$96.00', productDiscount:'$89.99' },
            {id: 3, badge:'Hot', src:'https://pngimage.net/wp-content/uploads/2018/06/sudadera-blanca-png-.png', category:'Men,Sweatshirt', titleUrl:'https://pngimage.net/wp-content/uploads/2018/06/sudadera-blanca-png-.png', title:'Men White Sweatshirt', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!', productReal:'$96.00', productDiscount:'$89.99' }
        ];

        setTimeout( () => resolve(productos), 1000 )
    });
}

const ItemList = () => {
    const [listProducto, setListProducto] = useState([])
    
    useEffect( () => {
        const list = getList()
        list.then(result => setListProducto(result))
    }, [])

    if(listProducto.length === 0){
        return <h1>Cargando</h1>
    }

    return (
        <>
            <div className="itemList">
                { listProducto.map(producto => 
                    <div className="itemListProduct">
                        <Item
                            key={producto?.id}
                            id={producto?.id}
                            badge={producto?.badge}
                            src={producto?.src}
                            category={producto?.category}
                            titleUrl={producto?.titleUrl}
                            title={producto?.title}
                            description={producto?.description}
                            productReal={producto?.productReal}
                            productDiscount={producto?.productDiscount}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default ItemList;
