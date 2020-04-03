import React from "react";
import "./style.css";
import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function Search(props) {

    return (
        <form className="search">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        Search by name
                </span>
                </div>
                <input
                    value={props.search}
                    onChange={props.handleSearchChange}
                    className="form-control mr-sm-2"
                    name="name"
                    type="text"
                    placeholder="first name"
                    aria-label="Search"
                />
                <button
                    // value={props.handleSearchChange}
                    name="name"
                    type="button"
                    onClick={props.handleClick}
                >
                    Search
                </button>
         
            </div>
        </form>
    );
}


export default Search