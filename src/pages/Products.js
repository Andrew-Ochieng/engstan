import ProductItems from "../components/ProductItems";
import UseFetch from "../components/UseFetch";


const Products = ({products}) => {
  const { data: plain_products } = UseFetch('http://localhost:3000/plain_products')
  const { data: branded_products } = UseFetch('http://localhost:3000/branded_products')
  
  console.log(plain_products)
  console.log(branded_products)

  return ( 
    <>
      <div className="md:mx-32 mx-6 my-8">
        <div className="bg-[#C70B38] rounded-lg py-2 md:px-12 px-2">
          <div className="flex justify-between items-center space-x-2">
            {/* <button onClick={handleAllProducts} className="category-btn hover:text-[#084e7aa3]">
                All Products
            </button>  */}
            {/* <button onClick={handlePlainProducts} className="category-btn hover:text-[#084e7aa3]">
                Plain Products
            </button>  */}
            {/* <button onClick={handleBrandedProducts} className="category-btn hover:text-[#084e7aa3]">
                Branded Products
            </button> */}
          </div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 md:my-16 my-8">
            <ProductItems products={products} />
            {/* {
              
            } */}
        </div>
    </div>
    </>
   );
}
 
export default Products;