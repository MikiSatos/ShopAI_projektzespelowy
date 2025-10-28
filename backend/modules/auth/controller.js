import db from '../../database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || "supersecretkey";

export const register = async (req, res) => {
  const { login, password } = req.body;
  if (!login || !password) return res.status(400).json({ message: "Login i password sa wymagane" });

  try {
    const user = await db.get('SELECT * FROM users WHERE login = ?', [login]);
    if (user) return res.status(400).json({ message: "Login juz istnieje" });

    const hash = await bcrypt.hash(password, 10);
    await db.run('INSERT INTO users (login, hasloHash, rola, created_at) VALUES (?, ?, ?, ?)',
      [login, hash, 'USER', new Date().toISOString()]);
    res.json({ message: "Uzytkownik utworzony" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Błąd serwera" });
  }
};

export const login = async (req, res) => {
  const { login, password } = req.body;
  if (!login || !password) return res.status(400).json({ message: "Login i password sa wymagane" });

  try {
    const user = await db.get('SELECT * FROM users WHERE login = ?', [login]);
    if (!user) return res.status(400).json({ message: "Niepoprawny login lub hasło" });

    const match = await bcrypt.compare(password, user.hasloHash);
    if (!match) return res.status(400).json({ message: "Niepoprawny login lub hasło" });

    const token = jwt.sign({ id: user.id, login: user.login, rola: user.rola }, SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: "Zalogowano pomyślnie" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Błąd serwera" });
  }
};

export const logout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: "Wylogowano" });
};

export const me = (req, res) => {
  if (!req.user) return res.status(401).json({ message: "Niezalogowany" });
  res.json({ user: req.user });
};
