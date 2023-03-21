import { FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const Contactdetails = () => {
    const contactInfo = [
        {   
            icon: <FaPhone />, 
            nairobi: '076918 8331',
            meru: '0707397311'
        },
        {   
            icon: <MdLocationOn />, 
            nairobi: 'Powerstar Bulding, Room ‘U’ - Roysambu',
            meru: 'Glorious Building, Ground Floor - Mitunguu'
        }
    ]

    return(
        <>
            <div className="grid grid-cols-1 md:gap-8 gap-4 md:mt-0 mt-8">
                <div 
                    class="flex items-center rounded-lg bg-white ease-out duration-300 py-4 md:px-8 px-4 shadow-lg hover:shadow-xl">
                    <span className="md:text-2xl text-xl bg-gray-100 rounded-full md:p-6 p-4 text-[#084E7A]">
                        <HiOutlineMail />
                    </span>
                    <p class="md:ml-4 ml-2 mt-2 md:text-lg text-sm font-light">info.engstansolutions.co.ke</p>
                </div>
                {contactInfo.map((info) => (
                    <div 
                        class="flex items-center rounded-lg bg-white ease-out duration-300 py-4 md:px-8 px-4 shadow-lg hover:shadow-xl">
                        <span className="md:text-2xl text-xl bg-gray-100 rounded-full md:p-6 p-4 text-[#084E7A]">
                            <i>{info.icon}</i>
                        </span>
                        <div class="md:ml-4 ml-2 mt-2 md:text-lg text-sm font-light">
                            <p>
                                <span className="font-medium text-gray-800 mr-1">Nairobi Branch:</span> 
                                {info.nairobi}</p>
                            <p>
                            <span className="font-medium text-gray-800 mr-1">Meru Branch:</span> 
                                {info.meru}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default Contactdetails;