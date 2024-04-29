import React from "react"
import {Form, Link} from "react-router-dom"
import './Navbar.css'

export default function Navbar() {

    return (
      <>
        <nav className="navbar">

          <Link className="menu_link" to={"/home"}>
              <img src="logo_edited.png"></img>
          </Link>

          <Link className="menu_link" to={"/login"}>
            Login
          </Link>

          <Link className="menu_link" to={"/register"}>
            Register
          </Link>

          <Link className="menu_link" to={"/cart"}>
            Cart
          </Link>

        </nav>
      </>
    )
  }