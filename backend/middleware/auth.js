import jwt from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET || "supersecretkey";

export default function auth(req, res, next) {
  const token = req.cookies?.token;
  if (!token) return res.status(401).json({ message: "Brak autoryzacji" });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Nieprawidłowy token" });
  }
}
