-- Создание таблицы пользователей
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    login TEXT UNIQUE NOT NULL,
    hasloHash TEXT NOT NULL,
    rola TEXT NOT NULL DEFAULT 'USER',
    created_at TEXT NOT NULL
);

-- Добавляем тестового администратора
INSERT OR IGNORE INTO users (login, hasloHash, rola, created_at)
VALUES (
    'admin',
    '$2b$10$CwTycUXWue0Thq9StjUM0uJ8aZlOj8tWwHkOPCzZl6Kr9BJb8O4sG',
    'ADMIN',
    datetime('now')
);

-- Добавляем тестового обычного пользователя
INSERT OR IGNORE INTO users (login, hasloHash, rola, created_at)
VALUES (
    'user',
    '$2b$10$CwTycUXWue0Thq9StjUM0uJ8aZlOj8tWwHkOPCzZl6Kr9BJb8O4sG',
    'USER',
    datetime('now')
);
