import React, { useState } from 'react';
import { Provider } from './Context';

const CartContextProvider = ({ children }) => {
  // Estado encargado de almacenar los productos del carrito
  const [cartProducts, setCartProducts] = useState([]);
  // console.log(cartProducts);

  const getCount = () => {
    let count = 0;
    cartProducts.forEach(prod => {
      count = count + prod.count
    })
    return count
  }

  const getTotal = () => {
    let total = 0;
    cartProducts.forEach(prod => {
      total = total + prod.productDiscount * prod.count
    })
    return total.toLocaleString(undefined, {minimumFractionDigits: 2})
  }

  const getTotalIva = () => {
    let iva = 1.16
    const totalIva = (getTotal() * iva);
    return totalIva.toLocaleString(undefined, {minimumFractionDigits: 2})
  }

  const getProduct = (id) => {
    return cartProducts.find(prod => prod.id === id)
  }

  return (
    <Provider value={{
      cartProducts,
      setCartProducts,
      getCount,
      getTotal,
      getProduct,
      getTotalIva
    }}
    >
      {children}
    </Provider>
  )
}

export default CartContextProvider;