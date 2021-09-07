<<<<<<< HEAD
import '../css/CartWidget.css';
import { AiOutlineShopping } from "react-icons/ai";
import ItemListContainer from '../../ItemListContainer/js/ItemListContainer'

const CartWidget = () => {
    return (
        <div className='cartWidget'>
            <div onClick={ItemListContainer}>
                <AiOutlineShopping />           
                <span>0</span>
            </div>
        </div>        
    );
}

=======
import '../css/CartWidget.css';
import { AiOutlineShopping } from "react-icons/ai";
import ItemListContainer from '../../ItemListContainer/js/ItemListContainer'

const CartWidget = () => {
    return (
        <div className='cartWidget'>
            <div onClick={ItemListContainer}>
                <AiOutlineShopping />           
                <span>0</span>
            </div>
        </div>        
    );
}

>>>>>>> ee3000eeac8923897ce8d0b33af3ed32fdc17835
export default CartWidget;