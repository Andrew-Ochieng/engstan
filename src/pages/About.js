import Chooseus from "../components/About/Chooseus";
import Corevalues from "../components/About/Corevalues";
import Mission from "../components/About/Mission";
import Whoweare from "../components/About/Whoweare";

const About = () => {
    return ( 
        <>
            <div>
                <div className="" 
                    style={{
                            backgroundImage: `url("https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/2020-11-04/GettyImages-678074927.jpg?pw=1200")`, 
                            backgroundSize: `cover`,
                            paddingTop: `100px`, 
                            paddingBottom: `100px` 
                        }}
                    >
                    <div className="flex flex-col justify-center items-center lg:my-24 md:my-16 my-6">
                        <h1 className="title">About Us</h1>
                        <h2 className="font-semibold md:text-lg text-white uppercase">
                            Home -
                            <span className="text-[#C70B38] mx-2">Learn More</span>
                        </h2>
                    </div>
                </div>

                <Whoweare />
                <Mission />
                <Corevalues />
                <Chooseus />
            </div>
        </>
     );
}
 
export default About;