import { useState } from 'react';
import '../Styles/square.css';

const Square = ({ show, setShow, text, id, handleGuess, rowCatIndex, setRowCatClicked, colCatIndex, setColCatClicked }) => {

    const handleClick = () => {
        setShow(!show);
        setRowCatClicked(rowCatIndex);
        setColCatClicked(colCatIndex);
    }

    const handleTextSubmit = () => {
        handleGuess();
    }

    return (
        <div className="square" onClick={() => handleClick()}>
            <div className='squareText'>
                {"col = " + colCatIndex + " row =  " + rowCatIndex}
            </div>
        </div>
    )
}

export default Square;