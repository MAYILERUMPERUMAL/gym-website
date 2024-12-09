import React,{FC} from 'react'
import {TrainerCardProps} from './interface'
import  './TrainerCard.css'
const TrainerCard:FC<TrainerCardProps>=()=>{
    return(
        <div>
            <div className='trainerImage1 mx-5'>
<div className='Social'>
<div  className='d-flex  justify-content-center'>
  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/20/20837.png'} className='SocialIconFaceboo' /></div>
  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/5968/5968958.png'} className='SocialIconFaceboo' /></div>

  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/717/717392.png'} className='SocialIconFaceboo' /></div>

</div>
</div>
</div>
{/* <img  className='trainerImage' src={'https://img.freepik.com/premium-photo/beautiful-athletic-woman-smiling-fitness-trainer-gym-sportswoman-body-building-work-out_826801-5780.jpg'}/> */}
<h3 className='TrainerText'>Joel</h3>
<h6 className='TrainerText'>Traine</h6>

        </div>
    )
}

export {TrainerCard}