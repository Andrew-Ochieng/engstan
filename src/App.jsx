import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Clothings from './pages/Clothings';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import UseFetch from './components/UseFetch';
import Login from './pages/Admin/Login';
import ProductDetails from './components/Products/ProductDetails';
import Addproducts from './pages/Admin/Addproducts';
import AdminProduct from './components/Admin/AdminProduct';
import Gallery from './pages/Gallery';
import Merchandize from './pages/Merchandize';
import { useEffect, useState } from 'react';
import { supabase } from './config/supabaseConfig';
import { ScrollToTop } from './components/ScrollToTop';
function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await supabase
          .from("products")
          .select()
          .order("id", {ascending: true})

        setProducts(data)
        setLoading(false)
        setError(false)
      } catch (err) {
        console.log(err)
        setLoading(false)
        setError(error)
      }
    }

    getProducts()
  }, [])
  
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home products={products} loading={loading} /> }/>
          <Route path='/about' element={ <About /> }/>
          <Route path='/clothings' element={ <Clothings products={products.filter((item) => item.product_type == "clothings")} loading={loading}  /> }/>
          <Route path='/products/:id' element={ <ProductDetails products={products} loading={loading} /> }/>
          <Route path='/merchandize' element={ <Merchandize products={products} loading={loading} /> } />
          <Route path='/contact' element={ <Contact /> }/>
          <Route path='/admin' element={ <Login /> }/>
          <Route path='/contact' element={ <Contact /> }/>
          <Route path='/gallery' element={ <Gallery /> }/>
          <Route path='/addproducts' element={ <Addproducts /> }/>
          <Route path='/adminproducts' element={ <AdminProduct products={products} /> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
