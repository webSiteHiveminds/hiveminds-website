/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-html-link-for-pages */

import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingAnim, imgAnim, paraAnim, routeChangeTop } from '@/components/gsapAnimations'
import Hero from '@/components/Hero';
import Image from 'next/image';
import img from '../../public/assets/images/solutions/solutions-hero-img.png'
import Metadata from '@/components/Metadata';
import { WebpageJsonLd } from '@/lib/json-ld';

const metadata = {
    title: "HiveMinds | Digital Growth Solutions for Brands",
    metaDescription: "Explore HiveMinds' expert digital strategies for e-commerce growth, demand generation, customer retention, app marketing, and brand identity.",
    path: "solutions",
    img: "homepage.png",
    date_published: "2025-03-21T00:00",
    date_modified: "2025-03-21T00:00",
}
const solutions = () => {
    headingAnim();
    paraAnim();
    fadeUp();
    fadeIn();
    imgAnim();
    routeChangeTop();
    return (
        <>
            <Metadata metadata={metadata} />
            <WebpageJsonLd metadata={metadata} />
            <Layout>
                <Hero title1={"Our"} title2={"Solution"} para={"We deliver integrated digital strategies that fuel demand, boost D2C and organic revenue, accelerate e-commerce growth, enhance retention, refine app marketing, and shape compelling digital brand identities—powering measurable, long-term success for modern brands"} img={img} />
                <section className='w-screen h-full py-[5vw] tablet:py-[8vw]'>
                    <div className='container-lg text-center flex items-center justify-center h-full mobile:items-start tablet:items-start'>
                        <div className='w-[75%] text-center mobile:w-full mobile:text-left tablet:text-left tablet:w-full tablet:space-y-[3vw]'>
                            <p data-para-anim className='content py-[1vw]'>
                                HiveMinds&apos; performance marketing transforms digital campaigns into powerful growth engines.
                                We combine cutting-edge analytics with creative strategy to optimize the entire marketing
                                funnel, ensuring every touchpoint converts.
                            </p>
                            <p data-para-anim className='content py-[1vw]'>
                                Our customized approach drives customer acquisition, conversion, and retention—delivering
                                measurable ROI and long-term success. With innovative, data-driven campaigns that adapt to
                                market dynamics, HiveMinds empowers brands to achieve outstanding digital growth and
                                maximize every marketing dollar.
                            </p>
                        </div>
                    </div>
                </section>
                <section className='w-screeen h-full py-[5vw] mobile:pb-[12%] tablet:pt-0 tablet:pb-[15%]' id='solution-details'>
                    <div className='container-lg w-full h-full mobile:flex mobile:flex-col mobile:gap-[5vw] tablet:space-y-[8vw]'>
                        {solution.map((item, index) => (
                            <div key={index} className={`w-full h-full flex items-center justify-between py-[3vw] tablet:items-start tablet:py-0 tablet:gap-[4vw] ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mobile:flex-col tablet:flex-col`} id={item.id}>
                                <div className='w-[45%] mobile:w-full tablet:w-3/4'>
                                    <div className=' relative'>
                                        <div className="absolute w-full h-[100%] z-[2] top-0 left-0 overflow-hidden bg-white1 imgAnim origin-bottom" />
                                        <Image src={item.src} width={1200} height={900} alt="service-card" className='rounded-[1.2vw] fadein mobile:rounded-[4.5vw] tablet:rounded-2xl' />
                                    </div>
                                </div>
                                <div className='w-[47%] mobile:w-full mobile:space-y-[3vw] mobile:mt-[5vw] mobile:ml-[2vw] tablet:w-5/6'>
                                    <h2 className='text-[2.8vw] font-medium headingAnim mobile:text-[6.5vw] tablet:text-[5.5vw]'>
                                        {item.title1}
                                        <span className='text-primary'> {item.title2} </span>
                                    </h2>
                                    <p data-para-anim className="content tracking-wide para py-[1vw] tablet:py-[4vw]">{item.para}</p>
                                    {/* <div className='mt-[1vw] mobile:mt-[3vw]'>
                                        <PrimaryButton
                                            href={item.link}
                                            text="View Details"
                                            className="button fadein"
                                        />
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default solutions

const solution = [
    {
        id: "demand-generation",
        src: "/assets/images/solutions/demand-generation-img.png",
        title1: "Demand",
        title2: "Generation",
        para: "Our demand generation solution ignite brand interest and drive high-quality leads through data-driven digital campaigns. We combine precise audience segmentation with creative content and targeted media strategies to spark engagement and build awareness. By continuously optimizing performance with advanced analytics, we ensure every marketing dollar delivers measurable impact—transforming prospects into loyal customers and fueling sustainable,remarkable growth.",
        link: "#"
    },
    {
        id: "d2c-revenue",
        src: "/assets/images/solutions/d2c-revenue-img.png",
        title1: "D2C",
        title2: " Revenue",
        para: "In the D2C landscape, we drive revenue growth through tailored digital strategies designed specifically for consumer-centric brands. We harness robust data insights, creative campaigns, and agile execution to optimize the customer journey. By bridging the gap between online engagement and purchase behavior, our comprehensive approach boosts conversion rates and overall revenue—empowering brands to build strong relationships and achieve sustainable, measurable growth in a competitive market.",
        link: "#"
    }, {
        id: "organic-revenue",
        src: "/assets/images/solutions/organic-revenue-img.png",
        title1: "Organic",
        title2: " Revenue",
        para: "We drive organic revenue by boosting your website’s natural visibility and authority. Our SEO strategies blend technical excellence, content optimization, and authoritative link-building to attract high-quality non-paid traffic. By improving search rankings and fostering trust, we transform organic clicks into sustained revenue streams. Our data-driven approach ensures every optimization elevates your online presence, delivering long-term, measurable results and driving consistent business growth.",
        link: "#"
    }, {
        id: "ecommerce-growth",
        src: "/assets/images/solutions/ecommerce-growth-img.png",
        title1: "Accelerating",
        title2: "Ecommerce Growth",
        para: "We accelerate e-commerce growth by seamlessly integrating paid media strategies with organic tactics. Our targeted approach leverages advanced analytics, creative content, and strategic channel optimization to boost user acquisition and conversion. By refining every step of the digital customer journey, we drive significant revenue and market share gains. Our agile, data-driven campaigns empower brands to capture emerging opportunities and achieve rapid,sustainable growth in the competitive e-commerce landscape with excellence.",
        link: "#"
    }, {
        id: "maximizing-retention",
        src: "/assets/images/solutions/maximizing-retention-img.png",
        title1: "Maximizing",
        title2: "Retention",
        para: "We maximize retention by cultivating deep, lasting relationships between brands and their customers. Our retention strategies leverage advanced analytics, personalized content, and targeted engagement tactics to nurture loyalty and extend customer lifetime value. By continuously optimizing customer journeys and refining touchpoints, we ensure sustained engagement and repeat conversions. Our data-driven approach fosters a customer-centric ecosystem, turning one-time buyers into lifelong advocates and driving consistent revenue growth.",
        link: "#"
    }, {
        id: "app-marketing",
        src: "/assets/images/solutions/app-marketing-img.png",
        title1: "App",
        title2: "Marketing",
        para: "Our App Marketing solutions drive growth by optimizing every touchpoint in the mobile journey. Our data-driven strategies combine user acquisition, creative optimization, and performance analytics to boost app installs and engagement. We tailor campaigns to meet unique audience needs, ensuring seamless experiences and converting downloads into loyal customers. Our agile approach leverages the latest technology to maximize ROI and fuel sustained, scalable growth in a mobile-first world.",
        link: "#"
    }, {
        id: "digital-brand-building",
        src: "/assets/images/solutions/digital-brand-building-img.png",
        title1: "Digital",
        title2: "Brand Building",
        para: "At HiveMinds, Digital Brand Building is about crafting compelling narratives that resonate with audiences and foster long-term loyalty. Our integrated approach blends creative storytelling with data-driven insights and strategic media planning to enhance visibility and drive engagement. We build memorable digital experiences across touchpoints, ensuring every interaction reinforces your brand identity—turning each moment into an opportunity to build trust and drive sustainable, measurable growth with excellence.",
        link: "#"
    }
]
