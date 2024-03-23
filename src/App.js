import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Board from './Components/Board';
import SearchBar from './Components/SearchBar';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <Board text="testing"/>
      <Footer/>
    </div>
  );
}

export default App;
