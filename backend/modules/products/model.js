const db = require('../../database');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      quantity INTEGER NOT NULL,
      category TEXT
    )
  `, (err) => {
    if (err) console.error("❌ Ошибка при создании таблицы:", err.message);
    else console.log("✅ Таблица products готова");
  });
});
