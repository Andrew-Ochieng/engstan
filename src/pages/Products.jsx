
import ProductList from "../components/Products/ProductList";
import React, { useState, useEffect } from 'react';


const Products = ({products}) => {
  const [selectedButton, setSelectedButton] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (selectedButton === 'Clothings') {
      setFilteredProducts(products.filter(product => product.product_type === 'Clothings'));
    } else if (selectedButton === 'mechanized') {
      setFilteredProducts(products.filter(product => product.product_type === 'mechanized'));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedButton, products]);

  return ( 
    <>
      <div className="md:mx-32 mx-6 my-8">
        <div className="grid md:grid-cols-2 xl:gap-16 md:gap-8 gap-4">
          <div>
              <input className="input" placeholder="Search products..." type='search'/>
            </div>
          <div className="py-2  px-2">
            <div className="md:flex justify-end items-center gap-6 text-sm "> 
              <button onClick={() => setSelectedButton('Clothings')} className="py-3 btn uppercase">
                Branded
              </button> 
              <button onClick={() => setSelectedButton('mechanized')}  className="md:mt-0 mt-3 py-3 btn uppercase">
                Other services
              </button>
            </div>
          </div> 
        </div>

        <div className="md:flex items-center justify-between md:mt-0 mt-4">
          <div>
            <p className="text-[#C70B38] font-semibold md:text-xl text-lg">All Colors Available</p>
            <div className="flex  mt-2 md:gap-6 gap-2">
                <p className="radio-btn bg-black"></p>
                <p className="radio-btn bg-red-500"></p>
                <p className="radio-btn bg-blue-500"></p>
                <p className="radio-btn bg-yellow-500"></p> 
                <p className="radio-btn bg-green-500"></p>
                <p className="radio-btn bg-purple-500"></p>
                <p className="radio-btn bg-pink-500"></p>
                <p className="radio-btn bg-gray-500"></p>    
            </div>   
          </div> 
          <div>
            <h6 className="mt-6 mb-2 text-gray-800 md:text-base text-sm">
                <span className=" text-[#084E7A] mr-1">Clothings Sizes available:</span> 
                S, M, L, XL, XXL, XXXL
            </h6>
            <p className="mb-6 text-gray-800 md:text-base text-sm">
                Kids sizes also available
            </p>
          </div>
        </div>        
          
        <ProductList products={filteredProducts} />
        
    </div>
    </>
   );
}
 
export default Products;