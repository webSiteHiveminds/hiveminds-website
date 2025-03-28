import Layout from "@/components/Layout";
import { fadeIn, fadeUp, lineAnim, paraAnim, routeChangeTop } from '@/components/gsapAnimations'

import { caseStudyPathBySlug, getCaseStudyBySlug, getRecentCaseStudies } from "@/lib/casestudies";
import Hero from "@/components/CaseStudyDetail/Hero";
import Content from "@/components/CaseStudyDetail/Content";

import { NextSeo } from "next-seo";
import { homepage } from "@/lib/util";
import MoreCs from "@/components/CaseStudyDetail/MoreCs";
import { WebpageJsonLd } from "@/lib/json-ld";


export default function CaseStudyDetail({ caseStudy }) {
    fadeIn();
    fadeUp();
    lineAnim();
    paraAnim();
    routeChangeTop();

    const {
        content,
        title,
        date,
        categories,
        industries,
        services,
        slug,
        featuredImage,
        metaImage,
        metaDescription,
    } = caseStudy;

    const path = caseStudyPathBySlug(slug);
    const metadata = {
        title:{title},
        metaDescription:{metaDescription},
        path: `${homepage}${path}`,
        img:"homepage.png",
    date_published: "2025-03-21T00:00",
    date_modified: "2025-03-21T00:00",

    }

    return (
        <>
            <NextSeo
                title={title}
                description={metaDescription}
                openGraph={{
                    type: 'webpage',
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
                    href: `${homepage}${path}`,
                }]}
            />
            <WebpageJsonLd metadata={metadata}/>
            <Layout>
                <Hero
                    title1={title}
                    img={featuredImage.sourceUrl}
                />
                <Content date={date} slug={slug} content={content} categories={categories} industry={industries[0].name} services={services}/>
                {/* <RelatedBlogs /> */}
                <MoreCs/>
            </Layout>
        </>
    )
}

export async function getStaticProps({ params = {} }) {
    const { slug: caseStudySlug } = params;
    const { caseStudy } = await getCaseStudyBySlug(caseStudySlug);

    if (!caseStudy) {
        return {
            props: {},
            notFound: true,
        };
    }

    const props = {
        caseStudy,
    }

    return {
        props,
        revalidate: 500,
    };
}

export async function getStaticPaths() {
    const { caseStudies } = await getRecentCaseStudies({
        count: process.env.POSTS_PRERENDER_COUNT,
    });

    const paths = caseStudies
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