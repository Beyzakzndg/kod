// Örnek ürün verileri
const products = [
    { name: 'Ürün 1', price: 19.99, image: 'img/1.jpg', description: 'Açıklama 1' },
    { name: 'Ürün 2', price: 29.99, image: 'img/2.jpg', description: 'Açıklama 2' },
    { name: 'Ürün 3', price: 39.99, image: 'img/3.jpg', description: 'Açıklama 3' },
    { name: 'Ürün 4', price: 45.99, image: 'img/4.jpg', description: 'Açıklama 4' },
    { name: 'Ürün 5', price: 55.99, image: 'img/5.jpg', description: 'Açıklama 5' },
    { name: 'Ürün 6', price: 60.99, image: 'img/6.jpg', description: 'Açıklama 6' },
    { name: 'Ürün 7', price: 60.99, image: 'img/7.jpg', description: 'Açıklama 7' },
    { name: 'Ürün 8', price: 60.99, image: 'img/8.jpg', description: 'Açıklama 8' },
    { name: 'Ürün 9', price: 60.99, image: 'img/9.jpg', description: 'Açıklama 9' },
    { name: 'Ürün 10', price: 60.99, image: 'img/10.jpg', description: 'Açıklama 10' }
];

const fproducts = [
    { name: 'Ürün 1', price: 19.99, image: 'img/f1.jpg', description: 'Açıklama 1' },
    
  
];

// Ürün bilgilerini alt kısımda gösterme fonksiyonu
function showProductDetails(product) {
    const modal = document.getElementById('product-details-modal');
    const modalContent = document.getElementById('modal-product-info');

    modalContent.innerHTML = `
        <span class="close" onclick="closeProductDetails()"><iconify-icon icon="material-symbols:close">x</iconify-icon></span>
        <h2>${product.name}</h2>
        <img class="product-image" src="${product.image}" alt="${product.name}">
        <p>Fiyat: $${product.price.toFixed(2)}</p>
        <p>${product.description}</p>
    `;

    modal.style.display = 'block';
}

// Ürün detaylarını kapatma fonksiyonu
function closeProductDetails() {
    const modal = document.getElementById('product-details-modal');
    modal.style.display = 'none';
}

// İstinat Makineleri Kataloğu için ürünleri göster
function displayIstinatProducts() {
    const catalogContainer = document.getElementById('catalog-container-1');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('catalog-item');
        productItem.innerHTML = `
            <img class="product-image" src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Fiyat: $${product.price.toFixed(2)}</p>
        `;

        // Ürüne tıklandığında detayları göster
        productItem.addEventListener('click', function() {
            showProductDetails(product);
        });

        catalogContainer.appendChild(productItem);
    });
}

// Forklift Makineleri Kataloğu için ürünleri göster
function displayForkliftProducts() {
    const catalogContainer = document.getElementById('catalog-container-2');

    fproducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('catalog-item');
        productItem.innerHTML = `
            <img class="product-image" src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Fiyat: $${product.price.toFixed(2)}</p>
        `;

        // Ürüne tıklandığında detayları göster
        productItem.addEventListener('click', function() {
            showProductDetails(product);
        });

        catalogContainer.appendChild(productItem);
    });
}

// Sayfa yüklendiğinde ürünleri göster
window.onload = function() {
    displayIstinatProducts();
    displayForkliftProducts();
};
