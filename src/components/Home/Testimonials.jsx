import Testimonialcard from "../Home/Testimonialcard";
import { Splide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { testimonialCarousel } from "../../utils/Carousel";

const Testimonials = () => {
    return ( 
        <>
            <div className="md:px-32 px-6 md:py-32 py-16 bg-gray-100">
                <div className="flex flex-col items-center">
                    <h1 className="text-[#084E7A] pb-2 text-center uppercase md:text-base text-sm">Testimonials</h1>
                    <h2 className="content-title text-center md:mb-16 mb-8 text-[#f22152] md:max-w-md">Reveiws from Our Customers</h2>
                </div>
                <div>
                    <Splide
                        options={testimonialCarousel}
                    >
                        <Testimonialcard />
                    </Splide>
                </div>
            </div>
        </>
     );
}
 
export default Testimonials;