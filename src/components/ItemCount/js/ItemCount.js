import React, { useState } from "react";
import Button from "../../Button/js/Button";
import '../css/ItemCount.css';

const ItemCount = ({ product, productsAdded, addProductFunction }) => {

    const [count, setCount] = useState(1);

    const decrementCount = () => {
        if(count <= 1) {
            // console.log('Se han eliminado todos los productos')
        } else{
        setCount(count - 1)
        }
    }

    const incrementCount = () => {
        if(count >= product.stock) {
            // console.log('No hay más producto')
        } else{
            setCount(count + 1);
        }
    }

    const addToCart = () => {
        const newProduct = {
            ...product,
            count: count
        }
        addProductFunction([...productsAdded, newProduct])
        // console.log(newProduct)
    }

    return(
        <>
            <div className="itemCount">
                <Button className="btnLeft" title="-" task={ () => decrementCount() } />
                <span className="btnMiddle">{ count }</span>
                <Button className="btnRight" title="+" task={ () => incrementCount() } />
            </div>
            <div className="btnItemCount">
                <Button title="Agregar al carrito" task={ () => addToCart() } />
            </div>
        </>
    );

}

export default ItemCount;