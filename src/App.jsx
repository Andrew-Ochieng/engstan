import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import UseFetch from './components/UseFetch';
import Login from './pages/Admin/Login';
import ProductDetails from './components/Products/ProductDetails';
import Addproducts from './pages/Admin/Addproducts';
import AdminProduct from './components/Admin/AdminProduct';
import Gallery from './pages/Gallery';
import { useEffect, useState } from 'react';
import { supabase } from './config/supabaseConfig';
function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await supabase.from("products").select()
        setProducts(data)
        setLoading(false)
        setError(false)
        // console.log(data)
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
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home products={products} loading={loading} /> }/>
          <Route path='/about' element={ <About /> }/>
          <Route path='/products' element={ <Products products={products} loading={loading}  /> }/>
          <Route path='/products/:id' element={ <ProductDetails products={products} loading={loading} /> }/>
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
