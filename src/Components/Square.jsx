import { useState } from 'react';
import '../Styles/square.css';

const Square = ({ setShow, show, text, id, handleGuess, rowCatIndex, setRowCatClicked, colCatIndex, setColCatClicked, image, clickedBoxId, setClickedBoxId}) => {

    const handleClick = () => {
        setShow(!show);
        setRowCatClicked(rowCatIndex);
        setColCatClicked(colCatIndex);
        setClickedBoxId(id);
    }

    const handleTextSubmit = () => {
        handleGuess();
    }

    console.log("in square, image is ", image);

    return (
        <div className="square" onClick={() => handleClick()}>
            <img src={image} alt="artist"></img>
            {image ? <img src={image} alt="artist"></img> : null}
            <div className='squareText'>
                {"col = " + colCatIndex + " row =  " + rowCatIndex}
            </div>
        </div>
    )
}

export default Square;