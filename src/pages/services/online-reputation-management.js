/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingAnim, paraAnim, routeChangeTop } from '@/components/gsapAnimations'
import React, { useState } from 'react'

import Hero from '@/components/ServiceDetail/Hero'
import Overview from '@/components/ServiceDetail/Overview'
import SubServices from '@/components/ServiceDetail/SubServices'
import Contact from '@/components/Homepage/Contact'
import img from '../../../public/assets/images/services/online-reputation-management.png'
import CaseStudies from '@/components/ServiceDetail/CaseStudies'
import Metadata from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'


const metadata={
  title:"Online Reputation Management Services | HiveMinds",
  metaDescription:"Safeguard your brand with HiveMinds' ORM services. We monitor, manage, and enhance your online presence, building trust and loyalty through proactive strategies.",
  path:"services/online-reputation-management",
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
       <Hero title1={"Your Reputation , Our"} title2={"Priority "} para={"An ORM service acts as a vigilant guardian for your brand, ensuring every customer interaction not only safeguards your image but also builds lasting trust. It’s about transforming every piece of feedback into an opportunity to strengthen your reputation"} img={img}/>
       <Overview title1={"Drive Trust with"} title2={"ORM"} para={"To protect and enhance a brand's image, you must be proactive and responsive. Focus on continuously monitoring your online presence, engaging with your audience, and turning customer feedback into actionable strategies. This approach not only mitigates risks but also builds enduring customer loyalty in today’s competitive digital landscape."}/>
       <div className='relative h-full w-screen rounded-[20px] mobile:bg-primary mobile:pb-[10%] tablet:bg-primary tablet:pb-[10%] '>
          <SubServices heading={"Our ORM Strategic Framework"} para={"Empower your brand with our comprehensive ORM solutions designed to protect and elevate your reputation:"} subservices={subservices}/>
          <span className='absolute h-[20%] bottom-[30%] w-full'></span>
        <CaseStudies/>
        </div>
       <Contact  title1={"Ready to protect your"} title2={" brand?"} para={"Secure your reputation and build lasting trust with proactive ORM solutions. Reach out today to safeguard your brand's future now."}/>
      </Layout>
    </>
  )
}

export default index;


const subservices = [
  {
    title:"Comprehensive Social Listening",
    content:"Monitor every mention across platforms to capture real-time consumer sentiment and stay ahead of potential issues."
  },
  {
    title:"Review Response & Management",
    content:"Engage promptly with customers to foster loyalty, address concerns, and build trust."
  },
  {
    title:"Crisis Communication",
    content:"Navigate and neutralize potential brand crises swiftly to safeguard your image and maintain customer confidence."
  },
  {
    title:"Sentiment & Trend Analysis",
    content:"Extract actionable insights from customer feedback to continuously refine and enhance your reputation strategy."
  },
  {
    title:"Reputation Strategy Consulting",
    content:"Develop long-term plans that ensure a robust and resilient online image, aligning your brand’s values with customer expectations."
  },
  {
    title:"Competitor Reputation Benchmarking",
    content:"Analyze competitor strategies to identify opportunities for differentiation and elevate your brand positioning."
  },
]