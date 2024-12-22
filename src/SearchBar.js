import React from  "react";
import './SearchBar.css';
 
 function SearchbarComponent() {
    return (
        <div className="searchbar-container">
        <div className="searchbar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
        </div>
    </div>
    );
}

export default SearchbarComponent;