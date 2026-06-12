/* =========================
   LOGIN
========================= */
function loginUser(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;

    if (name.trim() === "") {
        alert("Enter valid name");
        return false;
    }

    let mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobile)) {
        alert("Enter valid 10-digit mobile number");
        return false;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", name);

    document.getElementById("sectionloginpage").style.display = "none";
    document.getElementById("sectionhomepage").style.display = "block";

    return false;
}
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
/* =========================
   PRODUCT DATA (9 EACH)
========================= */

const products = {

  silk: [
    { name: "Royal Kanchipuram Silk Saree", price: 2499, oldPrice: 3999, rating: 4.8, offer: "38% OFF", img: "images/silk1.jpg" },
    { name: "Golden Temple Silk Saree", price: 3199, oldPrice: 4499, rating: 4.6, offer: "29% OFF", img: "images/silk2.jpg" },
    { name: "Banarasi Pure Silk Saree", price: 2899, oldPrice: 3999, rating: 4.7, offer: "27% OFF", img: "images/silk3.jpg" },
    { name: "Mysore Silk Royal Saree", price: 2599, oldPrice: 3599, rating: 4.5, offer: "28% OFF", img: "images/silk4.jpg" },
    { name: "Designer Zari Silk Saree", price: 3499, oldPrice: 4999, rating: 4.9, offer: "30% OFF", img: "images/silk5.jpg" },
    { name: "Soft Silk Party Saree", price: 2199, oldPrice: 2999, rating: 4.4, offer: "26% OFF", img: "images/silk6.jpg" },
    { name: "Bridal Heavy Silk Saree", price: 4599, oldPrice: 6999, rating: 5.0, offer: "35% OFF", img: "images/silk7.jpg" },
    { name: "Traditional Red Silk Saree", price: 2799, oldPrice: 3999, rating: 4.6, offer: "30% OFF", img: "images/silk8.jpg" },
    { name: "Elegant Blue Silk Saree", price: 2399, oldPrice: 3299, rating: 4.5, offer: "27% OFF", img: "images/silk9.jpg" }
  ],

  cotton: [
    { name: "Soft Cotton Daily Saree", price: 999, oldPrice: 1499, rating: 4.3, offer: "33% OFF", img: "images/cotton1.jpg" },
    { name: "Printed Cotton Saree", price: 1099, oldPrice: 1599, rating: 4.2, offer: "31% OFF", img: "images/cotton2.jpg" },
    { name: "Floral Cotton Saree", price: 1199, oldPrice: 1699, rating: 4.4, offer: "29% OFF", img: "images/cotton3.jpg" },
    { name: "Handloom Cotton Saree", price: 1399, oldPrice: 1899, rating: 4.5, offer: "26% OFF", img: "images/cotton4.jpg" },
    { name: "Office Wear Cotton Saree", price: 1299, oldPrice: 1799, rating: 4.3, offer: "27% OFF", img: "images/cotton5.jpg" },
    { name: "Pastel Cotton Saree", price: 999, oldPrice: 1499, rating: 4.2, offer: "33% OFF", img: "images/cotton6.jpg" },
    { name: "Traditional Cotton Saree", price: 1499, oldPrice: 1999, rating: 4.6, offer: "25% OFF", img: "images/cotton7.jpg" },
    { name: "Light Weight Cotton Saree", price: 899, oldPrice: 1299, rating: 4.1, offer: "31% OFF", img: "images/cotton8.jpg" },
    { name: "Designer Cotton Saree", price: 1599, oldPrice: 2199, rating: 4.7, offer: "27% OFF", img: "images/cotton9.jpg" }
  ],

  pattu: [
    { name: "Wedding Pattu Saree", price: 3599, oldPrice: 4999, rating: 4.9, offer: "28% OFF", img: "images/pattu1.jpg" },
    { name: "Golden Traditional Pattu", price: 3999, oldPrice: 5499, rating: 4.8, offer: "27% OFF", img: "images/pattu2.jpg" },
    { name: "Temple Silk Pattu Saree", price: 4299, oldPrice: 5999, rating: 5.0, offer: "30% OFF", img: "images/pattu3.jpg" },
    { name: "Bridal Heavy Pattu Saree", price: 4999, oldPrice: 6999, rating: 5.0, offer: "28% OFF", img: "images/pattu4.jpg" },
    { name: "Designer Border Pattu", price: 3799, oldPrice: 5299, rating: 4.7, offer: "28% OFF", img: "images/pattu5.jpg" },
    { name: "Silk Blend Pattu Saree", price: 3499, oldPrice: 4899, rating: 4.6, offer: "29% OFF", img: "images/pattu6.jpg" },
    { name: "Festival Wear Pattu Saree", price: 3899, oldPrice: 5399, rating: 4.8, offer: "27% OFF", img: "images/pattu7.jpg" },
    { name: "Royal Green Pattu Saree", price: 4199, oldPrice: 5899, rating: 4.9, offer: "29% OFF", img: "images/pattu8.jpg" },
    { name: "Elegant Red Pattu Saree", price: 3999, oldPrice: 5599, rating: 4.7, offer: "28% OFF", img: "images/pattu9.jpg" }
  ],

  organza: [
    { name: "Floral Organza Saree", price: 1999, oldPrice: 2999, rating: 4.5, offer: "33% OFF", img: "images/organza1.jpg" },
    { name: "Pastel Organza Saree", price: 2199, oldPrice: 3199, rating: 4.4, offer: "31% OFF", img: "images/organza2.jpg" },
    { name: "Designer Organza Saree", price: 2499, oldPrice: 3499, rating: 4.6, offer: "28% OFF", img: "images/organza3.jpg" },
    { name: "Wedding Organza Saree", price: 2799, oldPrice: 3999, rating: 4.8, offer: "30% OFF", img: "images/organza4.jpg" },
    { name: "Soft Net Organza Saree", price: 1899, oldPrice: 2699, rating: 4.3, offer: "29% OFF", img: "images/organza5.jpg" },
    { name: "Party Wear Organza Saree", price: 2299, oldPrice: 3299, rating: 4.5, offer: "30% OFF", img: "images/organza6.jpg" },
    { name: "Luxury Organza Saree", price: 2599, oldPrice: 3599, rating: 4.7, offer: "28% OFF", img: "images/organza7.jpg" },
    { name: "Printed Organza Saree", price: 1999, oldPrice: 2799, rating: 4.4, offer: "28% OFF", img: "images/organza8.jpg" },
    { name: "Elegant White Organza Saree", price: 2399, oldPrice: 3399, rating: 4.6, offer: "29% OFF", img: "images/organza9.jpg" }
  ],

  designer: [
    { name: "Luxury Designer Saree", price: 4999, oldPrice: 6999, rating: 4.9, offer: "28% OFF", img: "images/designer1.jpg" },
    { name: "Party Wear Designer Saree", price: 4599, oldPrice: 6499, rating: 4.8, offer: "29% OFF", img: "images/designer2.jpg" },
    { name: "Modern Style Designer Saree", price: 4299, oldPrice: 5999, rating: 4.7, offer: "28% OFF", img: "images/designer3.jpg" },
    { name: "Bridal Designer Saree", price: 5999, oldPrice: 7999, rating: 5.0, offer: "25% OFF", img: "images/designer4.jpg" },
    { name: "Embroidered Designer Saree", price: 3899, oldPrice: 5499, rating: 4.6, offer: "29% OFF", img: "images/designer5.jpg" },
    { name: "Premium Silk Designer Saree", price: 4799, oldPrice: 6799, rating: 4.8, offer: "30% OFF", img: "images/designer6.jpg" },
    { name: "Festive Designer Saree", price: 4199, oldPrice: 5899, rating: 4.7, offer: "28% OFF", img: "images/designer7.jpg" },
    { name: "Luxury Stone Work Saree", price: 5299, oldPrice: 7299, rating: 4.9, offer: "27% OFF", img: "images/designer8.jpg" },
    { name: "Elegant Designer Saree", price: 4499, oldPrice: 6299, rating: 4.6, offer: "28% OFF", img: "images/designer9.jpg" }
  ],

  banarasi: [
    { name: "Royal Banarasi Silk Saree", price: 3999, oldPrice: 5999, rating: 4.8, offer: "33% OFF", img: "images/banarasi1.jpg" },
    { name: "Traditional Banarasi Saree", price: 4299, oldPrice: 6199, rating: 4.9, offer: "30% OFF", img: "images/banarasi2.jpg" },
    { name: "Wedding Banarasi Saree", price: 4999, oldPrice: 6999, rating: 5.0, offer: "28% OFF", img: "images/banarasi3.jpg" },
    { name: "Golden Weave Banarasi Saree", price: 4599, oldPrice: 6499, rating: 4.7, offer: "29% OFF", img: "images/banarasi4.jpg" },
    { name: "Silk Border Banarasi Saree", price: 3799, oldPrice: 5299, rating: 4.6, offer: "28% OFF", img: "images/banarasi5.jpg" },
    { name: "Designer Banarasi Saree", price: 4899, oldPrice: 6899, rating: 4.8, offer: "29% OFF", img: "images/banarasi6.jpg" },
    { name: "Light Weight Banarasi Saree", price: 3599, oldPrice: 4999, rating: 4.5, offer: "28% OFF", img: "images/banarasi7.jpg" },
    { name: "Festive Banarasi Saree", price: 4399, oldPrice: 6099, rating: 4.7, offer: "27% OFF", img: "images/banarasi8.jpg" },
    { name: "Elegant Red Banarasi Saree", price: 4699, oldPrice: 6599, rating: 4.8, offer: "29% OFF", img: "images/banarasi9.jpg" }
  ]
};

/* Generate 9 products per category */
function generateProducts(name, basePrice, imgBase) {
    return Array.from({ length: 9 }, (_, i) => ({
        name: `${name} Saree ${i + 1}`,
        price: basePrice + (i * 200),
        img: `${imgBase}${i + 1}.jpg`   // 👉 YOU ADD IMAGES HERE
    }));
}
/* =========================
   CART
========================= */
let cart = [];

function addToCart(name, price, img) {

    cart.push({
        name,
        price,
        img
    });

    document.getElementById("cart-count").innerText = cart.length;

    alert(name + " added to cart");

    renderCart();
}


/* =========================
   OPEN CATEGORY PAGE
========================= */
function openCategory(type) {

  const container = document.getElementById("productList");
  const title = document.getElementById("categoryTitle");

  container.innerHTML = "";
  title.innerText = type.toUpperCase() + " SAREES";

  const selected = products[type];

  selected.forEach(item => {

    container.innerHTML += `
      <div class="product-card">

        <div class="wishlist">❤️</div>

        <img src="${item.img}" alt="${item.name}">

        <h3>${item.name}</h3>

        <p class="rating">⭐ ${item.rating} / 5</p>

        <p class="price">
          ₹${item.price}
          <span class="old-price">₹${item.oldPrice}</span>
        </p>

        <p class="offer">${item.offer}</p>

        <button class="cart-btn"
          onclick="addToCart('${item.name}', ${item.price}, '${item.img}')">
          Add To Cart
        </button>

        <button class="buy-btn" onclick="showCheckoutPage()">
          Buy Now
        </button>

      </div>
    `;
  });

  document.getElementById("sectionhomepage").style.display = "none";
  document.getElementById("sectionProductPage").style.display = "block";
}
/* =========================
   NAVIGATION
========================= */
function goHome() {
    document.getElementById("sectionProductPage").style.display = "none";
    document.getElementById("sectionhomepage").style.display = "block";
}

function showCartPage() {
    document.getElementById("sectionhomepage").style.display = "none";
    document.getElementById("sectionProductPage").style.display = "none";
    document.getElementById("sectionCartPage").style.display = "block";
}

function backToProducts() {
    document.getElementById("sectionCartPage").style.display = "none";
    document.getElementById("sectionProductPage").style.display = "block";
}


/* =========================
   REMOVE CART ITEM
========================= */
function removeItem(button) {

    let cartItem = button.closest(".cart-item");

    let price = parseInt(cartItem.dataset.price);

    let total = document.getElementById("totalPrice");

    if (total) {
        total.innerText = parseInt(total.innerText) - price;
    }

    cartItem.remove();

    document.getElementById("cart-count").innerText =
        Math.max(0, cart.length - 1);
}


/* =========================
   CHECKOUT FLOW
========================= */
function showCheckoutPage() {
    document.getElementById("sectionProductPage").style.display = "none";
    document.getElementById("sectionCartPage").style.display = "none";
    document.getElementById("sectionCheckoutPage").style.display = "block";
}

function placeOrder() {
    document.getElementById("sectionCheckoutPage").style.display = "none";
    document.getElementById("sectionOrderSuccess").style.display = "flex";
}

function continueShopping() {
    document.getElementById("sectionOrderSuccess").style.display = "none";
    document.getElementById("sectionhomepage").style.display = "block";
}


/* =========================
   PAGE LOAD
========================= */
window.onload = function () {

    localStorage.clear(); // 👈 REMOVE OLD LOGIN DATA

    document.getElementById("sectionloginpage").style.display = "flex";
    document.getElementById("sectionhomepage").style.display = "none";
};
function renderCart() {

    let cartContainer = document.getElementById("cartItems");

    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">

                <div class="cart-info">
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>

                    <button onclick="removeFromCart(${index})">
                        Remove
                    </button>
                </div>
            </div>
        `;
    });

    document.getElementById("totalPrice").innerText = total;
};
function removeFromCart(index) {

    cart.splice(index, 1);

    document.getElementById("cart-count").innerText = cart.length;

    renderCart();
};
function buyNow(name, price) {

    document.getElementById("sectionhomepage").style.display = "none";
    document.getElementById("sectionProductPage").style.display = "none";
    document.getElementById("sectionCartPage").style.display = "none";
    document.getElementById("sectionCheckoutPage").style.display = "block";

    document.getElementById("productName").innerText = name;
    document.getElementById("totalAmount").innerText = price;
}
