import clothImg from "../../assets/photo4.jpg"
import { Link } from "react-router-dom"

const Categories = ({products}) => {
    const clothingsArr = products.filter((item) => item.product_type == 'clothings').length
    const merchandizeArr = products.filter((item) => item.product_type == 'merchandize').length

    return ( 
        <>
            <div className="flex items-center justify-center md:gap-8 gap-4 md:mt-16 mt-8 md:px-28 sm:px-16 px-4">
                <div className="category-card">
                    <Link to='/clothings'>
                        <img className="md:w-16 w-12" src={clothImg} alt="" />
                    </Link>
                    <div>
                        <Link to='/clothings' className="category-card-title">Clothings</Link>
                        <p className="category-card-description ">{clothingsArr} products</p>
                    </div>
                </div>
                <div className="category-card">
                    <Link to='/merchandize'>
                        <img className="md:w-16 w-12" src={clothImg} alt="" />
                    </Link>
                    <div>
                        <Link to='/merchandize' className="category-card-title">Merchandize</Link>
                        <p className="category-card-description ">{merchandizeArr} products</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Categories;