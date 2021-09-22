import React, { useState } from "react";
import Button from "../../Button/js/Button";
import '../css/ItemCount.css';

const ItemCount = () => {

    const [count, setCount] = useState(1);

    const decrementCount = () => {
        if(count <= 1) {
        console.log('No hay productos que eliminar')
        } else{
        setCount(count - 1)
        }
    }

    const incrementCount = () => {
        if(count >= 10) {
            console.log('No hay productos que eliminar')
        } else{
            setCount(count + 1);
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
                <Button title="Agregar al carrito" task={ () => { console.log("Boton Agregar") } }/>
            </div>
        </>
    );

}

export default ItemCount;