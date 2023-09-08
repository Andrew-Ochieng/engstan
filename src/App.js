import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import UseFetch from './components/UseFetch';
import Login from './pages/Login';
import ProductDetails from './components/Products/ProductDetails';
import Addproducts from './pages/Addproducts';
import AdminProduct from './components/AdminProduct';
import GalleryPage from './pages/GalleryPage';
function App() {
  const { data: products } = UseFetch('http://localhost:3000/products')

  // console.log(products)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home products={products} /> }/>
          <Route path='/about' element={ <About /> }/>
          <Route path='/products' element={ <Products products={products} /> }/>
          <Route path='/products/:id' element={ <ProductDetails products={products} /> }/>
          <Route path='/contact' element={ <Contact /> }/>
          <Route path='/admin' element={ <Login /> }/>
          <Route path='/contact' element={ <Contact /> }/>
          <Route path='/gallery' element={ <GalleryPage /> }/>
          <Route path='/addproducts' element={ <Addproducts /> }/>
          <Route path='/adminproducts' element={ <AdminProduct products={products} /> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
