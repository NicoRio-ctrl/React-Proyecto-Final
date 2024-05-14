/*Componente no utilizado debido a dificultades en la implementación del CSS. Sin embargo, es funcional*/
import React, { useContext } from "react"
import { contextCreator } from "../../../context/ContextCreator"
import "./Card.css"

export const SeeMore = ({dataId, description}) => {
  const {seeMore, handleSeeMore} = useContext(contextCreator)

  if (seeMore === dataId) {
    return (
      <>
        <p className="product-individual">{description}</p>
        <button className="add-to-cart-button2" onClick={() => handleSeeMore(null)}>
          See less...
        </button>
      </>
    )
  } else {
    return (
      <>
        <p className="product-description">{description.slice(0, 100)}</p>
        <button className="add-to-cart-button2" onClick={() => handleSeeMore(dataId)}>
          See more...
        </button>
      </>
    )
  }
}