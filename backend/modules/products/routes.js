const express = require('express');
const router = express.Router();
const db = require('../../database'); 
const { validateProduct } = require('./validators');

// --- GET /products ---
// Получить все продукты
router.get('/', (req, res) => {
    const products = db.prepare('SELECT * FROM products').all();
    res.json(products);
});

// --- GET /products/:id ---
// Получить продукт по id
router.get('/:id', (req, res) => {
    const product = db.prepare('SELECT * FROM products WHERE id=?').get(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
});

// --- POST /products ---
// Создать новый продукт
router.post('/', (req, res) => {
    const error = validateProduct(req.body);
    if (error) return res.status(400).json({ error });

    const { name, price, quantity, category } = req.body;
    const info = db.prepare(
        'INSERT INTO products (name, price, quantity, category) VALUES (?, ?, ?, ?)'
    ).run(name, price, quantity, category);

    res.status(201).json({ message: 'Product created', id: info.lastInsertRowid });
});

// --- PUT /products/:id ---
// Обновить продукт
router.put('/:id', (req, res) => {
    const product = db.prepare('SELECT * FROM products WHERE id=?').get(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    const error = validateProduct(req.body);
    if (error) return res.status(400).json({ error });

    const { name, price, quantity, category } = req.body;
    db.prepare(
        'UPDATE products SET name=?, price=?, quantity=?, category=? WHERE id=?'
    ).run(name, price, quantity, category, req.params.id);

    res.json({ message: 'Product updated' });
});

// --- DELETE /products/:id ---
// Удалить продукт
router.delete('/:id', (req, res) => {
    const product = db.prepare('SELECT * FROM products WHERE id=?').get(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    db.prepare('DELETE FROM products WHERE id=?').run(req.params.id);
    res.json({ message: 'Product deleted' });
});

module.exports = router;
