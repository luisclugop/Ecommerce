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

export default CartWidget;