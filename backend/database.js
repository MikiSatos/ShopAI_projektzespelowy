import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

// Получаем абсолютный путь к файлу базы данных
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "../shop.db");

// Подключаем базу данных SQLite
export const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ Ошибка при подключении к базе данных:", err.message);
  } else {
    console.log("✅ Подключено к базе данных:", dbPath);
  }
});
