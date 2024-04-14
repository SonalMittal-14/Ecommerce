import React from 'react';
import NavBarPage from './Components/NavBarPage'
import MainPage from './Components/MainPage';
import Footer from './Components/Footer';
import {Routes,Route} from "react-router-dom";
import ProductDetails from './Components/ProductDetails';

const App = () => {
  return (
    <div className=''>
      <NavBarPage/>
        <Routes>

          <Route path="/" element={<MainPage/>}></Route>
          <Route path='productDetails/:id' element={<ProductDetails/>}></Route>
        </Routes>
      <Footer/>
    </div>
  )
}   

export default App