import React,{ useContext} from "react"
import { contextCreator } from "../../../context/ContextCreator";

export default function OutstandingProducts(){
    const {bestProducts} = useContext(contextCreator);
    console.log("Soy del DESTACADO EN ESPANISH -> ", bestProducts);



    return(
        <>
            <h1>SOMOS LOS PRODUCTOS DESTACADOS</h1>

            <section>
                {bestProducts && bestProducts.map((data) => {
                    <article key={bestProducts.id}>
                        <p>{bestProducts.title}</p>
                    </article>
                })}
            </section>
        </>
    )
}