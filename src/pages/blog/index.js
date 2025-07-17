import BlogListing from "@/components/Blog/BlogListing"
import FeaturedBlog from "@/components/Blog/FeaturedBlog"
import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
import { getPaginatedPosts, sortStickyPosts } from "@/lib/blogs"
import img from '../../../public/assets/images/blogpage/blog-listing-hero.png'
import { fadeIn, fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'
import Metadata from "@/components/Metadata"
import { WebpageJsonLd } from "@/lib/json-ld"

const metadata = {
    title: " HiveMinds Blog | Digital Marketing, SEO & E-Commerce Insights",
    metaDescription: "Explore the HiveMinds Blog for expert articles on digital marketing strategies, SEO best practices, and the latest e-commerce trends. Stay informed with industry updates and case studies to enhance your online presence.",
    path: "blog",
    img: "homepage.png",
    date_published: "2025-03-21T00:00",
    date_modified: "2025-03-21T00:00",
}
export default function Blogs({ posts, featuredPost, pagination }) {

    headingAnim();
    paraAnim();
    fadeUp();
    fadeIn();

    return (
        <>
            <Metadata metadata={metadata} />
            <WebpageJsonLd metadata={metadata} />
            <Layout>
                <Hero title1={"What's"} title2={"Buzzing"} para={"At HiveMinds, we tackle your most challenging business problems with our specialised digital marketing approach - integrating strategic expertise, cutting-edge technology, and data-driven insights to craft campaigns that elevate your brand and drive sustainable growth."} img={img} />
                {featuredPost && (
                    <FeaturedBlog post={featuredPost} />
                )}
                <BlogListing posts={posts} pagination={pagination} />
            </Layout>
        </>
    )
}

export async function getStaticProps({ params }) {
    const { slug } = params || {};
    let { posts, pagination } = await getPaginatedPosts();
    if (slug) {
        const { posts: filteredPosts, pagination: filteredPagination } = await getPaginatedPosts({
            categoryId: slug,
        });
        posts = filteredPosts;
        pagination = {
            ...filteredPagination,
            basePath: `/blog/${slug}/page`,
        };
    }
    posts = sortStickyPosts(posts);
    const featuredPost = posts.find((post) => post.isSticky) || null;
    posts = posts.filter((post) => !post.isSticky);
    return {
        props: {
            posts,
            featuredPost,
            pagination: {
                ...pagination,
                basePath: slug ? `/blog/${slug}/page` : '/blog',
            },
        },
        revalidate: 500,
    };
}