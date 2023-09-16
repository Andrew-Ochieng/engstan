import { Link } from "react-router-dom";
import Hero from "../components/Home/Hero";
import Reachout from "../components/Home/Reachout";
import Testimonials from "../components/Home/Testimonials";
import ProductList from "../components/Products/ProductList";
import { GridLoader } from "react-spinners";

const Home = ({products, loading}) => {
  return ( 
    <>
      <div className=''>
          <Hero />
          <div className="md:px-32 px-6 md:py-16 py-8">
            <h2 className="content-title text-center">Our Products</h2>
            <div>
              {loading ? (
                <div className="flex items-center justify-center md:my-48 my-24">
                  <GridLoader 
                      color="#084E7A" 
                      loading={loading}
                      size={20}
                      aria-label="Loading Content..."
                      data-testid="loader"
                  />
                </div>
              ) : (
                <ProductList products={products.slice(0,8)  }/>
              )}
            </div> 
            <div className="flex items-center justify-center md:mt-16 mt-8">
              <Link to='/clothings' className="btn ">View All Products</Link>
            </div>
          </div>
          <Testimonials />
          <Reachout />
      </div>
    </>
   );
}
 
export default Home;