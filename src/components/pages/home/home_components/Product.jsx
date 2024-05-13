import {Link} from "react-router-dom"
import {useParams} from "react-router-dom"
import {useContext} from "react"
import {contextCreator} from "../../../context/ContextCreator"
import "./Card.css"

export default function Product() {
  const {productID} = useParams()
  const {dataProducts, addToCart, user} = useContext(contextCreator)
  console.log(productID)

  const ourProduct = () => {
    return dataProducts.filter((item) => item.id === parseInt(productID))
  }

  const [storeOurProduct] = ourProduct()

  console.log("soy storeOurProduct", storeOurProduct)
  console.log(productID)

  return (
    <>
      <div className="content-container">
        <section className="flexbox">
          <article key={storeOurProduct.id} className="flex-item item--individual">
            <img src={storeOurProduct.image} className="product-image" alt="Product" />
            <p className="product-title">{storeOurProduct.title}</p>
            <p className="product-price">${storeOurProduct.price}</p>
            <p className="product-individual">Description: {storeOurProduct.description}</p>
            <p className="product-individual">Category: {storeOurProduct.category}</p>
            <p className="product-individual">Rate: {storeOurProduct.rating.rate}</p>
            <p className="product-individual">Count: {storeOurProduct.rating.count}</p>
            {user ? (
                <button className="add-to-cart-button" onClick={() => addToCart(storeOurProduct)}>
                  Add to Cart 🛒
                </button>
              ) : (
                <p className="product-individual">Login for Adding to Cart</p>
              )
            }
            <Link to={-1}>Back</Link>
          </article>
        </section>
      </div>
    </>
  )
}
