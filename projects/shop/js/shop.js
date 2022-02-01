HTMLElement.prototype.appendAttribute = function(attribute, value) {
    this.setAttribute(attribute, value);
    return this;
}

HTMLElement.prototype.appendChildWithText = function(type, text) {
    const element = document.createElement(type);
    element.innerText = text;
    this.appendChild(element);
    return this;
}

HTMLElement.prototype.appendElements = function(...elements) {
    elements.forEach(element => this.appendChild(element));
    return this;
}

const createProduct = (product) => document.createElement('article')
    .appendAttribute('class', 'product')
    .appendElements(
        document.createElement('img')
            .appendAttribute('src', '/shopping/static/placeholder.jpg'),
        document.createElement('div')
            .appendAttribute('class', 'product__info')
            .appendChildWithText('h1', product?.name)
            .appendChildWithText('p', `Rs. ${product?.price}`));

export const populateShop = function(parent, fetch) {
    fetch(
        (products) => {
            products?.forEach(product => {
                if (!product?.available) return;
                parent.appendChild(createProduct(product));
            });
        },
        (error) => {
            const span = document.createElement("span");
            span.classList.add("error");
            span.innerText = "Failed to load data from source: " + error;
            parent.appendChild(span);
        }
    );
};