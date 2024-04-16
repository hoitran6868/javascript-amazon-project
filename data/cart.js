export const cart = [];

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        //Check if the product is already in the cart
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    //If it is in the cart,increase the quantity
    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        //If it is not in the cart,add it to the cart
        cart.push({
            productId: productId,
            quantity: 1,
        });
    }
}
