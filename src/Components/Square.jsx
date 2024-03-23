import { useState } from 'react';
import '../Styles/square.css';

const Square = ({ show, setShow, text, id, handleGuess }) => {

    const handleClick = () => {
        setShow(!show);
    }

    const handleTextSubmit = () => {
        handleGuess();
    }

    return (
        <div className="square" onClick={() => handleClick()}>
            <div className='squareText'>
                {text}
            </div>
        </div>
    )
}

export default Square;