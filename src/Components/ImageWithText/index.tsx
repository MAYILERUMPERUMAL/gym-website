import { url } from 'inspector'
import React, { FC } from 'react'
import { ImageWithTextProps } from './interface'
import './imageWithText.css'
const ImageWithText:FC<ImageWithTextProps>=({imge})=>{
    return(
<div className='d-flex   my-2 mx-3 '>
    <img src={imge}  style={{height:55,width:65}}/>
    <div className='box-css'>
    <h5>Strength Training For Muscle Building</h5>
<p>Train with the best experts in bodybuilding field.</p>
    </div>
</div>
    )
}

export {ImageWithText}