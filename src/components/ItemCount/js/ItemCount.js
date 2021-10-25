import React, { useState, useContext } from "react";
// import { useParams } from "react-router-dom";
import Button from "../../Button/js/Button";
import '../css/ItemCount.css';
import Context from "../../../context/Context";

const ItemCount = ({ product }) => {

    const [count, setCount] = useState(1);
    const { cartProducts, setCartProducts } = useContext(Context);

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

    const isInCart = (id) => {
        return cartProducts.some(prod => prod.id === id)
    }

    const addToCart = () => {
        const newProduct = {
            ...product,
            count: count
        }

        if(!isInCart(product.id)){
            setCartProducts([...cartProducts, newProduct])
        }else{
            const newProducts = cartProducts.map(prod => {
                if(prod.id === product.id) {
                    const newProducto = {
                        ...prod,
                        count: prod.count + count,
                        quantity: prod.quantity + 1
                    }
                    return newProducto
                } else {
                    // console.log(prod)
                    return prod
                }
            })
            // console.log(newProducts)
            setCartProducts(newProducts)
            // setCartProducts([...cartProducts, newProduct])
        }
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