/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingAnim, paraAnim, routeChangeTop } from '@/components/gsapAnimations'
import { Clients } from '@/components/OurImpact/Clients'
import Awards from '@/components/OurImpact/Awards'
import Hero from '@/components/Hero'
import img from '../../public/assets/images/impact/our-impact-hero-img.png'
import Metadata from '@/components/Metadata'
import { getAllCaseStudies } from '@/lib/casestudies'
import { getAllIndustries } from '@/lib/industries'
import Listing from '@/components/OurImpact/Listing'
import { WebpageJsonLd } from '@/lib/json-ld'

const metadata = {
  title: "HiveMinds' Impact: Client Success, Partnerships, and Awards",
  metaDescription: "Explore how HiveMinds drives client success across industries, collaborates with top media partners, and earns industry accolades for digital marketing excellence.",
  path: "our-impact",
  img:"homepage.png",
    date_published: "2025-03-21T00:00",
    date_modified: "2025-03-21T00:00",
}

export default function ImpactPage({ stickyCaseStudies, industries }) {

  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();
  //  routeChangeTop()

  return (
    <>
      <Metadata metadata={metadata} />
      <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <Hero title1={"Our"} title2={"Impact"} para={"Clients rely on our integrated network of agencies and specialized practices to deliver personalized experiences through creative, media and customer experience management."} img={img} />
        <Clients />
        <Awards />
        <Listing industries={industries} caseStudies={stickyCaseStudies} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const { caseStudies } = await getAllCaseStudies();
  const { industries } = await getAllIndustries();

  const stickyCaseStudies = caseStudies.filter((caseStudy) => caseStudy.caseStudyFields.isSticky) || null;
  return {
    props: {
      stickyCaseStudies,
      industries,
    },
    revalidate: 500,
  };
}