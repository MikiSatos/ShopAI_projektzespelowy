import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// Ustawienia dla __dirname w ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- WAŻNE: Import modeli (to uruchamia tworzenie tabel w bazie) ---
import './modules/products/model.js'; 
import './modules/auth/model.js'; // <--- TO JEST KLUCZOWE DLA NAPRAWY BŁĘDU
// ------------------------------------------------------------------

// Import routów
import productsRoutes from './modules/products/routes.js';
import authRoutes from './modules/auth/routes.js';

const app = express();

// Konfiguracja CORS (dostosuj adres origin do swojego frontendu na Render)
app.use(cors({
  origin: 'https://projekt-crud-ilya-raiko-1.onrender.com', 
  credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());

// Serwowanie plików statycznych z frontendu
app.use(express.static(path.join(__dirname, '../frontend')));

// Podpięcie routów
app.use('/products', productsRoutes);
app.use('/auth', authRoutes);

// Obsługa stron HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/register.html'));
});

// Uruchomienie serwera
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));