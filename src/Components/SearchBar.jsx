import React from "react";
import { TextField } from "@mui/material";
import "../Styles/searchbar.css"

const SearchBar = ({show}) => {

    return(
        <div className="search-bar"> 
            {show ? <TextField id="outlined-basic" label="Search for an artist" variant="outlined">
            </TextField> : <div>hidden</div>}
            {show}
        </div>
    )
}

export default SearchBar;