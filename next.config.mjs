/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wordpress-1435946-5364580.cloudwaysapps.com',
      }
    ]
  },
  env: {
    CASESTUDY_PER_PAGE: process.env.CASESTUDY_PER_PAGE,
    NEXT_FRONTEND_URL: process.env.NEXT_FRONTEND_URL,
    POSTS_PRERENDER_COUNT: "10",
    WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
  },
};

export default nextConfig;