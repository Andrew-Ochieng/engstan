
import ProductItems from "../components/Products/ProductItems";
import React, { useState, useEffect } from 'react';


const Products = () => {


  const [selectedButton, setSelectedButton] = useState('all');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/products')
    .then((res)=>res.json())
    .then((productsData)=>{
      setProducts(productsData);
      setFilteredProducts(productsData)
    })
  }, []);

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
        <div className="bg-[#C70B38] rounded-lg py-2 md:px-12 px-2">
          <div className="flex justify-between items-center space-x-2"> 
            <button onClick={() => setSelectedButton('Clothings')} className="category-btn">
            Clothing and branding
            </button> 
            <button onClick={() => setSelectedButton('mechanized')}  className="category-btn">
            Other branding services
            </button>
          </div>
        </div> 
        <h6 className="mt-6 mb-2 text-gray-800 md:text-base text-sm">
            <span className=" text-[#084E7A] mr-1">Clothings Sizes available:</span> 
            S, M, L, XL, XXL, XXXL
        </h6>
        <p className="mb-6 text-gray-800 md:text-base text-sm">
            Kids sizes also available
        </p>
        <p className="text-[#C70B38] font-semibold md:text-xl text-lg">All Colors Available</p>
            <div className="grid grid-cols-8 mt-2 gap-6">
                <p className="radio-btn bg-black"></p>
                <p className="radio-btn bg-red-500"></p>
                <p className="radio-btn bg-blue-500"></p>
                <p className="radio-btn bg-yellow-500"></p> 
                <p className="radio-btn bg-green-500"></p>
                <p className="radio-btn bg-purple-500"></p>
                <p className="radio-btn bg-pink-500"></p>
                <p className="radio-btn bg-gray-500"></p>    
            </div>           
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 md:my-16 my-8">
            <ProductItems products={filteredProducts} />
        </div>
    </div>
    </>
   );
}
 
export default Products;