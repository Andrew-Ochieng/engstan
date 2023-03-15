
import React, { useState, useEffect } from 'react';
import AdminItemDetails from "./AdminItemDetails";


const AdminProduct = () => {


  const [selectedButton, setSelectedButton] = useState('all');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    fetch('https://engstan-production.up.railway.app/products')
    .then((res)=>res.json())
    .then((productsData)=>{
      setProducts(productsData);
      setFilteredProducts(productsData)
    })
  }, []);

  useEffect(() => {
    if (selectedButton === 'plain') {
      setFilteredProducts(products.filter(product => product.product_type === 'Plain'));
    } else if (selectedButton === 'branded') {
      setFilteredProducts(products.filter(product => product.product_type === 'Branded'));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedButton, products]);

  return ( 
    <>
      <div className="md:mx-32 mx-6 my-8">
        <div className="bg-[#C70B38] rounded-lg py-2 md:px-12 px-2">
          <div className="flex justify-between items-center space-x-2">
            <button onClick={() => setSelectedButton('all')} className="category-btn">
                All Products
            </button> 
            <button onClick={() => setSelectedButton('plain')} className="category-btn">
                Plain Products
            </button> 
            <button onClick={() => setSelectedButton('branded')}  className="category-btn">
                Branded Products
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 md:my-16 my-8">
            <AdminItemDetails products={filteredProducts} />
        </div>
    </div>
    </>
   );
}
 
export default AdminProduct;