/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingAnim, paraAnim, routeChangeTop } from '@/components/gsapAnimations'
import React, {useState } from 'react'

import Hero from '@/components/ServiceDetail/Hero'
import Overview from '@/components/ServiceDetail/Overview'
import SubServices from '@/components/ServiceDetail/SubServices'
import Contact from '@/components/Homepage/Contact'
import img from '../../../public/assets/images/services/retail-marketing.png'
import CaseStudies from '@/components/ServiceDetail/CaseStudies'
import Metadata from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'

const metadata={
  title:" Retail Marketing Services | HiveMinds",
  metaDescription:"  Elevate your e-commerce presence with HiveMinds' data-driven retail strategies, optimizing every touchpoint from discovery to conversion for sustainable growth.",
  path:"services/retail-marketing",
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
       <Hero title1={"Retail"} title2={"Services"} para={"Digital retail is the strategic engine that transforms customer interactions into measurable revenue gains. By seamlessly blending precision paid media with organic growth tactics, our approach reimagines your e-commerce presence and unlocks untapped market potential."} img={img}/>
       <Overview title1={"Scale Efficiently with Data-First "} title2={"Retail Strategies"} para={"In today’s hyper-competitive digital marketplace, scaling your retail operations requires a strategic, data-driven methodology. Prioritize deep category insights, advanced analytics, and creative execution to optimize every touchpoint—from discovery to conversion—and drive sustainable growth."}/>
       <div className='relative h-full w-screen rounded-[20px] mobile:bg-primary mobile:pb-[10%] tablet:bg-primary tablet:pb-[10%] '>
          <SubServices heading={"Our Solutions For Retail Transformation"} para={"Our comprehensive suite of retail services are designed to empower your brand’s digital evolution:"} subservices={subservices}/>
          <span className='absolute h-[20%] bottom-[30%] w-full'></span>
        <CaseStudies/>
        </div>
       <Contact  title1={"Maximize Retail Success –  "} title2={"Connect Today!"} para={"Unlock tailored eCommerce solutions—let’s optimize, scale, and grow your brand today!"}/>
      </Layout>
    </>
  )
}

export default index;


const subservices = [
  {
    title:"E-commerce Channel Optimization",
    content:"Leverage strategic planning across platforms like Amazon, Flipkart, and others to capture high-intent shoppers."
  },
  {
    title:"Quick Commerce Strategy",
    content:"Capitalize on fast-growing platforms like Blinkit, Zepto, and Swiggy Instamart to capture time-sensitive, high-value orders."
  },
  {
    title:"Advanced Analytics & Reporting",
    content:"Unlock custom dashboards, competitor intelligence, and market insights to guide your digital retail strategy effectively."
  },
  {
    title:"Creative Content & Campaign Execution",
    content:"Deliver bespoke creative solutions and comprehensive marketplace audits that amplify your brand voice and drive conversions."
  },
  {
    title:"Category Research & Auditing",
    content:"Conduct deep dives into category trends and performance metrics to inform strategic decisions and uncover growth opportunities."
  },
  {
    title:"Marketplace Strategy & Growth",
    content:"Execute end-to-end eCommerce strategies—from optimized listings to targeted promotions—that generate measurable growth."
  },
  {
    title:"Partnership-Level Support & Training",
    content:"Benefit from ongoing certified training and strategic consultation to empower your team and enhance operational excellence."
  }
]