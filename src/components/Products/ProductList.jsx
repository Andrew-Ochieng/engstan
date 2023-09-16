import { Link } from "react-router-dom";
import { GridLoader } from "react-spinners";

const ProductList = ({products, loading}) => {

    return ( 
        <>
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
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 xl:gap-10 md:gap-8 gap-6 md:my-16 my-8">
              {products.map((product, index) => (
                  <div key={index} className="rounded-2xl shadow-lg hover:shadow-xl">
                    <div className="p-2 border-2 border-[#084E7A] rounded-t-2xl">
                      <Link to={`/products/${product.id}`}>
                        <img 
                          src={product.plain_image_url} 
                          alt="" 
                          className='thumb p-2 rounded-2xl hover:scale-90 duration-500'
                          />
                      </Link>
                    </div>
                    <div className="px-4 py-3 bg-[#084E7A] rounded-b-2xl">
                      <h3 className="font-semibold">{product.name.slice(0,16)}...</h3>
                      <div className="flex items-center justify-between">
                        <p className=" text-gray-200">Ksh { product.price }</p>
                        <button className="btn uppercase font-bold tracking-wide text-sm mt-2">
                          <a 
                            href="https://api.whatsapp.com/send?phone=254769188331" 
                            method="get" 
                            target="_blank"
                            rel="noreferrer"
                            >
                              Order
                            </a>
                        </button>
                      </div>
                    </div>
                    
                  </div>
              ))}
            </div>
          )}
        </>
     );
}
 
export default ProductList;