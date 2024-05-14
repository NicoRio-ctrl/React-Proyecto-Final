import React, { useContext } from "react"
import { NavLink} from "react-router-dom"
import { FaShoppingBag } from "react-icons/fa"
import { contextCreator } from "../context/ContextCreator.jsx"
import CartResume from "../pages/cart/cartResume.jsx"
import Logout from '../pages/logout/Logout.jsx'
import './Navbar.css'

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
          <NavLink className="navbar__item" to={"/"}>
              {user} <Logout/> 
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