import React,{useEffect,FC}   from 'react'
import {PricingCardProps} from './interface'
import './PricingCard.css'
const PricingCard:FC<PricingCardProps>=({CardTitLe,CardSubTitle,monthlyPricing,ptPricing})=>{
    return(
        <div className='pricingCard'>
<div className='py-2 bootomBarContainer'>
  <h2 className='textColor'>{CardTitLe}</h2>
  <h3 className='websitePrimaryColor'>{CardSubTitle}</h3>
</div>
<div className='row '>
 <span className='py-3 textColor'>{`Weight Training + Cardio`}</span>
 <span className='textColor'>{` ₹${monthlyPricing}`}</span>

</div>
<div className='row py-4'>
 <span className='py-2 secondaryText'>{`Monthly + Cardio + Personal Trainer`}</span>
 <span className='py-2 secondaryText'>{` ₹${monthlyPricing+ptPricing}`}</span>

</div>
<div className='py-3'>
<button className="btn btn-danger my-2 my-sm-0 px-4 py-3 " type="submit">JOIN US</button>

</div>

</div>
    )
}

export {PricingCard}