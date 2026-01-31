// PRODUCT DATA
const products = [
  {
    name: "Water Bottle",
    normal: "Plastic Bottle",
    eco: "Steel Bottle",
    category: "Kitchen",
    reason: "Reusable, no microplastics, long-lasting"
  },
  {
    name: "Shopping Bags",
    normal: "Plastic Bags",
    eco: "Cloth Bags",
    category: "Daily Use",
    reason: "Biodegradable, reusable, reduces plastic waste"
  },
  {
    name: "Straws",
    normal: "Plastic Straws",
    eco: "Metal/Bamboo Straws",
    category: "Kitchen",
    reason: "Reusable and prevents marine pollution"
  }
];
const productGrid = document.getElementById("productGrid");

function loadProducts() {
  productGrid.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p><strong>❌ ${product.normal}</strong></p>
      <p><strong>✅ ${product.eco}</strong></p>
      <span class="tag">${product.category}</span>
      <button class="secondary-btn" onclick="showReason('${product.reason}')">
        Why Switch?
      </button>
    `;

    productGrid.appendChild(card);
  });
}

loadProducts();
function showReason(reason) {
  alert("Why switch?\n\n" + reason);
}
const themeBtn = document.querySelector(".theme-btn");

// Toggle theme
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeBtn.textContent = "🌙";
  }
});

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeBtn.textContent = "☀️";
} else {
  themeBtn.textContent = "🌙";
}

