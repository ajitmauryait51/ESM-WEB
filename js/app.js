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


function showAlternatives() {
  const section = document.getElementById("alternatives");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}


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

// SCROLL ANIMATION FOR FEATURE CARDS
const featureCards = document.querySelectorAll(".feature-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 1.0
  }
);

featureCards.forEach(card => {
  observer.observe(card);
});


const productcard = document.querySelectorAll(".product-card");

const observe = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 1.0
  }
);

productcard.forEach(card => {
  observer.observe(card);
});

// SMOOTH SCROLL FOR NAVBAR LINKS
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // stop instant jump

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


function showReason(reason) {
  document.getElementById("modalText").textContent = reason;
  document.getElementById("whyModal").classList.add("show");
}

function closeModal() {
  document.getElementById("whyModal").classList.remove("show");
}
