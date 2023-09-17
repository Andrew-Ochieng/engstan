import hero from "../../assets/hero.png"
import { Link } from "react-router-dom";

const Hero = () => {
    return ( 
        <>
            <div className='md:flex bg-[#084E7A] md:px-32 px-8 md:py-16 py-8'>
                <div className='md:space-y-8 space-y-4 md:mb-0 mb-8 '>
                    <h1 className='font-black md:text-7xl sm:text-5xl text-4xl text-white md:mt-8 capitalize tracking-wide '>We make <br/> it happen</h1>
                    <p className='font-light md:text-3xl text-white'>Providing quality products at affordable price</p>
                    <div className='flex mt-8'>
                        <Link to='/clothings' className='btn font-medium hover:bg-white hover:text-red-500'>
                            Shop Now
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