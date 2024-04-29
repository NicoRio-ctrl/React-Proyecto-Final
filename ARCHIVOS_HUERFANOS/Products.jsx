import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Products(){
  const [dataProducts, setDataProducts] = useState([])

useEffect(() => {
  function getData(endpoint) {
    fetch(endpoint)
      .then((res) => {
        console.log("Respuesta de la peticion -> ", res.status)
        return res.json()
      })
      .then((data) => {
        console.log("Datos recibidos -> ", data)
        setDataProducts(data)
      })
      .catch((error) => console.error(error.message))
  }
  getData('https://fakestoreapi.com/products')
}, [])
  
  return (
    <>
        <h2>Products List</h2>
        <div>
            {dataProducts && dataProducts.map((datos) => (
                <div key={datos.id}>

                    <br></br>

                    <p>{datos.title} ${datos.price}</p>
                    <p>Código producto: 1A3F-9B2E-6C8{datos.id}</p>
                    <p>{datos.description}</p>
                    
                    <br></br>

                </div>
            ))}
        </div>
    </>
);

}