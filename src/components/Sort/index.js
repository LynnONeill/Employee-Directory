import React from "react";

function Sort(props) {
    return(
        <button
        name="name"
        className="btn btn-outline-secondary mb-3 mx-auto"
        type="button"
        onClick={props.handleSort}
        >
            Sort by Last Name
         </button>
    );
}

export default Sort;