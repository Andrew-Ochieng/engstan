import Hero from "../components/Hero";
import Reachout from "../components/Reachout";
import Testimonials from "../components/Testimonials";
// import Whoweare from "../components/Whoweare";

const Home = () => {
  return ( 
    <>
      <div className=''>
          <Hero />
          {/* <div className='bg-gray-100'>
            <Whoweare />
          </div> */}
          <Testimonials />
          <Reachout />
      </div>
    </>
   );
}
 
export default Home;