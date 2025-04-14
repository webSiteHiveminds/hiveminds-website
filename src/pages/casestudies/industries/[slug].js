import {
  fadeIn,
  fadeUp,
  headingAnim,
  paraAnim,
} from "@/components/gsapAnimations";
import Layout from "@/components/Layout";
import { getAllIndustries, getIndustryBySlug } from "@/lib/industries";
import IndustryCsListing from "@/components/CaseStudy/IndustryCSListing";
import MoreCs from "@/components/CaseStudyDetail/MoreCs";
import Metadata from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

export default function Blogs({ industry, industries }) {
  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();

const metadata={
  title:`HiveMinds Case Studies | Transforming Growth in ${industry.name}`,
  metaDescription:`Discover how HiveMinds drives success in the ${industry.name} sector. Explore case studies showcasing data-driven marketing strategies that boost growth, engagement, and ROI for leading brands.`,
  path:"casestudies",
  img:"homepage.png",
  date_published: "2025-03-21T00:00",
  date_modified: "2025-03-21T00:00",
}

  return (
    <>
    <Metadata metadata={metadata}/>
    <WebpageJsonLd metadata={metadata}/>
      <Layout>
        {/* <Hero
          title1={"Our Case"}
          title2={"Studies"}
          para={
            "Clients rely on our integrated network of agencies and specialized practices to deliver personalized experiences through creative, media and customer experience management."
          }
          img={img}
        /> */}
        <IndustryCsListing  industries={industries} industry={industry} />  
        <MoreCs/>             
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { slug: industrySlug } = params;
  const { industry } = await getIndustryBySlug(
    industrySlug
  );

  if (!industry) {
    return {
      notFound: true,
    };
  }

  const { industries } = await getAllIndustries();

  return {
    props: {
      industry,
      industries,
    },
    revalidate: 500,
  };
}

export async function getStaticPaths() {
  const { industries } = await getAllIndustries();

  const paths = industries.map((industry) => ({
    params: {
      slug: industry.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
