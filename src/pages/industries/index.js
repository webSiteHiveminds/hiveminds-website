/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeUp, headingAnim, paraAnim, routeChangeTop } from '@/components/gsapAnimations'
import Hero from '@/components/Hero';
import Image from 'next/image';
import img from '../../../public/assets/images/industry/industry-hero-img.png'
import Metadata from '@/components/Metadata';
import { WebpageJsonLd } from '@/lib/json-ld';
import PrimaryButton from '@/components/Button/PrimaryButton';

const metadata = {
  title: "HiveMinds: Digital Marketing for Diverse Industries",
  metaDescription: "HiveMinds crafts data-driven strategies for FMCG, health, fintech, e-commerce, fashion, and more to drive brand growth and engagement.",
  path: "industries",
  img: "homepage.png",
  date_published: "2025-03-21T00:00",
  date_modified: "2025-03-21T00:00",
}
const industry = () => {
  headingAnim();
  paraAnim();
  fadeUp();
  routeChangeTop();

  return (
    <>
      <Metadata metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Hero title1={"Our"} title2={"Industries"} para={"Our versatile digital strategies span diverse industries. We harness data, creativity, and insights to craft bespoke solutions that empower brands and drive growth in an ever-evolving digital world."} img={img} />
        <main>
          <section className='w-screen h-full py-[5vw]'>
            <div className='container-lg text-center flex items-center justify-center  h-full tablet:items-start tablet:justify-start'>
              <div className='w-[75%] text-center mobile:w-full mobile:text-left tablet:text-left tablet:w-[90%]'>
                <p data-para-anim className='content py-[1vw]'>
                  At HiveMinds, we provide comprehensive digital marketing services across industries. We tailor
                  strategies to meet the unique needs of each sector, blending deep market research, data-driven
                  insights, and creative innovation. Our expertise spans B2B, D2C, fashion, BFSI, health, travel,
                  and more, ensuring sustainable growth and measurable success every single day.
                </p>
              </div>
            </div>
          </section>
          <section className='w-screeen h-full pb-[5vw] mobile:pb-[15%] mobile:pt-[5%]'>
            <div className='container-lg w-full h-full mobile:flex mobile:flex-col mobile:gap-[4vw]'>
              {industries.map((item, index) => (
                <div key={index} className="w-full h-[36vw] flex items-start justify-between py-[3vw] border-[1.5px] border-[#EEEEEE] shadow-md  px-[1.5vw] rounded-[1.5vw] mb-[3vw] mobile:flex-col mobile:justify-start mobile:rounded-[5.5vw] mobile:px-[3vw] fadeup mobile:h-[155vw] mobile:pb-[10vw] tablet:flex-col tablet:h-[75vw] tablet:px-[3vw] tablet:my-[6vw] " id={item.id}>
                  <div className='w-[45%] mobile:w-full tablet:w-3/5 relative'>
                    <Image src={item.img} width={790} height={990} alt="service-card" className='rounded-[1.2vw] mobile:rounded-[3.5vw]' />
                  </div>
                  <div className='w-[50%] mobile:w-full mobile:mt-[7vw] tablet:w-full mobile:pl-[2vw] '>
                    <h2 className='text-[2.8vw] font-medium mobile:text-[5.5vw] mobile:mb-[2vw] tablet:text-[4vw]'>
                      {item.title1}
                      <span className='text-primary '> {item.title2} </span>
                    </h2>
                    <p className='content tracking-wide para py-[1vw]' dangerouslySetInnerHTML={{ __html: item.para }} />
                    {/* <div className='fadeup mt-[2vw]'>
                      <PrimaryButton href={item.link} text={"View Details"} />
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </Layout>
    </>
  )
}

export default industry

const industries = [
  {
    id: "fmcg-and-beauty",
    img: "/assets/images/industry/fmcg-and-beauty.png",
    title1: " FMCG & ",
    title2: "Beauty",
    para: "In the fast-paced FMCG and beauty sector, HiveMinds delivers tailored digital strategies that drive consumer engagement and brand loyalty. Leveraging deep market insights, creative content, and data-driven tactics, we empower numerous leading brands to optimize visibility, foster growth, and thrive globally in a competitive marketplace.",
    link: "/industries/fmcg-and-beauty"

  },
  {
    id: "health-and-wellness",
    img: "/assets/images/industry/health-and-wellness.png",
    title1: " Health and",
    title2: "Wellness",
    para: "We pioneer digital transformation in the health and wellness industry, delivering innovative, data-backed solutions for brands. By merging creative strategy with analytical rigor, we boost brand visibility, enhance patient engagement, and drive measurable, sustainable growth for lasting success remarkably.",
    link: "/industries/health-and-wellness"


  },
  {
    id: "bfsi-fintech",
    img: "/assets/images/industry/bfsi-fintech.png",
    title1: " BFSI -",
    title2: "Fintech",
    para: "For BSFI-Fintech brands, we offer full-funnel digital marketing solutions that power growth at every stage. By merging data-driven strategies with innovative creative execution, we optimize customer journeys, boost product adoption, and secure long-term success in a rapidly evolving digital ecosystem.",
    link: "/industries/bfsi-fintech"


  },
  {
    id: "e-commerce",
    img: "/assets/images/industry/e-commerce.png",
    title1: " E-",
    title2: "commerce",
    para: "In the competitive e-commerce landscape, we drive digital growth through paid and organic strategies. Our data-driven, creative approach optimizes customer journeys, boosts conversions, and expands market share for leading brands, delivering measurable success and sustainable revenue growth.",
    link: "/industries/e-commerce"


  },
  {
    id: "fashion-and-lifestyle",
    img: "/assets/images/industry/fashion-and-lifestyle.png",
    title1: " Fashion & ",
    title2: "Lifestyle",
    para: "In the ever-evolving world of fashion and lifestyle, we craft cutting-edge digital campaigns through full-spectrum programmatic ads and marketplace activations. Our strategies amplify brand appeal, spark consumer engagement, and deliver measurable growth, positioning your brand as a leader in style and innovation",
    link: "/industries/fashion-and-lifestyle"
  },
  {
    id: "electronics",
    img: "/assets/images/industry/electronics.png",
    title1: " Electronics",
    title2: "",
    para: "For electronics brands, HiveMinds delivers dynamic digital strategies that optimize every touchpoint—from discovery to conversion. Our advanced analytics and creative prowess drive superior engagement, ensuring brands stand out and achieve robust growth in the fast-paced electronics market.",
    link: "/industries/electronics"
  }, {
    id: "consumer-durables",
    img: "/assets/images/industry/consumer-durables.png",
    title1: " Consumer ",
    title2: " Durables",
    para: "In the consumer durables sector, we fuse creative innovation with data-driven strategies to build lasting brand impact. Our tailored campaigns enhance customer experiences, boost conversions, and foster loyalty, positioning brands for sustainable growth in a competitive marketplace.",
    link: "/industries/consumer-durables"
  },
  {
    id: "telecom",
    img: "/assets/images/industry/telecom.png",
    title1: " Telecom",
    title2: " ",
    para: "We transform telecom marketing by integrating innovative performance strategies, targeted paid advertising, and dynamic social media campaigns. Our solutions boost customer acquisition and engagement, securing a dominant digital presence and driving superior ROI for telecom brands.",
    link: "/industries/telecom"
  },
  {
    id: "automobiles",
    img: "/assets/images/industry/automobiles.png",
    title1: " Automobiles",
    title2: " ",
    para: "In the automobile sector, we fuel brand performance with strategic paid advertising, performance marketing, and impactful social media boosting. Our tailored campaigns drive consumer engagement and conversions, enabling automotive brands to accelerate growth and dominate the digital arena.",
    link: "/industries/automobiles"
  },
  {
    id: "travel-and-tourism",
    img: "/assets/images/industry/travel-and-tourism.png",
    title1: " Travel &",
    title2: " Tourism",
    para: "We transform travel brands into digital destinations. Our integrated strategies blend data-driven insights, creative storytelling, and performance optimization to elevate online visibility, drive bookings, and create memorable journeys that resonate with globetrotters.",
    link: "/industries/travel-and-tourism"
  }
]
