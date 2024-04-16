export const cart = [
    {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
    },
    {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
    },
];

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
