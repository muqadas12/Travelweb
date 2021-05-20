import React from 'react'
import "./Button.css";
import {Link} from "react-router-dom"

const STYLES=["btn--primary","btn--outline"]
const SIZES=["btn--medium","btn--large"]
const Button=({children,buttonStyles,buttonSizes,type,onClick})=>{

    const CheckbuttonStyles =STYLES.includes(buttonStyles)? buttonStyles : STYLES[0];
    const CheckbuttonSizes=SIZES.includes(buttonSizes) ? buttonSizes : SIZES[0];

    return (
        <Link to="/sign-up" className="btn-mobile">
            <button className={`btn ${CheckbuttonStyles} ${CheckbuttonSizes}`}
            onClick={onClick}
            type={type}
            
            >{children}</button>
        </Link>
    )
}

export default Button
