const Footer = () => {
    return ( 
        <>
            <footer className="bg-[#C70B38] opacity-90 md:py-24 py-12 md:px-32 px-8 text-white">
                <div className="md:flex md:justify-between justify-center items-center  text-center mb-8 md:text-base text-sm">
                    <div>
                        <h1 className="md:text-lg font-medium">Engstan Solutions</h1>
                    </div>

                    <div className="md:my-0 my-2">
                        <ul className="flex justify-center items-center md:text-base text-sm ">
                            <li className="navlink md:mx-4 mx-2 text-white font-light">
                                <Link href='/'>
                                    Home
                                </Link>
                            </li>
                            <li className="navlink md:mx-4 mx-2 text-white font-light">
                                <Link href='/about'>
                                    About
                                </Link>
                            </li>
                            <li className="navlink md:mx-4 mx-2 text-white font-light">
                                <Link href='/products'>
                                    Our Products
                                </Link>
                            </li>
                            <li className="navlink md:mx-4 mx-2 text-white font-light">
                                <Link href='/contact'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex justify-center">
                            Terms &#38; policy
                        </div>
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