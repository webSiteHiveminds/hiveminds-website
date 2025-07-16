/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingAnim, paraAnim, routeChangeTop } from '@/components/gsapAnimations'
import React, { useEffect, useState } from 'react'

import Hero from '@/components/ServiceDetail/Hero'
import Overview from '@/components/ServiceDetail/Overview'
import SubServices from '@/components/ServiceDetail/SubServices'
import Contact from '@/components/Homepage/Contact'
import img from '../../../public/assets/images/services/creative-content-management.png'
import CaseStudies from '@/components/ServiceDetail/CaseStudies'
import Metadata from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'

const metadata={
  title:"Creative Content Management Services | HiveMinds",
  metaDescription:"Boost engagement with tailored content strategies, SEO-friendly creatives, and platform-specific assets from HiveMinds’ expert content management team.",
  path:"services/creative-content-management",
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
       <Hero title1={"Creative and Content"} title2={"Services "} para={"Content is the strategic foundation of impactful brand engagement. Our creative and content solutions fuse data-driven insights with compelling storytelling to craft immersive brand experiences—ensuring every narrative drives measurable engagement and sustainable growth."} img={img}/>
       <Overview title1={"Scale Efficiently with Strategic "} title2={" Creative Execution"} para={"In today’s digital landscape, brands must differentiate itself through authentic, high-impact content. Embrace a holistic content strategy that seamlessly integrates creative storytelling with performance analytics to captivate audiences, drive conversions, and foster lasting brand loyalty."}/>
       <div className='relative h-full w-screen rounded-[20px]  mobile:bg-primary mobile:pb-[10%] tablet:bg-primary tablet:pb-[10%]'>
          <SubServices heading={"Our Creative Impact Suite"} para={"Our comprehensive suite of creative solutions empowers your brand to transform ideas into action:"} subservices={subservices}/>
          <span className='absolute h-[20%] bottom-[30%] w-full'></span>
        <CaseStudies/>
        </div>
       <Contact title1={"Transform your brand’s"} title2={"story!"} para={"Creative solutions for every brand—choose what fits your vision!"}/>
      </Layout>
    </>
  )
}

export default index;


const subservices = [
  {
    title:"Marketplace Creatives",
    content:"Crafting visuals designed for real outcomes and customer-first experiences."
  },
  {
    title:"Production-Based Creatives",
    content:"Developing content rooted in your brand’s DNA through research and design thinking."
  },
  {
    title:"Paid Marketing Creatives",
    content:"Delivering action-inspiring creatives that drive conversions."
  },
  {
    title:"Social Media Creatives",
    content:"Breaking through the noise with attention-grabbing, emotional, and engaging content."
  },
  {
    title:"Brand Storytelling",
    content:"Creating compelling narratives that enhance brand recall and emotional connection."
  },
  {
    title:"Visual Identity & Design",
    content:"Crafting cohesive brand aesthetics for lasting impact."
  },
]