import { useState } from 'react';
import '../Styles/square.css';

const Square = ({ show, setShow, text, id, handleGuess, rowCatIndex, setRowCatClicked, colCatIndex, setColCatClicked, image }) => {

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
            {image ? <img source={image} alt="artist"></img> : null}
            <div className='squareText'>
                {"col = " + colCatIndex + " row =  " + rowCatIndex}
            </div>
        </div>
    )
}

export default Square;