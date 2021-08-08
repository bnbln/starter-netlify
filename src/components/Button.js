import React from "react";
import { Link } from 'gatsby'

function Button(props) {
    return(
        <Link to={props.to} className={props.variant ? "button "+ props.variant + "" : "button primary"}>
            {props.children}
        </Link>
        
    )
}

export default Button