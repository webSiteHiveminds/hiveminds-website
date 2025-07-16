import { fadeIn, fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'
import Content from '@/components/IndustryDetail/Content'
import Hero from '@/components/IndustryDetail/Hero'
import Layout from '@/components/Layout'
import Metadata from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'
import React from 'react'


const metadata={
    title:"FMCG & Beauty Digital Marketing | HiveMinds",
    metaDescription:"Data-driven digital marketing for FMCG & beauty brands—creative content, consumer engagement, brand loyalty, performance campaigns to grow visibility & global reach.",
    path:"industries/fmcg-and-beauty",
    img:"homepage.png",
      date_published: "2025-07-16T00:00",
      date_modified: "2025-07-16T00:00",
  }
const fmcg = () => {
     headingAnim();
      fadeUp();
    return (
        <>
        <Metadata metadata={metadata}/>
        <WebpageJsonLd metadata={metadata}/>
            <Layout>
                <Hero title1={"FMCG"} img={"/assets/images/industry/fmcg-and-beauty.png"} />
                <Content sections={sections} />
            </Layout>
        </>
    )
}

export default fmcg

const sections = [
    {
        heading: "Startup Stage",
        ref: "startupRef",
        id: "stage-startup",
        images: [
            {
                link: "/casestudies/nivea-efficiency-surge",
                img: "/assets/images/impact/casestudy/nivea-efficiency.jpg",
                title: "Nivea Efficiency Surge"
            },
            {
                link: "/casestudies/parachute-advansed",
                img: "/assets/images/impact/casestudy/parachute-cs-hero.jpg",
                title: "Parachute Advansed"
            },
        ],
        tagline:"Break into  shelves — Ecom or digital. Win trust, drive trials.",
        content: [
            "Crack category entry with Launch playbook, Conversion Rate optimization through combination of marketing, content and pricing levers.",
            "Rank fast with search-optimized product listings",
            "Boost trial via performance-first influencer campaigns",
            "Drive urgency with time-bound eCom offers",
            "Build instant trust with storytelling and Content levers",
            "Deploy accurate KW x SKU x Media investments to maximize ROI"
        ],
    },
    {
        heading: "Growth Stage",
        ref: "growthRef",
        id: "stage-growth",
        images: [
            {
                link: "/casestudies/sugar-free",
                img: "/assets/images/impact/casestudy/sugarfree-cs-hero.jpg",
                title: "Sugar Free"
            },
            {
                link: "/casestudies/pidilite-wd40",
                img: "/assets/images/impact/casestudy/pidilite-cs-hero.jpg",
                title: "Pdilite"
            },
        ],
        tagline:" Scale SKUs. Expand reach. Dominate search and shelf.",
        content: [
            "Adapt your mix to seasonal shopper behaviour.",
            "Win category slots with smart node placement- Claim leadership in a gateway product- industry approved",
            "Create combos and bundles to lift AOV.",
            "Competition & SKU wise marketing strategies",
            "Go full-funnel optimization with On and Off platform interventions",
            "Hyper local & High frequency optimization strategies through our tried and tested growth frameworks."
        ],
    },
    {
        heading: "Maturity Stage",
        ref: "maturedRef",
        id: "stage-matured",
        images: [
            {
                link: "/casestudies/saffola-honey",
                img: "/assets/images/impact/casestudy/saffola-cs-hero.jpg",
                title: "Saffola"
            },
            {
                link: "/casestudies/nivea",
                img: "/assets/images/impact/casestudy/nivea-cs-hero.jpg",
                title: "Nivea"
            }
        ],
        tagline:"Own categories. Defend share. Innovate profitably.",
        content: [
            "Push premium packs to grow margins through SKU prioritization and optimized media deployment",
            "Prevent ad spend waste with live stock + buybox tracking through tech capablities",
            "Defend brand with full-spectrum coverage and grow category or Market share targeting pockets of growth",
            "Activate repurchase with retention-led remarketing",
            "Craft deep strategies identifying white spaces in the market and recommending Products (NPDs) to capture and grow share. ",
            "Drive off platform converting traffic through activations like Telegram"
        ],
    },
];