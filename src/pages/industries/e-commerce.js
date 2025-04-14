import Hero from '@/components/IndustryDetail/Hero'
import React from 'react'
import img from '../../../public/assets/images/industry/ecommcerce-detail.png'
import Layout from '@/components/Layout'
import Content from '@/components/IndustryDetail/Content'
import Related from '@/components/IndustryDetail/RelatedCaseStudies'
import { fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'

const data = {
    overview:"E-commerce is an ever-evolving landscape fueled by immediacy, personalization, and seamless user experience. Consumers expect intuitive journeys, relevant recommendations, and a brand presence that feels both smart and human.",
    approach:"HiveMinds builds digital strategies that don’t just drive traffic — they drive meaningful transactions and loyal relationships. We design fluid commerce ecosystems where discovery, engagement, and conversion are all deeply interconnected.",
    difference:[
        {
            title:"Conversion-Driven Storytelling:",
            detail:"From scroll-stopping ads to persuasive product pages, we blend creativity with clarity to guide buying decisions."
        },
        {
            title:"Seamless Customer Journeys:",
            detail:"We fine-tune the path from interest to checkout, minimizing drop-offs and maximizing satisfaction."
        },
        {
            title:"Full-Funnel Synchronization:",
            detail:"Our campaigns operate in harmony across touchpoints — from social to search, web to marketplace — ensuring consistency and impact."
        },
    ]
}
const ecommerce = () => {
    paraAnim();
    fadeUp();
    headingAnim();
  return (
    <>
    <Layout>
    <Hero title1={"E-"} title2={"Commerce"} img={img}/>
    <Content data={data}/>
    <Related/>
    </Layout>
    </>
  )
}

export default ecommerce