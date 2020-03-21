import React from "react";
import SearchName from "./SearchName.js";

import "../styles/Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <button
        type="button"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
 
      </button>
      <div className="collapse navbar-collapse row" id="navbarNav">

        <div className="search-area col-4">
          <SearchName />
        </div>
      </div>
    </nav>
  );
}
export default Nav;
