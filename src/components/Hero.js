import hero from "../assets/promotional.png"
import { Link } from "react-router-dom";

const Hero = () => {
    return ( 
        <>
            <div className='md:flex bg-[#084E7A] md:px-32 px-8 md:py-16 py-8'>
                <div className='md:space-y-8 space-y-4 md:mb-0 mb-8 '>
                    <h1 className='font-black md:text-7xl sm:text-5xl text-4xl text-white md:mt-8 capitalize tracking-wide '>We make <br/> it happen</h1>
                    <p className='font-light md:text-3xl text-white'>Providing quality products at affordable price</p>
                    <div className='flex mt-8'>
                        <Link to='/' className='btn md:mr-4 mr-1 bg-white text-gray-900 font-medium'>
                            Get Started
                        </Link>
                        <Link to='/contact' className='btn md:ml-4 ml-1 font-medium'>
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div >
                    <img className="w-full" src={hero} alt='hero' />
                </div>
            </div>
        </>
     );
}
 
export default Hero;