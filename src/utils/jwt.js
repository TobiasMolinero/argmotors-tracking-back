import jwt from 'jsonwebtoken';

export function generateAccessToken(payload) {
  const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
  const ACCESS_TOKEN_EXPIRES_IN = '15m';

  return jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRES_IN });
}

export function verifyAccessToken(token) {
  const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;

  return jwt.verify(token, JWT_ACCESS_SECRET);
}
