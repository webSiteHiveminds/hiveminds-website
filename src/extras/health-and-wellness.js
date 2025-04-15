import Hero from '@/components/IndustryDetail/Hero'
import React from 'react'
import img from '../../../public/assets/images/industry/medical-detail.png'
import Layout from '@/components/Layout'
import Content from '@/components/IndustryDetail/Content'
import Related from '@/components/IndustryDetail/RelatedCaseStudies'
import { fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'

const data = {
    overview:"The health and wellness sector is deeply personal, built on trust, credibility, and care. Whether your brand focuses on preventive care, fitness, holistic wellness, or clinical services, the digital experience must reflect authenticity and empathy.",
    approach:"We work with health and wellness brands to build meaningful engagement through education, storytelling, and supportive digital environments. Our strategies are grounded in trust-building and guided by insight into the human motivations behind health-related decisions.",
    difference:[
        {
            title:"Authentic Messaging:",
            detail:"We communicate complex health information clearly, responsibly, and with empathy to empower informed decision-making."
        },
        {
            title:"Holistic Experience Design:",
            detail:"We create intuitive, helpful journeys that prioritize user well-being, from awareness to action."
        },
        {
            title:"Localized Relevance:",
            detail:"Our campaigns reach diverse audiences with culturally aware and linguistically inclusive messaging, ensuring deeper connection."
        },
    ]
}
const health = () => {
    paraAnim();
    fadeUp();
    headingAnim();
  return (
    <>
    <Layout>
    <Hero title1={"Health and"} title2={"Wellness"} img={img}/>
    <Content data={data}/>
    <Related/>
    </Layout>
    </>
  )
}

export default health