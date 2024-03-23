import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Square from './Components/Square';
import Footer from './Components/Footer';
import Board from './Components/Board';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Board text="testing"/>
      <Footer/>
    </div>
  );
}

export default App;
