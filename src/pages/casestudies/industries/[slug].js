import {
  fadeIn,
  fadeUp,
  paraAnim,
} from "@/components/gsapAnimations";
import Layout from "@/components/Layout";
import { getAllIndustries, getIndustryBySlug } from "@/lib/industries";
import IndustryCsListing from "@/components/CaseStudy/IndustryCSListing";
import MoreCs from "@/components/CaseStudyDetail/MoreCs";
import Metadata from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

export default function Blogs({ industry, industries }) {

  paraAnim();
  fadeUp();
  fadeIn();

  const metadata = {
    title: `HiveMinds Case Studies | Transforming Growth in ${industry.name}`,
    metaDescription: `Discover how HiveMinds drives success in the ${industry.name} sector. Explore case studies showcasing data-driven marketing strategies that boost growth, engagement, and ROI for leading brands.`,
    path: `casestudies/industries/${industry.slug}`,
    img: "homepage.png",
    date_published: "2025-03-21T00:00",
    date_modified: "2025-03-21T00:00",
  }

  return (
    <>
      <Metadata metadata={metadata} noindex={true} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <section
          className="w-screen h-full overflow-hidden bg-[#F1F1F1] pt-[10%] pb-[4%] mobile:pb-8 mobile:bg-white1 mobile:pt-24 tablet:pb-[12vw]"
          id="contact-hero"
        >
          <div className="w-full h-full container-lg flex justify-between mobile:flex-col mobile:gap-10 tablet:flex-col tablet:gap-[10vw]">
            <div className="w-full flex flex-col gap-[1vw] mobile:w-full mobile:gap-4 mobile:pt-0 tablet:w-full tablet:gap-[4vw]">
              <h1 className="heading-1 leading-[1.2] headingAnim">
                {industry.name}
                <span className="text-primary">{" "}Case Studies</span>
              </h1>
            </div>
          </div>
        </section>
        <IndustryCsListing industries={industries} industry={industry} />
        <MoreCs />
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
