import React, { FC } from 'react';
import { PricingCardProps } from './interface';
import './PricingCard.css';

const PricingCard: FC<PricingCardProps> = ({ CardTitLe, CardSubTitle, monthlyPricing, ptPricing, ImageUrl,forFees }) => {
    return (
        <div  className='pricing-block'>
            <div 
            data-aos="fade-up"
                className='inner-box'
                style={{
                    backgroundImage: `url(${ImageUrl})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height:'100%'
                }}
            >
                {/* Background Overlay */}
              
                {/* <div className='content'> */}
                    <h4 className='mainTitle fontyyy text-gap'>{CardTitLe}</h4>
                    <div className='title nmnmn text-gap'>{CardSubTitle}</div>
                    <div className='price'>
                        <h6 className='textdd fonnn'>{`For ${forFees}`}</h6>
                        <span className='PriceText text-gap'>{`₹${monthlyPricing}`}</span>
                    </div>
                    <div className='PriceFeatures'>
                        <ul className='PriceFeature1'>
                            <li style={{ display: 'flex', marginTop: '15px' ,color:'white',alignItems:'center'}}>
                                <img
                                    src={'https://cdn-icons-png.flaticon.com/128/16115/16115554.png'}
                                    alt='Tick Icon'
                                    className='tickImageIcon'
                                />
                                Weight training
                            </li>
                            <li style={{ display: 'flex', marginTop: '15px' ,color:'white',alignItems:'center'}}>
                                <img
                                    src={'https://cdn-icons-png.flaticon.com/128/16115/16115554.png'}
                                    alt='Tick Icon'
                                    className='tickImageIcon'
                                />
                                Cardio
                            </li>
                            <li style={{ display: 'flex',color:'white', marginTop: '15px' ,alignItems:'center'}}>
                                <img
                                    src={'https://cdn-icons-png.flaticon.com/128/16115/16115554.png'}
                                    alt='Tick Icon'
                                    className='tickImageIcon'
                                />
                                Personal training
                            </li>
                            <li style={{ display: 'flex',color:'white', marginTop: '15px' ,alignItems:'center'}}>
                                <img
                                    src={'https://cdn-icons-png.flaticon.com/128/16115/16115554.png'}
                                    alt='Tick Icon'
                                    className='tickImageIcon'
                                />
                                Diet Plan
                            </li>
                        </ul>
                    </div>
                    <div className='buttonParentcontainer  my-sm-0 px-0 py-1'>
                      
                        <button
                        className="btn btn-outline-light my-2 my-sm-0 px-4 py-3  d-md-block  kjkjkj text-gap"
                        type="submit"
                    >
                    Select Slot
                    </button>
                        
                   
                    </div>
                  
                {/* </div> */}
                </div>

                {/* Text and Content */}
               
          
        </div>
    );
};

export { PricingCard };
