import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Login from './component/Login';

function App() {
  return (
    <div>
    
      <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>

    </div>
    
  );
}

export default App;
