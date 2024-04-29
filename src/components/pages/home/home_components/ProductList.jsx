import { useContext } from "react"
import { contextCreator } from '../../../context/ContextCreator.jsx'
import { Link } from "react-router-dom";

export default function ProductList(){

    const {dataProducts, isLoading, errorProducts} = useContext(contextCreator);
    console.log("Soy del product -> ", dataProducts);

    if(isLoading){
        return <p>Cargando...</p>
    }else if(errorProducts){
        return <p>{error.message}</p>
    }

    function generarCodigoProducto(id){

        return id;
    }

    return(
        <>
            <h2>Products List</h2>
            <div>
                {dataProducts && dataProducts.map((datos) => (
                    <div key={datos.id}>

                        <br />

                        <p>{datos.title} ${datos.price}</p>

                        <p>SKU: {generarCodigoProducto(datos.id)}</p>
                        
                        <p>{datos.description}</p>
                        
                        <br />
                        <Link className="product_link" to={`/home/product-list/product/${datos.id}`}>
                            Ver más...
                        </Link>

                    </div>
                ))}
            </div>
        </>
    )
}

   //<p>Código producto: 1A3F-9B2E-6C8{datos.id}</p>

