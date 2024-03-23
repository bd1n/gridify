import { useState } from 'react';
import '../Styles/square.css';

const Grid = ({ text, id, handleGuess }) => {

    const handleTextSubmit = () => {
        handleGuess();
    }

    return (
        <div className="square">
            <div className='squareText'>
                {text}
            </div>
        </div>
    )
}

export default Grid;