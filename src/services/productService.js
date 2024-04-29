export const productService = (endpoint) => {

     return fetch(endpoint)
        .then((res) => {
          console.log("Respuesta de la peticion -> ", res.status);
          return res.json();
        })
        .catch((error) => console.error(error.message))
}