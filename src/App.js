import React from 'react';
import './App.css';
import NavBar from './components/Navbar/js/navbar';
import ItemListContainer from './components/ItemListContainer/js/ItemListContainer';
import ItemCount from './components/ItemCount/js/ItemCount';


const App = () => {
  
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer mensaje="Este es un mensaje"/>
        <ItemCount />
    </div>
  );
}

export default App;