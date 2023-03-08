import { Link } from "react-router-dom";


const Products = () => {
  return ( 
    <>
      <div className="md:mx-32 mx-6 my-8">
        <div className="bg-[#C70B38] rounded-lg py-2 md:px-12 px-2">
          <div className="flex justify-between items-center space-x-2">
            {/* <button onClick={() => setSelectedType('all')}>All Products</button>
            <button onClick={() => setSelectedType('plain')}>Plain Products</button>
            <button onClick={() => setSelectedType('branded')}>Branded Products</button> */}
            
            {/* <button onClick={() => setSelectedType('all')} className="category-btn hover:text-[#084e7aa3]">
                All Products
            </button> 
            <button onClick={() => setSelectedType('plain')} className="category-btn hover:text-[#084e7aa3]">
                Plain Products
            </button> 
            <button onClick={() => setSelectedType('branded')} className="category-btn hover:text-[#084e7aa3]">
                Branded Products
            </button> */}
          </div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 md:my-16 my-8">
            {/* {products.map((product) => (
                <div key={product.id} className="my-4 mx-2 p-1 rounded-lg bg-[#084E7A] shadow-lg hover:shadow-xl">
                  <div>
                    <img src={product.image_url} className='thumb p-2 bg-white rounded-lg '/>
                  </div>
                  <div className="py-4 px-3 mt-2">
                    <div>
                      <h2 className="text-gray-300 text-sm font-light">Price: ${ product.price }</h2>
                      <h3 className="font-medium text-white truncate">{product.productName}</h3>
                    </div>
                    <button className="mt-4">
                      <Link 
                      href={`/products/${product.id}`} 
                      key={product.id} 
                      className='btn'
                      >
                        More Details 
                      </Link>
                    </button>
                  </div>
                  
                </div>
            ))} */}
        </div>
    </div>
    </>
   );
}
 
export default Products;