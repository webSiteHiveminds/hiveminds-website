import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'

const services = [
    {
        src: "/assets/images/services/performance-marketing.png",
        title1: "Performance",
        title2: "Marketing",
        para1: "At HiveMinds, we believe that performance marketing is the art and science of driving growth. Our expert team combines analytical rigor with creative innovation to optimize every touchpoint in your customer journey. By focusing on customer acquisition, conversion, and retention, we create strategies that not only boost your revenue but also maximize your ROI. Our data-centric approach, paired with out-of-the-box creative solutions, ensures that every campaign we run delivers measurable, impactful results that set your brand apart. ",
        link: "/services/performance-marketing"
    },
    {
        src: "/assets/images/services/retail-marketing.png",
        title1: "Retail",
        title2: "Marketing",
        para1: "At HiveMinds, we help your brand skyrocket its visibility and drive endless sales. Our comprehensive ecommerce strategies blend the power of Amazon Ads and organic growth to reshape customer journeys using deep category insights, data analytics, and an omnichannel approach. Whether you’re looking to capture quick commerce’s explosive 70% YoY growth or create immersive content that converts, we design tailored solutions that make your brand the go-to in its niche.",
        link: "/services/retail-marketing"
    }, {
        src: "/assets/images/services/search-engine-optimization.png",
        title1: "Search Engine",
        title2: "Optimization",
        para1: "Boost your search rankings and fuel organic growth with HiveMinds’ holistic SEO services. We ensure your website is fully optimized—from technical performance and content excellence to authoritative link building—so you stand out in today’s competitive digital landscape. Whether you’re in B2B, D2C, fashion, BFSI, health, or travel, our targeted SEO strategies deliver measurable results, turning clicks into loyal customers.",
        link: "/services/search-engine-optimization"
    }, {
        src: "/assets/images/services/creative-content-management.png",
        title1: "Creative &",
        title2: "Content Management",
        para1: "Elevate your brand with content that commands attention. At HiveMinds, we blend innovative design with strategic insight to craft creatives that captivate and convert. Our services cover everything—from social media masterpieces that spark engagement, to marketplace and production-based creatives that align perfectly with your brand ethos. With our data-driven approach in paid marketing, we not only enhance your digital presence but also ensure your content becomes a catalyst for lasting growth.",
        link: "/services/creative-content-management"
    }, {
        src: "/assets/images/services/online-reputation-management.png",
        title1: "Online Reputation",
        title2: "Management",
        para1: "Your brand’s reputation is its most valuable asset. We protect your brand like it’s our own. Our ORM strategy vigilantly monitors and manages every touchpoint—turning reviews into opportunities to build trust and strengthen your reputation.",
        link: "/services/online-reputation-management"
    }, {
        src: "/assets/images/services/consumer-insights.png",
        title1: "Consumer",
        title2: "Insights",
        para1: "Every consumer interaction is an opportunity waiting to be unlocked. Our comprehensive approach dives deep into the digital ecosystem to reveal actionable insights.We delve deep into consumer behavior, using state-of-the-art analytics, detailed market research, and customized channel strategies to craft impactful marketing blueprints. Our approach transforms every digital touchpoint into an opportunity for growth, enabling your brand to connect, engage, and convert more effectively than ever before.",
        link: "/services/consumer-insights"
    }, {
        src: "/assets/images/services/influencer-marketing.png",
        title1: "Influencer",
        title2: "Marketing",
        para1: "Unlock the power of influence. We strategically partner with industry-leading creators to extend your reach, spark engagement, and ignite lasting brand impact. Let star power drive your success.",
        link: "/services/influencer-marketing"
    }, {
        src: "/assets/images/services/affiliate-marketing.png",
        title1: "Affliate",
        title2: "Marketing",
        para1: "Harness the power of strategic partnerships. Our affiliate marketing solutions are designed to boost your traffic, expand your reach, and generate consistent revenue. We connect you with the right partners, ensuring every click converts into measurable success.",
        link: "/services/affiliate-marketing"
    }, {
        src: "/assets/images/services/programatic-advertising.png",
        title1: "Social Media ",
        title2: "Marketing",
        para1: "We believe your brand is your most valuable asset. Our integrated approach to Branding and Programmatic Ads marries creative storytelling with robust data analytics, ensuring every campaign builds a powerful digital presence. From identifying growth challenges to mapping out full-funnel strategies, we partner with you to craft impactful narratives that drive measurable ROI and lasting brand impact.",
        link: "/services/social-media-marketing"
    }, {
        src: "/assets/images/services/data-and-analytics.png",
        title1: "Data &",
        title2: "Analytics",
        para1: "Data is more than numbers—it’s the key to unlocking your brand’s future. At HiveMinds, our integrated suite of analytical tools and methodologies enables you to harness real-time insights, optimize operations, and drive strategic growth. Whether it’s through FeedX, ADH, or our bespoke BI dashboards, we provide the clarity and intelligence required to streamline decision-making and accelerate success across industries.",
        link: "/services/data-analytic"
    },
    {
        src: "/assets/images/services/branding-services.png",
        title1: "Branding",
        title2: "Services",
        para1: "We create brand experiences that truly resonate in our connected world. We combine custom social media solutions, data-driven strategies, influencer partnerships, and modern video production to build an impactful online presence. By pinpointing your core challenges and driving agile, data-backed decision-making, we not only boost sales but also forge strong customer relationships. Our holistic approach—from social boosting to proactive social listening—ensures your business goals align perfectly with evolving consumer needs.",
        link: "/services/branding"
    }
]

const ServiceCard = ({ src, title1, title2, para1, link, index }) => {
    return (
        <div className={`w-full h-full flex items-center justify-between py-[3vw] mobile:flex-col mobile:items-start mobile:gap-6 mobile:py-8 tablet:py-[5vw] tablet:flex-col tablet:items-start tablet:gap-[4vw] ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}` }>
            <div className='w-[45%] mobile:w-full tablet:w-3/5'>
                <div className='relative'>
                    <Image src={src} width={1200} height={900} alt="service-card" className='rounded-[1.2vw] fadein mobile:rounded-[1.2rem] tablet:rounded-[3vw]' />
                </div>
            </div>
            <div className='w-[47%] mobile:w-full tablet:w-[90%]'>
                <h2 className='text-[2.8vw] font-medium headingAnim mobile:text-[9.2vw] mobile:leading-10 tablet:text-[6vw] tablet:leading-[1.2]'>
                    {title1}
                    <span className='text-primary'> {title2} </span>
                </h2>
                <p data-para-anim className="content tracking-wide para py-[1vw] mobile:py-7">{para1}</p>
                <div className='mt-[1vw] tablet:my-[2vw]'>
                    <PrimaryButton
                        href={link}
                        text="View Details"
                        className="button fadein"
                    />
                </div>
            </div>
        </div>
    );
};

const Listing = () => {
    return (
        <>
            <section className='h-full w-screen bg-white py-[5vw] relative'>
                <div className='w-full h-full container-lg'>
                    <div className='w-full flex  flex-col items-center justify-center text-center '>
                        <p 
                            data-para-anim 
                            className="content w-[81%] tracking-wide para py-[1vw] mobile:text-left mobile:w-[98%] tablet:text-left tablet:w-full">
                                We unlock your digital potential with a holistic suite of marketing services. Our performance marketing is the art and science of optimizing every customer touchpoint through data-driven and creative strategies. Our SEO expertise ensures your brand is easily discovered, turning clicks into loyal customers. In retail, we fuse paid media with organic growth tactics to drive e-commerce success, while our creative and content teams produce visually compelling, on-brand narratives that resonate. We protect your brand&apos;s reputation with proactive ORM, and our consumer insights dive deep into market trends to reveal actionable opportunities. Our advanced data analytics streamline decision-making, and our influencer, affiliate, and integrated branding solutions amplify your message across channels. With our comprehensive social media management, we help you engage, convert, and thrive in the digital era.
                        </p>
                    </div>
                    <div className='py-[4vw]'>
                        {services.map((item, index) => {
                            return (
                                <ServiceCard key={index} index={index} src={item.src} title1={item.title1} title2={item.title2} para1={item.para1} link={item.link} />
                            )
                        })}
                    </div>
                </div>
                <div className="absolute h-[2vw] w-[2.2vw] top-[4.5%] right-[15%] blue-hexagon-animation mobile:hidden tablet:hidden">
                    <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon" />
                </div>
                <div className="absolute h-[2vw] w-[2.2vw] top-[1%] left-[12%] yellow-hexagon-animation mobile:hidden tablet:hidden" >
                    <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon" />
                </div>
            </section>
        </>
    )
}

export default Listing