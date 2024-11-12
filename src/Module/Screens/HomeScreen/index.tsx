import React,{FC} from 'react'
import { HomeProps } from './interface'
import  './HomeScreen.css'
import { Button } from '../../../Components'
const HomeScreen:FC<HomeProps>=()=>{
    return(
<div className='appConatiner'>
    
        <div className='Container1'>

  
    
   <div className='Overlay'>
   

    <nav className="navbar navbar-light   justify-content-between mx-5 NavBarStyle ">
  <a className="navbar-brand">    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM3kn0XSlMbnnK3jjc0O0ZoXblmYXxhHo-aw&s'} className='imageStyle'/>
  </a>
  <div className='container  d-flex ListStyle col-6'>
        <a className='ListTag'>HOME</a>
        <a className='ListTag'>ABOUT</a>
        <a className='ListTag'>PRICING</a>
        <a className='ListTag'>GALLERY</a>
        <a className='ListTag'>SUBSCRIBE</a>
        

    </div>
  <form className="form-inline">
    {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
    <button className="btn btn-outline-danger my-2 my-sm-0 px-5 py-3 " type="submit">JOIN US</button>
  </form>
</nav>
<div className='Container5'>
  <div className='Container6'>
  <h2 className='mainText'>BUILD UP YOUR</h2>
  <h1 className='mainText1'>BODY SHAPE</h1>
  </div>

<span className='css-y41f37'>What Hurts Today Makes You Strong Tommorow</span>
<button className=' my-2 my-sm-0 px-5 py-0.2 fontStyleButton  rounded'>JOIN US</button>
</div>

</div>

</div>
<div className="container-fluid contentContainer overflow-hidden">
  <div className="row">
    <div className="col-12 bg-secondary p-0 overflow-hidden col-md-6">
  <div className='containerImageStyle1'>
<div className='containerImageStyle1child'>
  <h1 className='text-white'>For Women</h1>
  <p className='paragraph'>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>
  <button className="btn btn-danger my-2 my-sm-0 px-5 py-3 " type="submit">JOIN US</button>

</div>
  </div>
    </div>
   
    <div className="col-12 bg-danger p-0 overflow-hidden col-md-6">
   <div className='containerImageStyle2'>
   <div className='containerImageStyle1child'>
  <h1 className='text-white'>For Guys</h1>
  <p className='paragraph'>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>
  <button className="btn btn-danger my-2 my-sm-0 px-5 py-3 " type="submit">JOIN US</button>


</div>
   </div>
  
    </div>
  </div>
 
</div>
<div className='featureSection'>
  <div className='featurePadding'>
  <div className='featursStyle px-3 mx-2'>
    <h1 className='text-white'>OUR FEATURES</h1>
    <p className='text-white paragraphText'>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>
  </div>
  <div className='container-fluid containerFeatureicon'>
  <div className='row'>
<div className='col-md-3 col-12 col-sm-6'>
  <div className='featureWrapper'>
  <img src={'https://gymbulldozer.netlify.app/static/media/features1.6205017e.svg'} className=''/>
<h1 className='featurefonts'>Weightlifting</h1>
<p className='featureParagraphfont'>There are many variations of passages of lorem Ipsum available.</p>
  </div>
</div>
<div className='col-md-3 col-12 col-sm-6'>
  <div className='featureWrapper'>
<img src={'https://gymbulldozer.netlify.app/static/media/features2.d0f9843c.svg'} className=''/>

    <h1 className='featurefonts'>Specific Muscles</h1>
    <p className='featureParagraphfont'>There are many variations of passages of lorem Ipsum available.</p>

  </div>
  
</div>
<div className='col-md-3 col-12 col-sm-6'>
  <div className='featureWrapper'>
  <img src={'https://gymbulldozer.netlify.app/static/media/features3.c4c60cd2.svg'} className=''/>
  
  <h1 className='featurefonts'>Flex Your Muscles</h1>
      <p className='featureParagraphfont'>There are many variations of passages of lorem Ipsum available.</p>
  </div>

</div>
<div className='col-md-3 col-12 col-sm-6'>
  <div className='featureWrapper'>
  <img src={'https://gymbulldozer.netlify.app/static/media/features4.f8adc4e0.svg'} className=''/>
  
  <h1 className='featurefonts'>Cardio Exercises</h1>
      <p className='featureParagraphfont'>There are many variations of passages of lorem Ipsum available.</p>
  </div>

</div>
  </div>

</div>
  </div>
 
</div>
<div className='offerSection container-fluid'>
  <div className='row'>
  <div className='col-0 my-5 col-md-7'>
  <div>
  <h1 className='offerSectionText'>A BIG OFFER FOR<br/>THIS SUMMER</h1>

  </div>
  <div>
    <h2 className='offerSectionText1'>50% Off</h2>
  </div>
  <div>
  <p className='text-white paragraphText'>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>

  </div>
  <div>
  <button className="btn btn-danger my-2 my-sm-0 px-5 py-3 " type="submit">JOIN US</button>

  </div>
</div>
<div className='col-12  col-md-5'>
  
</div>
  </div>

</div>
<div className='featureSection'>
  <div className='featurePadding'>
  <div className='featursStyle px-3 mx-2'>
    <h1 className='text-white'>OUR FEATURES</h1>
    <p className='text-white paragraphText'>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>
  </div>
<div className='container-fluid'>
  <div className='row'>
<div className='col-md-4 col-12'>
<div className='pricingCard'>
<div>
  <h2>Begginer</h2>
  <h3>42K</h3>
</div>
</div>
</div>
<div className='col-md-4 col-12'>
<div className='pricingCard'>
<div>
  <h2>Expert</h2>
  <h3>52K</h3>
</div>
</div>
</div>
<div className='col-md-4 col-12'>
<div className='pricingCard'>
<div>
  <h2>Pro</h2>
  <h3>62K</h3>
</div>
</div>
</div>
  </div>
</div>
  </div>
 
</div>
</div>
    )
}

export {HomeScreen}