import React from "react"

/*
* This class implements a component for a button
*
* @param props.className    Costum classes to append to default ones
* @param props.style        Object with inner styles
* @param props.title        The button title (shown on hover)
* @param props.val          The button text
* @param props.action       What to do when clicked
* @param props.dataCostum   Costumized field
*/
function Button(props) {
    return ( 
        <button 
            className={props.className}
            style={props.style}
            title={props.title}
            onClick={props.action}
            dangerouslySetInnerHTML={{ __html: props.val }}
            data-costum={props.dataCostum}
        >
        </button>
    )
}

export default Button