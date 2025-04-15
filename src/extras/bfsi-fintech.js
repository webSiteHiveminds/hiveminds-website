import Hero from '@/components/IndustryDetail/Hero'
import React from 'react'
import img from '../../../public/assets/images/industry/bfsi-and-fintech-detail.png'
import Layout from '@/components/Layout'
import Content from '@/components/IndustryDetail/Content'
import Related from '@/components/IndustryDetail/RelatedCaseStudies'
import { fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'

const data = {
    overview:"In the BFSI and fintech landscape, digital-first is no longer optional — it's the standard. From savings to investments, insurance to payments, customers seek clarity, ease, and assurance in every interaction.",
    approach:"HiveMinds blends innovation with precision to craft digital experiences that foster trust, simplify finance, and encourage confident action. We translate financial services into accessible, engaging narratives that resonate across customer segments.",
    difference:[
        {
            title:"Clarity-Driven Design:",
            detail:"We streamline digital experiences to reduce friction and make complex financial offerings easy to understand and use."
        },
        {
            title:"Trust-Oriented Engagement:",
            detail:"Every piece of content — from landing pages to ads — is designed to reassure and educate, not just sell."
        },
        {
            title:"Responsive Marketing Ecosystems:",
            detail:"Our strategies evolve with regulatory changes and market shifts, ensuring brand relevance and agility."
        },
    ]
}
const bfsi = () => {
    paraAnim();
    fadeUp();
    headingAnim();
  return (
    <>
    <Layout>
    <Hero title1={"BFSI –"} title2={"Fintech"} img={img}/>
    <Content data={data}/>
    <Related/>
    </Layout>
    </>
  )
}

export default bfsi