const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Allows Frontend to talk to Backend
const controller = require('./controller');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: process.env.FRONTEND_URL || '*', 
    methods: ['GET', 'POST']
}));

app.use(bodyParser.json());


app.get('/products', (req, res) => {
    res.json(controller.getAllProducts());
});

app.get('/products/:id', (req, res) => {
    const product = controller.getProductById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: "Product not found" });
    }
});

app.post('/cart/add', (req, res) => {
    try {
        const { userId, itemId, price } = req.body;
        if (!userId || !itemId || !price) return res.status(400).send("Missing fields");
        
        const cart = controller.addToCart(userId, itemId, price);
        res.json({ message: "Item added", cart });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/checkout', (req, res) => {
    try {
        const { userId, discountCode } = req.body;
        if (!userId) return res.status(400).send("Missing userId");

        const order = controller.checkout(userId, discountCode);
        res.json({ message: "Order successful", order });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

app.post('/admin/generate-code', (req, res) => {
    res.json(controller.generateDiscountCode());
});

// 3. Listen on 0.0.0.0 for external access
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});