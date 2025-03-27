/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React,{ useEffect, useState } from 'react'
import Metadata from '@/components/Metadata'
import { getHomePageCaseStudies } from '@/lib/casestudies'
import { getAllIndustries } from '@/lib/industries'
import { WebpageJsonLd } from '@/lib/json-ld'
import { getAllPosts } from '@/lib/blogs'
// import LoaderHome from '../components/Loader'
import dynamic from 'next/dynamic'
import HeroCopy from '@/components/HomepageCopy/Hero'
import MobileHeroCopy from '@/components/HomepageCopy/MobileHero'
import StoryCopy from '@/components/HomepageCopy/Story'
import TeamMembersCopy from '@/components/HomepageCopy/TeamMembers'
import AwardsCopy from '@/components/HomepageCopy/Awards'
import ContactCopy from '@/components/HomepageCopy/Contact'
import { Clients2Copy } from '@/components/HomepageCopy/Clients'


const BlogComponent = dynamic(() => import("@/components/HomepageCopy/Blogs"));
const CaseStudyComponent = dynamic(()=>import("@/components/HomepageCopy/CaseStudies"))
const ServicesComponent = dynamic(()=>import("@/components/HomepageCopy/Solutions"))
// const Clients2Component = dynamic(()=>import("@/components/HomepageCopy/Clients"))
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

 


  return (
    <> 
      <Metadata metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      {/* <LoaderHome /> */}
      <Layout isOpen={isOpen}>
        {mobileWidth? <MobileHeroCopy />:<HeroCopy /> }
      
      
        <StoryCopy isOpen={isOpen} setIsOpen={setIsOpen} />
        <ServicesComponent />
        <Clients2Copy />
        <TeamMembersCopy />
        <div className='relative h-fit w-screen rounded-[20px]  '>
          <span className=' block absolute h-[20%] w-full'></span>
          <CaseStudyComponent caseStudies={stickyCaseStudies} />
          <AwardsCopy />
          <span className='absolute h-[20%] bottom-[-10%]  w-full'></span>
          <BlogComponent posts={filteredPosts} />
        </div>
        <ContactCopy title1={"Looking to Drive "} title2={"Growth?"} para={"We're passionate about delivering results and addressing the challenges that matter most to your business. To learn more, get in touch with us."} />
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
