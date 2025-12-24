const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2999,
        image: "https://picsum.photos/300/200?1"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 4999,
        image: "https://picsum.photos/300/200?2"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 1999,
        image: "https://picsum.photos/300/200?3"
    },
    {
        id: 4,
        name: "Gaming Mouse",
        price: 1499,
        image: "https://picsum.photos/300/200?4"
    }
];

let cartCount = 0;
const productList = document.getElementById("product-list");
const cartCountEl = document.getElementById("cart-count");

function renderProducts() {
    productList.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹ ${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;

        productList.appendChild(card);
    });
}

function addToCart() {
    cartCount++;
    cartCountEl.innerText = cartCount;
}

renderProducts();
