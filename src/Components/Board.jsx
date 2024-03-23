import Square from './Square.jsx';
import '../Styles/board.css'

const Board = () => {

    const handleTextSubmit = () => {
        return ""
    }
    var squares = []
    for(var i = 0; i < 9; i++){
        squares.push(<Square text={"ID = " + (i + 1)} id={i + 1} handleGuess={handleTextSubmit}></Square>)
    }
    return(
        <div className='board'>
            <div className="grid-container">
                {squares.map(square => {
                    return(square)
                })}
            </div>
        </div>
    )
}

export default Board;