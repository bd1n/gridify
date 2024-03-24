import React, { useState } from "react";
import { TextField, Input } from "@mui/material";
import "../Styles/searchbar.css"
import { Button } from "@mui/base";
import { getSearch } from "../backend/auth";

const SearchBar = ({show, colCatClicked, rowCatClicked, clickedBoxId, changedSquare, setChangedSquare}) => {
    const [searchInput, setSearchInput] = useState("");
    const [wrongInput, setWrongInput] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        setWrongInput(false);
    };

    async function handleSubmit(e) {
        console.log("saw submit", searchInput.toUpperCase());
        console.log("row", rowCatClicked, "col", colCatClicked);
        const result = await getSearch(searchInput.toUpperCase(), rowCatClicked, colCatClicked);

        if (result){
            console.log("GOOD GUESS, picture is", result)
            // const squares = gridData.map(box =>
            //     console.log("found", box.props, clickedBoxId)
            //     // box.props.id === clickedBoxId? {...box, image : result}: box
            // );
            // setGridData(squares);
            // setImage(result);
            // (console.log("searchbar squares is ", gridData));
            setChangedSquare({
                id: clickedBoxId,
                image: result,
                changed: true
            });
        }
        else if (result === false && result !== null) {
            console.log("WRONG bozo");
            setWrongInput(true);
        }
        else{
            //decrement lives
        }

        setSearchInput("");
    }

    return(
        <div className="search-bar">
                {show? 
                <div>
                    <>
                    {wrongInput?
                        <Input 
                        error
                        type="text"
                        placeholder="Search for an artist"
                        onChange={handleChange}
                        onKeyDown={(e) => {
                            if (e.code === "Enter") {
                                // text is searchInput
                                // console.log(e, searchInput)
                                handleSubmit();
                            }
                        }}
                        value={searchInput}
                    /> :
                    <Input 
                        type="text"
                        placeholder="Search for an artist"
                        onChange={handleChange}
                        onKeyDown={(e) => {
                            if (e.code === "Enter") {
                                // text is searchInput
                                // console.log(e, searchInput)
                                handleSubmit();
                            }
                        }}
                        value={searchInput}
                    /> }
                    </>
                    {/* <Button 
                        variant="contained" 
                        fullWidth
                        onClick={handleSubmit} 
                        value={searchInput}/> */}
                </div>
                : null }
{/*             
            {show ? <TextField id="outlined-basic" label="Search for an artist" variant="outlined">
            </TextField> : null} */}
        </div>
    )
}

export default SearchBar;