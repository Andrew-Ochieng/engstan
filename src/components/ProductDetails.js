import { HiShoppingCart } from "react-icons/hi";
import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

const ProductDetails = () => {
    const { id } = useParams()
    const { data: product, error, isLoading} = UseFetch('https://engstanapi-production.up.railway.app/products/' + id)

    return ( 
        <>
            <div className='md:mx-32 mx-8 md:mt-16 mt-8 md:mb-32 mb-16'>
                { isLoading && <h4 className="text-pink-500 font-semibold md:text-2xl text-xl">Loading data..</h4>}
                { error && <h4 className="text-[#C70B38]">{ error }</h4>}

                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="">
                    <h5 class="font-bold border-b-2 mb-4 pb-2 text-lg ">Plain</h5>
                    <p className="text-xl my-6 text-[#C70B38]">Price: Ksh{ product.Plain_price }</p>
                        <img className="img w-full rounded-lg" src={product.image_url} alt="product thumb"/>
                    </div>
                    <div className="">
                    <h5 class="font-bold border-b-2 mb-4 pb-2 text-lg ">Branded</h5>
                    <p className="text-xl my-6 text-[#C70B38]">Price: Ksh{ product.Branded_price }</p>
                        <img className="img w-full rounded-lg" src={product.brandedimage} alt="product thumb"/>
                    </div>
                    <div className="">
                        <h2 className="text-4xl my-6">{ product.productName }</h2>
                        <h3 class="text-gray-800 font-bold border-b-2 mb-4 pb-2 text-lg ">Product description:</h3>
                        <p class="mb-6 font-light text-md ">{ product.description }</p>

                        <div className="md:mb-10 mb-6">
                            <h6 className="md:text-lg  text-[#C70B38] md:mb-6 mb-4">Delivery Charges: 
                                <span className="text-base text-gray-800 font-light mx-1">Free delivery within Nairobi CBD and at subsidized charges countrywide</span>
                            </h6>
                        </div>
                        <button>
                            <a 
                                className="btn flex items-center space-x-2"
                                href="https://api.whatsapp.com/send?phone=254769188331" 
                                method="get" 
                                target="_blank"
                                rel="noreferrer"
                                >
                                <HiShoppingCart className="text-xl" />
                                <span>Chat with Us</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProductDetails;