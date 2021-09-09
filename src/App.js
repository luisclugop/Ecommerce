import React from 'react';
import './App.css';
import NavBar from './components/Navbar/js/navbar';
import ItemListContainer from './components/ItemListContainer/js/ItemListContainer';


const App = () => {
  
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer mensaje="Este es un mensaje"/>
    </div>
  );
}

export default App;