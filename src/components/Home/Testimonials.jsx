import Testimonialcard from "../Home/Testimonialcard";
import { Splide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/skyblue';
import { testimonialCarousel } from "../../utils/Carousel";

const Testimonials = () => {
    return ( 
        <>
            <div className="md:px-32 px-6 md:py-16 py-8">
                <h1 className="content-title pb-2">Testimonials</h1>
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