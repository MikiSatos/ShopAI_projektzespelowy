import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// Для __dirname в ES модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Подключаем модели (создают таблицы, если их нет)
import './modules/products/model.js';

// Роуты
import productsRoutes from './modules/products/routes.js';
import authRoutes from './modules/auth/routes.js';

const app = express();

// CORS с credentials для cookie
app.use(cors({
  origin: 'https://projekt-crud-ilya-raiko-1.onrender.com', // твой деплой на Render
  credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../frontend')));

// Роуты
app.use('/products', productsRoutes);
app.use('/auth', authRoutes);

// Главная страница
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Дополнительно: login/register страницы
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/login.html'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/register.html'));
});

// --- Render назначает порт через process.env.PORT ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
