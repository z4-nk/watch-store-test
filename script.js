const products = {
    1: { name: 'Classic Watch', price: 299, image: 'e34e0a078e1384137a2c8ecf9c0f105b.jpg' },
    2: { name: 'Luxury Watch', price: 399, image: '3ae7ddfe638c1475310f8c0a95a82fab.jpg' },
    3: { name: 'Elite Watch', price: 499, image: '5a1433e70d7cc9475ffb929c3b0cefd7.jpg' },
    4: { name: 'Royal Watch', price: 549, image: '43f5c338416e8f0f5cf5a34cd9b1b5d8.jpg' },
    5: { name: 'Titan Watch', price: 649, image: '6a24c3da002c0fb92766e7fa7d1f516e.jpg' },
    6: { name: 'Eclipse Watch', price: 799, image: '501cacc31da7a741e46b3017da475d6c.jpg' },
    7: { name: 'Monarch Watch', price: 899, image: '3e07697c295a2c3eb29b719ed6dc7e00.jpg' },
    8: { name: 'Aurora Watch', price: 999, image: 'bfd634af2a1ab20782a03a06f57166ba.jpg' },
    9: { name: 'Heritage Watch', price: 1099, image: '75337d9a3925924c82c2baf44a0ca012.jpg' }
};

const CART_KEY = 'maz_watch_cart';

function loadCart() {
    try {
        const savedCart = localStorage.getItem(CART_KEY);
        return savedCart ? JSON.parse(savedCart) : {};
    } catch (error) {
        return {};
    }
}

function saveCart(cart) {
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (error) {
        console.log('Unable to save cart:', error);
    }
}

let cart = loadCart();
const searchInput = document.querySelector('input[type="text"]');
const cartButton = document.querySelector('.cart-button');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const cartBadge = document.getElementById('cart-badge');
const allWatchesContainer = document.getElementById('all-watches');
const checkoutButton = document.getElementById('checkout-btn');
let cartToastTimeout = null;

function renderAllWatches() {
    if (!allWatchesContainer) return;

    allWatchesContainer.innerHTML = Object.entries(products).map(([id, product]) => {
        const salePrice = Math.round(product.price * 0.8);

        return `
            <article class="product-card all-watch-card" data-id="${id}" data-name="${product.name}">
                <div class="watch-tag">-20%</div>
                <img src="${product.image}" alt="${product.name}">
                <div class="card-info">
                    <h3>${product.name}</h3>
                    <p class="price old-price">السعر: $${product.price}</p>
                    <p class="price sale-price">السعر بعد الخصم: $${salePrice}</p>
                    <button class="add-cart-btn" type="button" data-id="${id}">Add to cart</button>
                </div>
            </article>
        `;
    }).join('');

    bindProductInteractions();
}

function bindProductInteractions() {
    const productCards = document.querySelectorAll('.product-card');
    const addCartButtons = document.querySelectorAll('.add-cart-btn');

    productCards.forEach((card) => {
        card.addEventListener('click', (event) => {
            const button = event.target.closest('.add-cart-btn');
            if (button) {
                event.stopPropagation();
                return;
            }

            const id = card.dataset.id;
            if (id) {
                openproduct(id);
            }
        });
    });

    addCartButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            addToCart(button.dataset.id);
        });
    });
}

function openproduct(id) {
    window.location.href = 'product.html?id=' + id;
}

function updateCartNumbers() {
    const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    cartCount.textContent = totalItems;
    cartBadge.textContent = totalItems;
}

function renderCart() {
    const cartKeys = Object.keys(cart);

    if (!cartKeys.length) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
        cartTotal.textContent = '$0';
        updateCartNumbers();
        return;
    }

    let totalPrice = 0;

    cartItems.innerHTML = cartKeys.map((id) => {
        const product = products[id];
        const quantity = cart[id];
        const itemTotal = product.price * quantity;
        totalPrice += itemTotal;

        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <span class="cart-item-name">${product.name}</span>
                    <span class="cart-item-price">$${itemTotal}</span>
                </div>
                <div class="qty-controls">
                    <button class="qty-btn" type="button" data-action="decrease" data-id="${id}">-</button>
                    <span>${quantity}</span>
                    <button class="qty-btn" type="button" data-action="increase" data-id="${id}">+</button>
                </div>
            </div>
        `;
    }).join('');

    cartTotal.textContent = `$${totalPrice}`;
    updateCartNumbers();
}

function showCartToast(productName) {
    const existingToast = document.getElementById('cart-toast');
    if (existingToast) {
        existingToast.remove();
        if (cartToastTimeout) {
            clearTimeout(cartToastTimeout);
        }
    }

    const toast = document.createElement('div');
    toast.id = 'cart-toast';
    toast.textContent = `تمت الإضافة إلى السلة: ${productName}`;
    document.body.appendChild(toast);

    cartToastTimeout = setTimeout(() => {
        toast.remove();
    }, 1800);
}

function addToCart(id) {
    const product = products[id];
    if (!product) return;

    cart[id] = (cart[id] || 0) + 1;
    saveCart(cart);
    renderCart();
    showCartToast(product.name);
}

function decreaseFromCart(id) {
    if (!cart[id]) return;

    cart[id] -= 1;

    if (cart[id] <= 0) {
        delete cart[id];
    }

    saveCart(cart);
    renderCart();
}

function filterProducts() {
    if (!searchInput) return;

    const searchTerm = searchInput.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.product-card');

    cards.forEach((card) => {
        const cardName = (card.dataset.name || card.querySelector('h3')?.textContent || '').toLowerCase();
        const matches = !searchTerm || cardName.includes(searchTerm);
        card.style.display = matches ? '' : 'none';
    });
}

if (searchInput) {
    searchInput.addEventListener('input', filterProducts);
}

if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
        if (!Object.keys(cart).length) {
            alert('Your cart is empty. Please add a watch first.');
            return;
        }

        window.location.href = 'order.html';
    });
}

if (cartButton) {
    cartButton.addEventListener('click', () => {
        const cartSection = document.getElementById('cart');
        if (cartSection) {
            cartSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

window.addEventListener('storage', (event) => {
    if (event.key === CART_KEY) {
        cart = loadCart();
        renderCart();
    }
});

document.addEventListener('click', (event) => {
    const button = event.target.closest('.qty-btn');
    if (!button) return;

    const id = button.dataset.id;
    const action = button.dataset.action;

    if (action === 'increase') {
        addToCart(id);
    } else {
        decreaseFromCart(id);
    }
});

renderAllWatches();
renderCart();
