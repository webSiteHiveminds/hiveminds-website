import Hero from '@/components/IndustryDetail/Hero'
import React from 'react'
import img from '../../../public/assets/images/industry/cosmetics-detail.png'
import Layout from '@/components/Layout'
import Content from '@/components/IndustryDetail/Content'
import Related from '@/components/IndustryDetail/RelatedCaseStudies'
import { fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'

const data = {
    overview:"In the fast-moving world of FMCG and beauty, where trends shift quickly and consumer loyalty is hard-won, brands need to do more than simply show up — they need to connect. From everyday essentials to luxury beauty products, the key to success lies in relevance, resonance, and recall.",
    approach:"HiveMinds crafts tailored digital strategies that combine cultural insight, visual storytelling, and data-led creativity. We help brands stand out in a saturated market by building emotional connections and delivering consistent digital experiences that captivate consumers at every stage of their journey.",
    difference:[
        {
            title:"Consumer-First Storytelling:",
            detail:"We create content that mirrors consumer aspirations, lifestyle, and preferences to deepen brand resonance."
        },
        {
            title:"Platform-Specific Innovation:",
            detail:"Each campaign is adapted to suit the nuances of every platform, from high-impact reels to long-form blog content."
        },
        {
            title:"Brand Cohesion Across Channels:",
            detail:"We ensure a seamless and unified brand voice across all digital touchpoints, reinforcing trust and identity."
        },
    ]
}
const fmcg = () => {
    paraAnim();
    fadeUp();
    headingAnim();
  return (
    <>
    <Layout>
    <Hero title1={"FMCG &"} title2={"Beauty"} img={img}/>
    <Content data={data}/>
    <Related/>
    </Layout>
    </>
  )
}

export default fmcg