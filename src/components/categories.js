import { useState } from "react"

const Categories = () => {
    const [allProducts, setAllProducts] = useState([])
    // const []


    const handleAll = () => {
        fetch('/products') 
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data)
                console.log(data)
            })
    }

    return ( 
        <>
            <div className="flex justify-between items-center space-x-2">
                <button onClick={handleAll} className="category-btn hover:text-[#084e7aa3]">
                    All Products
                </button>
                <button className="category-btn hover:text-[#084e7aa3]">
                    Plain Products
                </button>
                <button className="category-btn hover:text-[#084e7aa3]">
                    Branded Products
                </button>
            </div>
        </>
     );
}
 
export default Categories;