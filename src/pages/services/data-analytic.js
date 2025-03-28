/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingAnim, paraAnim, routeChangeTop } from '@/components/gsapAnimations'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import Hero from '@/components/ServiceDetail/Hero'
import Overview from '@/components/ServiceDetail/Overview'
import SubServices from '@/components/ServiceDetail/SubServices'
import Contact from '@/components/Homepage/Contact'
import img from '../../../public//assets/images/services/data-and-analytics.png'
import CaseStudies from '@/components/ServiceDetail/CaseStudies'
import Metadata from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'

const metadata={
  title:"Data Analytics Services | HiveMinds",
  metaDescription:"Transform raw data into actionable intelligence with HiveMinds' data analytics services, empowering informed decisions and business growth.",
  path:"services/data-analytic",
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
       <Hero title1={"Data Analytic"} title2={"Services "} para={"Data is the foundation of every successful digital strategy. Our data analysis solutions transform raw numbers into powerful business intelligence, enabling brands to make informed decisions, optimize marketing performance, and unlock new growth opportunities."} img={img}/>
       <Overview title1={"Turn Insights into Action with"} title2={"Precision Analytics"} para={"In today’s fast-paced digital landscape, brands that leverage data-driven decision-making gain a competitive edge. Expertise in predictive modeling, consumer behavior analysis, and real-time reporting ensures that every marketing initiative is backed by deep, actionable insights."}/>
       <div className='relative h-full w-screen rounded-[20px] mobile:bg-primary mobile:pb-[10%] tablet:bg-primary tablet:pb-[10%]'>
          <SubServices heading={"Our Data Solutions Power Business Success"} para={"Our suite of data-driven services helps brands maximize efficiency and impact:"} subservices={subservices}/>
          <span className='absolute h-[20%] bottom-[30%] w-full'></span>
        <CaseStudies/>
        </div>
       <Contact  title1={"Unlock actionable insights"} title2={"today."} para={"Leverage our expert analytics to drive smarter decisions and sustainable growth. Connect with us today to unlock your data's potential."}/>
      </Layout>
    </>
  )
}

export default index;


const subservices = [
  {
    title:"Product Consulting Tools",
    content:"Utilize advanced tools like FeedX, Vizual, OptiMMMix, ADH, BidSmart, and Lead Scoring to optimize product performance and drive informed decisions."
  },
  {
    title:"Business Intelligence",
    content:"Develop custom BI dashboards with Hamuli and leverage sentiment analysis via HivePulse to gain real-time insights for strategic decision-making."
  },
  {
    title:"Integrated Platforms",
    content:"Deploy Nucleus for seamless integration and efficient management of diverse analytics tools, streamlining data flow and enhancing operational agility."
  },
  {
    title:"Additional Capabilities",
    content:"Custom data product development, robust MIS solutions, and ad-hoc statistical analysis—including image processing and OLAP web applications—drive analytics."
  },
  {
    title:"Data Governance & Security",
    content:"Implement robust data governance and security protocols to ensure compliance, protect sensitive information, and maintain integrity across analytics operations."
  },
  {
    title:"Predictive Analytics & Modeling",
    content:"Utilize advanced algorithms for predictive modeling and trend analysis, enabling proactive decision-making and forecasting to drive forward-looking strategies."
  },
]