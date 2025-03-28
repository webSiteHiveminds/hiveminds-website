/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingAnim, paraAnim, lineAnim, routeChangeTop } from '@/components/gsapAnimations'

import Hero from '@/components/Hero'
import Leadership from '@/components/AboutUs/Leadership'
import WhyUs from '@/components/AboutUs/WhyUs'
import Life from '@/components/AboutUs/Life'
import Responsibility from '@/components/AboutUs/Responsibility'
import img from '../../public/assets/images/about/about-hero.png'
import Metadata from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'

const metadata = {
  title: "HiveMinds: Innovating Digital Marketing with Data-Driven Solutions",
  metaDescription: "Discover how HiveMinds' leadership and collaborative culture drive innovative, data-driven digital marketing strategies for brand transformation and growth.",
  path: "about-us",
  img: "homepage.png",
  date_published: "2025-03-21T00:00",
  date_modified: "2025-03-21T00:00",
}
const contact = () => {
  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim()
   routeChangeTop()

  return (
    <>
      <Metadata metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Hero title1={"Who We"} title2={"Are"} para={"We are HiveMinds—a digital marketing agency where innovative strategies, creative insights, and data-driven solutions converge to transform brands and elevate customer experiences."} img={img} />
        <Leadership />
        <WhyUs />
        <Life />
        <Responsibility />
      </Layout>
    </>
  )
}

export default contact
