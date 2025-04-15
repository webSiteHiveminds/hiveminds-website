import Hero from '@/components/IndustryDetail/Hero'
import React from 'react'
import img from '../../../public/assets/images/industry/electronics-detail.png'
import Layout from '@/components/Layout'
import Content from '@/components/IndustryDetail/Content'
import Related from '@/components/IndustryDetail/RelatedCaseStudies'
import { fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'

const data = {
    overview:"In the electronics sector, consumers seek clarity, performance, and confidence. They’re not just buying a product — they’re investing in a solution, an experience, a promise.",
    approach:"HiveMinds creates dynamic, informative, and visually engaging digital ecosystems that bring technology closer to people. We turn complex specs into compelling benefits, and transactional campaigns into brand-building moments.",
    difference:[
        {
            title:"Simplified Tech Storytelling:",
            detail:"We translate features into relatable value propositions, making even the most advanced gadgets accessible."
        },
        {
            title:"Multi-Touchpoint Activation:",
            detail:"From launch buzz to after-sale engagement, we manage the entire journey across search,social, and marketplaces."
        },
        {
            title:"Digital Shelf Mastery:",
            detail:"We ensure product discoverability and competitive edge on marketplaces through smart listings and optimization."
        },
    ]
}
const electronics = () => {
    paraAnim();
    fadeUp();
    headingAnim();
  return (
    <>
    <Layout>
    <Hero title1={"Electronics"} title2={""} img={img}/>
    <Content data={data}/>
    <Related/>
    </Layout>
    </>
  )
}

export default electronics