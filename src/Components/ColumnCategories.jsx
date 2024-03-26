import { useEffect, useState } from "react";
import React from "react";
import CategorySquare from "./CategorySquare";

const ColumnCategories = ({categories}) => {
    const [columns, setColumns] = useState([]);
    const [grids, setGrids] = useState([]);
/*
    useEffect(() => {
        const initializeColumns = async () => {
            for(var i = 0; i < 3; i++){
                grids.push(
                    <CategorySquare text={columns[i]}/>
                )
            }

            setColumns(colCats);
        }
        
        initializeColumns();
    }, []);
    */


    return(
        <div className="column-categories" style={{width: "fit-content", paddingRight: '10px'}}>
            <CategorySquare/>
            {categories?.map((category) => {
                return <CategorySquare text={category}/>
            })}
        </div>
    )
}

export default ColumnCategories;