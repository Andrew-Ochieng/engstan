import { Link } from "react-router-dom";
const Reachout = () => {
    return (
        <>
            <div className="md:px-32 px-6 md:py-12 py-6 bg-[#084E7A] md:flex md:justify-around justify-center text-center items-center">
                <p className="title md:text-4xl text-xl">Get a quote for your order today</p>
                <Link to='/contact' className="btn font-medium md:mt-0 mt-4">
                    Reach Out
                </Link>
            </div>
        </>
    );
}
 
export default Reachout;