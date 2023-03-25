import Contactdetails from "../components/Contactdetails";
import Contactform from "../components/Contactform";

const Contact = () => {
    return ( 
        <>
            <div>
                <div className="" 
                    style={{
                            backgroundImage: `url("https://vabrise-technologies.netlify.app/images/hero-contact.jpg")`, 
                            backgroundSize: `cover`,
                            paddingTop: `100px`, 
                            paddingBottom: `100px` 
                        }}
                    >
                    <div className="flex flex-col justify-center items-center lg:my-24 md:my-16 my-6">
                        <h1 className="title">Contact Us</h1>
                        <h2 className="font-semibold md:text-lg text-white uppercase">
                            Home -
                            <span className="text-[#C70B38] mx-2">Reach Out</span>
                        </h2>
                    </div>
                </div>

                <div className="md:mb-24 mb-12 grid sm:grid-cols-2 sm:gap-8 md:gap-16 gap-4 bg-gray-100 md:py-32 py-16 md:px-32 px-6">
                    <Contactform />
                    <Contactdetails />
                </div>

                <div>
                    <h1 className="title text-center text-gray-500 md:text-4xl md:mb-16 mb-8">Find Us on Google Maps</h1>
                    <div className=" justify-center w-full md:mb-32 mb-8 grayscale hover:grayscale-0" >
                        <iframe title="engstan-solutions" width="100%" height="600" frameborder="0"  marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d63821.759539628714!2d36.81935963841336!3d-1.255832265501539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-1.2976128!2d36.831232!4m5!1s0x182f3f2ad82996df%3A0x3222557ec5eae5ae!2sT-SHIRTS%20PRINTING%20IN%20NAIROBI!3m2!1d-1.2094249!2d36.893999199999996!5e0!3m2!1sen!2ske!4v1679773689805!5m2!1sen!2ske">
                            <a href="https://www.gps.ie/car-satnav-gps/">sat navs</a>
                        </iframe>
                    </div>
                </div>

            </div>
        </>
     );
}
 
export default Contact;