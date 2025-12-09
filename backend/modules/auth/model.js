import sqlite3 from 'sqlite3';
import path from 'path';

// Указываем путь к тому же файлу базы данных, что и во всем проекте
const dbPath = path.resolve('./shop.db');
const db = new sqlite3.Database(dbPath);

// Функция, которая создает таблицу и юзера при старте
const initAuthModel = () => {
    db.serialize(() => {
        // 1. Создаем таблицу users, если её нет
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE,
            password TEXT
        )`);

        // 2. Добавляем тестового пользователя, если его нет
        const sql = `INSERT OR IGNORE INTO users (email, password) VALUES (?, ?)`;
        db.run(sql, ['test@example.com', 'test123'], (err) => {
            if (err) {
                console.error("Ошибка при создании пользователя:", err);
            } else {
                console.log("База данных Auth готова. Тестовый юзер: test@example.com");
            }
        });
    });
};

initAuthModel();

export default db;