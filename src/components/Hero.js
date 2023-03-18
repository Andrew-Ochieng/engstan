import hero from "../assets/promotional.png"
import { Link } from "react-router-dom";

const Hero = () => {
    return ( 
        <>
            <div className='md:flex bg-[#084E7A] md:px-32 px-8 '>
                <div className='md:space-y-8 space-y-4 md:mb-0 mb-8 md:py-16 py-8'>
                    <h1 className='font-black md:text-7xl sm:text-5xl text-4xl text-white md:mt-8 capitalize tracking-wide '>We make <br/> it happen</h1>
                    <p className='font-light md:text-3xl text-white'>Providing quality products at affordable price</p>
                    <div className='flex space-x-8 mt-8'>
                        <Link to='/' className='btn bg-white text-gray-900 font-medium'>
                            Get Started
                        </Link>
                        <Link to='/contact' className='btn font-medium'>
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div >
                    <img className="h-full" src={hero} alt='hero' />
                </div>
            </div>
        </>
     );
}
 
export default Hero;
// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import photo4  from '../assets/photo4.jpeg';
// import promo  from '../assets/photo4.jpeg';
// import whitelabel  from '../assets/electrical-supplies.jpg';

// function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     beforeChange: (current, next) => setCurrentSlide(next),
//   };

//   const images = [
//     { src: {photo4 }, alt: "Slide 1" },
//     { src: {promo}, alt: "Slide 2" },
//     { src: {whitelabel}, alt: "Slide 3" },
//   ];

//   return (
//     <div className="hero-section">
//       {/* <h1 className="text-4xl font-bold text-center mb-4">Hero Section</h1> */}
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div className="bg-gray-200 rounded-lg p-8" key={index}>
//             <img src={image.src} alt={image.alt} className="mx-auto mb-4" />
//             <h2 className="text-xl font-bold mb-2">
//               {`Slide ${index + 1} Title`}
//             </h2>
//             <p className="text-gray-600 mb-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               {`Slide ${index + 1} Button`}
//             </button>
//           </div>
//         ))}
//       </Slider>
//       <p className="text-center mt-4">
//         {`Showing slide ${currentSlide + 1} of ${images.length}`}
//       </p>
//     </div>
//   );
// }

// export default Hero;
