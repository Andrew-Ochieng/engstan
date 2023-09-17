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
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-8 gap-4 md:my-16 my-8">
              {products.map((product, index) => (
                  <div key={index} className="rounded-2xl shadow-lg hover:shadow-xl md:px-4 p-2 md:py-3  border-2 border-[#084E7A] hover:bg-[#084E7A] hover:text-white duration-500">
                    <div className="flex justify-center rounded-t-2xl">
                      <Link to={`/products/${product.id}`}>
                        <img 
                          src={product.plain_image_url} 
                          alt="" 
                          className='xl:h-48 lg:h-44 md:h-40 h-24 rounded-2xl hover:scale-90 duration-700 ease-in-out'
                          />
                      </Link>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-semibold md:text-base text-sm hover:text-gray-200">{product.name.replace(/^(.{10}[^\s]*).*/, "$1") + "\n"}...</h3>
                      <p className=" md:text-base text-sm">Ksh { product.price }</p>
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
              ))}
            </div>
          )}
        </>
     );
}
 
export default ProductList;