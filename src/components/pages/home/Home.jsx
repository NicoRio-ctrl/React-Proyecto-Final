import { Outlet } from "react-router-dom"
import Navbar from "../../navbar/Navbar.jsx"
import Footer from "../../footer/Footer.jsx"
import OutstandingProducts from "./home_components/OutstandingProducts.jsx"
import { useLocation } from 'react-router-dom';
import './Home.css'
import '../../../App.css'
import '../../../fonts/fonts.css'

export default function Home(){
    const location = useLocation();
    const conditionalRendering = () => location.pathname === '/' ? <OutstandingProducts /> : <Outlet />
    
    return(
        <>
            <div className="grid-container">
                <header className="header">
                    <Navbar/>
                </header>

                <main className="main">
                    {conditionalRendering()}
                </main>

                <footer className="footer">
                    <Footer/>
                </footer>
            </div>
        </>
    )
}