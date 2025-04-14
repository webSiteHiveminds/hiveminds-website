import React from 'react'
import { fadeIn, fadeUp, headingAnim, lineAnim, paraAnim, routeChangeTop } from '@/components/gsapAnimations'
import Layout from '@/components/Layout';
import Offer from '@/components/SchoolOfDigital/Offer';
import Benefit from '@/components/SchoolOfDigital/Benefit';
import Tools from '@/components/SchoolOfDigital/Tools';
import Brochure from '@/components/SchoolOfDigital/Brochure';
import Testimonials from '@/components/SchoolOfDigital/Testimonials';
import Join from '@/components/SchoolOfDigital/Join';
import Hero from '@/components/SchoolOfDigital/Hero';
import Metadata from '@/components/Metadata';
import { WebpageJsonLd } from '@/lib/json-ld';

const metadata = {
  title: "HiveMinds School of Digital | Advanced Digital Marketing Courses",
  metaDescription: "Join HiveMinds School of Digital for expert-led courses in SEO, Google Ads, and advanced digital marketing. Perfect for students and professionals looking to upskill.",
  path: "school-of-digital",
  img: "homepage.png",
  date_published: "2025-03-21T00:00",
  date_modified: "2025-03-21T00:00",

}
const schoolOfDigital = () => {
  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim();
  routeChangeTop()
  return (
    <>
      <Metadata metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Hero />
        <Offer />
        <Benefit />
        <Tools />
        <Brochure />
        <Testimonials />
        <Join />
      </Layout>
    </>
  )
}

export default schoolOfDigital;