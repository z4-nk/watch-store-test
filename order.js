const products = {
    1: { name: 'Classic Watch', price: 299 },
    2: { name: 'Luxury Watch', price: 399 },
    3: { name: 'Elite Watch', price: 499 },
    4: { name: 'Royal Watch', price: 549 },
    5: { name: 'Titan Watch', price: 649 },
    6: { name: 'Eclipse Watch', price: 799 },
    7: { name: 'Monarch Watch', price: 899 },
    8: { name: 'Aurora Watch', price: 999 },
    9: { name: 'Heritage Watch', price: 1099 }
};

const orderItemsContainer = document.getElementById('order-items');
const summaryTotal = document.getElementById('summary-total');
const form = document.getElementById('order-form');

function normalizeOrderItem(item) {
    if (!item) return null;

    const price = Number(item.price);
    if (!item.name || Number.isNaN(price)) return null;

    return {
        id: String(item.id),
        name: item.name,
        price,
        qty: Number(item.qty) || 1
    };
}

function loadOrderItems() {
    const params = new URLSearchParams(window.location.search);
    const directProductId = params.get('product');

    if (directProductId) {
        const product = products[Number(directProductId)];
        if (product) {
            return [{ id: directProductId, name: product.name, price: product.price, qty: 1 }];
        }
    }

    try {
        const tempOrder = JSON.parse(localStorage.getItem('maz_watch_order_temp') || '[]');
        if (Array.isArray(tempOrder) && tempOrder.length) {
            const normalized = tempOrder.map(normalizeOrderItem).filter(Boolean);
            if (normalized.length) return normalized;
        }
    } catch (error) {
        console.log('Unable to read temp order', error);
    }

    try {
        const savedCart = JSON.parse(localStorage.getItem('maz_watch_cart') || '{}');
        const items = Object.entries(savedCart).map(([id, qty]) => {
            const product = products[Number(id)];
            if (!product) return null;
            return { id, name: product.name, price: product.price, qty };
        }).filter(Boolean).map(normalizeOrderItem).filter(Boolean);

        return items;
    } catch (error) {
        return [];
    }
}

function renderOrderSummary() {
    const items = loadOrderItems();

    if (!items.length) {
        orderItemsContainer.innerHTML = '<p class="empty-order">No products selected.</p>';
        summaryTotal.textContent = '$0';
        return;
    }

    let total = 0;

    orderItemsContainer.innerHTML = items.map((item) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        return `
            <div class="order-item-row">
                <div>
                    <strong>${item.name}</strong>
                    <span>x${item.qty}</span>
                </div>
                <span>$${itemTotal}</span>
            </div>
        `;
    }).join('');

    summaryTotal.textContent = `$${total}`;
}

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('customer-name').value.trim();
        const phone = document.getElementById('customer-phone').value.trim();
        const city = document.getElementById('customer-city').value.trim();
        const payment = document.getElementById('payment-method').value;
        const notes = document.getElementById('customer-notes').value.trim();
        const items = loadOrderItems();
        const successBox = document.getElementById('order-success');

        if (!items.length) {
            alert('Please select at least one product before placing the order.');
            return;
        }

        const orderInfo = [
            `Customer: ${name}`,
            `Phone: ${phone}`,
            `City: ${city}`,
            `Payment: ${payment}`,
            `Items: ${items.map((item) => `${item.name} x${item.qty}`).join(', ')}`,
            `Notes: ${notes || 'No additional notes'}`
        ].join(' | ');

        if (successBox) {
            successBox.textContent = `Order submitted successfully for demo testing. Details: ${orderInfo}`;
            successBox.style.display = 'block';
        }

        form.reset();
    });
}

renderOrderSummary();
