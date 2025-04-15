import Hero from '@/components/IndustryDetail/Hero'
import React from 'react'
import img from '../../../public/assets/images/industry/automobiles-detail.png'
import Layout from '@/components/Layout'
import Content from '@/components/IndustryDetail/Content'
import Related from '@/components/IndustryDetail/RelatedCaseStudies'
import { fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'

const data = {
    overview: "Automobiles represent more than transport — they symbolize aspiration, freedom, and identity. In a digital-first age, brands must evoke emotion while streamlining lead generation and engagement.",
    approach: "HiveMinds fuses storytelling with performance marketing to position automotive brands as lifestyle choices. We craft experiences that match the emotional journey of vehicle ownership with data-backed marketing precision.",
    difference: [
        {
            title: "Aspirational Content Journeys:",
            detail: "We produce visuals and narratives that reflect the lifestyle and values of your audience."
        },
        {
            title: "Digital Showroom Solutions:",
            detail: "Through immersive campaigns, lead gen tools, and smart targeting, we bring showroom experiences online."
        },
        {
            title: "Performance-Linked Creativity:",
            detail: "Our creative assets are built to inspire and convert — whether it’s a test drive, a visit, or a call."
        },
    ]
}
const Automobiles = () => {
    paraAnim();
    fadeUp();
    headingAnim();
    return (
        <>
            <Layout>
                <Hero title1={"Automobiles"} title2={""} img={img} />
                <Content data={data} />
                <Related />
            </Layout>
        </>
    )
}

export default Automobiles