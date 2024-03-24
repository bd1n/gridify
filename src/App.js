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
  const [rowCatClicked, setRowCatClicked] = useState(-1);
  const [colCatClicked, setColCatClicked] = useState(-1);

  return (
    <div className="App">
      <Header/>
      <SearchBar className='search-bar' show={show} rowCatClicked={rowCatClicked} colCatClicked={colCatClicked}/>
      <Board show={show} setShow={setShow} rowCatClicked={rowCatClicked} setRowCatClicked={setRowCatClicked} colCatClicked={colCatClicked} setColCatClicked={setColCatClicked}/>
      {/*<Square  className='testDiv' setShow={setShow} show={show} text='test' id={-1} handleGuess={()=>{}}></Square>*/}
      <Footer/>
    </div>
  );
}

export default App;
