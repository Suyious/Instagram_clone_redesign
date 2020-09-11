import React from 'react';
import "./Sidebar.css";

function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebar_flex">
                {props.children}
            </div>
        </div>
    )
}

export default Sidebar
