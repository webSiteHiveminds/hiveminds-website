/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingAnim, paraAnim, routeChangeTop } from '@/components/gsapAnimations'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import Hero from '@/components/ServiceDetail/Hero'
import Overview from '@/components/ServiceDetail/Overview'
import SubServices from '@/components/ServiceDetail/SubServices'
import Contact from '@/components/Homepage/Contact'
import img from '../../../public//assets/images/services/branding-services.png'
import CaseStudies from '@/components/ServiceDetail/CaseStudies'
import Metadata from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'

const metadata={
  title:"HiveMinds: Branding Excellence & Programmatic Expertise",
  metaDescription:"Build a strong brand with HiveMinds through data-backed storytelling, creative identity design, and multi-channel strategies that drive lasting impact.",
  path:"services/branding",
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
       <Hero 
        title1={"Transforming Brands, "} 
        title2={"Driving Impact"} 
        para={"An integrated branding approach is a strategic catalyst that fuses creative storytelling with data-driven insights, crafting a compelling digital presence that resonates with audiences and delivers measurable, lasting impact. It's about transforming your brand into a market leader with a narrative that truly connects."} 
        img={img}/>
       <Overview title1={"Scale Efficiently with a Data-First"} title2={"Branding Strategy"} para={"Building a powerful brand requires more than just a logo—it demands a holistic, data-driven approach. Embrace deep market research, agile creative execution, and continuous performance optimization to articulate your brand’s unique story and activate it across every digital channel."}/>
       <div className='relative h-full w-screen rounded-[20px]  mobile:bg-primary mobile:pb-[10%] tablet:bg-primary tablet:pb-[10%]'>
          <SubServices heading={"Our Strategic Brand Capabilities"} para={"Empower your brand transformation with a comprehensive suite of solutions:"} subservices={subservices}/>
          <span className='absolute h-[20%] bottom-[30%] w-full'></span>
        <CaseStudies/>
        </div>
       <Contact  title1={"Transform Your Brand "} title2={"Now"} para={"Elevate your market presence and achieve lasting impact with our strategic branding and programmatic advertising solutions. Connect with us today."}/>
      </Layout>
    </>
  )
}

export default index;


const subservices = [
  {
    title:"Comprehensive Brand Auditing & Strategy",
    content:"We analyze every facet of your brand to develop strategic roadmaps that fuel differentiation and sustainable growth."
  },
  {
    title:"Multi-Channel Programmatic Advertising",
    content:"Leveraging real-time data, we deploy ads across diverse channels to maximize engagement and drive measurable results."
  },
  {
    title:"Creative Content & Visual Storytelling",
    content:"Our creative storytelling fuses data and design to produce engaging content that builds your brand identity."
  },
  {
    title:"Data-Driven Attribution & Performance Optimization",
    content:"Our data-centric approach ensures every campaign touchpoint is measured and refined for peak performance."
  },
  {
    title:"Continuous Campaign Analysis & Reporting",
    content:"With transparent, data-driven reports, we empower you to stay agile and optimize every aspect of your campaign."
  },
  {
    title:"Omnichannel Brand Activation",
    content:"Activate your brand across multiple digital touchpoints with synchronized strategies that drive engagement and build long-term equity."
  },
]