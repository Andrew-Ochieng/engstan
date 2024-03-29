import { HiShoppingCart } from "react-icons/hi";
import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

const AdminProductDetails = () => {
    const { id } = useParams()
    const { data: product, error, isLoading} = UseFetch('https://engstanapi-production.up.railway.app/' + id)

    return ( 
        <>
            <div className='md:mx-32 mx-8 md:mt-16 mt-8 md:mb-32 mb-16'>
                <h1 className="md:text-3xl text-xl font-semibold md:mb-8 mb-4 text-gray-900">Product {id}</h1>
                { isLoading && <h4 className="text-pink-500 font-semibold md:text-2xl text-xl">Loading data..</h4>}
                { error && <h4 className="text-red-500">{ error }</h4>}

                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="p-6">
                        <img className="img w-full rounded-lg" src={product.image_url} alt="product thumb"/>
                    </div>
                    <div className="p-6">
                        <h2 className="text-4xl my-6">{ product.productName }</h2>
                        <p className="text-xl my-6">Price: Ksh { product.Plain_price }</p>
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
                                className="btn flex items-center space-x-2"
                                href="https://api.whatsapp.com/send?phone=0769188331" 
                                method="get" 
                                target="_blank"
                                rel="noreferrer"
                                >
                                <HiShoppingCart className="text-xl" />
                                <span >Add to Cart</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default AdminProductDetails;