import '../Styles/square.css';

const Square = ({show, setShow, id, setRowCatClicked, setColCatClicked, setClickedBoxId, rowCatIndex, colCatIndex, image}) => {

    const handleClick = () => {
        setShow(!show);
        setRowCatClicked(rowCatIndex);
        setColCatClicked(colCatIndex);
        setClickedBoxId(id);
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