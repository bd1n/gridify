import Square from './Square.jsx';
import '../Styles/board.css'
import { useEffect, useState } from 'react';

const Board = ({gridData}) => {
    return(
        <div className='board'>
            <div className="grid-container">
                {gridData.map(square => {
                    return(square)
                })}
            </div>
        </div>
    )
}

export default Board;