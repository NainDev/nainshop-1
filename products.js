// Array produk untuk toko
const products = [
    {
        id: 1,
        category: "Elektronik",
        name: "A3 Wireless Bluetooth Headset TWS",
        price: 26000,
        image: "/img/canva.jpg",
        detailLink: "https://www.nainshop.biz.id/details/tws.html",
        buyLink: "https://vt.tokopedia.com/t/ZSMBoyX2x/"
    },
    {
        id: 2,
        category: "Parfum",
        name: "Braven Code EDP Series 100ml",
        price: 35000,
        image: "shop_img/braven_img.jpg",
        detailLink: "/product/braven-code",
        buyLink: "https://vt.tokopedia.com/t/ZSMANnp95/"
    },
    {
        id: 3,
        category: "Jam",
        name: "PhiLipe Ricci Jam Tangan Pria Rantai",
        price: 56500,
        image: "/shop_img/ricci_img.jpg",
        detailLink: "/product/philipe-ricci",
        buyLink: "https://vt.tokopedia.com/t/ZSMA2jkf3/"
    },
    {
        id: 4,
        category: "Baju",
        name: "Kaos Oversize Combed Oceanetic",
        price: 55000,
        image: "shop_img/baju1_img.jpg",
        detailLink: "/product/baju-code-1",
        buyLink: "https://vt.tokopedia.com/t/ZSMAvYXQH/"
    }, 
    {
        id: 4,
        category: "Celana",
        name: "Celana panjang jeans washed loose fit pria",
        price: 85000,
        image: "shop_img/celana1_img.jpg",
        detailLink: "/product/celana-code-1",
        buyLink: "https://vt.tokopedia.com/t/ZSMAvGNBN/"
}
];

// Fungsi untuk merender produk ke grid
function renderProducts(productsToRender) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'bg-white rounded-lg overflow-hidden shadow p-3';
        productElement.innerHTML = `
            <div class="h-48 mb-3 product-image">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
            </div>
            <div>
                <p class="text-sm text-gray-500">${product.category}</p>
                <h3 class="font-semibold text-gray-800 text-sm product-title mb-2">${product.name}</h3>
                <p class="text-pink-500 font-semibold mb-3">Rp ${product.price.toLocaleString()},00</p>
                <div class="flex gap-2">
                    <a href="${product.detailLink}" class="flex-1">
                        <button class="w-full bg-gray-100 text-gray-600 rounded-lg py-2 hover:bg-gray-200 transition-colors">
                            Detail
                        </button>
                    </a>
                    <a href="${product.buyLink}" target="_blank" class="flex-1">
                        <button onclick="addToCart(${product.id})" 
                            class="w-full bg-pink-500 text-white rounded-lg py-2 hover:bg-pink-600 transition-colors">
                            <i class="ri-shopping-cart-line mr-1"></i>
                            Beli
                        </button>
                    </a>
                </div>
            </div>
        `;
        productGrid.appendChild(productElement);
    });
          }
