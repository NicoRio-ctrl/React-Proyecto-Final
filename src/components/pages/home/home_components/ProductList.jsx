import {useContext} from "react"
import {Outlet} from "react-router-dom"
import {contextCreator} from "../../../context/ContextCreator.jsx"
import {Link} from "react-router-dom"
import {useLocation} from "react-router-dom"
import {SeeMore} from "./SeeMore.jsx"
import Search from "./Search.jsx"
import FilterMaxPrice from "./FilterMaxPrice.jsx"
import Sort from "./Sort.jsx"
import "./ProductList.css"
import "./Card.css"

export default function ProductList() {
  const {dataProducts, isLoading, errorProducts, query, maxPrice, addToCart, user} = useContext(contextCreator)
  const location = useLocation()

  if (isLoading) {
    return <p>Cargando...</p>
  } else if (errorProducts) {
    return <p>{error.message}</p>
  }

  const conditionalRendering = () => {
    if (location.pathname === "/product-list") {
      return (
        <>
          <nav className="filters">
            <div className="filters__options">
              <Search />
              <Sort />
              
            </div>
            <FilterMaxPrice/>
          </nav>

          <div className="content-container">
            <section className="flexbox">
              {dataProducts
                .filter((prod) => prod.price <= maxPrice && prod.title.toLowerCase().includes(query.toLowerCase()))
                .map((data) => (
                  <article key={data.id} className="flex-item">
                    <Link className="product-link" to={`/product-list/${data.id}`}>
                      <img src={data.image} className="product-image" alt="Product" />
                    </Link>
                    <p className="product-title">{data.title}</p>
                    <p className="product-price">${data.price}</p>
                    <SeeMore dataId={data.id} description={data.description} />

                    {user ? (                      
                      <button className="add-to-cart-button" onClick={() => addToCart(data)}>
                        Add to Cart 🛒
                      </button>
                      ) : (
                        <p className="product-individual">Login for Adding to Cart</p>
                      )
                    }

                  </article>
                ))}
            </section>
          </div>
        </>
      )
    } else {
      return <Outlet />
    }
  }

  return conditionalRendering()
}
