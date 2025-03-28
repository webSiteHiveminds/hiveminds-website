/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingAnim, paraAnim, routeChangeTop } from '@/components/gsapAnimations'
import React, { useState } from 'react'

import Listing from '@/components/Services/Listing'
import Hero from '@/components/Hero'
import img from '../../../public/assets/images/services/hero.png'
import Metadata from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'
import Loader from '@/components/Loader'

const metadata={
  title:"HiveMinds Digital Marketing Services for Business Growth",
  metaDescription:"HiveMinds offers SEO, performance marketing, content, ORM, and analytics to help brands grow digitally with data-driven strategies.",
  path:"services",
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
          title1={"What We"} 
          title2={"Offer"} 
          para={"Fueling digital evolution with insight and innovation, we turn complexity into clarity—empowering brands to lead and excel in today’s competitive landscape."} 
          img={img} 
        />
        <Listing/>
      </Layout>
    </>
  )
}

export default index;