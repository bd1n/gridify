import React from "react";
import "../Styles/categorySquare.css";

const CategorySquare = ({text}) => {

    return (
        <div className="category-square">
            <div className="cat-text">
                {text}
            </div>
        </div>
    )
}

export default CategorySquare;