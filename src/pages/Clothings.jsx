import { useState } from "react";
import ProductList from "../components/Products/ProductList";


const Clothings = ({products, loading}) => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const filteredProducts = products.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

  return ( 
    <>
      <div className="xl:mx-32 md:mx-16  mx-6 my-8">
        <div className="flex items-center justify-center">
          <input 
            onChange={handleSearch}
            value={search}
            className="input" 
            placeholder="Search products..." 
            type='search'
          />
        </div>

        <ProductList products={filteredProducts} loading={loading}/>
        
    </div>
    </>
   );
}
 
export default Clothings;