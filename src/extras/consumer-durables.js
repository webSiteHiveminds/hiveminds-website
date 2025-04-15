import Hero from '@/components/IndustryDetail/Hero'
import React from 'react'
import img from '../../../public/assets/images/industry/consumer-durables-detail.png'
import Layout from '@/components/Layout'
import Content from '@/components/IndustryDetail/Content'
import Related from '@/components/IndustryDetail/RelatedCaseStudies'
import { fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'

const data = {
    overview:"Consumer durables demand long-term value, trust, and strong brand identity. The decision-making process is more deliberate, and success depends on your ability to engage customers across research, comparison, and purchase stages.",
    approach:"HiveMinds builds credibility-rich, informative campaigns that reinforce product superiority and brand reliability. We foster deeper customer relationships through transparency and after-sale engagement.",
    difference:[
        {
            title:"Assurance-First Messaging:",
            detail:"We highlight durability, innovation, and value through thoughtful digital storytelling."
        },
        {
            title:"Considered Path to Purchase:",
            detail:"Our strategy accounts for customer research cycles, providing timely information and nudges."
        },
        {
            title:"Reinforcing Brand Promise:",
            detail:"We extend engagement post-purchase, strengthening loyalty and repeat consideration."
        },
    ]
}
const Consumer = () => {
    paraAnim();
    fadeUp();
    headingAnim();
  return (
    <>
    <Layout>
    <Hero title1={"Consumer"} title2={"Durables"} img={img}/>
    <Content data={data}/>
    <Related/>
    </Layout>
    </>
  )
}

export default Consumer