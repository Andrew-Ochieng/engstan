import { Link }  from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const  year = new Date()
    const newYear = year.getFullYear()

    const footerLink = [
        {id: 1, name: "Home", route: "/" },
        {id: 2, name: "About", route: "/about"},
        {id: 3, name: "Clothings", route: "/clothings"},
        {id: 4, name: "Merchandize", route: "/merchandize"},
        {id: 5, name: "Gallery", route: "/gallery"},
        {id: 6, name: "Contact", route: "/contact"},
    ]

    return ( 
        <>
            <div className="flex items-center justify-center">
            <a
                href="https://wa.me/254769188331"
                className="whatsapp_float md:p-3 p-2 rounded-full text-white bg-green-500 md:bottom-8 bottom-4 md:right-8 right-4 animate-bounce"
                target="_blank"
                rel="noopener noreferrer"
            >   
                <FaWhatsapp />
            </a>
            </div>
            <footer className="bg-[#C70B38] opacity-90 md:py-24 py-12 md:px-32 px-8 text-white">
                <div className="md:flex md:justify-between justify-center items-center md:text-center mb-8 md:text-base text-sm">
                    <div>
                        <h1 className="md:text-lg font-medium">Engstan Solutions</h1>
                    </div>

                    <div className="md:my-0 my-2">
                        <ul className="md:flex justify-center items-center md:text-base text-sm ">
                            {footerLink.map((link) => (
                                <li key={link.name} className="navlink md:mx-4 md:my-0 my-2 text-white font-light">
                                    <Link to={link.route}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 md:text-2xl text-xl">
                            <a href="https://www.facebook.com/100053209607083" className="md:mx-4 mx-2 text-blue-500 hover:text-white">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com/" className="md:mx-4 mx-2 text-blue-500 hover:text-white">
                                <FaTwitter />
                            </a>
                            <a href="https://www.instagram.com/engstan_solutions/" className="md:mx-4 mx-2 text-blue-500 hover:text-white">
                                <FaInstagram />
                            </a>
                        </span>
                    </div>
                </div>
            </footer>

            <div className="bg-[#C70B38] text-white md:py-8 py-4 md:px-32 px-8 flex justify-center items-center text-sm">
                <p>Copyright &copy; <span className="font-medium">{newYear}</span> | 
                    <Link to='/' className="ml-1 text-blue-500"> 
                        Engstan Solutions
                    </Link>
                </p>
            </div>
        </>
     );
}
 
export default Footer;