/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingAnim, paraAnim, routeChangeTop } from '@/components/gsapAnimations'
import React, {  useState } from 'react'
import Hero from '@/components/ServiceDetail/Hero'
import Overview from '@/components/ServiceDetail/Overview'
import SubServices from '@/components/ServiceDetail/SubServices'
// import CaseStudies from '@/components/ServiceDetail/CaseStudies'
import Contact from '@/components/Homepage/Contact'
import img from '../../../public/assets/images/services/influencer-marketing.png'
import CaseStudies from '@/components/ServiceDetail/CaseStudies'
import Metadata from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'

const metadata={
  title:"Influencer Marketing Services | Hiveminds",
  metaDescription:"Hiveminds offers influencer marketing services that boost brand reach, engagement, and ROI through targeted creators and platform-specific strategies.",
  path:"services/influencer-marketing",
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
       <Hero title1={"Influence That "} title2={"Resonates"} para={"Influencer Marketing is designed to make your brand unforgettable. By partnering with influential voices that perfectly align with your product-market fit, we ensure every campaign creates a ripple effect in the digital landscape—making your brand a standout leader."} img={img}/>
       <Overview title1={"Drive Trust with"} title2={"Influencer Approaches"} para={"To elevate your brand, you must harness the power of authentic influence. Focus on building strategic partnerships, crafting compelling narratives, and leveraging data-driven insights to drive genuine engagement and conversions. Embrace a holistic approach that transforms influencer collaborations into measurable growth and lasting brand loyalty."}/>
       <div className='relative h-full w-screen rounded-[20px] mobile:bg-primary mobile:pb-[10%] tablet:bg-primary tablet:pb-[10%] '>
          <SubServices heading={"Our Influencer Growth Arsenal"} para={"Empower your brand with our comprehensive suite of influencer solutions:"} subservices={subservices}/>
          <span className='absolute h-[20%] bottom-[30%] w-full'></span>
        <CaseStudies/>
        </div>
       <Contact  title1={"Experience the power of authentic  "} title2={"influence!"} para={"Partner with top influencers to amplify your brand’s voice and drive measurable engagement. Let’s elevate your influence now."}/>
      </Layout>
    </>
  )
}

export default index;


const subservices = [
  {
    title:"Targeted Influencer Sourcing",
    content:"Identify and engage creators who perfectly match your brand’s vision."
  },
  {
    title:"Campaign Planning & Management",
    content:"Develop end-to-end campaigns that maximize ROI with strategic execution."
  },
  {
    title:"Creative Collaboration",
    content:"Co-create compelling content that resonates with your audience and strengthens your brand narrative."
  },
  {
    title:"ROI Measurement & Analytics",
    content:"Track and analyze campaign performance to optimize every influencer collaboration."
  },
  {
    title:"Sustained Partnership Building",
    content:"Cultivate long-term relationships that drive ongoing brand advocacy and loyalty."
  },
  {
    title:"Influencer Engagement & Activation",
    content:"Activate influencer networks to spark authentic buzz and foster genuine engagement."
  },
]