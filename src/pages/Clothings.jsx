
import { useState } from "react";
import ProductList from "../components/Products/ProductList";
// import { useState, useEffect } from 'react';


const Clothings = ({products, loading}) => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const filteredProducts = products.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

  return ( 
    <>
      <div className="md:mx-32 mx-6 my-8">
        <div className="">
          <div>
              <input 
                onChange={handleSearch}
                value={search}
                className="input" 
                placeholder="Search products..." 
                type='search'
              />
            </div>
        </div>

        <ProductList products={filteredProducts} loading={loading}/>
        
    </div>
    </>
   );
}
 
export default Clothings;