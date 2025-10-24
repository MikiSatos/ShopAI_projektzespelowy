import db from '../../database.js';

db.prepare(`
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL CHECK(price >= 0),
    quantity INTEGER NOT NULL CHECK(quantity >= 0),
    category TEXT,
    brand TEXT NOT NULL,
    discount REAL NOT NULL DEFAULT 0 CHECK(discount >= 0)
)
`).run();

console.log("✅ Table 'products' ready (with brand & discount fields)");
