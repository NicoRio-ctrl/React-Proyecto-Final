import {useContext} from "react"
import {contextCreator} from "../../context/ContextCreator"
import {Link} from "react-router-dom"
import {getTotalCartPrice} from "../../../utilities/getTotalCartPrice.js"
import {getDerivedCart} from "../../../utilities/getDerivedCart.js"
import {useEffect} from "react"
import "../../navbar/Navbar.css"
import { FaCartShopping } from "react-icons/fa6";

export default function CartResume() {
  const {derivedCart, cart, handleDerivedCart} = useContext(contextCreator)
  // useEffect actualiza derivedCart cuando cambie el carrito
  useEffect(() => {
    const newDerivedCart = getDerivedCart(cart)
    handleDerivedCart(newDerivedCart)
  }, [cart]) // Solo se ejecuta cuando cambia el carrito

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
