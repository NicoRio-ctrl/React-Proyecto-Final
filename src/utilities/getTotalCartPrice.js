export const getTotalCartPrice = (derivedCart) => {
    const totalPrice = derivedCart.reduce((previousValue, currentValue) => previousValue + currentValue.totalPrice, 0);
    return totalPrice.toFixed(2);
}