export const productService = (endpoint) => {

     return fetch(endpoint)
        .then((res) => {
          //console.log("Respuesta de la peticion -> ", res.status);
          return res.json();
        })
        .catch((error) => console.error(error.message)) 
}

export const getCartFromStorage = () => {

  const storedCart = window.localStorage.getItem("cart");
  const cart = JSON.parse(storedCart);
  return cart ? cart : [];

}