import logo from './logo.svg';
import { React, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Board from './Components/Board';
import Square from './Components/Square';
import SearchBar from './Components/SearchBar';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Header/>
      <SearchBar className='search-bar'show={show}/>
      <Board/>
      <Square  className='testDiv' setShow={setShow} show={show} text='test' id={-1} handleGuess={()=>{}}></Square>
      <Footer/>
    </div>
  );
}

export default App;
