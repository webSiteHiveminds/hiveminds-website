import Image from 'next/image'
import React from 'react'

const OfferCard=({title,duration,img})=>{
    return(
       <div className='rounded-[1.5vw] shadow-md  w-[29vw] h-full fadeup font-body mobile:w-full mobile:rounded-[4.5vw] mobile:p-[2.5vw] mobile:py-[4.5vw] mobile:border tablet:w-[43.5vw] tablet:h-[45vw]'>
       <div className=''>
        <Image src={img} height={390} width={570} alt='offer-card-img' className='rounded-[1.5vw] w-[30vw] mobile:w-full mobile:rounded-[4.5vw] mobile:h-[65vw] tablet:w-[44vw]'/>
       </div>
       <div className='p-[1.5vw] h-[10vw] flex flex-col justify-between mobile:h-full mobile:gap-[5vw] mobile:py-[7vw] tablet:h-fit tablet:gap-[1.5vw]'>
       <p className='text-[1.7vw] leading-[1.3] montreal font-medium mobile:text-[5.5vw] mobile:leading-[1.2] tablet:text-[2.5vw] tablet:leading-[1.2]'>{title}</p>
       <p className='content'>Duration : {duration}</p>
       </div>
       </div>
    )
}

const Offer = () => {
  return (
    <section className='h-full w-screen pt-[5vw] mobile:pb-[7vw] tablet:pb-[5vw]'>
    <div className='w-full h-full container-lg'>
        <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw] mobile:items-start mobile:gap-[4vw] tablet:items-start tablet:gap-[2.5vw]">
            <h2 data-heading-anim className="heading-2 headingAnim">
            What you&apos;ll
                <span className="blue-text"> Learn</span>
            </h2>
            {/* <p data-para-anim className="content w-[65%] text-center fadein mobile:w-full mobile:text-left tablet:text-left tablet:w-[80%]">
            We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high-quality. We provide effective strategies that are aligned with your long-term business goals.
            </p> */}
        </div>
        <div className='w-full h-full flex flex-wrap items-center justify-between gap-[1vw] gap-y-[2vw] mobile:flex-col mobile:gap-[5vw] tablet:gap-[3vw]'>
            <OfferCard title={"Advanced Digital Marketing"} duration={"3 months"} img={"/assets/images/schoolofdigital/digital-marketing.png"}/>
            <OfferCard title={"Advanced Search Engine Optimization"} duration={"3 months"} img={"/assets/images/schoolofdigital/advances-search-engine-optimization.png"}/>
            <OfferCard title={"Marketplace Ads-Amazon & Flipkart"} duration={"3 months"} img={"/assets/images/schoolofdigital/marketplace-ads.png"}/>
            <OfferCard title={"Google Ads"} duration={"3 months"} img={"/assets/images/schoolofdigital/google-ads.png"}/>
            <OfferCard title={"Facebook Ads"} duration={"3 months"} img={"/assets/images/schoolofdigital/facebook-ads.png"}/>
            <OfferCard title={"Marketing Analytics"} duration={"3 months"} img={"/assets/images/schoolofdigital/marketing-analytics.png"}/>
        </div>
        </div>
        </section>
  )
}

export default Offer