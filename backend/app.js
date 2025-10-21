import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// Для __dirname в ES модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Подключаем модель (создаёт таблицу, если её нет)
import './modules/products/model.js';

// Подключаем роуты
import productsRoutes from './modules/products/routes.js';

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
