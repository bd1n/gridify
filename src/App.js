import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Square from './Components/Square';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';
function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <Square/>
      <Footer/>
    </div>
  );
}

export default App;
