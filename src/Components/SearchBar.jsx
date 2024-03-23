import React from "react";
import { TextField } from "@mui/material";
import "../Styles/searchbar.css"

const SearchBar = () => {
    return(
        <div className="search-bar"> 
            <TextField id="outlined-basic" label="Search for an artist" variant="outlined">
            </TextField>
        </div>
    )
}

export default SearchBar;