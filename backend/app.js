const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Подключаем модель (создаёт таблицу, если её нет)
require('./modules/products/model');

// Подключаем роуты
const productsRoutes = require('./modules/products/routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Раздача фронтенда
app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/products', productsRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// --- Render назначает порт через process.env.PORT ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
