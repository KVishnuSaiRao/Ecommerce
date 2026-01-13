const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Allows Frontend to talk to Backend
const controller = require('./controller');

const app = express();
const PORT = 4000;

app.use(cors());
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

// // 6. Admin: Stats
// app.get('/admin/stats', (req, res) => {
//     res.json(controller.getStats());
// });

app.listen(PORT, () => {
    console.log(`Backend Server running on http://localhost:${PORT}`);
});