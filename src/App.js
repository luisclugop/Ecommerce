import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/js/navbar';
import ItemListContainer from './components/ItemListContainer/js/ItemListContainer';
import Collections from './views/Collections';
import ItemDetailContainer from './components/ItemDetailContainer/js/ItemDetailContainer';

const App = () => {

  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer mensaje="Este es un mensaje"/>
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