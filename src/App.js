import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/js/navbar';
import ItemListContainer from './components/ItemListContainer/js/ItemListContainer';
import Collections from './views/Collections';
import ItemDetailContainer from './components/ItemDetailContainer/js/ItemDetailContainer';
import Cart from "./components/Cart/js/Cart";

export const TestContext = React.createContext();

const App = () => {
  const products = [
    { id: 1, category: 'Men' },
    { id: 2, category: 'Woman' }
  ];

  const [cartProducts, setCartProduct] = useState([]);
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar products={products} cartProducts={cartProducts}/>

        <TestContext.Provider value={'prueba'}>
          <Switch>
            <Route exact path="/">
              <ItemListContainer productsAdded={cartProducts} addProductFunction={setCartProduct}/>
            </Route>
            <Route exact path="/category/:category">
              <ItemListContainer productsAdded={cartProducts} addProductFunction={setCartProduct}/>
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer productsAdded={cartProducts} addProductFunction={setCartProduct} />
            </Route>
            <Route exact path="/cart">
              <Cart productsAdded={cartProducts} addProductFunction={setCartProduct} />
            </Route>
            <Route exact path="/Collections">
              <Collections />
            </Route>
          </Switch>
        </TestContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;