import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <p>And this shall be my navbar.  It will house my searches</p>
            <input
                className = "input-group-prepend"
            />
            <button
                className ="navbar-toggler"
                type="button"
            />
        </nav>
    );
}

export default Navbar;