import { React, useState, useEffect } from "react";
import { productService } from "../../services/productService";
import { contextCreator } from "./ContextCreator";

export const ProductContextProvider = ({children}) => {
    
    const [dataProducts, setDataProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorProducts, setErrorProducts] = useState(null);
    const [bestProducts, setBestProducts] = useState([]);

    //esta mierda no funciona cuando debería
    function RatingFilter(dataProducts){
        const dataSorted = dataProducts.toSorted((a, b) => a.rating.rate - b.rating.rate);

        setBestProducts(dataSorted);
        console.log('SOY LOS DATOS FILTRADOS ->', dataSorted);
    }
    
    const fetchData = async () => {
        try {
          setErrorProducts(null);
          setIsLoading(true);
          const data = await productService('https://fakestoreapi.com/products');
          console.log("Soy del provider ->", data)
          setDataProducts(data);
        } catch (error){
            console.error(error);
            setErrorProducts(error.message);
        } finally {
          setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        RatingFilter(dataProducts);
    }, []);


    

    return(
        <>
            <contextCreator.Provider value={{dataProducts, isLoading, errorProducts, bestProducts}}>
                {children}
            </contextCreator.Provider>
        </>
    )
}