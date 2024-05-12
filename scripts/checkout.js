import { renderOrderSummary } from "./chekout/orderSummary.js";
import { renderPaymentSummary } from "./chekout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import "../data/cart-class.js";
//import "../data/backend-practice.js";

Promise.all([
    new Promise((resolve) => {
        loadProducts(() => {
            resolve("value1");
        });
    }),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    }),
]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});

/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve("value1"); //go to the next step
    });
})
    .then((value) => {
        console.log(value);

        return new Promise((resolve) => {
            loadCart(() => {
                resolve(); //go to the next step
            });
        });
    })
    .then(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
*/

/*Call back
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/
