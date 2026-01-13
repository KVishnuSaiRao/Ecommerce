// backend/controller.js
const { store, DISCOUNT_N, DISCOUNT_PERCENTAGE } = require('./store');

// Helper to create random codes
const generateCodeString = () => 'DISCOUNT-' + Math.random().toString(36).substr(2, 9).toUpperCase();

// --- PRODUCT LOGIC ---
const getAllProducts = () => {
    return store.products;
};

const getProductById = (id) => {
    return store.products.find(p => p.id === id);
};

// --- CART LOGIC ---
const addToCart = (userId, itemId, price) => {
    if (!store.carts[userId]) {
        store.carts[userId] = { items: [], total: 0 };
    }
    
    // Check if item already exists to update quantity (optional enhancement)
    // For now, we just push to list as per requirement
    store.carts[userId].items.push({ itemId, price });
    store.carts[userId].total += price;
    return store.carts[userId];
};

// --- CHECKOUT LOGIC ---
const checkout = (userId, discountCode) => {
    const cart = store.carts[userId];
    if (!cart || cart.items.length === 0) {
        throw new Error("Cart is empty");
    }

    let finalAmount = cart.total;
    let discountAmount = 0;

    // Validate Discount Code
    if (discountCode) {
        const codeIndex = store.discountCodes.indexOf(discountCode);
        
        if (codeIndex > -1) {
            // Check Nth Order Condition
            if ((store.globalOrderCount + 1) % DISCOUNT_N === 0) {
                discountAmount = finalAmount * DISCOUNT_PERCENTAGE;
                finalAmount = finalAmount - discountAmount;
                
                // Remove used code
                store.discountCodes.splice(codeIndex, 1);
            } else {
                throw new Error("Discount code is valid, but this is not the Nth order.");
            }
        } else {
            throw new Error("Invalid discount code.");
        }
    }

    // Create Order Record
    const order = {
        orderId: store.globalOrderCount + 1,
        userId,
        items: cart.items,
        originalTotal: cart.total,
        discountApplied: discountAmount,
        finalTotal: finalAmount,
        timestamp: new Date()
    };

    // Update Global State
    store.orders.push(order);
    store.globalOrderCount++;
    store.stats.totalItemsPurchased += cart.items.length;
    store.stats.totalPurchaseAmount += finalAmount;
    store.stats.totalDiscountAmount += discountAmount;

    // Clear User Cart
    delete store.carts[userId];

    return order;
};

// --- ADMIN LOGIC ---
const generateDiscountCode = () => {
    // Check if the NEXT order (current + 1) is the winner
    if ((store.globalOrderCount + 1) % DISCOUNT_N === 0) {
        const newCode = generateCodeString();
        store.discountCodes.push(newCode);
        return { 
            message: "Discount code generated! Next order is a winner.", 
            code: newCode 
        };
    } else {
        const ordersNeeded = DISCOUNT_N - ((store.globalOrderCount) % DISCOUNT_N);
        return { 
            message: "Condition not met.", 
            orders_until_next_discount: ordersNeeded 
        };
    }
};

const getStats = () => {
    return {
        total_items_purchased: store.stats.totalItemsPurchased,
        total_purchase_amount: store.stats.totalPurchaseAmount,
        discount_codes_list: store.discountCodes,
        total_discount_given: store.stats.totalDiscountAmount,
        total_orders_placed: store.globalOrderCount
    };
};

module.exports = { 
    getAllProducts, 
    getProductById, 
    addToCart, 
    checkout, 
    generateDiscountCode, 
    getStats 
};