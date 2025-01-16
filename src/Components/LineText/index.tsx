import React,{FC} from "react";
import {LineTextProps} from './interface'
const LineText:FC<LineTextProps>=({title})=>{
    return(
        <div className="container">
{/* <div className="lineSeperator"/> */}

<h6>{title}</h6>
        </div>
    )
}

export {LineText}