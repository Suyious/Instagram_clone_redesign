import React from 'react';

function Messagecard({username, title}) {
    return (
        <div className="messagecard">
            <h3>{username}</h3>      
            <h4>{title} <span>4h</span></h4>           
        </div>
    )
}

export default Messagecard
