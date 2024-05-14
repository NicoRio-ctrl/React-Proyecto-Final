export const productService = (endpoint) => {
  return fetch(endpoint)
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.error(error.message)) 
}

export const getCartFromStorage = () => {
  const storedCart = window.localStorage.getItem("cart");
  const cart = JSON.parse(storedCart);
  return cart ? cart : [];
}