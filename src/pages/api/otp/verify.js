import { verifyOtp } from '@/lib/otp-store';
import {
  buildAuthCookie,
  createToken,
  getAuthCookie,
  getAuthSecret,
  verifyToken,
} from '@/lib/gated-auth';

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { email, slug, otp } = req.body || {};

    if (!email || !slug || !otp) {
      return res.status(400).json({ error: 'Email, slug, and otp are required' });
    }

    const result = verifyOtp(email, slug, otp);
    if (!result.ok) {
      return res.status(400).json({ error: 'Invalid or expired OTP' });
    }

    const secret = getAuthSecret();
    const existing = verifyToken(getAuthCookie(req), secret);

    const now = Date.now();
    let slugs = [slug];
    let exp = now + ONE_DAY_MS;

    if (existing && Array.isArray(existing.slugs) && existing.email === email) {
      slugs = Array.from(new Set([...existing.slugs, slug]));
      exp = existing.exp && existing.exp > now ? existing.exp : exp;
    }

    const token = createToken({ email, slugs, exp }, secret);
    res.setHeader('Set-Cookie', buildAuthCookie(token));

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('API Error:', err.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
