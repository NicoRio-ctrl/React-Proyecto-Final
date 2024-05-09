import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import CartResume from "../pages/cart/cartResume.jsx"
import './Navbar.css'
import { FaShoppingBag } from "react-icons/fa"
import { ProductContextProvider } from "../context/ProductContextProvider.jsx"
import { contextCreator } from "../context/ContextCreator.jsx"
import { useContext } from "react"

export default function Navbar() {
  const {user} = useContext(contextCreator)
  
  return (
    <>
      <nav className="navbar">

        <NavLink to={"/"} className="navbar__item item--logo">
          <FaShoppingBag className="item--icon"/><h1 className="item--title">Fake Store</h1>
        </NavLink>
        
       
       {
        !user ? (
          <>
            <NavLink className="navbar__item" to={"/register"}>
            Register
            </NavLink>

            <NavLink className="navbar__item" to={"/login"}>
              Login
            </NavLink>
          </>
        ) : (
          <NavLink className="navbar__item" to={"/logout"}>
              Logout {user}
          </NavLink>
        )
       }
       

       
        

        <NavLink className="navbar__item" to={"/product-list"}>
          Shop
        </NavLink>

        <NavLink className="navbar__item" to={"/cart"}>
          <CartResume/>
        </NavLink>

      </nav>
    </>
  )
}
