import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

// Для __dirname в ES модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, '../shop.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error("❌ Ошибка при подключении к базе данных:", err.message);
  else console.log("✅ Подключено к базе данных:", dbPath);
});

export default db;
