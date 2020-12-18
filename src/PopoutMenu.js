import React from 'react'

const PopoutMenu = (props) => {
    return (
        <div className="popOutMenu">
            {props.children}
        </div>
    )
}

export default PopoutMenu
