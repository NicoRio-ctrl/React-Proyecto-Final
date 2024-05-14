import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { contextCreator } from "../../context/ContextCreator"
import { getTotalCartPrice } from "../../../utilities/getTotalCartPrice.js"
import { getDerivedCart } from "../../../utilities/getDerivedCart.js"
import { FaCartShopping } from "react-icons/fa6";
import "../../navbar/Navbar.css"

export default function CartResume() {
  const {derivedCart, cart, handleDerivedCart} = useContext(contextCreator)
  useEffect(() => {
    const newDerivedCart = getDerivedCart(cart)
    handleDerivedCart(newDerivedCart)
  }, [cart])

  function totalAmountDerivedCart(derivedCart) {
    let totalAmount = 0
    for (let i = 0; i < derivedCart.length; i++) {
      for (let j = 0; j < derivedCart[i].quantity; j++) {
        totalAmount++
      }
    }
    return totalAmount
  }

  return derivedCart?.length ? (
    <>
      <Link className="navbar__item" to="/cart">
        <FaCartShopping /> ${getTotalCartPrice(derivedCart)} | Products: {derivedCart.length} | Total Amount:{" "}
        {totalAmountDerivedCart(derivedCart)}
      </Link>
    </>
  ) : (
    <p><FaCartShopping /> 0</p>
  )
}