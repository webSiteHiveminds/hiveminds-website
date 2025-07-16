import { fadeIn, fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'
import Content from '@/components/IndustryDetail/Content'
import Hero from '@/components/IndustryDetail/Hero'
import Layout from '@/components/Layout'
import Metadata from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'
import React from 'react'

const metadata={
    title:"Auto Marketing for EVs, OEMs & Dealers | HiveMinds",
    metaDescription:"From EV launches to CRM loyalty, HiveMinds offers full-funnel digital marketing for automakers, dealers & OEMs to drive performance & brand growth.",
    path:"industries/automobiles",
    img:"homepage.png",
      date_published: "2025-07-16T00:00",
      date_modified: "2025-07-16T00:00",
  }

const automobiles = () => {
     headingAnim();
      fadeUp();
    return (
        <>
        <Metadata metadata={metadata}/>
        <WebpageJsonLd metadata={metadata}/>
            <Layout>
                <Hero title1={"Automobiles"} img={"/assets/images/industry/automobiles-detail.png"} />
                <Content sections={sections} />
            </Layout>
        </>
    )
}

export default automobiles

const sections = [
    {
        heading: "Startup Stage",
        ref: "startupRef",
        id: "stage-startup",
        images: [
            {
                link: "/casestudies/bajaj-core",
                img: "/assets/images/impact/casestudy/bajaj-seasonal.jpg",
                title: "Bajaj Core"
            },
            {
                link: "/casestudies/titan-clocks",
                img: "/assets/images/impact/casestudy/titan-cs-hero.jpg",
                title: "Titan"
            },
        ],
        tagline:"Break into the EV market with speed, style, and storytelling.",
        content: [
            "Target from niche to mass- Early adopters to mainstream commuters",
            "Build recall with USP-focused storytelling",
            "Create social proof with user-generated content.",
            "Lean CAC with agile media testing"
        ],
    },
    {
        heading: "Growth Stage",
        ref: "growthRef",
        id: "stage-growth",
        images: [
            {
                link: "/casestudies/dominos",
                img: "/assets/images/industry/dominos.png",
                title: "Dominos"
            },
            {
                link: "/casestudies/flydubai",
                img: "/assets/images/industry/fly-dubai.png",
                title: "Fly dubai"
            }
        ],
        tagline:"Scale brand. Multiply demand. Own your category.",
        content: [
           "Elevate brand search with emotion + performance",
           "Create discovery across aggregators, content portals and social influencer channels",
           "Expand reach with hyper-local influencer tiers",
           "Precision mapping for showroom <> campaign catchment area.",
           "Capture mid-funnel with review and test-ride content",
           "Optimize CAC through smart audience layering",
           "Design offers around seasons and lifestyle hooks",
           "Power full-funnel visibility with YouTube + Meta"
        ],
    },
    {
        heading: "Maturity Stage",
        ref: "maturedRef",
        id: "stage-matured",
        images: [
            {
                link: "/casestudies/saffola-triumph",
                img: "/assets/images/industry/saffola-honey.png",
                title: "Saffola Honey"
            },
            {
                link: "/casestudies/bigbasket",
                img: "/assets/images/industry/big-basket.png",
                title: "Big Basket"
            },
        ],
        tagline:"Scale with precision.",
        content: [
         "High impact branding campaigns- Maximizing and optimizing for reach and frequency",
         "Creating  automobile and motorbike content IPs with leading content houses and creators",
         "Capturing high SOV during seasonal periods",
         "Dominate high-intent keywords in paid and organic",
         "Build loyalty with advanced CRM + remarketing journeys",
         "Differentiate with futuristic tech narratives",
         "Experiment across emerging platforms"

        ],
    },
];