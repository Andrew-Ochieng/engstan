import Hero from "../components/Home/Hero";
import Reachout from "../components/Home/Reachout";
import Testimonials from "../components/Home/Testimonials";
import ProductItems from "../components/Products/ProductItems"

const Home = () => {
  return ( 
    <>
      <div className=''>
          <Hero />
          {/* <ProductItems /> */}
          <Testimonials />
          <Reachout />
      </div>
    </>
   );
}
 
export default Home;