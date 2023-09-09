import Testimonialcard from "../Home/Testimonialcard";

const Testimonials = () => {
    return ( 
        <>
            <div className="md:px-32 px-6 md:py-16 py-8">
                <h1 className="content-title pb-2">Testimonials</h1>
                <div className="grid sm:grid-cols-3 md:gap-8 gap-4">
                    <Testimonialcard />
                </div>
            </div>
        </>
     );
}
 
export default Testimonials;