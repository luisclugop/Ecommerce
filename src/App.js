import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/js/navbar';
import ItemListContainer from './components/ItemListContainer/js/ItemListContainer';
import Collections from './views/Collections';
import ItemDetailContainer from './components/ItemDetailContainer/js/ItemDetailContainer';

const App = () => {
  const products = [
    { id: 1, category: 'Men' },
    { id: 2, category: 'Woman' }
  ];
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar products={products}/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:category">
            <ItemListContainer />
          </Route>
          <Route exact path="/Collections">
            <Collections />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;