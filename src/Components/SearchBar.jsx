import React from "react";
import { TextField } from "@mui/material";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import "../Styles/searchbar.css"


const SearchBar = () => {
    const [searchText, setSearchText] = useState('');

    return(
        <div className="search-bar"> 
            <TextField id="outlined-basic" label="Search for an artist" variant="outlined" onKeyDown={e=> e.key === 'Enter' ? setSearchText(e.target.value) : null}>
            </TextField>
            <div>
                Res = {searchText}
            </div>
        </div>
    )
}


export default SearchBar;