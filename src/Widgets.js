import React from 'react'
import "./Widgets.css"

import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgetsClass">

            {/* Search Component */}
            <div className="widgets__input">
                <SearchIcon className="widgets_searchicon"/>
                <input className="searchbar" placeholder="Search Twitter" type="text"></input>
            </div>   

            {/* News Component */}
            <div className="widgets_widgetholder">
                <h2 className="headingName">What's happening</h2>
                <iframe background-color="black" width="250" height="350" src="https://rss.app/embed/v1/8DKe8coZXfgVEi3F" frameBorder="0"></iframe>
            </div>

        </div>
    )
}

export default Widgets
