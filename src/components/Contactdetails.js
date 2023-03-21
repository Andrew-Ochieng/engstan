import { FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const Contactdetails = () => {
    const contactInfo = [
        {icon: <FaPhone />, details: '+2547 6918 8331'},
        {icon: <HiOutlineMail />, details: 'info.engstan@gmail.com'},
        {icon: <MdLocationOn />, details: 'Glorious Hotel building, Matunguu - Meru'},
    ]

    return(
        <>
            <div className="grid grid-cols-1 md:gap-8 gap-4 md:mt-0 mt-8">
                {contactInfo.map((info) => (
                    <div 
                        class="flex items-center rounded-lg bg-white ease-out duration-300 py-6 md:px-8 px-4 shadow-lg hover:shadow-xl">
                        <span className="md:text-2xl text-xl bg-gray-100 rounded-full md:p-6 p-4 text-[#084E7A]">
                            <i>{info.icon}</i>
                        </span>
                        <p class="md:ml-4 ml-2 mt-2 md:text-lg font-light">{info.details}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default Contactdetails;