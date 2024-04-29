import React from "react"
import {Outlet} from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/pages/Footer.jsx"
import './App.css'

export default function App(){

  return (
    <>
      <header className="header">
              <Navbar/>
      </header>
      <div className="grid">
        <main className="main">
          <Outlet/>
        </main>

        <footer className="footer">
          <Footer/>
        </footer>
      </div>
    </>
  )
}