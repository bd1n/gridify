import React, { useEffect, useMemo, useState } from "react";
import { getColCategory, getRowCategory, setEnum, setOrder, getEnum } from "../CategoryEnum.js";
import "../Styles/categories.css";
const Categories = () => {
    const [loading, setLoading] = useState(true);
    const [colCategories, setColCategories] = useState([]);
    const [rowCategories, setRowCategories] = useState([]);


    useEffect(() => {
        const fetchEnum = async () => {
            setEnum();
            setOrder();
            var categories = getEnum();
            for(var i = 1; i <= 6; i++){
                switch(i){
                    case 1:
                        rowCategories.push("Within " + categories[i] + " Genre");
                        break;
                    case 2:
                        rowCategories.push("More than " + categories[i] + " Followers");
                        break;
                    case 3:
                        rowCategories.push("Begins with letter " + categories[i]);
                        break;
                    case 4:
                        colCategories.push("Studio debut in the " + categories[i] + "'s");
                        break;
                    case 5:
                        colCategories.push("Most recently released an album in " + categories[i]);
                        break;
                    default:
                        colCategories.push("Name contains " + categories[i] + " words");
                        break;
                }
            }
            setLoading(false);
        }
        fetchEnum();
    }, []);


    return(
        <div>
            <div className="row-categories">
                {rowCategories.map(category => {
                    return <div style={{height: '40px', padding: '15px'}} key={category}>{category}</div>
                })}
            </div>
            <div className="col-categories">
                <div className="columns">
                    {colCategories.map(category => {
                        return <div style={{maxWidth: '30px', height: '40px', display: 'inline-block', padding: '15px', paddingLeft: '8vh', paddingRight: '8vh'}} key={category}>{category}</div>
                    })}
                </div>
            </div>

        </div>
    )
}

export default Categories;