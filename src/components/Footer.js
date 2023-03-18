import { Link }  from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const  year = new Date()
    const newYear = year.getFullYear()

    const footerLink = [
        {name: "Home", ref: "/" },
        {name: "About", ref: "/about"},
        {name: "Products and Services", ref: "/products"},
        {name: "Contact", ref: "/contact"},
    ]

    return ( 
        <>
            <footer className="bg-[#C70B38] opacity-90 md:py-24 py-12 md:px-32 px-8 text-white">
                <div className="md:flex md:justify-between justify-center items-center  text-center mb-8 md:text-base text-sm">
                    <div>
                        <h1 className="md:text-lg font-medium">Engstan Solutions</h1>
                    </div>

                    <div className="md:my-0 my-2">
                        <ul className="flex justify-center items-center md:text-base text-sm ">
                            {footerLink.map((link) => (
                                <li className="navlink md:mx-4 mx-2 text-white font-light">
                                    <Link to={link.ref}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a href="https://www.facebook.com/100053209607083" className="text-blue-500 hover:text-white">
                                <p>EngStan Solutions</p>
                              <FaFacebook size={32} />
                            </a>
                            <a href="https://twitter.com/" className="ml-4 text-blue-500 hover:text-white">
                            <p>engstan solutions</p>
                              <FaTwitter size={32} />
                            </a>
                            <a href="https://www.instagram.com/engstan_solutions/" className="ml-4 text-purple-500 hover:text-white">
                            <p>@engstan solutions</p>
                              <FaInstagram size={32} />
                            </a>
                           </span>
                           <div className="flex items-center justify-center">
                    </div>
                    </div>
            </footer>

            <div className="bg-[#C70B38] text-white md:py-8 py-4 md:px-32 px-8 flex justify-center items-center text-sm">
                <p>Copyright &copy; <span className="font-medium">{newYear}</span> | 
                    <Link href='/' className="ml-1 text-gray-800"> 
                        Engstan Solutions
                    </Link>
                </p>
            </div>
        </>
     );
}
 
export default Footer;