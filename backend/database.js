const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../shop.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error("❌ Ошибка при подключении к базе данных:", err.message);
  else console.log("✅ Подключено к базе данных:", dbPath);
});

module.exports = db;
