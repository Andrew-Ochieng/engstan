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

function App() {
  const { data: products } = UseFetch('http://localhost:3000/products')

  console.log(products)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/about' element={ <About /> }/>
          <Route path='/products' element={ <Products products={products} /> }/>
          <Route path='/contact' element={ <Contact /> }/>
          <Route path='/login' element={ <Login /> }/>
          <Route path='/contact' element={ <Contact /> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
