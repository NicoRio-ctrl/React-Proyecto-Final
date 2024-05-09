import {useContext, useEffect} from "react"
import {contextCreator} from "../../context/ContextCreator"
import {getDerivedCart} from "../../../utilities/getDerivedCart.js"
import {Link} from "react-router-dom"
import {getTotalCartPrice} from "../../../utilities/getTotalCartPrice.js"
import "../../navbar/Navbar.css"
import "../home/home_components/Card.css"

export default function () {
  const {cart, derivedCart, handleDerivedCart, removeFromCart, removeOneItemFromCart} = useContext(contextCreator)
  console.log("Soy cart =>", cart)
  console.log("Soy derivedCart =>", derivedCart)
  // useEffect actualiza derivedCart cuando cambie el carrito
  useEffect(() => {
    const newDerivedCart = getDerivedCart(cart)
    handleDerivedCart(newDerivedCart)
  }, [cart]) // Solo se ejecuta cuando cambia el carrito

  return (
    <>
      <section className="content-container">
        <p className="product-price">Total price cart: ${getTotalCartPrice(derivedCart)}</p>

        <Link className="navbar__item" to={-1}>
          Back
        </Link>
        <article className="flexbox">
          {derivedCart.map((data) => (
            <div className="flex-item" key={data.id}>
              <img src={data.image} className="product-image" alt="Product" />
              <p className="product-title">Title: {data.name}</p>
              <p className="product-individual">Quantity: {data.quantity}</p>
              <p className="product-price">${data.totalPrice.toFixed(2)}</p>
              <button className="add-to-cart-button" onClick={() => removeFromCart(data.id)}>
                ✖️
              </button>
              <button className="add-to-cart-button2" onClick={() => removeOneItemFromCart(data.id)}>
                ➖
              </button>
            </div>
          ))}
        </article>
      </section>
    </>
  )
}
