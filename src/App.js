import logo from './logo.svg';
import { React, useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Board from './Components/Board';
import Square from './Components/Square';
import SearchBar from './Components/SearchBar';
import { setEnum, setOrder, getEnum, getColCategory, getRowCategory } from './CategoryEnum';
import { grid } from '@mui/system';

function App() {
  const [show, setShow] = useState(false);
  const [rowCatClicked, setRowCatClicked] = useState(-1);
  const [colCatClicked, setColCatClicked] = useState(-1);
  const [clickedBoxId, setClickedBoxId] = useState(-1);
  const [gridData, setGridData] = useState(null);
  const [changedSquare, setChangedSquare] = useState({id:null, image: null, changed: false});

useEffect( () => {
 const setBoard = async () => {
    var squares = []
    var colCount = 0;
    var rowCount = 0;
    for(var i = 0; i < 9; i++){

      squares.push(<Square 
          show={show} 
          setShow={setShow} 
          id={i + 1}
          key={i+1}
          setRowCatClicked={setRowCatClicked}
          setColCatClicked={setColCatClicked}
          setClickedBoxId={setClickedBoxId}
          rowCatIndex={rowCount}
          colCatIndex={colCount}
          image = ""
          >
          
      </Square>)

      colCount++;
      if(colCount == 3){
          colCount = 0;
          rowCount++;
      }
  }
  setGridData(squares);
};

async function waitForGrid(newGrid) {
  while(newGrid !== gridData){
    console.log(newGrid);
    console.log(gridData);
  }
  return;
}

if (!getEnum()[0] && !getColCategory(0) && !getRowCategory(0)) {
    setEnum();
    setOrder();
}
if (!gridData) {
    setBoard();
}
console.log("APP grid data", gridData);
if (changedSquare["changed"]) {
  console.log("to change box", changedSquare["id"], "to picture", changedSquare["image"]);
  const updatedGrid = gridData.map(square => {
    if (square.props.id === changedSquare["id"]) {
      return {...square, image: changedSquare["image"]};
    }
    return square;
  });
  setGridData(updatedGrid);
  waitForGrid(updatedGrid);
  console.log("UPDATED APP grid data", gridData);
  changedSquare["changed"] = false
}
}, [gridData, changedSquare])
  
  console.log("APP ENUM IS", getEnum());
  gridData?console.log("1st data is", gridData[0].props):console.log("grid is empty rn");


  return (
    <div className="App">
      <Header/>
      <SearchBar className='search-bar' show={show} colCatClicked={colCatClicked} rowCatClicked={rowCatClicked} clickedBoxId={clickedBoxId} changedSquare={changedSquare} setChangedSquare={setChangedSquare}/>

      {gridData?
      <>
        <Board gridData={gridData}/>
        {gridData[0].props.image?<img src={gridData[0].props.image} alt="artist"></img>:<p>String is {gridData[0].props.image}</p>}
      </>
      :null}
      {/*<Square  className='testDiv' setShow={setShow} show={show} text='test' id={-1} handleGuess={()=>{}}></Square>*/}
      <Footer/>
    </div>
  );
}

export default App;
