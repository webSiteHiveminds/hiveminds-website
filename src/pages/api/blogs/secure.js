import { getPostBySlug } from '@/lib/blogs';
import { getAuthCookie, getAuthSecret, verifyToken } from '@/lib/gated-auth';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { slug } = req.query || {};
    if (!slug) {
      return res.status(400).json({ error: 'Slug is required' });
    }

    const { post } = await getPostBySlug(slug);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const isGated = Array.isArray(post.tags) && post.tags.some((tag) => tag?.slug === 'gated');
    if (!isGated) {
      return res.status(200).json({ content: post.content });
    }

    const token = getAuthCookie(req);
    const payload = verifyToken(token, getAuthSecret());
    const allowed = payload && Array.isArray(payload.slugs) && payload.slugs.includes(slug);

    if (!allowed) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    return res.status(200).json({ content: post.content });
  } catch (err) {
    console.error('API Error:', err.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
