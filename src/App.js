//import logo from './logo.svg';
import React,{BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import About from './components/About';

function App() {
  return (
   <BrowserRouter>
   <Link to="/">About</Link>
   <Link to="Products">Products</Link>
   <Routes>
    <Route path="/" element={<About />} />
    <Route path="Products" element={<Products />}>

    </Route>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
