import { getPaginatedCaseStudies } from '@/lib/casestudies';

export default async function handler(req, res) {
    const { page = 1 } = req.query;

    try {
        const { posts, pagination } = await getPaginatedCaseStudies({
            currentPage: parseInt(page, 10),
        });

        res.status(200).json({ posts, pagination });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
}
