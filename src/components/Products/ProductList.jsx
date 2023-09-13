import { Link } from "react-router-dom";

const ProductList = ({products}) => {
    return ( 
        <>
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
                    <h3 className="font-medium text-white ">{product.productName}</h3>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-gray-200">Ksh { product.price }</p>
                      <button className="btn text-sm mt-4">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  
                </div>
            ))}
          </div>
        </>
     );
}
 
export default ProductList;