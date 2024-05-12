import { renderOrderSummary } from "./chekout/orderSummary.js";
import { renderPaymentSummary } from "./chekout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
//import "../data/cart-class.js";
//import "../data/backend-practice.js";

loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
