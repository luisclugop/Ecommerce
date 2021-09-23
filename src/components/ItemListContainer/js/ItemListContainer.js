import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../../ItemList/js/ItemList';
import CarouselEcommerce from '../../Carousel/js/Carousel';

const getList = () => {
    return new Promise( (resolve, reject) => {
        const productos = [
            {id: 1, badge:'Hot', src:'https://tumerchan.com/wp-content/uploads/2021/04/sudadera-manu-cort-negra.png', category:'Men', titleUrl:'https://tumerchan.com/wp-content/uploads/2021/04/sudadera-manu-cort-negra.png', title:'Men Black Sweatshirt', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!', productReal:'$96.00', productDiscount:'$89.99' },
            {id: 2, badge:'Hot', src:'http://kaurisport.com/wp-content/uploads/web_sudaderagris_capuchabolsillocanguro.png', category:'Men', titleUrl:'http://kaurisport.com/wp-content/uploads/web_sudaderagris_capuchabolsillocanguro.png', title:'Men Black Sweatshirt', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!', productReal:'$96.00', productDiscount:'$89.99' },
            {id: 3, badge:'Hot', src:'https://pngimage.net/wp-content/uploads/2018/06/sudadera-blanca-png-.png', category:'Woman', titleUrl:'https://pngimage.net/wp-content/uploads/2018/06/sudadera-blanca-png-.png', title:'Men White Sweatshirt', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!', productReal:'$96.00', productDiscount:'$89.99' }
        ];

        setTimeout( () => resolve(productos), 1000 )
    });
}

const ItemListContainer = () => {
    const { category } = useParams()
    const [listProducto, setListProducto] = useState([])

    useEffect( () => {
        const list = getList()
        list.then(result => {
            if(category){
                const listProducto = result.filter(categoria => categoria.category === category)
                setListProducto(listProducto)
                // console.log(listProducto)
            }else{
                setListProducto(result)
            }
        })
    }, [category])

    if(listProducto.length === 0){
        return <h1>Cargando</h1>
    }

    // console.log(listProducto);

    return(
        <>
            <CarouselEcommerce />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ItemList listProducto={listProducto}/>
            </div>
        </>
    );
    
}

export default ItemListContainer;