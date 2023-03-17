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
import ProductDetails from './components/ProductDetails';
import Addproducts from './pages/Addproducts';
import AdminProduct from './components/AdminProduct';
function App() {
  const { data: products } = UseFetch('https://engstanapi-production.up.railway.app/products')

  console.log(products)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={ <Home /> }/>
          <Route path='/about' element={ <About /> }/>
          <Route path='/' element={ <Products products={products} /> }/>
          <Route path='/:id' element={ <ProductDetails products={products} /> }/>
          <Route path='/contact' element={ <Contact /> }/>
          <Route path='/admin' element={ <Login /> }/>
          <Route path='/contact' element={ <Contact /> }/>
          <Route path='/addproducts' element={ <Addproducts /> }/>
          <Route path='/adminproducts' element={ <AdminProduct products={products} /> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
