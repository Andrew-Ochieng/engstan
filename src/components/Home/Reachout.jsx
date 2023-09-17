import { Link } from "react-router-dom";
const Reachout = () => {
    return (
        <>
            <div className="md:px-32 px-6 md:py-12 py-6 bg-[#084E7A] md:flex md:justify-around justify-center text-center items-center">
                <p className="title md:text-4xl text-xl md:pb-0 pb-4">Get a quote for your order today</p>
                <Link to='/contact' className="btn font-medium ">
                    Reach Out
                </Link>
            </div>
        </>
    );
}
 
export default Reachout;