/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingAnim, paraAnim, routeChangeTop } from '@/components/gsapAnimations'
import React, {  useState } from 'react'

import Hero from '@/components/ServiceDetail/Hero'
import Overview from '@/components/ServiceDetail/Overview'
import SubServices from '@/components/ServiceDetail/SubServices'
import Contact from '@/components/Homepage/Contact'
import img from '../../../public/assets/images/services/affiliate-marketing.png'
import CaseStudies from '@/components/ServiceDetail/CaseStudies'
import Metadata from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'

const metadata={
  title:"Affiliate Marketing Services – Performance Growth | Hiveminds",
  metaDescription:"Boost revenue with HiveMinds' affiliate marketing services. We drive growth through strategic partnerships, data-driven campaigns, and performance tracking.",
  path:"services/affiliate-marketing",
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
       <Hero title1={"Amplify Growth Through"} title2={"Affiliates "} para={"Affiliate Marketing services forge strategic partnerships that expand your brand’s digital reach. By converting clicks into customers, these solutions drive targeted traffic and create meaningful, revenue-generating relationships."} img={img}/>
       <Overview title1={"Maximize Impact with Strategic"} title2={"Affiliate Analytics"} para={"To unlock new revenue streams, your brand must adopt a collaborative approach. Focus on building strong partnerships, integrating influencer and social media efforts, and continuously refining your campaigns using data-backed insights. Align your affiliate initiatives with your broader business objectives, leverage performance analytics, and build strategic partnerships to transform your digital presence and drive sustained growth."}/>
       <div className='relative h-full w-screen rounded-[20px] mobile:bg-primary mobile:pb-[10%] tablet:bg-primary tablet:pb-[10%] '>
          <SubServices heading={"Our Affiliate Growth Engine"} para={"Our comprehensive suite of affiliate marketing solutions empowers your brand’s growth through performance-driven partnerships:"} subservices={subservices}/>
          <span className='absolute h-[20%] bottom-[30%] w-full'></span>
        <CaseStudies/>
        </div>
       <Contact  title1={"Ready to Accelerate"} title2={"Revenue?"} para={"Unlock the power of strategic partnerships—connect with us for tailored affiliate marketing that drives measurable revenue and lasting brand impact."}/>
      </Layout>
    </>
  )
}

export default index;


const subservices = [
  {
    title:"Affiliate Strategy & Planning",
    content:"Develop a customized roadmap for affiliate success."
  },
  {
    title:"Partner Onboarding & Management",
    content:"Seamlessly integrate high-potential affiliates into your ecosystem."
  },
  {
    title:"Creative Campaign Integration",
    content:"Co-create compelling content that aligns with your brand’s voice."
  },
  {
    title:"Multi-Channel Synergy",
    content:"Align affiliate efforts with your overall digital marketing strategy."
  },
  {
    title:"Performance Tracking & Optimization",
    content:"Utilize advanced analytics to track performance and optimize campaigns in real-time."
  },
  {
    title:"Commission Structures & Incentives",
    content:"Design competitive, flexible commission models to drive affiliate motivation and performance."
  },
]