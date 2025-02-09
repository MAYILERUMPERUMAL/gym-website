import React,{FC} from 'react'
import {ClientRatingsCardProps} from './interface'
import  './RatingsCard.css'
import { TitleSubtitle } from '../TitleSubtitle'
const ClientRatingsCard:FC<ClientRatingsCardProps>=()=>{
    let RatingStar=[1,1,1,1,1]
    return(
<div className='container my-5'>
<div className='row'>
<div className="col ">
<div className="d-flex align-items-center gap-2">
<div className='RatingsClientImage'/>
<div className=' lklm d-flex'>
    <div className=''>
   <TitleSubtitle Heading='John Wisley' subtitle='Designer'/>
    </div>
<div className='d-flexd frt'>
    {RatingStar.map(()=>{
return(
    <img src={'https://cdn-icons-png.flaticon.com/128/1828/1828884.png'} style={{height:15,width:15}}/>
)
    })}
</div>

</div>
</div>
    <div>
        <p className='lklkllk cdfa'>The gym is not merely a facility filled with machines and weights; it is a community of like-minded warriors, each on their unique journey toward self-improvement, where every drop of sweat is a testament to resilience and every rep is a step toward a healthier, stronger future.</p>
    </div>
    </div>
    <div className="col">
    </div>
</div>
</div>
    )
}

export {ClientRatingsCard}