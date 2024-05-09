import {React, useState, useEffect} from "react"
import {productService} from "../../services/productService"
import {contextCreator} from "./ContextCreator"

import {auth} from '../../services/firebaseService'

export const ProductContextProvider = ({children}) => {
  // Variables de estado y Setters | useState
  const [dataProducts, setDataProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorProducts, setErrorProducts] = useState(null)
  const [query, setQuery] = useState("")
  const [maxPrice, setmaxPrice] = useState(1000)
  const [sortedMaxToMin, setSortedMaxToMin] = useState(false)
  const [cart, setCart] = useState([])
  const [derivedCart, setDerivedCart] = useState([])
  const [seeMore, setSeeMore] = useState(null)

  const [user, setUser] = useState("Pepote")

  // Funciones intermediarias handles
  const handleQuery = (searchTerm) => setQuery(searchTerm)
  const handleMaxPrice = (price) => setmaxPrice(price)
  const handleSort = () => {
    if (sortedMaxToMin) {
      const sortedProducts = dataProducts.toSorted((a, b) => a.price - b.price)
      setDataProducts(sortedProducts)
    } else {
      const sortedProducts = dataProducts.toSorted((a, b) => b.price - a.price)
      setDataProducts(sortedProducts)
    }
    setSortedMaxToMin(!sortedMaxToMin)
  }
  const handleDerivedCart = (newDerivedCart) => setDerivedCart(newDerivedCart)
  const handleSeeMore = (productId) => {
    setSeeMore((prevState) => (prevState === productId ? null : productId))
  }
  // Funciones que manipulan el carrito
  const addToCart = (prod) => setCart((previousValue) => [...previousValue, prod])
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id)) //filter descarta todos los id's que sean distintos al que pasamos (un enfermito)
  //const removeFromCart = (id) => cart.forEach((prod) => prod.find(prod.id === id) (hay que recorrer con un foreach, como un ser humnano normal)
  // Funciones que manipulan el carrito

  const removeOneItemFromCart = (id) => {
    const indexToRemove = cart.findIndex((element) => element.id === id)
    if (indexToRemove !== -1) {
      cart.splice(indexToRemove, 1)
      setCart([...cart])
    }

    const updatedDerivedCart = derivedCart
      .map((item) => {
        if (item.id === id) {
          return {...item, quantity: item.quantity - 1, totalPrice: item.totalPrice - item.price}
        }
        return item
      })
      .filter((item) => item.quantity > 0)
    setDerivedCart(updatedDerivedCart)
  }

  // Implementacion try catch | Async - Await para el fetching de datos (que esta en service)
  const fetchData = async () => {
    try {
      setErrorProducts(null)
      setIsLoading(true)
      const data = await productService("https://fakestoreapi.com/products")
      //console.log("Soy del provider ->", data)
      setDataProducts(data)
    } catch (error) {
      console.error(error)
      setErrorProducts(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  // Aplico el useEffect para implementar las funciones asyncronas
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {/* 'Exporto' las variables de estados y los handles para que los componentes obtengan acceso a dichas variables y funciones que modifican las mismas | Envolvemos el contexto con el provider*/}
      <contextCreator.Provider
        value={{
          dataProducts,
          isLoading,
          errorProducts,
          query,
          handleQuery,
          maxPrice,
          handleMaxPrice,
          sortedMaxToMin,
          handleSort,
          cart,
          addToCart,
          removeFromCart,
          derivedCart,
          handleDerivedCart,
          removeOneItemFromCart,
          seeMore,
          handleSeeMore,
          user
        }}
      >
        {children}
      </contextCreator.Provider>
    </>
  )
}
