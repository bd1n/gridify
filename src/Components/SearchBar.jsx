import React from "react";
import { TextField } from "@mui/material";
import { useState } from 'react';
import "../Styles/searchbar.css"


const SearchBar = () => {
    const [searchText, setSearchText] = useState('');

    var count = 0;
    const handleSubmit = (text) => {
        setSearchText(text);
        count++;
        if(count === 9){

        }
    }

    return(
        <div className="search-bar"> 
            <TextField id="outlined-basic" label="Search for an artist" variant="outlined" onKeyDown={e=> e.key === 'Enter' ? setSearchText(e.target.value) : null}>
            </TextField>
        </div>
    )
}


export default SearchBar;