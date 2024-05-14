import { useContext } from "react";
import { contextCreator } from "../../context/ContextCreator";
import { auth } from "../../../services/firebaseService"
import "../home/home_components/Card.css"

export default function Signout() {
  
  const {handleUser, handleDerivedCart, handleCart} = useContext(contextCreator)
  
  const signout = () => {
    auth
      .signOut()
      .then(() => {
        handleUser(null)
        handleCart([])
        handleDerivedCart([])
        window.localStorage.removeItem("cart");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return <button className="add-to-cart-button2" onClick={signout}>Signout</button>;
}