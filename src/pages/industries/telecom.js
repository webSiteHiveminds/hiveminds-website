import Hero from '@/components/IndustryDetail/Hero'
import React from 'react'
import img from '../../../public/assets/images/industry/telecom-detail.png'
import Layout from '@/components/Layout'
import Content from '@/components/IndustryDetail/Content'
import Related from '@/components/IndustryDetail/RelatedCaseStudies'
import { fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'

const data = {
    overview:"The telecom industry moves fast and connects even faster. With increasing competition and customer churn, brands must communicate clearly, offer value upfront, and keep users engaged over time.",
    approach:"HiveMinds enables telecom brands to own their digital voice with precision targeting and high-performance creative. We bring clarity to complex plans, and relevance to every interaction.",
    difference:[
        {
            title:"Value-Focused Campaigns:",
            detail:"We highlight benefits in simple, persuasive ways — eliminating confusion and driving action."
        },
        {
            title:"Customer Lifecycle Engagement:",
            detail:"From onboarding to renewal, we create journeys that inform, retain, and delight."
        },
        {
            title:"Localized Communication Strategies:",
            detail:"Our campaigns speak the customer’s language — culturally, emotionally, and literally — for better connection."
        },
    ]
}
const Telecom = () => {
    paraAnim();
    fadeUp();
    headingAnim();
  return (
    <>
    <Layout>
    <Hero title1={"Telecom"} title2={""} img={img}/>
    <Content data={data}/>
    <Related/>
    </Layout>
    </>
  )
}

export default Telecom