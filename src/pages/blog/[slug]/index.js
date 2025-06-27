import Layout from "@/components/Layout";
import { fadeIn, fadeUp, headingAnim, imgAnim, lineAnim, paraAnim } from '@/components/gsapAnimations'
import RelatedBlogs from '@/components/BlogDetail/RelatedBlogs';
import { getPostBySlug, getRecentPosts, postPathBySlug } from "@/lib/blogs";
import Content from "@/components/BlogDetail/Content";
import BlogHero from "@/components/BlogDetail/BlogHero";
import { NextSeo } from "next-seo";
import { ArticleJsonLd} from "@/lib/json-ld";
import { homepage } from "@/lib/util";

export default function BlogDetail({ post }) {
    
    fadeIn();
    fadeUp();
    headingAnim();
    lineAnim();
    paraAnim();
    imgAnim()

    const {
        content,
        title,
        date,
        categories,
        slug,
        excerpt,
        metaImage,
        metaDescription,
        blogFields,
    } = post;

    const path = postPathBySlug(slug);
    
    const relatedBlogsData = blogFields?.relatedBlogs?.edges?.map(edge => ({
        id: edge.node.id,
        slug: edge.node.slug,
        title: edge.node.title,
        heroImage: edge.node.blogFields?.heroImage?.node,
        category: edge.node.categories?.nodes,
        date:edge.node.date
    })) || [];
    return (
        <>
            <NextSeo
                title={title}
                description={metaDescription}
                openGraph={{
                    type: 'article',
                    url: `${homepage}/${path}`,
                    title: title,
                    "description": metaDescription,
                    images: [
                        {
                            url: metaImage.sourceUrl,
                            width: metaImage.mediaDetails.width,
                            height: metaImage.mediaDetails.height,
                            alt: metaImage.mediaDetails.alt,
                            type: "image/jpg",
                        },
                    ],
                    siteName: "Hiveminds",
                }}
                canonical={`${homepage}/${path}`}
                languageAlternates={[{
                    hrefLang: 'x-default',
                    href: `${homepage}/${path}`,
                }]}
            />
            <ArticleJsonLd post={post} />
            <Layout>
                <BlogHero
                    title={title}
                    excerpt={excerpt}
                    featuredImg={blogFields.heroImage.node}
                    category={categories[0].name}
                />
                <Content date={date} slug={slug} content={content} />
                <RelatedBlogs blogs={relatedBlogsData}/>
            </Layout>
        </>
    )
}

export async function getStaticProps({ params = {} }) {
    const { slug: postSlug } = params;
    const { post } = await getPostBySlug(postSlug);

    if (!post) {
        return {
            props: {},
            notFound: true,
        };
    }

    const props = {
        post,
    }

    return {
        props,
        revalidate: 500,
    };
}

export async function getStaticPaths() {
    const { posts } = await getRecentPosts({
        count: process.env.POSTS_PRERENDER_COUNT,
    });

    const paths = posts
        .filter(({ slug }) => typeof slug === 'string')
        .map(({ slug }) => ({
            params: {
                slug: slug,
            },
        }));

    return {
        paths,
        fallback: 'blocking',
    };
}