import { fadeIn, fadeUp, headingAnim, paraAnim } from "@/components/gsapAnimations";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import { getPaginatedCaseStudies } from "@/lib/casestudies";
import { getIndustries } from "@/lib/industries";
import img from "../../../public/assets/images/services/hero.png";
import CaseStudyListing from "@/components/CaseStudy/CaseStudyListing";
import Metadata from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";


const metadata={
    title:" HiveMinds | Case Studies",
    metaDescription:"Case Studies",
    path:"casestudies",
    img:"homepage.png",
    date_published: "2025-03-21T00:00",
    date_modified: "2025-03-21T00:00",
  }
export default function Blogs({ caseStudies, pagination, industries }) {
    headingAnim();
  
    paraAnim();
    fadeUp();
    fadeIn();

    return (
        <>
        <Metadata metadata={metadata}/>
        <WebpageJsonLd metadata={metadata}/>
            <Layout>
                <Hero title1={"Our Case"} title2={"Studies"} para={"Clients rely on our integrated network of agencies and specialized practices to deliver personalized experiences through creative, media and customer experience management."} img={img} />
                <CaseStudyListing caseStudies={caseStudies} industries={industries} pagination={pagination} />               
            </Layout>
        </>
    )
}

export async function getStaticProps({ params }) {
    const { slug } = params || {};
    let { caseStudies, pagination } = await getPaginatedCaseStudies();
    if (slug) {
        const { caseStudies: filteredCaseStudies, pagination: filteredPagination } = await getPaginatedCaseStudies({
            industryId: slug,
        });
        caseStudies = filteredCaseStudies;
        pagination = {
            ...filteredPagination,
            basePath: `/casestudies/${slug}/page`,
        };
    }

    let { industries } = await getIndustries();

    return {
        props: {
            caseStudies,
            industries,
            pagination: {
                ...pagination,
                basePath: slug ? `/casestudies/${slug}/page` : '/casestudies',
            },
        },
        revalidate: 500,
    };
}