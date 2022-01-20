"use strict";

import { addRow, deleteRow, updateTotal } from "./bill.js";

const purchase = document.getElementById("purchase");
const items = document.getElementById("items");

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

items.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'button') {
        const serial = target.dataset.attr;
        
        if (serial) {
            const price = deleteRow(serial);
            price ? updateTotal(-(Number(price))): alert("Failed to delete row");
        }
    }
});