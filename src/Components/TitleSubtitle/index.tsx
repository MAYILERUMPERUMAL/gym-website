import React,{FC} from 'react'
import {TitleSubtitleprops} from './interface'
import './TitleSubtitle.css'
const TitleSubtitle:FC<TitleSubtitleprops>=({Heading,subtitle})=>{
    return(
        <div className=' titleContainer container '>
            <h1 className='headingStyle'>{Heading}</h1>
            <span className='subTitleStyle'>{subtitle}</span>
        </div>
    )
}
export {TitleSubtitle}