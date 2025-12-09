import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.resolve('./shop.db');
const db = new sqlite3.Database(dbPath);

const initAuthModel = () => {
    db.serialize(() => {
        // 1. WAŻNE: Usuwamy starą, błędną tabelę, jeśli istnieje
        db.run("DROP TABLE IF EXISTS users");

        // 2. Tworzymy nową tabelę z poprawnymi kolumnami (email, password)
        db.run(`CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE,
            password TEXT
        )`);

        // 3. Dodajemy użytkownika testowego
        // Uwaga: Hasło jest tutaj zwykłym tekstem. Jeśli Twój controller używa bcrypt,
        // to logowanie może wyrzucić błąd "invalid hash", ale przynajmniej serwer wstanie.
        // Jeśli tak się stanie, będziesz musiał się zarejestrować od nowa przez formularz.
        const sql = `INSERT INTO users (email, password) VALUES (?, ?)`;
        db.run(sql, ['test@example.com', 'test123'], (err) => {
            if (err) {
                console.error("Błąd dodawania użytkownika:", err);
            } else {
                console.log("Baza zresetowana. Użytkownik testowy: test@example.com");
            }
        });
    });
};

initAuthModel();

export default db;