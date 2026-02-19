const otpStore = new Map();

function getKey(email, slug) {
  return `${email.toLowerCase()}|${slug}`;
}

export function createOtp(email, slug, ttlMs = 10 * 60 * 1000) {
  const otp = String(Math.floor(100000 + Math.random() * 900000));
  const expiresAt = Date.now() + ttlMs;
  otpStore.set(getKey(email, slug), { otp, expiresAt });
  return otp;
}

export function verifyOtp(email, slug, otp) {
  const key = getKey(email, slug);
  const entry = otpStore.get(key);
  if (!entry) return { ok: false, reason: 'not_found' };
  if (Date.now() > entry.expiresAt) {
    otpStore.delete(key);
    return { ok: false, reason: 'expired' };
  }
  if (entry.otp !== otp) {
    return { ok: false, reason: 'mismatch' };
  }
  otpStore.delete(key);
  return { ok: true };
}
