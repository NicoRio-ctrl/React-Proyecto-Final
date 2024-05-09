import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/pages/home/Home.jsx'
import ProductList from './components/pages/home/home_components/ProductList.jsx'
import OutstandingProducts from './components/pages/home/home_components/OutstandingProducts.jsx'
import Product from './components/pages/home/home_components/Product.jsx'
import Login from './components/pages/login/Login.jsx'
import Register from './components/pages/register/Register.jsx'
import Cart from './components/pages/cart/Cart.jsx'
import { ProductContextProvider } from './components/context/ProductContextProvider.jsx'
import './App.css'


export default function App(){

  return (
    <>
      <BrowserRouter>
        <ProductContextProvider>
          <Routes>
              <Route path="/" element={<Home />}>
                <Route path="product-list" element={<ProductList/>}>
                  <Route path=":productID" element={<Product/>} />
                </Route>
                <Route path='outstanding-products' element={<OutstandingProducts/>} >
                  <Route path=":productID" element={<Product/>} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path='cart' element={<Cart/>}/>
                <Route path='*' element={<h1>404</h1>} />
              </Route>
          </Routes>
        </ProductContextProvider>
      </BrowserRouter>
    </>
  )
}