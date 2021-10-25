import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/js/navbar';
import ItemListContainer from './components/ItemListContainer/js/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/js/ItemDetailContainer';
import Cart from "./components/Cart/js/Cart";
import CartContext from "./context/CartContext";
import FooterPage from "./components/Footer/js/Footer";
import Stripe from "./components/Stripe/js/Stripe";

const App = () => {
  const products = [
    { id: 1, category: 'Men' },
    { id: 2, category: 'Woman' }
  ];

  return (
      <div className="App">
        <BrowserRouter>
          <CartContext>
            <NavBar products={products} />
            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route exact path="/category/:category">
                <ItemListContainer />
              </Route>
              <Route exact path="/productos/:id">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
            </Switch>
            <Stripe></Stripe>
            <FooterPage></FooterPage>
          </CartContext>
        </BrowserRouter>
      </div>
  );
}

export default App;