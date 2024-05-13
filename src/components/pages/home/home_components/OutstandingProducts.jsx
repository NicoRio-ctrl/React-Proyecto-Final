import React, {useContext} from "react"
import {Link, Outlet, useLocation} from "react-router-dom"
import {contextCreator} from "../../../context/ContextCreator"
//import {SeeMore} from "./SeeMore.jsx"
import "./OutstandingProducts.css"
import "./Card.css"
import "../../../../App.css"

export default function OutstandingProducts() {
  const {dataProducts, isLoading, errorProducts, addToCart, user} = useContext(contextCreator)
  const location = useLocation()

  const getOutstandingProducts = () => {
    const sortedData = dataProducts.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 4)
    return sortedData
  }

  if (isLoading) {
    return <p>Cargando...</p>
  } else if (errorProducts) {
    return <p>{error.message}</p>
  }

  const outstandingProducts = getOutstandingProducts()

  const conditionalRendering = () => {
    if (location.pathname === "/") {
      return (
        <div className="content-container">
          <h2>OUTSTANDING PRODUCTS</h2>
          <section className="flexbox">
            {outstandingProducts.map((data) => (
              <article key={data.id} className="flex-item">
                <Link className="product-link" to={`/outstanding-products/${data.id}`}>
                  <img src={data.image} className="product-image" alt="Product" />
                </Link>
                <p className="product-title">{data.title}</p>
                <p className="product-price">${data.price}</p>
                <p className="product-description">{data.description.slice(0, 100)}</p>
                {/*<SeeMore dataId={data.id} description={data.description} />*/}
                
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
      )
    } else {
      return <Outlet />
    }
  }

  return conditionalRendering()
}
