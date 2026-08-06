const products = [
  {
    id: 1,
    productName: "iPhone 13",
    category: "Phones",
    price: 999,
    rating: 4.7,
    imageUrl: "pictures/iphone13 pro.jpeg",
    description: "The latest iPhone with advanced features.",
    favorite: false,
    brand: { id: 1, name: "Apple", country: "United States" },
  },
  {
    id: 2,
    productName: "Samsung Galaxy S21",
    category: "Phones",
    price: 899,
    rating: 4.6,
    imageUrl: "pictures/Samsung S21.jpeg",
    description: "Powerful Android phone with stunning display.",
    favorite: false,
    brand: {
      id: 2,
      name: "Samsung",
      country: "South Korea",
    },
  },
  {
    id: 3,
    productName: "MacBook Pro",
    category: "Laptops",
    price: 1999,
    rating: 4.8,
    imageUrl: "pictures/Macbook pro.jpeg",
    description: "High-performance laptop for professionals.",
    favorite: true,
    brand: {
      id: 3,
      name: "Apple",
      country: "United States",
    },
  },
  {
    id: 4,
    productName: "Dell XPS 13",
    category: "Laptops",
    price: 1499,
    rating: 4.5,
    imageUrl: "pictures/Dell XPS13.jpeg",
    description: "Sleek and powerful laptop with a stunning display.",
    favorite: false,
    brand: {
      id: 4,
      name: "Dell",
      country: "United States",
    },
  },
  {
    id: 5,
    productName: "Apple Watch Series 6",
    category: "Watches",
    price: 399,
    rating: 4.9,
    imageUrl: "pictures/Apple Watch Series 6.jpeg",
    description: "Advanced smartwatch with fitness tracking.",
    favorite: true,
    brand: {
      id: 1,
      name: "Apple",
      country: "United States",
    },
  },
  {
    id: 6,
    productName: "Garmin Forerunner 245",
    category: "Watches",
    price: 299,
    rating: 4.7,
    imageUrl: "pictures/Garmin Forerunner 245.jpeg",
    description: "GPS running watch with advanced performance metrics.",
    favorite: false,
    brand: {
      id: 5,
      name: "Garmin",
      country: "United States",
    },
  },
  {
    id: 7,
    productName: "Nike Air Zoom Pegasus 38",
    category: "Sports",
    price: 120,
    rating: 4.6,
    imageUrl: "pictures/Nike Air Zoom Pegasus 38.jpeg",
    description: "Comfortable and responsive running shoes.",
    favorite: true,
    brand: {
      id: 6,
      name: "Nike",
      country: "United States",
    },
  },
  {
    id: 8,
    productName: "Adidas Ultraboost 21",
    category: "Sports",
    price: 180,
    rating: 4.8,
    imageUrl: "pictures/Adidas Ultraboost 21.jpeg",
    description: "High-performance shoes for running and training.",
    favorite: false,
    brand: {
      id: 7,
      name: "Adidas",
      country: "Germany",
    },
  },
  {
    id: 9,
    productName: "Samsung QLED 4K TV",
    category: "Electronics",
    price: 1299,
    rating: 4.7,
    imageUrl: "pictures/Samsung QLED 4K TV.jpeg",
    description: "Stunning 4K TV with vibrant colors and smart features.",
    favorite: false,
    brand: {
      id: 2,
      name: "Samsung",
      country: "South Korea",
    },
  },
  {
    id: 10,
    productName: "Sony PlayStation 5",
    category: "Gaming",
    price: 499,
    rating: 4.9,
    imageUrl: "pictures/Sony PlayStation 5.jpeg",
    description: "Next-generation gaming console with immersive experiences.",
    favorite: true,
    brand: {
      id: 8,
      name: "Sony",
      country: "Japan",
    },
  },
  {
    id: 11,
    productName: "Google Pixel 6",
    category: "Phones",
    price: 799,
    rating: 4.7,
    imageUrl: "pictures/google-pixel-6-pro.jpg",
    description:
      "Smartphone with an exceptional camera and pure Android experience.",
    favorite: true,
    brand: {
      id: 9,
      name: "Google",
      country: "United States",
    },
  },
  {
    id: 12,
    productName: "HP Spectre x360",
    category: "Laptops",
    price: 1599,
    rating: 4.6,
    imageUrl: "pictures/HP Spectre x360.jpeg",
    description:
      "Convertible laptop with powerful performance and stunning design.",
    favorite: false,
    brand: {
      id: 10,
      name: "HP",
      country: "United States",
    },
  },
  {
    id: 13,
    productName: "Rolex Submariner",
    category: "Watches",
    price: 9500,
    rating: 4.9,
    imageUrl: "pictures/Rolex Submariner.jpeg",
    description: "Iconic luxury watch for diving enthusiasts.",
    favorite: true,
    brand: {
      id: 11,
      name: "Rolex",
      country: "Switzerland",
    },
  },
  {
    id: 14,
    productName: "Fitbit Charge 4",
    category: "Watches",
    price: 149,
    rating: 4.4,
    imageUrl: "pictures/Fitbit Charge 4.jpeg",
    description: "Fitness tracker with built-in GPS and heart rate monitor.",
    favorite: false,
    brand: {
      id: 12,
      name: "Fitbit",
      country: "United States",
    },
  },
  {
    id: 15,
    productName: "Wilson Evolution Basketball",
    category: "Sports",
    price: 59,
    rating: 4.8,
    imageUrl: "pictures/Wilson Evolution Basketball.jpeg",
    description:
      "Official game basketball with exceptional grip and durability.",
    favorite: true,
    brand: {
      id: 13,
      name: "Wilson",
      country: "United States",
    },
  },
  {
    id: 16,
    productName: "Sony WH-1000XM4",
    category: "Electronics",
    price: 349,
    rating: 4.9,
    imageUrl: "pictures/Sony WH-1000XM4.jpeg",
    description:
      "Premium wireless noise-canceling headphones with exceptional sound quality.",
    favorite: true,
    brand: {
      id: 8,
      name: "Sony",
      country: "Japan",
    },
  },
  {
    id: 17,
    productName: "Nintendo Switch",
    category: "Gaming",
    price: 299,
    rating: 4.7,
    imageUrl: "pictures/Nintendo Switch.jpeg",
    description: "Versatile gaming console for handheld and TV play.",
    favorite: false,
    brand: {
      id: 14,
      name: "Nintendo",
      country: "Japan",
    },
  },
  {
    id: 18,
    productName: "LG OLED 4K TV",
    category: "Electronics",
    price: 1899,
    rating: 4.8,
    imageUrl: "pictures/LG OLED 4K TV.jpeg",
    description:
      "Premium 4K TV with OLED technology for stunning picture quality.",
    favorite: false,
    brand: {
      id: 15,
      name: "LG",
      country: "South Korea",
    },
  },
  {
    id: 19,
    productName: "Reebok Nano X1",
    category: "Sports",
    price: 130,
    rating: 4.6,
    imageUrl: "pictures/Reebok Nano X1.jpeg",
    description: "Cross-training shoes with enhanced stability and comfort.",
    favorite: true,
    brand: {
      id: 16,
      name: "Reebok",
      country: "United States",
    },
  },
  {
    id: 20,
    productName: "ASUS ROG Zephyrus G14",
    category: "Laptops",
    price: 1499,
    rating: 4.7,
    imageUrl: "pictures/ASUS ROG Zephyrus G14.jpeg",
    description:
      "Powerful gaming laptop with a compact design and high-refresh-rate display.",
    favorite: false,
    brand: {
      id: 17,
      name: "ASUS",
      country: "Taiwan",
    },
  },
];

// =============================
// CART
// =============================

let cartCount = 0;

// =============================
// DISPLAY PRODUCTS
// =============================

function displayProducts(filteredProducts) {

    const container = document.getElementById("product-container");

    const noProducts = document.getElementById("no-products");

    container.innerHTML = "";

    if (filteredProducts.length === 0) {

        noProducts.style.display = "block";

        return;

    }

    noProducts.style.display = "none";

    filteredProducts.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `



<div class="product-image">

    <span class="badge">
        ${product.rating >= 4.8 ? "🔥 Best Seller" : "⭐ Popular"}
    </span>

    <button class="wishlist-btn">
        ${product.favorite ? "❤️" : "🤍"}
    </button>

    <img src="${product.imageUrl}" alt="${product.productName}">

</div>

<div class="product-card-content">

    <small class="category">
        ${product.category}
    </small>

    <h3>
        ${product.productName}
    </h3>

    <p class="brand">
        ${product.brand.name}
    </p>

    <div class="stars">

        ⭐⭐⭐⭐⭐

        <span>${product.rating}</span>

    </div>

    <p class="description">

        ${product.description}

    </p>

    <div class="price-row">

        <span class="price">

            $${product.price}

        </span>

    </div>

    <div class="card-buttons">

        <button class="favorite-btn">

            ${product.favorite ? "❤️ Favorite" : "🤍 Favorite"}

        </button>

        <button class="add-to-cart-btn">

            🛒 Cart

        </button>

        <button class="buy-now-btn">

            Buy Now

        </button>

    </div>

</div>

`;

        container.appendChild(card);

        // =============================
        // FAVORITE BUTTON
        // =============================

        const favoriteBtn = card.querySelector(".favorite-btn");
const wishlistBtn = card.querySelector(".wishlist-btn");

       function toggleFavorite() {

    product.favorite = !product.favorite;

    favoriteBtn.innerHTML = product.favorite
        ? "❤️ Favorite"
        : "🤍 Favorite";

    wishlistBtn.innerHTML = product.favorite
        ? "❤️"
        : "🤍";

}

favoriteBtn.addEventListener("click", toggleFavorite);
wishlistBtn.addEventListener("click", toggleFavorite);

        // =============================
        // ADD TO CART
        // =============================

        const cartBtn = card.querySelector(".add-to-cart-btn");

        cartBtn.addEventListener("click", () => {

            cartCount++;

            document.getElementById("cart-count").textContent = cartCount;

            cartBtn.innerHTML = "✅ Added";

            cartBtn.style.background = "#22C55E";

        });

        // =============================
        // BUY NOW
        // =============================

        const buyBtn = card.querySelector(".buy-now-btn");

        buyBtn.addEventListener("click", () => {

            sessionStorage.setItem(
                "selectedProduct",
                JSON.stringify(product)
            );

            window.location.href = "checkout.html";

        });

    });

}
// =============================
// HERO BUTTON
// =============================

document
    .getElementById("shop-now")
    .addEventListener("click", () => {

        document
            .getElementById("product-container")
            .scrollIntoView({

                behavior: "smooth"

            });

});
// =============================
// HEADER HEART
// =============================

document
    .querySelector(".icon-btn")
    .addEventListener("click", () => {

        alert("Wishlist feature coming soon ❤️");

});

// =====================================
// FILTER PRODUCTS
// =====================================

function filterProducts() {

    let filtered = [...products];

    // ===========================
    // SEARCH
    // ===========================

    const searchValue = document
        .getElementById("search-bar")
        .value
        .toLowerCase()
        .trim();

    if (searchValue !== "") {

        filtered = filtered.filter(product =>

            product.productName
                .toLowerCase()
                .includes(searchValue)

        );

    }

    // ===========================
    // CATEGORY
    // ===========================

    const category = document
        .getElementById("category-filter")
        .value;

    if (category !== "") {

        filtered = filtered.filter(product =>

            product.category === category

        );

    }

    // ===========================
    // BRAND
    // ===========================

    const brand = document
        .getElementById("brand-filter")
        .value;

    if (brand !== "") {

        filtered = filtered.filter(product =>

            product.brand.name === brand

        );

    }

    // ===========================
    // MIN PRICE
    // ===========================

    const minPrice = parseFloat(

        document.getElementById("price-min").value

    ) || 0;

    // ===========================
    // MAX PRICE
    // ===========================

    const maxPrice = parseFloat(

        document.getElementById("price-max").value

    ) || Infinity;

    filtered = filtered.filter(product =>

        product.price >= minPrice &&
        product.price <= maxPrice

    );

    // ===========================
    // MIN RATING
    // ===========================

    const minRating = parseFloat(

        document.getElementById("rating-min").value

    ) || 0;

    // ===========================
    // MAX RATING
    // ===========================

    const maxRating = parseFloat(

        document.getElementById("rating-max").value

    ) || 5;

    filtered = filtered.filter(product =>

        product.rating >= minRating &&
        product.rating <= maxRating

    );

    displayProducts(filtered);

}

// =====================================
// LIVE SEARCH
// =====================================

document
    .getElementById("search-bar")
    .addEventListener("input", filterProducts);

// =====================================
// CATEGORY FILTER
// =====================================

document
    .getElementById("category-filter")
    .addEventListener("change", filterProducts);

// =====================================
// BRAND FILTER
// =====================================

document
    .getElementById("brand-filter")
    .addEventListener("change", filterProducts);

// =====================================
// PRICE FILTERS
// =====================================

document
    .getElementById("price-min")
    .addEventListener("input", filterProducts);

document
    .getElementById("price-max")
    .addEventListener("input", filterProducts);

// =====================================
// RATING FILTERS
// =====================================

document
    .getElementById("rating-min")
    .addEventListener("input", filterProducts);

document
    .getElementById("rating-max")
    .addEventListener("input", filterProducts);

// =====================================
// RESET FILTERS
// =====================================

document
    .getElementById("reset-filters")
    .addEventListener("click", () => {

        document.getElementById("search-bar").value = "";

        document.getElementById("category-filter").value = "";

        document.getElementById("brand-filter").value = "";

        document.getElementById("price-min").value = "";

        document.getElementById("price-max").value = "";

        document.getElementById("rating-min").value = "";

        document.getElementById("rating-max").value = "";

        displayProducts(products);

});

// =====================================
// SORT PRICE ASCENDING
// =====================================

document
    .getElementById("sort-price-asc")
    .addEventListener("click", () => {

        const sorted = [...products].sort(

            (a, b) => a.price - b.price

        );

        displayProducts(sorted);

});

// =====================================
// SORT PRICE DESCENDING
// =====================================

document
    .getElementById("sort-price-desc")
    .addEventListener("click", () => {

        const sorted = [...products].sort(

            (a, b) => b.price - a.price

        );

        displayProducts(sorted);

});

// =====================================
// SORT RATING ASCENDING
// =====================================

document
    .getElementById("sort-rating-asc")
    .addEventListener("click", () => {

        const sorted = [...products].sort(

            (a, b) => a.rating - b.rating

        );

        displayProducts(sorted);

});

// =====================================
// SORT RATING DESCENDING
// =====================================

document
    .getElementById("sort-rating-desc")
    .addEventListener("click", () => {

        const sorted = [...products].sort(

            (a, b) => b.rating - a.rating

        );

        displayProducts(sorted);

});
// =====================================
// PAGE INITIALIZATION
// =====================================

// Display all products when the page first loads
displayProducts(products);

// =====================================
// OPTIONAL: PREVENT MULTIPLE CART CLICKS
// =====================================

// This re-renders products after every click,
// so users can't keep clicking the same button
// to increase the cart count infinitely.

function updateCartCount() {
    document.getElementById("cart-count").textContent = cartCount;
}

// =====================================
// OPTIONAL: BUTTON RIPPLE EFFECT
// =====================================

document.addEventListener("click", function (e) {

    if (e.target.tagName === "BUTTON") {

        e.target.animate(

            [
                { transform: "scale(1)" },
                { transform: "scale(.95)" },
                { transform: "scale(1)" }

            ],

            {
                duration: 180
            }

        );

    }

});

// =====================================
// HERO EXPLORE BUTTON
// =====================================

const exploreBtn = document.querySelector(".secondary-btn");

if (exploreBtn) {

    exploreBtn.addEventListener("click", () => {

        document.querySelector(".products-section").scrollIntoView({

            behavior: "smooth"

        });

    });

}

// =====================================
// HEADER WISHLIST ICON
// =====================================

const wishlistIcon = document.querySelector(".fa-heart");

if (wishlistIcon) {

    wishlistIcon.addEventListener("click", () => {

        const favorites = products.filter(product => product.favorite);

        if (favorites.length === 0) {

            alert("No favorite products yet ❤️");

        } else {

            alert(`You have ${favorites.length} favorite product(s).`);

        }

    });

}

// =====================================
// SHOP NOW BUTTON
// =====================================

const shopNowBtn = document.getElementById("shop-now");

if (shopNowBtn) {

    shopNowBtn.addEventListener("click", () => {

        document.querySelector(".products-section").scrollIntoView({

            behavior: "smooth"

        });

    });

}