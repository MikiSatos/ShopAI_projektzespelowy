import express from 'express';
const router = express.Router();

import db from '../../database.js';
import { validateProduct } from './validators.js';

// --- GET all products
router.get('/', (req, res) => {
    db.all('SELECT * FROM products', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// --- GET product by id
router.get('/:id', (req, res) => {
    db.get('SELECT * FROM products WHERE id = ?', [req.params.id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: 'Product not found' });
        res.json(row);
    });
});

// --- POST create product
router.post('/', (req, res) => {
    const error = validateProduct(req.body);
    if (error) return res.status(400).json({ error });

    const { name, price, quantity, category } = req.body;
    db.run(
        'INSERT INTO products (name, price, quantity, category) VALUES (?, ?, ?, ?)',
        [name, price, quantity, category],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Product created', id: this.lastID });
        }
    );
});

// --- PUT update product
router.put('/:id', (req, res) => {
    const { name, price, quantity, category } = req.body;
    const error = validateProduct(req.body);
    if (error) return res.status(400).json({ error });

    db.run(
        'UPDATE products SET name=?, price=?, quantity=?, category=? WHERE id=?',
        [name, price, quantity, category, req.params.id],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            if (this.changes === 0) return res.status(404).json({ error: 'Product not found' });
            res.json({ message: 'Product updated' });
        }
    );
});

// --- DELETE product
router.delete('/:id', (req, res) => {
    db.run('DELETE FROM products WHERE id=?', [req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ error: 'Product not found' });
        res.json({ message: 'Product deleted' });
    });
});

export default router;
