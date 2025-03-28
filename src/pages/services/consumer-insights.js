/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingAnim, paraAnim, routeChangeTop } from '@/components/gsapAnimations'
import React, { useState } from 'react'

import Hero from '@/components/ServiceDetail/Hero'
import Overview from '@/components/ServiceDetail/Overview'
import SubServices from '@/components/ServiceDetail/SubServices'
import Contact from '@/components/Homepage/Contact'
import img from '../../../public/assets/images/services/consumer-insights.png'
import CaseStudies from '@/components/ServiceDetail/CaseStudies'
import Metadata from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'


const metadata={
  title:"Consumer Insights Services | HiveMinds",
  metaDescription:"Gain actionable insights with HiveMinds. We analyze consumer behavior, market trends, and data to drive informed decisions and impactful brand strategies.",
  path:"services/consumer-insights",
  img:"homepage.png",
    date_published: "2025-03-21T00:00",
    date_modified: "2025-03-21T00:00",
}
const index = () => {
  const [isOpen, setIsOpen] =  useState(false);
  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();
   routeChangeTop()

  return (
    <>
    <Metadata metadata={metadata}/>
    <WebpageJsonLd metadata={metadata}/>
      <Layout isOpen={isOpen}>
       <Hero title1={"Consumer Insights"} title2={"Services "} para={"Consumer Insights are the strategic cornerstone for sustainable growth. We transform complex consumer data into actionable intelligence, empowering your brand to make informed decisions that drive innovation and lasting impact."} img={img}/>
       <Overview title1={"Scale Efficiently with Data-First"} title2={"Consumer Insights"} para={"Truly understanding your audience is essential. Leverage advanced analytics and market research to uncover hidden trends, untapped opportunities, and evolving consumer preferences. By harnessing these insights, you can tailor your messaging and product offerings to exceed customer expectations and achieve sustainable growth."}/>
       <div className='relative h-full w-screen rounded-[20px] mobile:bg-primary mobile:pb-[10%] tablet:bg-primary tablet:pb-[10%] '>
          <SubServices heading={"Unlock Insights, Unleash Growth"} para={"Our comprehensive suite of consumer insights services empowers your brand to transform raw data into strategic advantage:"} subservices={subservices}/>
          <span className='absolute h-[20%] bottom-[30%] w-full'></span>
        <CaseStudies/>
        </div>
       <Contact  title1={"Drive Growth with"} title2={"Data!"} para={"Unlock powerful consumer insights to transform your brand. Connect with us today and harness data-driven strategies for measurable, sustainable success."}/>
      </Layout>
    </>
  )
}

export default index;


const subservices = [
  {
    title:"Market Research & Consumer Analysis",
    content:"Transform raw data into actionable insights by analyzing consumer behavior and market trends for smarter decision-making."
  },
  {
    title:"Competitor & Category Benchmarking",
    content:"Compare industry benchmarks and competitors to pinpoint strengths, weaknesses, and growth opportunities."
  },
  {
    title:"Full Funnel Strategy Development",
    content:"Craft comprehensive strategies guiding customers from awareness through retention, ensuring engagement at every stage."
  },
  {
    title:"Data-Driven Attribution & Optimization",
    content:"Implement precise attribution models and continuous optimization to convert performance data into actionable insights."
  },
  {
    title:"Creative Communication & Content Strategy",
    content:"Merge creative storytelling with data insights to develop compelling content that resonates with your audience."
  },
  {
    title:"Customer Segmentation & Persona Development",
    content:"Develop targeted segments and detailed personas to tailor messaging for optimal relevance and increased conversions."
  },
]