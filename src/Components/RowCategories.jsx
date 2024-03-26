import { useEffect, useState } from "react";
import React from "react";
import CategorySquare from "./CategorySquare";

const RowCategories = ({categories}) => {
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
        <div className="column-categories" style={{ width: "fit-content", display: "flex"}}>
            {categories?.map((category) => {
                return <CategorySquare text={category}/>
            })}
        </div>
    )
}

export default RowCategories;