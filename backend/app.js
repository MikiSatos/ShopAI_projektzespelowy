const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Подключение модели (создаёт таблицу, если ещё нет)
require('./modules/products/model');

// Подключение роутов products
const productsRoutes = require('./modules/products/routes');

const app = express();

// --- Middleware ---
app.use(cors());
app.use(bodyParser.json());

// Раздача фронтенда (HTML/JS/CSS)
app.use(express.static(path.join(__dirname, '../frontend')));

// --- API ---
app.use('/products', productsRoutes);

// --- Главная страница ---
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// --- Запуск сервера ---
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
