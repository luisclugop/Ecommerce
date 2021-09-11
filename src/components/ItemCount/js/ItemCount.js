import React, { useState } from "react";
import Button from "../../Button/js/Button";
import '../css/ItemCount.css';

// class ItemCount extends Component {
//     constructor(){
//         super();
//         this.state = {
//             count: 0
//         }
//     }

//     incrementCount = () => {
//         this.setState({
//             count: this.state.count + 1
//         });
//     }

//     decrementCount = () => {
//         this.setState({
//             count: this.state.count - 1
//         });
//     }

//     render(){
//         let { count } = this.state;

//         return(
//             <div className="itemCount">
//                 <Button className="btnLeft" title="-" task={ () => this.decrementCount() } />
//                 <span className="btnMiddle">{ count }</span>
//                 <Button className="btnRight" title="+" task={ () => this.incrementCount() } />
//             </div>
//         );
//     }
// }

// export default ItemCount;

const ItemCount = () => {

    const [count, setCount] = useState(0);

    const decrementCount = () => {
        if(count <= 0) {
        console.log('No hay productos que eliminar')
        } else{
        setCount(count - 1)
        }
    }

    const incrementCount = () => {
        setCount(count + 1);
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