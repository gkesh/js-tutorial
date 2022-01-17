"use strict";

let serial = 0;

const addRow = (item, price) => {
    const items = document.getElementById("items");

    const row = document.createElement("tr");
    const serialData = document.createElement("td");
    const itemData = document.createElement("td");
    const priceData = document.createElement("td");

    serial = serial + 1;

    serialData.innerText = serial;
    itemData.innerText = item;
    priceData.innerText = price;

    row.append(serialData);
    row.append(itemData);
    row.append(priceData);

    items.prepend(row);
};

const updateTotal = (price) => {
    const total = document.getElementById("total");

    // Getting current total
    const currentTotal = Number(total.innerText);
    const newTotal = currentTotal + price;

    // Updating total field
    total.innerText = newTotal;
}

export {
    addRow,
    updateTotal
};