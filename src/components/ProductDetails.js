import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

const ProductDetails = () => {
    const { id } = useParams()
    const { data: product} = UseFetch('http://localhost:3000/products/' + id)

    return ( 
        <>
            <div className='md:mx-32 mx-8'>
                <div class="grid md:grid-cols-2 grid-cols-1">
                    <div class="p-6">
                        <img class="img" src={product.image_url} alt="product thumb"/>
                    </div>
                    <div class="p-6">
                        <h2 class="text-4xl my-6">{ product.productName }</h2>
                        <p class="text-xl my-6">Price: ${ product.price }</p>
                        <div className="md:mb-10 mb-6">
                            <h3 className="text-gray-800 font-semibold md:text-2xl">Colors:</h3>
                            <div className="grid grid-cols-4 mt-2">
                                <p className="radio-btn bg-black"></p>
                                <p className="radio-btn bg-red-500"></p>
                                <p className="radio-btn bg-blue-500"></p>
                                <p className="radio-btn bg-yellow-500"></p>    
                            </div>
                        </div>
                        <h3 class="font-bold border-b-2 mb-4 pb-2 text-lg ">Product description:</h3>
                        <p class="mb-6 font-light text-md ">{ product.description }</p>
                        <button>
                            <a 
                                className="btn flex"
                                href="https://api.whatsapp.com/send?phone=0731873750" 
                                method="get" 
                                target="_blank"
                                >
                                <i class="material-icons mr-2">add_shopping_cart</i>
                                <span >Add to Cart</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProductDetails;