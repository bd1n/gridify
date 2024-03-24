import React from "react";
import { TextField } from "@mui/material";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import "../Styles/searchbar.css"

<<<<<<< HEAD

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    var count = 0;
    const handleSubmit = (text) => {
        setSearchText(text);
        count++;
    }

    return(
        <div className="search-bar"> 
            <TextField id="outlined-basic" label="Search for an artist" variant="outlined" onKeyDown={e=> e.key === 'Enter' ? setSearchText(e.target.value) : null}>
            </TextField>
            <div>
                Res = {searchText}
            </div>
=======
const SearchBar = ({show, rowCatClicked, colCatClicked }) => {

    return(
        <div className="search-bar"> 
            {show ? <TextField id="outlined-basic" label="Search for an artist" variant="outlined">
            </TextField> : null}
>>>>>>> main
        </div>
    )
}


export default SearchBar;