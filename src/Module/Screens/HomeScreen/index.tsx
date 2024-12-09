import React,{FC,useEffect,useState} from 'react'
import { HomeProps } from './interface'
import  './HomeScreen.css'
import { Button, PricingCard, TextInput, TrainerCard } from '../../../Components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const HomeScreen:FC<HomeProps>=()=>{
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    AOS.init({
        duration: 1200, // Animation duration (in milliseconds)
        offset: 300,    // Offset (in pixels)
        easing: 'ease-in-sine', // Easing type
        once: false, // Whether animation should happen only once
    });
}, []);
const options = {
  autoplay: false, // Enable autoplay
  autoplayTimeout: 3000, // Set autoplay interval to 1 second (1000ms)
  autoplayHoverPause: false, // Prevent pausing on hover
  nav: false, // Hide navigation arrows
  dots: false, // Hide pagination dots
  animateOut: 'fadeOut', // Fade-out animation for transitions
  items: 1, // Show one item at a time
  loop: true, // Enable infinite looping
};
const slides = [
  { id: 1, image: 'https://images.alphacoders.com/108/thumb-1920-1080977.jpg' },
  { id: 2, image: 'https://wallpapercave.com/wp/wp13300652.jpg' },
];
 
    return(
<div className='appConatiner'>
    
<nav className="navbar navbar-light   NavBarStyle">
                <a className="navbar-brand">
                    <img
                        src="https://e7.pngegg.com/pngimages/849/757/png-clipart-mr-olympia-physical-fitness-fitness-centre-bodybuilding-bench-bodybuilding-physical-fitness-hand-thumbnail.png"
                        className="imageStyle"
                        alt="logo"
                    />
                </a>
                <div className="container d-flex ListStyle col-6">
                    <a className="ListTag d-none d-md-block">HOME</a>
                    <a className="ListTag d-none d-md-block">ABOUT</a>
                    <a className="ListTag d-none d-md-block">PRICING</a>
                    <a className="ListTag d-none d-md-block">GALLERY</a>
                    <a className="ListTag d-none d-md-block">SUBSCRIBE</a>
                </div>
                <form className="form-inline">
                    <button
                        className="btn btn-outline-danger my-2 my-sm-0 px-5 py-3 d-none d-md-block"
                        type="submit"
                    >
                        JOIN US
                    </button>
                </form>

                {/* Toggle Button */}
                <button className="navbar-toggler" type="button" onClick={toggleDrawer}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Drawer */}
                <div className={`side-drawer ${drawerOpen ? 'open' : ''}`}>
                    <div className="Overlay">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    HOME
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    ACCOUNTS
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    ABOUT
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Overlay for closing drawer */}
                {drawerOpen && <div className="backdrop" onClick={toggleDrawer}></div>}
            </nav>

            <OwlCarousel className="owl-theme" {...options}>
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="item"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            margin:0
                          
                        }}
                    >
                        <div className="Overlay1">
<div className='container'>
  <div className='row'>
    <div className='col-lg-6 '>
    <div className='HomeContent1'>
    <label className='textContentcolor'>---WELCOME TO WEIDER GYM</label>
<h1 className='textColor textSixe'>READY TO TRAIN</h1>
<h1 className='textColor textSixe'>YOUR BODY</h1>
<button
                        className="btn btn-outline-danger my-2 my-sm-0 px-5 py-3 d-none d-md-block"
                        type="submit"
                    >
                        JOIN US
                    </button>
    </div>
    </div>
    {/* <div className='col-6 '>

    </div> */}
  {/* <div className='HomeContent'>
    <div className='HomeContent1'>
    <label className='textContentcolor'>---Welocome to weider gym</label>
<h1 className='textColor textSixe'>READY TO TRAIN</h1>
<h1 className='textColor textSixe'>YOUR BODY</h1>
<button
                        className="btn btn-outline-danger my-2 my-sm-0 px-5 py-3 d-none d-md-block"
                        type="submit"
                    >
                        JOIN US
                    </button>
    </div>

                          </div> */}
  </div>

</div>
                        
                        </div>
                    </div>
                ))}
            </OwlCarousel>
<div className='Section2 container-fluid p-5 contColor'>
<div className='row gx-5'>
<div className='col-lg-5 mb-5 mb-lg-0'>
<div className='position-relative h-100' style={{minHeight:'500px'}}>
<img src={'https://c4.wallpaperflare.com/wallpaper/440/786/339/hood-muscle-muscle-muscles-wallpaper-preview.jpg'} 
className=' w-100 h-100 rounded'
style={{objectFit:'cover'}}
/>
</div>
</div>
<div className='col-lg-7 aboutContent1'>
<div className='AboutContainer'>
  <h5 className='text-start textContentcolor'>About Us</h5>
  <h2 className='text-start textColor kjhkhk'>WELCOME TO WEIDER</h2>
  <h5 className='text-start marginBottom TextLineHeight textColor lllll'>At Weider, we focus on building champions by offering tailored programs for bodybuilding competitions, weight gain, weight loss, and overall fitness.</h5>
  <p className='text-start marginBottom TextLineHeight contentParagraph'>Weider is equipped with cutting-edge facilities, guided by experienced trainers and supportive staff, including lady trainers for women. Whether your aim is to sculpt your physique, boost your strength, or improve your health, Weider provides the tools, expertise, and community to help you succeed.</p>
  <div className='aboutUsContainer py-4'>
    <div className='row mx-4'>
      <div className='col-6'>
        <div className=' chooseToggle' >
        <a>ABOUT US</a>

        </div>

      </div>
      <div className='col-6'> 
        <div className=' chooseToggle'>
        <a>WHY CHOOSE US</a>

        </div>

      </div>
    </div>
<p className='text-start mx-5 py-3 textColor textFontParagraph'>
At Weider, we are dedicated to creating champions and transforming lives. Our gym offers specialized training for bodybuilding competitions, weight gain progress, and effective weight loss programs. With expert personal trainers and supportive lady trainers for women, we ensure a personalized approach for every individual. Our state-of-the-art equipment and motivating environment are designed to help you achieve your fitness goals. Join Weider and embark on a journey to unleash your full potential.
</p>
  </div>
</div>
</div>
</div>
</div>
<div className="container-fluid contentContainer overflow-hidden">
  <div className="row">
    <div className="col-12 bg-secondary p-0 overflow-hidden col-md-6">
  <div className='containerImageStyle1'>
<div className='containerImageStyle1child'>
  <h1 className='text-white'>For Women</h1>
  <p className='paragraph'>"Empower your fitness journey with tailored workouts designed to enhance strength, flexibility, and confidence for women.</p>
  <button className="btn btn-danger my-2 my-sm-0 px-5 py-3 " type="submit">JOIN US</button>

</div>
  </div>
    </div>
   
    <div className="col-12 bg-danger p-0 overflow-hidden col-md-6">
   <div className='containerImageStyle2'>
   <div className='containerImageStyle1child'>
  <h1 className='text-white'>For Guys</h1>
  <p className='paragraph'>Elevate your strength, endurance, and physique with specialized training programs designed exclusively for men.</p>
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
<p className='featureParagraphfont'>Unleash your strength and build muscle with our cutting-edge weightlifting features.</p>
  </div>
</div>
<div className='col-md-3 col-12 col-sm-6'>
  <div className='featureWrapper'>
<img src={'https://gymbulldozer.netlify.app/static/media/features2.d0f9843c.svg'} className=''/>

    <h1 className='featurefonts'>Specific Muscles</h1>
    <p className='featureParagraphfont'>Focus on building specific muscles with our expertly designed gym features.</p>

  </div>
  
</div>
<div className='col-md-3 col-12 col-sm-6'>
  <div className='featureWrapper'>
  <img src={'https://gymbulldozer.netlify.app/static/media/features3.c4c60cd2.svg'} className=''/>
  
  <h1 className='featurefonts'>Flex Your Muscles</h1>
      <p className='featureParagraphfont'>Flex your potential with our all-new muscle-focused gym features.</p>
  </div>

</div>
<div className='col-md-3 col-12 col-sm-6'>
  <div className='featureWrapper'>
  <img src={'https://gymbulldozer.netlify.app/static/media/features4.f8adc4e0.svg'} className=''/>
  
  <h1 className='featurefonts'>Cardio Exercises</h1>
      <p className='featureParagraphfont'>Elevate your endurance with our dynamic cardio exercise features.</p>
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
    <h1 className='text-white'>OUR PRICING</h1>
    <p className='text-white paragraphText'>Achieve your fitness goals with flexible membership plans tailored to suit your needs and budget.</p>
  </div>
<div className='container-fluid'>
  <div className='row '>
<div className='col-md-4 col-12 d-flex justify-content-center my-2'>
<PricingCard CardTitLe={'Montly'} CardSubTitle={'Subscription'} monthlyPricing={1000} ptPricing={5000}/>
</div>
<div className='col-md-4 col-12 d-flex justify-content-center my-2'>
<PricingCard CardTitLe={'Quaterly'} CardSubTitle={'Subscription'} monthlyPricing={3500} ptPricing={5000}/>
</div>
<div className='col-md-4 col-12 d-flex justify-content-center my-2'>
<PricingCard CardTitLe={'Yearly'} CardSubTitle={'Subscription'} monthlyPricing={10000} ptPricing={5000}/>
</div>
  </div>
</div>
  </div>
 
</div>
<div className='container-fluid trainerSection'>
  <div className=''>
    <h1 className='trainerTextCol'>OUR TRAINER'S</h1>
    <p className='paragraph'>Meet our expert trainers, dedicated to guiding you every step of the way on your fitness journey.</p>

  </div>
<div className='row mx-4 mt-5'>
<div className='col-md-4 col-12  '>
<TrainerCard/>
</div>
<div className='col-md-4 col-12'>
<TrainerCard/>
{/* <div className='trainerImage2 mx-5'>
<div className='Social'>
<div  className='d-flex  justify-content-center'>
  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/20/20837.png'} className='SocialIconFaceboo' /></div>
  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/5968/5968958.png'} className='SocialIconFaceboo' /></div>

  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/717/717392.png'} className='SocialIconFaceboo' /></div>

</div>
</div>
</div> */}
{/* <img  className='trainerImage' src='https://t3.ftcdn.net/jpg/06/45/17/94/360_F_645179444_EtQDcQw5Mcyv1MSH25K5FrEkb3LfH5Vk.jpg'/> */}


</div>
<div className='col-md-4 col-12'>
<TrainerCard/>
{/* <div className='trainerImage3 mx-5'>
<div className='Social'>
<div  className='d-flex  justify-content-center'>
  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/20/20837.png'} className='SocialIconFaceboo' /></div>
  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/5968/5968958.png'} className='SocialIconFaceboo' /></div>

  <div className='roundedDiv'><img src={'https://cdn-icons-png.flaticon.com/128/717/717392.png'} className='SocialIconFaceboo' /></div>

</div>
</div>
</div> */}
{/* <img  className='trainerImage' src={'https://img.freepik.com/free-photo/portrait-handsome-man_23-2150770957.jpg'}/> */}


</div>
</div>
</div>
<div className='container-fluid TrainingSesion'>
<div className="row row-cols-2">
    <div className=" col-md-6 imageBackground1 ">
    <div className='TrainerSectionImagePositionView'>

      <div className='TrainerSectionTextView '>

      <h2 className='trainerTextCol'>Functional Training</h2>
<p  className='TrainingsectionSubText'>Functional training focuses on improving strength, balance, Train smarter to build a resilient</p>
<button className="btn btn-danger my-2 my-sm-0 px-4 py-3 " type="submit">Find More</button>

      
      </div>
      </div>
    </div>
    <div className="col-12 col-md-6 imageBackground2">
    <div className='TrainerSectionImagePositionView'>

      <div className='TrainerSectionTextView '>

      <h2 className='trainerTextCol'>Functional Training</h2>
<p  className='TrainingsectionSubText'>Functional training focuses on improving strength, balance, Train smarter to build a resilient</p>
<button className="btn btn-danger my-2 my-sm-0 px-4 py-3 " type="submit">Find More</button>

      
      </div>
      </div>
    </div>
    <div className="col-12 col-md-6 imageBackground3">
    <div className='TrainerSectionImagePositionView'>

<div className='TrainerSectionTextView '>

<h2 className='trainerTextCol'>Functional Training</h2>
<p  className='TrainingsectionSubText'>Functional training focuses on improving strength, balance, Train smarter to build a resilient</p>
<button className="btn btn-danger my-2 my-sm-0 px-4 py-3 " type="submit">Find More</button>


</div>
</div>

    </div>
    <div className="col-12 col-md-6 imageBackground4">
    <div className='TrainerSectionImagePositionView'>

<div className='TrainerSectionTextView '>

<h2 className='trainerTextCol'>Functional Training</h2>
<p  className='TrainingsectionSubText'>Functional training focuses on improving strength, balance, Train smarter to build a resilient</p>
<button className="btn btn-danger my-2 my-sm-0 px-4 py-3 " type="submit">Find More</button>


</div>
</div>

    </div>
  </div>

</div>
<div className='ContactSection container-fluid'>
<div className='ContactSection1 row'>
<div className='inputContainer'>
  <h1 className='TextEnq'>Enquiry</h1>
 <TextInput value={''} placeholder={'Name'} onChangeText={()=>{}} isMultiline={false}/>
 <TextInput value={''} placeholder={'Email'} onChangeText={()=>{}} isMultiline={false}/>

 <TextInput value={''} placeholder={'Conatct'} onChangeText={()=>{}} isMultiline={false}/>
 <TextInput value={''} placeholder={'Description'} onChangeText={()=>{}} isMultiline={true}/>
 <button className="btn btn-danger my-1 my-sm-0 px-3 py-2 buttonWidth" type="submit">Enquiry</button>


</div>
{/* <div className='bg-primary'>ijiji</div> */}

</div>
</div>
<div className='ConatctBranch container-fluid'>
<div className='row'>
  <div className='col-12 col-md-3 Contactheight'>
<div className='Conatactus1'>
<img src={'https://www.logotypes101.com/logos/39/CF43103376FEE2C7523450410536A5EF/weider.png'} className='ConatctImg'/>
<div className='px-3'>
<p>Weider is one of the best fitness centers in Chennai. Our customized designs will help to enjoy the best experience of your life.</p>

</div>
<h4>Follow us</h4>
<div>
  <img src={'https://cdn-icons-png.flaticon.com/128/2111/2111463.png'} className='contactPng1'/>
  <img className='contactPng1' src={'https://cdn-icons-png.flaticon.com/128/15047/15047435.png'}/>
</div>
</div>
  </div>
  <div className='col-12 col-md-3'>
<div className='contactSub1'>
  <div className='ConatactSubHead'>
  <h5 className='contactTextStyle'>Quick links</h5>

  </div>
<ul className='UnderList1'>
  <li className='BulletList'>Home</li>
  <li>About Us</li>
  <li>Pricing</li>
  <li>Gallery</li>
  <li>Subscribe</li>

</ul>
</div>
</div>
<div className='col-12 col-md-3 '>
<div className='contactSub1'>
  <div className='ConatactSubHead'>
  <h5 className='contactTextStyle'>For More Info</h5>

  </div>
<ul className='UnderList2'>
  <li className='BulletList1'>Home</li>
  <li className='BulletList1'>Mr Praveen kumar</li>
  <li className='BulletList1'>P:91+ 9876543210</li>
  <li className='BulletList1'>E:Praveen@gmail.com</li>
  {/* <li></li> */}

</ul>
</div>
</div>
<div className='col-12 col-md-3 align-content-center'>
<div className='ImageCont'>

</div>
</div>

</div>
</div>
</div>
    )
}

export {HomeScreen}