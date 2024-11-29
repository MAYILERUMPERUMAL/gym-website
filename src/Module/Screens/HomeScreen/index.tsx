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
  <a className="navbar-brand">    <img src={'https://e7.pngegg.com/pngimages/849/757/png-clipart-mr-olympia-physical-fitness-fitness-centre-bodybuilding-bench-bodybuilding-physical-fitness-hand-thumbnail.png'} className='imageStyle'/>
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
<div className='offerSection container-fluid  '>
  <div className='row '>
    
  <div className='col-0  col-md-7 overLayContent'>
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
  <div className='row '>
<div className='col-md-4 col-12 d-flex justify-content-center my-2'>
<div className='pricingCard'>
<div className='py-2 bootomBarContainer'>
  <h2 className='textColor'>Begginer</h2>
  <h3 className='websitePrimaryColor'>$42</h3>
</div>
<div className='row '>
 <span className='py-3 textColor'>24h unlimited access</span>
 <span className='textColor'>Trainer advice</span>

</div>
<div className='row py-4'>
 <span className='py-2 secondaryText'>Locker + Bathroom</span>
 <span className='py-2 secondaryText'>Personal Trainer</span>

</div>
<div className='py-3'>
<button className="btn btn-danger my-2 my-sm-0 px-4 py-3 " type="submit">JOIN US</button>

</div>

</div>
</div>
<div className='col-md-4 col-12 d-flex justify-content-center my-2'>
<div className='pricingCard'>
<div className='py-2 bootomBarContainer'>
  <h2 className='textColor'>Expert</h2>
  <h3 className='websitePrimaryColor'>$52</h3>
</div>
<div className='row '>
 <span className='py-3 textColor'>24h unlimited access</span>
 <span className='textColor'>Trainer advice</span>

</div>
<div className='row py-4'>
 <span className='py-2 secondaryText'>Locker + Bathroom</span>
 <span className='py-2 secondaryText'>Personal Trainer</span>

</div>
<div className='py-3'>
<button className="btn btn-danger my-2 my-sm-0 px-4 py-3 " type="submit">JOIN US</button>

</div>

</div>
</div>
<div className='col-md-4 col-12 d-flex justify-content-center my-2'>
<div className='pricingCard'>
<div className='py-2 bootomBarContainer'>
  <h2 className='textColor'>Pro</h2>
  <h3 className='websitePrimaryColor'>$62</h3>
</div>
<div className='row '>
 <span className='py-3 textColor'>24h unlimited access</span>
 <span className='textColor'>Trainer advice</span>

</div>
<div className='row py-4'>
 <span className='py-2 secondaryText'>Locker + Bathroom</span>
 <span className='py-2 secondaryText'>Personal Trainer</span>

</div>
<div className='py-3'>
<button className="btn btn-danger my-2 my-sm-0 px-4 py-3 " type="submit">JOIN US</button>

</div>

</div>
</div>
  </div>
</div>
  </div>
 
</div>
<div className='container-fluid trainerSection'>
  <div className=''>
    <h1 className='trainerTextCol'>OUR TRAINER'S</h1>
    <p className='paragraph'>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>

  </div>
<div className='row mx-4 mt-5'>
<div className='col-md-4 col-12 '>
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
<div className='col-md-4 col-12'>
<div className='trainerImage2 mx-5'>
<div className='Social'>
<div  className='d-flex  justify-content-center'>
  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/20/20837.png'} className='SocialIconFaceboo' /></div>
  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/5968/5968958.png'} className='SocialIconFaceboo' /></div>

  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/717/717392.png'} className='SocialIconFaceboo' /></div>

</div>
</div>
</div>
{/* <img  className='trainerImage' src='https://t3.ftcdn.net/jpg/06/45/17/94/360_F_645179444_EtQDcQw5Mcyv1MSH25K5FrEkb3LfH5Vk.jpg'/> */}
<h3 className='TrainerText'>Jack rock</h3>
<h6 className='TrainerText'>Traine</h6>

</div>
<div className='col-md-4 col-12'>
<div className='trainerImage3 mx-5'>
<div className='Social'>
<div  className='d-flex  justify-content-center'>
  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/20/20837.png'} className='SocialIconFaceboo' /></div>
  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/5968/5968958.png'} className='SocialIconFaceboo' /></div>

  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/717/717392.png'} className='SocialIconFaceboo' /></div>

</div>
</div>
</div>
{/* <img  className='trainerImage' src={'https://img.freepik.com/free-photo/portrait-handsome-man_23-2150770957.jpg'}/> */}
<h3 className='TrainerText'>Rocky</h3>
<h6 className='TrainerText'>Traine</h6>

</div>
</div>
</div>
<div className='container-fluid TrainingSesion'>
<div className="row row-cols-2">
    <div className="col-12 col-md-6 imageBackground1">
      <div>
      <h2 className='trainerTextCol'>Functional Training</h2>
<p>Functional training focuses on improving strength, balance, Train smarter to build a resilient, stronger body that thrives in everyday life.</p>
<button className="btn btn-danger my-2 my-sm-0 px-4 py-3 " type="submit">Find More</button>

      </div>
    </div>
    <div className="col-12 col-md-6 imageBackground2">
<h2 className='trainerTextCol'>Fitness BootCamp</h2>
<p>Fitness bootcamps provide high-intensity workouts that build strength, endurance, and agility for both men and women.</p>
<button className="btn btn-danger my-2 my-sm-0 px-4 py-3 " type="submit">Find More</button>

    </div>
    <div className="col-12 col-md-6 imageBackground3">
<h2 className='trainerTextCol'>Body transformation</h2>

    </div>
    <div className="col-12 col-md-6 imageBackground4">
<h2 className='trainerTextCol'>Cardio training</h2>

    </div>
  </div>
</div>
</div>
    )
}

export {HomeScreen}