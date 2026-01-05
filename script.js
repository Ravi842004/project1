// ----- Product Data (JSON) -----
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High quality sound with noise cancellation.",
    price: 2999
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness and notifications.",
    price: 4999
  },
  {
    id: 3,
    name: "Gaming Mouse",
    description: "Ergonomic design with RGB lighting.",
    price: 1599
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    description: "Blue switches with premium build.",
    price: 3499
  }
];

const container = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");

// ----- Render Products -----
function renderProducts(productList) {
  container.innerHTML = "";

  if (productList.length === 0) {
    container.innerHTML = "<p>No products found.</p>";
    return;
  }

  productList.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <strong>₹${product.price}</strong><br/><br/>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;

    container.appendChild(card);
  });
}

// ----- Search Functionality -----
searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(value)
  );

  renderProducts(filteredProducts);
});

// ----- Cart Logic -----
function addToCart(productName) {
  alert(productName + " added to cart 🛒");
}

// Initial render
renderProducts(products);
