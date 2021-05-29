import React from "react";

function Header() {
    return (
        <div className="jumbotron text-center" style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}>
            <div className="container text-dark">
                <h1>Google Books Search</h1>
                <h2>Search for and save Books of Interest</h2>
            </div>
        </div>
    );
}

export default Header;