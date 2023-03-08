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
                    <h1 className="title text-center text-gray-600 md:text-4xl md:mb-16 mb-8">Find Us on Google Maps</h1>
                    <div className=" justify-center w-full md:mb-32 mb-8 grayscale hover:grayscale-0" >
                        <iframe title="engstan-solutions" width="100%" height="600" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Thika%road,%Engstan%solutions,%Thika%Road,%Nairobi,%20Kenya+(Engstan%20Solutions)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.gps.ie/car-satnav-gps/">sat navs</a>
                        </iframe>
                    </div>
                </div>

            </div>
        </>
     );
}
 
export default Contact;