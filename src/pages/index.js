/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import Hero from '@/components/Homepage/Hero'
import Awards from '@/components/Homepage/Awards'
// import Blogs from '@/components/Homepage/Blogs'
import Story from '@/components/Homepage/Story'
import TeamMembers from '@/components/Homepage/TeamMembers'
// import { fadeIn, fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'
import React, { useEffect, useState } from 'react'
import { Clients2 } from '@/components/Homepage/Clients2'
import Services from '@/components/Homepage/Solutions'
import MobileHero from '@/components/Homepage/MobileHero'
import Metadata from '@/components/Metadata'
import { getHomePageCaseStudies } from '@/lib/casestudies'
import { getAllIndustries } from '@/lib/industries'
import { WebpageJsonLd } from '@/lib/json-ld'
import { getAllPosts } from '@/lib/blogs'
import LoaderHome from '../components/Loader'
import dynamic from 'next/dynamic'
import { headingAnim } from '@/components/gsapAnimations'


const BlogComponent = dynamic(() => import("@/components/Homepage/Blogs"));
const CaseStudyComponent = dynamic(() => import("@/components/Homepage/CaseStudies"))
const ContactComponent = dynamic(() => import("@/components/Homepage/Contact"))
const metadata = {
  title: "HiveMinds | Data-Driven Digital Marketing for Business Growth",
  metaDescription: "HiveMinds delivers strategic, data-driven digital marketing solutions to help startups and brands grow sustainably with advanced technology and expertise.",
  path: "",
  img: "homepage.png",
  date_published: "2025-03-21T00:00",
  date_modified: "2025-03-21T00:00",
}
const index = ({ stickyCaseStudies, filteredPosts }) => {

  const [mobileWidth, setMobileWidth] = useState(false);
  useEffect(() => {
    if (globalThis.innerWidth > 1024) {
      setMobileWidth(false);
    } else {
      setMobileWidth(true);
    }
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  headingAnim()
  // paraAnim()

  return (
    <>
      <Metadata metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <LoaderHome />
      <Layout isOpen={isOpen}>
        {!mobileWidth ? <Hero /> : <MobileHero />}

        <Story isOpen={isOpen} setIsOpen={setIsOpen} />
        <Services />
        <Clients2 />
        <CaseStudyComponent caseStudies={stickyCaseStudies} />
        <TeamMembers />
        <div className='relative h-fit w-screen rounded-[20px]  '>

          <Awards />

          <BlogComponent posts={filteredPosts} />
        </div>
        <ContactComponent title1={"Looking to Drive "} title2={"Growth?"} para={"We're passionate about delivering results and addressing the challenges that matter most to your business. To learn more, get in touch with us."} />
      </Layout>
    </>
  )
}

export default index;

export async function getStaticProps() {
  const { caseStudies } = await getHomePageCaseStudies();
  const { industries } = await getAllIndustries();
  const { posts } = await getAllPosts()
  const filteredPosts = posts.filter((post) => post?.blogFields.blogType[0] == "blog" || post?.blogFields.blogType[0] == "Blog")

  const stickyCaseStudies = caseStudies.filter((caseStudy) => caseStudy.caseStudyFields.ishomepagepost) || null;
  return {
    props: {
      posts,
      filteredPosts,
      stickyCaseStudies,
      industries,
    },
    revalidate: 500,
  };
}
