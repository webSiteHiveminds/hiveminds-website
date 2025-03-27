/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'
import Locations from '@/components/Contactpage/Locations'
import GetinTouch from '@/components/Contactpage/GetinTouch'

import Hero from '@/components/Hero'
import img from '../../public/assets/images/contactpage/contact-hero.png'
import Metadata from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'

const metadata={
  title:"Contact HiveMinds: Digital Marketing Agency Offices in India​",
  metaDescription:"Reach out to HiveMinds at our Bengaluru, Mumbai, or Gurugram offices for specialized digital marketing solutions. Call +91-8527156227 or email sales@hiveminds.in",
  path:"contact-us",
  img:"homepage.png",
    date_published: "2025-03-21T00:00",
    date_modified: "2025-03-21T00:00",
}
const contact = () => {
     headingAnim();
      paraAnim();
      fadeUp();
      fadeIn();
     
  return (
    <>
    <Metadata metadata={metadata}/>
    <WebpageJsonLd metadata={metadata}/>
    <Layout>
     <Hero title1={"Contact"} title2={"Us"} para={"At HiveMinds, we tackle your most challenging business problems with our specialised digital marketing approach integrating strategic expertise."} img={img}/>
     <Locations/>
     <GetinTouch/>
    </Layout>
    </>
  )
}

export default contact
