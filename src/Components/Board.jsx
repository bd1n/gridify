import Square from './Square.jsx';
import '../Styles/board.css'
import { useEffect, useState } from 'react';

const Board = ({show, setShow, setRowCatClicked, setColCatClicked, gridData, setGridData, clickedBoxId, setClickedBoxId}) => {
    const handleTextSubmit = () => {
        return ""
    }

    useEffect( () => {
     const setBoard = async () => {
        var squares = []
        var colCount = 0;
        var rowCount = 0;
        for(var i = 0; i < 9; i++){
  
          squares.push(<Square 
              setShow={setShow} 
              show={show} 
              text={"ID = " + (i + 1)} 
              id={i + 1}
              key={i+1}
              handleGuess={handleTextSubmit}
              rowCatIndex={rowCount}
              setRowCatClicked={setRowCatClicked}
              colCatIndex={colCount}
              setColCatClicked={setColCatClicked}
              image = ""
              clickedBoxId={clickedBoxId}
              setClickedBoxId={setClickedBoxId}
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
    if (!gridData) {
        setBoard();
    }
    }, [gridData])
    
    return(
        <div className='board'>
            {gridData?<div className="grid-container">
                {gridData.map(square => {
                    return(square)
                })}
            </div> : null}
        </div>
    )
}

export default Board;