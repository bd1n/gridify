import Square from './Square.jsx';
import { React, useState } from 'react';
import '../Styles/board.css'

const Board = ({show, setShow, setRowCatClicked, setColCatClicked }) => {
    const [rowCategories, setRowCategories] = useState([]);
    const handleTextSubmit = () => {
        return ""
    }
    var squares = []
    var colCount = 0;
    var rowCount = 0;
    for(var i = 0; i < 9; i++){

        squares.push(<Square 
            setShow={setShow} 
            show={show} 
            text={"ID = " + (i + 1)} 
            id={i + 1}
            rowCatIndex={rowCount}
            colCatIndex={colCount}
            setRowCatClicked={setRowCatClicked}
            setColCatClicked={setColCatClicked}
            handleGuess={handleTextSubmit}>
        </Square>)

        colCount++;
        if(colCount == 3){
            colCount = 0;
            rowCount++;
        }
    }
    return(
        <div className='board_row_parent'>
            <div className="row-categories">
                {rowCategories.map(category => {
                    return <div key={category}>{category}</div>
                })}
            </div>
            <div className='board'>
                <div className="grid-container">
                    {squares.map(square => {
                        return(square)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Board;