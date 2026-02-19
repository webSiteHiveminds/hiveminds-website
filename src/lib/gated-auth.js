import crypto from 'crypto';

const COOKIE_NAME = 'hiveminds_gated';

function base64Url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function sign(data, secret) {
  return crypto.createHmac('sha256', secret).update(data).digest('base64url');
}

export function getAuthSecret() {
  return process.env.GATED_CONTENT_SECRET || 'dev-gated-secret';
}

export function createToken(payload, secret) {
  const data = base64Url(JSON.stringify(payload));
  const signature = sign(data, secret);
  return `${data}.${signature}`;
}

export function verifyToken(token, secret) {
  if (!token || typeof token !== 'string') return null;
  const [data, signature] = token.split('.');
  if (!data || !signature) return null;
  const expected = sign(data, secret);
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  try {
    const payload = JSON.parse(Buffer.from(data, 'base64').toString('utf8'));
    if (payload.exp && Date.now() > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}

export function buildAuthCookie(token, maxAgeSeconds = 60 * 60 * 24) {
  const secure = process.env.NODE_ENV === 'production' ? ' Secure;' : '';
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAgeSeconds};${secure}`;
}

export function getAuthCookie(req) {
  return req?.cookies?.[COOKIE_NAME];
}
