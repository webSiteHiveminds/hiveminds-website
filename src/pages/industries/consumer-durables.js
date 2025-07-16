import { fadeIn, fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'
import Content from '@/components/IndustryDetail/Content'
import Hero from '@/components/IndustryDetail/Hero'
import Layout from '@/components/Layout'
import Metadata from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'
import React from 'react'


const metadata={
    title:"Consumer Durables Digital Marketing | HiveMinds",
    metaDescription:"HiveMinds combines creative strategy and data to drive growth for consumer durables—enhancing customer experience, boosting conversions and brand loyalty.",
    path:"industries/consumer-durables",
    img:"homepage.png",
      date_published: "2025-07-16T00:00",
      date_modified: "2025-07-16T00:00",
  }

const consumerDurables = () => {
    
    headingAnim();
    fadeUp();

    return (
        <>
        <Metadata metadata={metadata}/>
        <WebpageJsonLd metadata={metadata}/>
            <Layout>
                <Hero title1={"Consumer Durables "} img={"/assets/images/industry/consumer-durables-detail.png"} />
                <Content sections={sections} />
            </Layout>
        </>
    )
}

export default consumerDurables

const sections = [
    {
        heading: "Startup Stage",
        ref: "startupRef",
        id: "stage-startup",
        images: [
            {
                link: "/casestudies/morphy-richards",
                img: "/assets/images/impact/casestudy/morphy-richard-cs-hero.jpg",
                title: "Morphy Richards"
            },
            {
                link: "/casestudies/crompton",
                img: "/assets/images/impact/casestudy/crompton-cs-hero.jpg",
                title: "Crompton"
            }
        ],
        tagline: "For new-age durable brands entering a competitive market.",
        content: [
            "Launch performance ads to drive discovery and sales",
            "Boost product visibility with SEO-rich listings and keyword mapping.",
            "Build early trust with influencer reviews and visual content",
            "Use infographics and A+ content to improve conversion on PDPs.",
            "Capture local demand with geo-targeted and “near me” campaigns.",
            "Performance led off take scale up strategies to grow offtakes and enter into category",
            "Crafting go to market strategies piggy backing on category or market  leaders"
        ],
    },
    {
        heading: "Growth Stage",
        ref: "growthRef",
        id: "stage-growth",
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
        tagline: "For brands scaling across categories, SKUs, and platforms",
        content: [
            "Expand reach with multi-format ads across Amazon, Flipkart, Qcommerce and digital platforms",
            "Increase share of shelf with assortment and keyword.",
            "Retarget window shoppers with smart creatives and offers.",
            "Use display and video to dominate Top of Funnel and seasonal peaks.",
            "Tap Tier 2/3 cities with vernacular content and regional influencer push",
            "Optimize product feeds and inventory mapping to avoid lost sales."
        ],
    },
    {
        heading: "Maturity Stage",
        ref: "maturedRef",
        id: "stage-matured",
        images: [
            {
                link: "/casestudies/crompton-heater",
                img: "/assets/images/impact/casestudy/crompton-heater-cs-hero.jpg",
                title: "Crompton Heater"
            },
            {
                link: "/casestudies/bajaj-seasonal",
                img: "/assets/images/impact/casestudy/bajaj-coolers-cs-banner.png",
                title: "Bajaj Seasonal"
            }
        ],
        tagline: "For market leaders aiming to deepen dominance and drive efficiency.",
        content: [
            "Integrate brand performance to own every stage of the funnel.",
            "Launch new SKUs with synced TV + digital + influencer rollouts.",
            "Personalize journeys across D2C, marketplace, and offline touchpoints.",
            "Strengthen product/category leadership with SEO + display synergy.",
            "Drive loyalty with CRM, warranty-linked engagement, and app installs.",
            "Deploy HiveMinds IP tech stack to stay ahead of the curve and capitalise on trends and opportunities. "
        ],
    },
];