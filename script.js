const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2999,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/3/r/z/wireless-running-premium-deep-bass-noise-cancelling-stereo-original-imahgytzcsbb8br9.jpeg?q=70"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 4999,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/s/i/u/-original-imah76jt64ffmwg4.jpeg?q=70"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 1999,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/h/f/l/-original-imahfggphfvuyxmt.jpeg?q=70"
    },
    {
        id: 4,
        name: "Gaming Mouse",
        price: 1499,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/5/p/f/-original-imahf6y3td7rpqpb.jpeg?q=70"
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
