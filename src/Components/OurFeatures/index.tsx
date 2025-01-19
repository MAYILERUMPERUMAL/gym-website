import React,{FC,useState} from 'react'
import {OurFeaturesProps} from './interface'
import './ourFeature.css'
import { GoArrowRight } from 'react-icons/go'
const OurFeature:FC<OurFeaturesProps>=({image,title,subTitlle})=>{
    console.log('image',image)
    return( 
        <div  className='featureCard-container '>
 <div  className="featureCardImage1"
 style={{
    backgroundImage:`url(${image})`
 }}
 ></div>
      <div className='hjhjhhjvv'>
<div className='mkl'>
<h3 className='titleHeading'>{title}</h3>
<p className='titleHeading'>{subTitlle}</p>
<div className=' ourFeatureSecondarybutton'>
    <label className='readMoreButton titleHeading'>Read more <GoArrowRight/></label>
  
</div>
</div>
      </div>
        </div>
    )
}

export {OurFeature}