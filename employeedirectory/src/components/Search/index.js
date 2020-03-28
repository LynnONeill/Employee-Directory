import React from "react";
import "./style.css";

function Search() {
    return (
        <div className = "search">
            <div className = "input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    Search
                </span>
            </div>
                <input 
                className="form-control mr-sm-2" 
                type="Search"
                placeholder="name"
                aria-label="Search"
                />
            </div>
        </div>
    );
}


export default Search