"use strict";

import { addRow, updateTotal } from "./bill.js";

const purchase = document.getElementById("purchase");

// Adding event listeners
purchase.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target?? purchase;

    if (form) {
        // Getting item name
        const item = form[0];
        
        // Getting price
        const price = form[1];

        addRow(item.value, price.value);

        updateTotal(Number(price.value));

        item.value = '';
        price.value = '';
    }
});