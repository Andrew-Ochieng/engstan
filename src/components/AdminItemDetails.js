import { Link } from "react-router-dom";

const AdminItemDetails = ({products}) => {
    const handleDelete =()=>{
        fetch(`http://localhost:3000/products${products.id}`, { method: 'DELETE' })
        .then(response => {
          if (response.ok) {
            // remove the product from the UI
            const updatedProducts = products.filter(product => product.id !== products.id);
          }
        });
    }
    return ( 
        <>
            {products.map((product) => (
                <div key={product.id} className="my-4 mx-2 p-1 rounded-lg bg-[#084E7A] shadow-lg hover:shadow-xl">
                  <div>
                    <img src={product.image_url} alt="" className='thumb p-2 bg-white rounded-lg '/>
                  </div>
                  <div className="py-4 px-3 mt-2">
                    <div>
                      <h2 className="text-gray-300 text-sm font-light">Price: ${ product.price }</h2>
                      <h3 className="font-medium text-white truncate">{product.productName}</h3>
                    </div>
                    <button className="mt-4">
                      <Link 
                      to={`/${product.id}`} 
                      className='btn'
                      >
                        More Details 
                      </Link>
                    </button>
                    <button className="mt-4" onClick={handleDelete}>
                     Delete 
                    </button>
                  </div>
                </div>
            ))}
        </>
     );
}
 
export default AdminItemDetails;