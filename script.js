// Örnek ürün verileri
const products = [
  {
    name: "Ürün 1",
    price: 19.99,
    image: "img/1.jpg",
    description: "Açıklama 1",
  },
  {
    name: "Ürün 2",
    price: 29.99,
    image: "img/2.jpg",
    description: "Açıklama 2",
  },
  {
    name: "Ürün 3",
    price: 39.99,
    image: "img/3.jpg",
    description: "Açıklama 3",
  },
  {
    name: "Ürün 4",
    price: 45.99,
    image: "img/4.jpg",
    description: "Açıklama 4",
  },
  {
    name: "Ürün 5",
    price: 55.99,
    image: "img/5.jpg",
    description: "Açıklama 5",
  },
  {
    name: "Ürün 6",
    price: 60.99,
    image: "img/6.jpg",
    description: "Açıklama 6",
  },
  {
    name: "Ürün 7",
    price: 60.99,
    image: "img/7.jpg",
    description: "Açıklama 7",
  },
  {
    name: "Ürün 8",
    price: 60.99,
    image: "img/8.jpg",
    description: "Açıklama 8",
  },
  {
    name: "Ürün 9",
    price: 60.99,
    image: "img/9.jpg",
    description: "Açıklama 9",
  },
  {
    name: "Ürün 10",
    price: 60.99,
    image: "img/10.jpg",
    description: "Açıklama 10",
  },
];

const fproducts = [
  {
    name: "Ürün 1",
    price: 19.99,
    image: "img/f1.jpg",
    description: "Açıklama 1",
  },
];

// Ürün bilgilerini alt kısımda gösterme fonksiyonu
function showProductDetails(product) {
  const modal = document.getElementById("product-details-modal");
  const modalContent = document.getElementById("modal-product-info");

  modalContent.innerHTML = `
        <div style><span onclick="closeProductDetails()" class="close" ><iconify-icon icon="material-symbols:close">x</iconify-icon></span>
        <h2 style="font-weight:bold; font-size:32px; ">${
          product.name
        }</h2></div>
        <img class="product-image" src="${product.image}" alt="${product.name}">
        <div style="display:flex; justify-content:space-between;">
            <button onclick="showPrevProduct()" class="previous round">&#8249;</button>
            <button onclick="showNextProduct()" class="next round">&#8250;</button>
        </div>
        <p><span style="font-weight:bold; font-size:24px;">Fiyat:</span> $${product.price.toFixed(
          2
        )}</p>
        
        <p>${product.description}</p>
    `;

  modal.style.display = "block";
}

let currentProductIndex = 0; // Şu an görüntülenen ürünün dizinini takip etmek için bir değişken

// Bir sonraki ürünü göstermek için işlev
function showNextProduct() {
  currentProductIndex++; // Şu anki üründen bir sonraki ürüne geç

  // Dizinin sonuna ulaştığımızda ilk ürüne geri dön
  if (currentProductIndex >= products.length) {
    currentProductIndex = 0;
  }

  const nextProduct = products[currentProductIndex];
  showProductDetails(nextProduct);
}

// Bir önceki ürünü göstermek için işlev
function showPrevProduct() {
  currentProductIndex--; // Şu anki üründen bir önceki ürüne geç

  // Dizinin başına ulaştığımızda son ürüne git
  if (currentProductIndex < 0) {
    currentProductIndex = products.length - 1;
  }

  const prevProduct = products[currentProductIndex];
  showProductDetails(prevProduct);
}

// Ürün detaylarını kapatma fonksiyonu
function closeProductDetails() {
  const modal = document.getElementById("product-details-modal");
  modal.style.display = "none";
}

// İstinat Makineleri Kataloğu için ürünleri göster
function displayIstinatProducts() {
  const catalogContainer = document.getElementById("grid-2");

  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("catalog-item");
    productItem.innerHTML = `
            <img class="product-image" src="${product.image}" alt="${product.name}">
        `;

    // Ürüne tıklandığında detayları göster
    productItem.addEventListener("click", function () {
      showProductDetails(product);
    });

    catalogContainer.appendChild(productItem);
  });
}

// Forklift Makineleri Kataloğu için ürünleri göster
function displayForkliftProducts() {
  const catalogContainer = document.getElementById("grid-forklift-2");

  fproducts.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("catalog-item");
    productItem.innerHTML = `
            <img class="product-image" src="${product.image}" alt="${product.name}">
        `;

    // Ürüne tıklandığında detayları göster
    productItem.addEventListener("click", function () {
      showProductDetails(product);
    });

    catalogContainer.appendChild(productItem);
  });
}

// Sayfa yüklendiğinde ürünleri göster
window.onload = function () {
  displayIstinatProducts();
  displayForkliftProducts();
};
