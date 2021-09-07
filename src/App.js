import './App.css';
import NavBar from './components/Navbar/js/navbar';

const App = () => {
  return (
    <div className="App">
        <NavBar />
        <div id='itemList'></div>
    </div>
  );
}

export default App;