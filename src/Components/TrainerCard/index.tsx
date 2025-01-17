import React, { FC } from 'react';
import { TrainerCardProps } from './interface';
import './TrainerCard.css';

const TrainerCard: FC<TrainerCardProps> = ({image,trainerName}) => {
  return (
    <div  className="trainer-card-container">
      <div data-aos="fade-up" className="trainerImage1" style={{
         backgroundImage: `url(${image})`,
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'cover',
        width:'100%',
         position: 'relative'
      }}>
        <div className="bnbnbn">
        <div className="hover-view">
        <div  className='d-flex  justify-content-center  kkjkjkj'>
  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/20/20837.png'} className='SocialIconFaceboo' /></div>
  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/5968/5968958.png'} className='SocialIconFaceboo' /></div>

  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/717/717392.png'} className='SocialIconFaceboo' /></div>

</div>
        </div>

          <div className="nhhhhh">
            <h4 className="TrainerText">{trainerName}</h4>
            <h6 className="TrainerText">Trainer</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TrainerCard };
