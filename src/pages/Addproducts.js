import { useState } from "react"

const Addproducts = () => {
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [product_type, setType] = useState('')
    const [image_url, setImage] = useState('')
    const [description, setDescription] = useState('')

    const handleForm = (e) => {
        e.preventDefault();
        
        const products = {productName, price, product_type, image_url, description}
        console.log(products)

        const api = "http://localhost:3000/products"
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
                        <input 
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            className="input" 
                            type="number" 
                            name="price" 
                            placeholder="Price" 
                            required 
                        />
                    </div>
                    <div className="my-4">
                        <select className="px-3 py-2 input" required value={product_type}
                            onChange={(e) => setType(e.target.value)} >
                            <option value="Plain">Plain</option>
                            <option value="Branded">Branded</option>
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
                </form>
            </div>
        </>
    );
}
 
export default Addproducts;