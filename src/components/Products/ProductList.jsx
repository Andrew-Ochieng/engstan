import { Link } from "react-router-dom";

const ProductList = ({products, loading}) => {
  console.log(products)
    return ( 
        <>
          {loading ? (
            <div className="h-32">Loading Products...</div>
          ) : (
            <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-10 gap-8 md:my-16 my-8">
              {products.map((product, index) => (
                  <div key={index} className="rounded-2xl shadow-lg hover:shadow-xl">
                    <div className="p-3 border-2 border-[#084E7A] rounded-t-2xl">
                      <Link to={`/products/${product.id}`}>
                        <img 
                          src={product.plain_image_url} 
                          alt="" 
                          className='thumb p-2 rounded-2xl hover:scale-110 duration-500'
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