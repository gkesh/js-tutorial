import { populateShop } from "./shop.js";

const fetchProducts = (success, error) => {
    fetch('/shopping/catalog.json').then(
        response => 
            response.json()
                .then(success)
                .catch(error)
    ).catch(error);
};

window.addEventListener('load', () => {
    const shop = document.getElementById("shop");
    populateShop(shop, fetchProducts);
});