import Image from 'next/image'
import React from "react";
import { imgAnim } from '../gsapAnimations';

const Hero = ({ title1, title2, para, img }) => {
  imgAnim()

  return (
    <section className='w-screen h-[60vw] bg-[#F1F1F1] mobile:h-full mobile:pt-24 mobile:bg-white1 tablet:h-[110vw]'>
      <div className='w-full h-full flex items-center justify-between gap-[10vw] px-[3vw] mobile:flex-col mobile:px-[5vw] mobile:gap-10 tablet:flex-col  tablet:px-[5vw] tablet:justify-center  tablet:items-start'>
        <div className='w-[50%] mobile:w-full tablet:w-full'>
          <h1 className='heading-1 leading-[1.2] headingAnim'>
            {title1}
            <span className='text-primary'> {title2} </span>
          </h1>
          <p data-para-anim className="content w-[75%] tracking-wide para mt-[2vw] mobile:w-full mobile:mt-4 tablet:w-full">
            {para}
          </p>
        </div>
        <div className='w-[40%] flex items-end justify-end mobile:block mobile:w-full tablet:w-3/5 tablet:justify-start tablet:items-start'>
          <div className='h-[40vw] mobile:h-[90vw] relative'>
          <div className="absolute w-full h-[100%] z-[2] top-0 left-0 overflow-hidden bg-[#f1f1f1] mobile:bg-white1 imgAnim origin-bottom">

</div>
            <Image src={img} alt='hero' priority={true} width={1000} height={1700} placeholder='blur' className='rounded-[1.5vw] h-full object-cover fadein mobile:rounded-[1.2rem] tablet:rounded-[3vw]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero