import React from "react";

function FilterTabItem({name, onclick}){
    return(
        <div className="filterTabItemContainer">
            <input type="checkbox" name={name} onClick={(e)=>onclick(e)}/>
            <label htmlFor={name}>{name}</label>
        </div>
    )
}
export default FilterTabItem