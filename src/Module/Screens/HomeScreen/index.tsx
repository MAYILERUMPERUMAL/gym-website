import React,{FC,useEffect,useState} from 'react'
import { HomeProps } from './interface'
import  './HomeScreen.css'
import { Button, OurFeature, PricingCard, TextInput, TrainerCard } from '../../../Components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay, EffectCreative} from 'swiper/modules';
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@fontsource/rubik'
import { icons } from '../../../Assest';
import { LineText } from '../../../Components/LineText';
import { GoArrowRight } from "react-icons/go";
const HomeScreen:FC<HomeProps>=()=>{
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const swiper = useSwiper();
  useEffect(() => {
    AOS.init({
        duration: 1200, // Animation duration (in milliseconds)
        offset: 300,    // Offset (in pixels)
        easing: 'ease-in-sine', // Easing type
        once: false, // Whether animation should happen only once
    });
}, []);
const options = {
  loop: true,
  items: 1,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 8000,
  smartSpeed: 800,
  animateOut: 'fadeOut',
  navText: [
    "<span class='carousel-nav-arrow'>&#8249;</span>", // Custom left arrow
    "<span class='carousel-nav-arrow'>&#8250;</span>", // Custom right arrow
  ],
};
const options1 = {
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 8000,
  smartSpeed: 800,
  responsive: {
    0: { items: 1 },
    200: { items: 2 },
    800: { items: 3 },
  },
};
const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1920",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://speede.fit/cdn/shop/articles/what-muscles-do-deadlifts-work.jpg?v=1663081017",
    alt: "Image 2",
  }
];
let image1=[
  {id:1,imagesrc:'https://www.shutterstock.com/image-photo/muscular-man-workout-gym-strong-260nw-1469996258.jpg'},
  {id:2,imagesrc:'https://plus.unsplash.com/premium_photo-1664476919710-8b42c2c4198e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bXVzY2xlJTIwbWFufGVufDB8fDB8fHww'},
  {id:3,imagesrc:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/05/24/10/istock-478624695.jpg'}


]
const [hoveredIndex, setHoveredIndex] = useState(null);

const handleMouseEnter = (index:any) => {
  setHoveredIndex(index);
};

const handleMouseLeave = () => {
  setHoveredIndex(null);
};
const ourFeatureData=[{id:1,imagesrc:'https://img.freepik.com/free-photo/fitness-woman-doing-cardio-gym_651396-642.jpg',title:'Cardio',subTitle:'Be the strength and that losse fat'},
  {id:2,imagesrc:'https://thumbs.dreamstime.com/b/handsome-muscular-man-dumbbells-working-out-gym-doing-exercise-56914918.jpg',title:'Strength & Training',subTitle:'Be the strength and that losse fat'},
  {id:3,imagesrc:'https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',title:'Weight training',subTitle:'Be the strength and that losse fat'},
  {id:4,imagesrc:'https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',title:'Zumba classes',subTitle:'Be the strength and that losse fat'}

]
    return(
<div className='appConatiner' onScroll={()=>{console.log('ljkhjkhkjhkjh');
}}>
   <div className='kopm'>

<nav className="navbar navbar-light   NavBarStyle mx-5">
                <a className="navbar-brand">
                    <img
                        src="https://e7.pngegg.com/pngimages/849/757/png-clipart-mr-olympia-physical-fitness-fitness-centre-bodybuilding-bench-bodybuilding-physical-fitness-hand-thumbnail.png"
                        className="imageStyle"
                        alt="logo"
                    />
                </a>
                <div className="container d-flex ListStyle col-6">
                    <a className="ListTag d-none d-md-block text-gap" onClick={()=> swiper.slideNext()}>Home</a>
                    <a className="ListTag d-none d-md-block text-gap">About</a>
                    <a className="ListTag d-none d-md-block text-gap">Pricing</a>
                    <a className="ListTag d-none d-md-block text-gap">Gallery</a>
                    <a className="ListTag d-none d-md-block text-gap">Subscribe</a>
                </div>
                <form className="form-inline">
                    <button
                        className="btn btn-outline-light my-2 my-sm-0 px-5 py-3 d-none d-md-block text-gap"
                        type="submit"
                    >
                        Join Us
                    </button>
                </form>

                {/* Toggle Button */}
                <button className="navbar-toggler  coomonVcc" type="button" onClick={toggleDrawer}>
                    <span className="navbar-toggler-icon  coomonVcc"></span>
                </button>

                {/* Drawer */}
                <div className={`side-drawer ${drawerOpen ? 'open' : ''}`}>
                    <div className="Overlay">
                        <ul className="navbar-nav navBarContainer">
                            <li className="nav-item">
                                <a className="nav-link text-white navTextStyle" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white navTextStyle text-gap" href="#">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white navTextStyle text-gap" href="#">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white navTextStyle text-gap" href="#">
                                    Gallery
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white navTextStyle text-gap" href="#">
                                    Subscribe
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Overlay for closing drawer */}
                {drawerOpen && <div className="backdrop" onClick={toggleDrawer}></div>}
            </nav>
            </div> 

            <OwlCarousel  className="owl-theme ssss" {...options}>
{images.map((slide) => (
                <div
                    key={slide.id}
                    className="item"
                    style={{ backgroundImage: `url(${slide.src})` }}
                >
                  <div className='container  ggg'>
  <div className='row'>
    <div className='col-8'>
      
    <div className='HomeContent1'>
      <div className='conyerfff'>

    
      <h1  className='fontFamily animated-title text-gap marginLeft'>Elevated Your<br/>Workout</h1>

      <p  className='fontColro animated-text text-gap paragraphtextSize marginLeft text-line-height'>Your body achieves what your mind believes. Push harder,<br/>aim higher and let determination be your fuel</p>

    {/* <label data-aos="fade-up" className='textContentcolor '>---WELCOME TO WEIDER GYM</label>
<h1 data-aos="fade-up" className='textColor textSixe  fontWeight'>READY TO TRAIN</h1>
<h1 data-aos="fade-up" className='textColor textSixe  fontWeight'>YOUR BODY</h1> */}
<div className='secondaryButton'>
<button 
                        className="btn btn-outline-light my-2 my-sm-0 px-4 py-3   animated-text text-gap marginLeft text-gap"
                        type="submit"
                      
                    >
                    Get Started
                    </button>
</div>

                    </div>
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
            ))}
</OwlCarousel>
         <div className='  d-flex secondaryContent'>
          <div className=''>
            <h4 className='fontColro defaultFontFamily fontSize text-gap'>5+</h4>
            <p className='fontColro paragraphFont defaultFontFamily text-gap'>Year of services</p>
          </div>
          <div>
            <h4 className='fontColro defaultFontFamily fontSize text-gap'>10+</h4>
            <p className='fontColro paragraphFont defaultFontFamily text-gap'>Certificate trainers</p>
          </div>
          <div>
            <h4 className='fontColro defaultFontFamily fontSize text-gap'>586+</h4>
            <p className='fontColro paragraphFont defaultFontFamily text-gap'>Happy members</p>
          </div>
          <div>
            <h4 className='fontColro defaultFontFamily fontSize text-gap'>95%</h4>
            <p className='fontColro paragraphFont defaultFontFamily text-gap'>Customer satisfaction</p>
          </div>
         </div>
{/* <div className='Section2 container-fluid p-5 contColor'>
<div className='row gx-5'>
<div className='col-lg-5 mb-5 mb-lg-0'>
<div data-aos="flip-left" className='position-relative h-100' style={{minHeight:'500px'}}>
<img src={'https://c4.wallpaperflare.com/wallpaper/440/786/339/hood-muscle-muscle-muscles-wallpaper-preview.jpg'} 
className=' w-100 h-100 rounded'
style={{objectFit:'cover'}}
/>
</div>
</div>
<div className='col-lg-7 aboutContent1'>
<div  className='AboutContainer'>
  <h5 className='text-start textContentcolor' >ABOUT US</h5>
  <h2 className='text-start textColor kjhkhk'>WELCOME TO WEIDER</h2>
  <h5 className='text-start marginBottom TextLineHeight textColor lllll'>At Weider, we focus on building champions by offering tailored programs for bodybuilding competitions, weight gain, weight loss, and overall fitness.</h5>
  <p className='text-start marginBottom TextLineHeight contentParagraph'>Weider is equipped with cutting-edge facilities, guided by experienced trainers and supportive staff, including lady trainers for women. Whether your aim is to sculpt your physique, boost your strength, or improve your health, Weider provides the tools, expertise, and community to help you succeed.</p>
  <div className='aboutUsContainer py-4'>
    <div className='row mx-4'>
      <div className='col-6'>
        <div className=' chooseToggle' >
        <label className='textColor'>ABOUT US</label>

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
</div> */}
<div className="container-md nhnnn">
<div className='featursStyle px-3 mx-2 opp'>
    <h1 data-aos="fade-up" className='text-white defaultFontFamily fontWefff text-gap'>Our Pricing</h1>
    <p data-aos="fade-up" className=' paragraphText defaultFontFamily text-white text-gap'>Achieve your fitness goals with flexible membership plans<br/> tailored to suit your needs and budget.</p>
  </div>
  <div className="row ">
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <PricingCard
        CardTitLe={"Monthly Plan"}
        CardSubTitle="Here goes Some Description"
        monthlyPricing={1000}
        ptPricing={5000}
        forFees={'1 Month'}
        ImageUrl="https://expert-themes.com/html/gym/images/resource/price-1.jpg"
      />
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <PricingCard
        CardTitLe={"Quarterly Plan"}
        CardSubTitle="Here goes Some Description"
        monthlyPricing={3500}
        ptPricing={5000}
        forFees={'6 Month'}
        ImageUrl="https://expert-themes.com/html/gym/images/resource/price-2.jpg"
      />
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <PricingCard
        CardTitLe={"Yearly Plan"}
        CardSubTitle="Here goes Some Description"
        monthlyPricing={10000}
        forFees={'1 Year'}
        ptPricing={5000}
        ImageUrl="https://expert-themes.com/html/gym/images/resource/price-3.jpg"
      />
    </div>
  </div>
</div>

{/* <div className='featureSection'>
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
 
</div> */}

<div className='AboutSection container-md'>
<div className='featursStyle px-3 mx-2 opp'>
    <h1 data-aos="fade-up" className='text-white defaultFontFamily fontWefff text-gap'>Why Choose Us</h1>
    <p data-aos="fade-up" className=' paragraphText defaultFontFamily text-white text-gap'>Achieve your fitness goals with flexible membership plans<br/> tailored to suit your needs and budget.</p>
  </div>
<div className='row my-3'>
<div data-aos="fade-up"  className=' col-lg-6 '>
  <div className='ppllkk '>
    <div className='dcdcdcdcd'>
{/* <div className='tytytyt'>
<img src={'https://cdn-icons-png.flaticon.com/128/4744/4744822.png'} className='gfffcc'/>

</div> */}
   
    <img src={'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} className='bvbvbv'/>
 <div className=' nnbbb mx-3'>
    <h3 className='lklkllk chooseTitle'>Video Instruction</h3>
<p className='lklkllk'>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
    </div>
    </div>
   
  </div>
</div>
<div data-aos="fade-up" className='col-lg-6'>
<div className='ppllkk '>
    <div className='dcdcdcdcd'>
{/* <div className='tytytyt'>
<img src={'https://cdn-icons-png.flaticon.com/128/4744/4744822.png'} className='gfffcc'/>

</div> */}
   
    <img src={'https://img.freepik.com/premium-photo/principles-rules-healthy-lifestyle-with-proper-nutrition-balanced-diet-vegetarian-vegetables-fruits-keto-ketosis-ketones-ketogenic-diet-food-low-carbs-products-antiage_771426-6193.jpg'} className='bvbvbv'/>
 <div className=' nnbbb mx-3'>
    <h3 className='lklkllk chooseTitle'>Nutrition Diet</h3>
<p className='lklkllk'>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
    </div>
    </div>
   
  </div>
</div>
</div>
<div className='row hhhhhvcmm py-5'>
<div data-aos="fade-up" className='col-lg-6 '>
  <div className='ppllkk '>
    <div className='dcdcdcdcd'>
{/* <div className='tytytyt'>
<img src={'https://cdn-icons-png.flaticon.com/128/4744/4744822.png'} className='gfffcc'/>

</div> */}
   
    <img src={'https://wallpapers.com/images/hd/fitness-background-u9jc004cjnx8h5zr.jpg'} className='bvbvbv'/>
 <div className=' nnbbb mx-3'>
    <h3 className='lklkllk chooseTitle'>Calendar Training</h3>
<p className='lklkllk'>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
    </div>
    </div>
   
  </div>
</div>
<div data-aos="fade-up" className='col-lg-6'>
<div className='ppllkk '>
    <div className='dcdcdcdcd'>
{/* <div className='tytytyt'>
<img src={'https://cdn-icons-png.flaticon.com/128/4744/4744822.png'} className='gfffcc'/>

</div> */}
   
    <img src={'https://5.imimg.com/data5/TN/XB/GLADMIN-50969022/crossfit-and-trx-classes-500x500.png'} className='bvbvbv'/>
 <div className=' nnbbb mx-3'>
    <h3 className='lklkllk chooseTitle'>Personal  Trainer</h3>
<p className='lklkllk'>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
    </div>
    </div>
   
  </div>
</div>
</div>
</div>
<div className='section4 py-5 container-md '>
<h1 data-aos="fade-up"className='text-white defaultFontFamily fontWefff text-gap'>Meet Our Trainers</h1>
<p data-aos="fade-up" className=' paragraphText defaultFontFamily text-white text-gap'>Achieve your fitness goals with flexible membership <br/>plans tailored to suit your needs and budget.</p>
<div className='row py-5'>
<div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
<TrainerCard  image={icons.image1} trainerName={'John Doe'}/>
</div>
<div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
<TrainerCard image={icons.image2} trainerName={'James Taylor'}/>
</div>
<div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
<TrainerCard image={icons.image3} trainerName={'Adam Phillips'}/> 
</div>


</div>
</div>
{/* <div className='container opinionsection px-4 bg-white'>
  <div className='row'>
<div className='jhjhj'>
  <div className=''>
  <label>Review</label>
  <h2>YOUR OPINION</h2>
  </div>
  <div className='klklkl'>
    <button className='btn btn-outline-light my-2 my-sm-0 px-4 py-3 d-md-block bg-primary'> + YOUR OPINION</button>
  </div>
 
</div>
<div className=''>
<div className='col-lg-8 col-md-6 col-sm-12 mb-4'>
  <h1>images</h1>
  </div>
  <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
    <h1>opinion</h1>
  </div>
</div>
  </div>
</div> */}
<div className='container-md py-5'>
  <div className='row'>
  <h1 data-aos="fade-up"className='text-white defaultFontFamily fontWefff text-gap'>Our Upcoming Classes</h1>
  <p data-aos="fade-up" className=' paragraphText defaultFontFamily text-white text-gap'>Achieve your fitness goals with flexible membership <br/>plans tailored to suit your needs and budget.</p>
  <div data-aos="fade-up" className='py-5'>
  <OwlCarousel  className="owl-theme1 " {...options1}>
  {ourFeatureData.map((ele)=>{
    return(
<OurFeature title={ele.title} subTitlle={ele.subTitle} image={ele.imagesrc}/>
      
    )
  })}
    </OwlCarousel>
  </div>
 
      
  

  </div>

</div>
<div className='container-md kklklklbbb'>
  <div className='row mx-5'>
<div className='col-lg-6 '>
<p className='poilll text-white defaultFontFamily fontWefff text-gap'>---About</p>
<h2 className='poilll text-white defaultFontFamily fonbbbb text-gap'>We Have Lot Of Experience </h2>
<h2 className='poilll text-white defaultFontFamily fonbbbb text-gap'>Gym Training</h2>
<div className='container '>
  <div className='row '>
  <div className='col-lg-6 '>
  <div className=''>
<img src={'https://images.unsplash.com/photo-1577221084712-45b0445d2b00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fHww'} className='pkfggg'/>
</div>
  </div>
  <div className='col-lg-6 '>
  {/* <div className='sideContetabout'> */}
  <p className='    text-gap hhhhhhhbb paragrafdd'>Many individual benifits from personalized Workout plans designed by the fitness professional or personal trainers to address the  specific fitness goals such as muscle gain,weight loss are improved athletic perfomance</p>
  <div className=' bvbvb'>
  <div className='lineSeparator3'/>
<p className='textsixzelinesepatt text-gap'>Over 15 Years of experience</p>
  </div>
  <div className=' bvbvb'>
  <div className='lineSeparator3'/>
<p className='textsixzelinesepatt text-gap'>Certificate trainer</p>
  </div>
  <div className=' bvbvb'>
  <div className='lineSeparator3'/>
<p className='textsixzelinesepatt text-gap'>Exceptional Work Quality</p>
  </div>
{/* </div> */}
<button 
                        className="btn btn-outline-black my-2 my-sm-0 px-5 py-3 text-gap smallButton"
                        type="submit"
                      
                    >
              learn more
                    </button>
  </div>

 

  </div>


</div>
</div>
<div className='col-lg-6 '>
  <div className=''>
  <img src={'https://i.pinimg.com/originals/85/17/2b/85172b91c1d84d666a1fc715965498b4.png'} className='aboutImage'/>

  </div>
</div>
  </div>

</div>

</div>
    )
}

export {HomeScreen}