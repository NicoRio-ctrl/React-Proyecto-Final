import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import App from './App.jsx'
import Home from './components/pages/home/Home.jsx'
import ProductList from './components/pages/home/home_components/ProductList.jsx'
import OutstandingProducts from './components/pages/home/home_components/OutstandingProducts.jsx'
import Product from './components/pages/home/home_components/Product.jsx'
import Login from './components/pages/Login.jsx'
import Register from './components/pages/Register.jsx'
import Cart from './components/pages/Cart.jsx'
import './index.css'
import { ProductContextProvider } from './components/context/ProductContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <Routes>
            <Route path="/" element={<App />}>
              <Route path="home" element={<Home />}>
                <Route path="product-list" element={<ProductList/>}>
                  <Route path="product" element={<Product/>} />
                </Route>
                <Route path='outstanding-products' element={<OutstandingProducts/>} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path='cart' element={<Cart/>}/>
              <Route path='*' element={<h1>404</h1>} />
            </Route>
        </Routes>
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// npm add react-router-dom
// npm install react-hook-form

/*
  PASOS PARA HOSTEAR SERVIDOR DE DESARROLLO CON LIVESHARE

  1) Open liveshare
  2) Abrir puerto en 'ports' = puerto npm
  3) Cambiar a publico
  4) Compartir link
  5) Enjoy
*/


/*
  COSAS QUE FALTAN
  1) VALIDACION 
    -> watch
    -> setValue
    -> reset
    -> handleSubmit
  2) PRODUCTS & PRODUCT OKKKKK
    -> estructurar mejor la informacion + css puta madre (solo falta el css, no seas pajero)
    -> trasladar todo el return de products a product 
  3) HOME 
    -> Armar home + css
  4) Login y Register
    -> css, pajero
    -> conectarlo con la base de datos (todo con tal de no hacer el css, igual lo vas a hacer antes del css)
  5) CARRITO
    -> todo (esperar a que el profe lo explique)
  6) EMPROLIJAR CODIGO OKKKKKKK
    -> Idioma
    -> Comentarios
    -> Variables
    -> Funciones
  7) EMPAQUETAR TODO EN CARPETAS OKKKKKKK
    -> seguir el arbol de rutas
  8) CSS a morir (lo dejo a nico..,. la concha de tu madre) Pending...


  - BUSQUEDA
  - FILTRADO POR PRECIO
  - ORDENAMIENTO

  - CARRITO Y EXTRAS
  - LOGIN & REGISTER WITH FIREBASE
*/