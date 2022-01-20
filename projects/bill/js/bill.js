"use strict";

let serial = 0;
const items = document.getElementById("items");

HTMLElement.prototype.appendElementWithData = function(type, text, data = null) {
    const element = document.createElement(type);
    element.innerText = text;

    if (data) {
        element.dataset.attr = data;
    }

    this.append(element);
};

const addRow = (item, price) => {
    ++serial;

    const row = document.createElement("tr");
    row.id = `item-${serial}`;
    row.appendElementWithData("td", serial);
    row.appendElementWithData("td", item);
    row.appendElementWithData("button", "Delete", serial);
    row.appendElementWithData("td", price);

    items.prepend(row);
};

const deleteRow = (serial) => {
    const row = document.getElementById(`item-${serial}`);
    
    if (row) {
        items.removeChild(row);
        return row.lastChild.innerText;
    } else {
        return null;
    }
}

const updateTotal = (price) => {
    const total = document.getElementById("total");

    // Getting current total
    const currentTotal = Number(total.innerText);
    const newTotal = currentTotal + price;

    // Updating total field
    total.innerText = newTotal;
};

export {
    addRow,
    deleteRow,
    updateTotal
};