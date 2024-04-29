import { Link, Outlet } from "react-router-dom"

export default function Home(){
    return(
        <>
            <div>
                <Link className="menu_link" to={"/home/product-list"}>
                    Products List
                </Link>

                <Link className="menu_link" to={"/home/outstanding-products"}>
                    Outstanding Products
                </Link>

                <Outlet/>
            </div>
        </>
    )
}