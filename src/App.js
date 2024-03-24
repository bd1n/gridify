import logo from './logo.svg';
import { React, useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Board from './Components/Board';
import Square from './Components/Square';
import SearchBar from './Components/SearchBar';
import { setEnum, setOrder, getEnum } from './CategoryEnum';

function App() {
  const [show, setShow] = useState(false);
  const [rowCatClicked, setRowCatClicked] = useState(-1);
  const [colCatClicked, setColCatClicked] = useState(-1);
  const [clickedBoxId, setClickedBoxId] = useState(-1);
  const [image, setImage] = useState("");
  const [gridData, setGridData] = useState(null);

  useEffect(() => {
    setEnum();
    setOrder();
  }, []);
  
  console.log("APP ENUM IS", getEnum());


  return (
    <div className="App">
      {/* <img src={"https://i.scdn.co/image/ab6761610000e5ebf5d2200231e6ad75e8485476"} alt="artist"></img> */}
      <Header/>
      <SearchBar className='search-bar' show={show} rowCatClicked={rowCatClicked} colCatClicked={colCatClicked} 
      clickedBoxId={clickedBoxId} setClickedBoxId={setClickedBoxId} gridData={gridData} setGridData={setGridData} setImage={setImage}/>
      
      <Board show={show} setShow={setShow} rowCatClicked={rowCatClicked} setRowCatClicked={setRowCatClicked} 
      colCatClicked={colCatClicked} setColCatClicked={setColCatClicked} gridData={gridData} setGridData={setGridData} 
      clickedBoxId={clickedBoxId} setClickedBoxId={setClickedBoxId}/>
      {/*<Square  className='testDiv' setShow={setShow} show={show} text='test' id={-1} handleGuess={()=>{}}></Square>*/}
      <Footer/>
    </div>
  );
}

export default App;
