import React from "react";
import { TextField } from "@mui/material";
import { useState } from 'react';
import "../Styles/searchbar.css"

const SearchBar = ({show, rowCatClicked, colCatClicked }) => {

    return(
        <div className="search-bar"> 
            {show ? <TextField id="outlined-basic" label="Search for an artist" variant="outlined">
            </TextField> : null}
        </div>
    )
}


export default SearchBar;