import { Resend } from 'resend';
import { createOtp } from '@/lib/otp-store';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { email, slug } = req.body || {};

    if (!email || !slug) {
      return res.status(400).json({ error: 'Email and slug are required' });
    }

    const otp = createOtp(email, slug);

    const { error } = await resend.emails.send({
      from: 'HiveMinds <no-reply@hiveminds.in>',
      to: [email],
      subject: 'Your HiveMinds access code',
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5">
          <h2>Your OTP</h2>
          <p>Use the code below to unlock the article:</p>
          <p style="font-size:24px;font-weight:bold;letter-spacing:2px">${otp}</p>
          <p>This code expires in 10 minutes.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(400).json({ error: 'Failed to send OTP' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('API Error:', err.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
