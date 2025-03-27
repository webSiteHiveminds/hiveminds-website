import React, { useEffect } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);
const SubServices = ({ heading, para, subservices }) => {
  
  return (
    <section className='w-screen h-full py-[5vw] px-[3vw] bg-primary mobile:py-10 mobile:px-[5vw]  tablet:px-[6vw]' id='subservices'>
      <div className='flex flex-col items-center justify-center text-center mobile:text-left mobile:block tablet:block tablet:text-left '>
        <h2 className='heading-2 !text-white headingAnim tablet:w-4/5'>
          {heading}
        </h2>
        <p data-para-anim className='content !text-white w-[45%] py-[1vw] mobile:w-full mobile:py-6 tablet:w-4/5 tablet:text-left tablet:py-[4vw]'>{para}</p>
        <div className='flex flex-wrap items-center justify-center text-left gap-[2vw] py-[3vw] mobile:block mobile:space-y-4'>
          {subservices.map((item, index) => (
            <div key={index} className='bg-white rounded-[20px] p-[2vw] w-[30vw] min-h-[15.5vw] text-center fadeup mobile:w-full mobile:h-auto mobile:text-left mobile:px-6 mobile:py-8 tablet:py-[5vw] tablet:w-[42vw] tablet:min-h-[39vw]'>
              <h4 className='text-[1.55vw] font-medium mobile:text-[6.2vw] mobile:leading-[1.2] tablet:text-[3vw] mobile:mb-6'>
                {item.title}
              </h4>
              <p className='content mt-[1vw]'>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute h-[2vw] w-[2.2vw] top-[6%] left-[5%] yellow-hexagon-animation mobile:hidden tablet:hidden" >
        <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon" />
      </div>
    </section>
  )
}

export default SubServices
