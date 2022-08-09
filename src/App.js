import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Product from './component/Product/Product';
import Info from './component/Info/Info';
import Cart from './component/Cart/Cart';
import Checkout from './component/Checkout/Checkout';
import About from './component/About/About';
import {Routes ,Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar/>
    <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/info/:id" element={<Info/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
