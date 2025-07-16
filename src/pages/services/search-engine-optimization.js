/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingAnim, paraAnim, routeChangeTop } from '@/components/gsapAnimations'
import React, { useState } from 'react'

import Hero from '@/components/ServiceDetail/Hero'
import Overview from '@/components/ServiceDetail/Overview'
import SubServices from '@/components/ServiceDetail/SubServices'
import Contact from '@/components/Homepage/Contact'
import img from '../../../public/assets/images/services/search-engine-optimization.png'
import CaseStudies from '@/components/ServiceDetail/CaseStudies'
import Metadata from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'


const metadata={
  title:"SEO Services to Boost Visibility | HiveMinds",
  metaDescription:"HiveMinds offers data-driven SEO services to increase search visibility, organic traffic, and rankings across Google and other major search engines.",
  path:"services/search-engine-optimization",
  img:"homepage.png",
    date_published: "2025-03-21T00:00",
    date_modified: "2025-03-21T00:00",
}
const index = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        <Hero title1={"Search Engine"} title2={"Optimisation "} para={"SEO is the strategic catalyst that transforms your digital presence into a sustainable growth engine. By leveraging technical excellence, compelling content, and authoritative link building, your brand becomes the go-to choice when customers search online."} img={img} />
        <Overview title1={"Scale Efficiently with a "} title2={"Data-First Strategy"} para={"In today’s crowded digital landscape, scaling your online presence demands a holistic SEO strategy. Invest in technical optimization, quality content, and strategic authority building. Align your SEO efforts with your broader business goals to drive long-term organic growth and outpace the competition."} />
        <div className='relative h-full w-screen  mobile:bg-primary mobile:pb-[10%] tablet:bg-primary tablet:pb-[10%]'>
          <SubServices heading={"Customize Your SEO Strategy"} para={"Maximize your online impact with our comprehensive suite of SEO solutions, each designed to enhance a crucial element of your digital presence:"} subservices={subservices} />
          <CaseStudies/>
        </div>
        <Contact title1={"Boost Rankings, Drive "} title2={" Growth!"} para={"Enhance your visibility and dominate search results with our expert-driven SEO solutions. Let’s optimize your digital success—connect with us today!"} />
      </Layout>
    </>
  )
}

export default index;


const subservices = [
  {
    title: "Technical SEO Audits",
    content: "Uncover hidden site issues and enhance performance through deep technical analysis and structured optimization."
  },
  {
    title: "Content Strategy & Creation",
    content: "Crafting compelling, SEO-driven content that engages users and strengthens search rankings."
  },
  {
    title: "Link Building & Authority Development",
    content: "Strategic backlinking to establish credibility, trust, and better rankings."
  },
  {
    title: "Local & International SEO",
    content: "Optimizing for hyper-local relevance and global search dominance."
  },
  {
    title: "Analytics & Reporting",
    content: "Data-backed insights to measure performance and refine strategies."
  },
  {
    title: "App SEO",
    content: "Enhancing discoverability for apps across search engines and app stores."
  },
  {
    title: "On-Website & Off-Wesite Optimization",
    content: "Fine-tuning every element—onsite and beyond—to drive long-term, organic growth."
  },
]