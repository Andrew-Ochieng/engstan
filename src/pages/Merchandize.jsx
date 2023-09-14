import ProductList from "../components/Products/ProductList";

const Merchandize = ({products, loading}) => {
    return ( 
        <>
            <div className="md:mx-32 mx-6 my-8">
               <ProductList products={products} loading={loading} />
            </div> 
        </>
     );
}
 
export default Merchandize;