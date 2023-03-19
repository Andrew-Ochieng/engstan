import { useState } from "react"

const Addproducts = () => {
    const [productName, setProductName] = useState('')
    const [Plain_price, setPrice] = useState('')
    const [Branded_price, setBPrice] = useState('')
    const [product_type, setType] = useState('')
    const [image_url, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [brandedimage,setBrandedImage]=useState('')

    const handleForm = (e) => {
        e.preventDefault();
        
        const products = {productName, Plain_price, Branded_price, product_type, image_url, brandedimage, description}
        console.log(products)

        const api = "https://engstanapi-production.up.railway.app/products"
        fetch(api, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(products)
        })
            .then((res) => {
            console.log(res)
            setTimeout(() => { 
                alert("You have successfully aadded a new product :)")

                    // clear inputs after submission
                setProductName('')
                    setPrice('')
                    setType('')
                    setImage('')
                    setDescription('')
                    setBrandedImage('')
                    setBPrice('')
            }, 2000);
        }) 

    }

    return (
        <>
            <div className="bg-white md:mx-32 md:mb-16 mb-8 md:p-8 p-4 rounded-lg">
                <h1 className="content-title">Add Products</h1>
                <form onSubmit={handleForm} >
                    <div className="my-4">
                        <input 
                            onChange={(e) => setProductName(e.target.value)}
                            value={productName}
                            className="input" 
                            type="text" name="productName" 
                            placeholder="Product Name" 
                            required 
                        />
                    </div>
                    <div className="my-4">
                        <select className="px-3 py-2 input" required name={product_type}
                            onChange={(e) => setType(e.target.value)} >
                            <option value="Clothings">Clothings</option>
                            <option value="mechanized">Mechanized</option>
                        </select>
                    </div>
                    <div className="my-4">
                        <input 
                            onChange={(e) => setImage(e.target.value)}
                            value={image_url}
                            className="input" 
                            name="image" 
                            placeholder="Image.."
                            required 
                        />
                    </div>
                    <div className="my-4">
                        <input 
                            onChange={(e) => setPrice(e.target.value)}
                            value={Plain_price}
                            className="input" 
                            type="number" 
                            name="price" 
                            placeholder="Plain price" 
                            required 
                        />
                    </div>
                    <div className="my-4">
                        <input 
                            onChange={(e) => setBrandedImage(e.target.value)}
                            value={brandedimage}
                            className="input" 
                            name="image" 
                            placeholder="Branded image url"
                            required 
                        />
                    </div>
                    <div className="my-4">
                        <input 
                            onChange={(e) => setBPrice(e.target.value)}
                            value={Branded_price}
                            className="input" 
                            type="number" 
                            name="price" 
                            placeholder="Branded price" 
                            required 
                        />
                    </div>
                    <div className="my-4">
                        <textarea 
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            className="px-3 py-2 input" 
                            name="description" 
                            placeholder="Description" 
                            cols="30" 
                            rows="6"
                        ></textarea>
                    </div>
                    <button className="btn font-medium bg-[#084E7A] w-full">
                        Add Product
                    </button>
                    <div className="flex items-center justify-center mt-4">
                    <a 
                       className="btn space-x-2"
                         href="/adminproducts" 
                                >
                                <span >Check Products</span>
                            </a>
                            </div>
                </form>
            </div>
        </>
    );
}
 
export default Addproducts;