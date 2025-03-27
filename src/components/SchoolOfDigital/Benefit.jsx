import Image from 'next/image'
import React from 'react'

const Benefit = () => {
  return (
  <section className='h-full w-screen py-[5vw]'>
    <div className='w-full h-full container-lg'>
        <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw] mobile:items-start mobile:gap-[4vw] tablet:block tablet:space-y-[3vw]">
            <h2 data-heading-anim className="heading-2 headingAnim">
               Who Can
                <span className="blue-text"> Benefit</span>
            </h2>
            {/* <p data-para-anim className="content w-[65%] text-center fadein mobile:w-full mobile:text-left tablet:text-left">
            We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high-quality. We provide effective strategies that are aligned with your long-term business goals.
            </p> */}
        </div>

        <div className='flex items-center justify-between h-full mobile:mt-[10vw] mobile:flex-col mobile:gap-[10vw] tablet:mt-[5vw] '>
            <div className='flex flex-col items-center justify-center gap-[1.5vw] w-[30%] h-[20vw] mobile:flex mobile:flex-row mobile:justify-start mobile:w-full mobile:gap-[10vw] tablet:w-full'>
                <Image src="/assets/icons/students.svg" height={100} width={100} alt='students' className='fadein'/>
                <p data-para-anim className='text-[1.5vw] font-medium mobile:text-[5vw] tablet:text-[2.5vw] '>Students</p>
            </div>
            <span className='h-[20vw] w-[1px] bg-black mobile:h-[1px] mobile:w-full '/>
            <div className='flex flex-col items-center justify-center gap-[1.5vw] w-[30%] h-[20vw]  mobile:flex mobile:flex-row mobile:justify-start mobile:w-full mobile:gap-[10vw] tablet:w-full'>
                <Image src="/assets/icons/entry-level.svg" height={100} width={100} alt='students' className='fadein'/>
                <p data-para-anim className='text-[1.5vw] font-medium w-[50%] text-center mobile:text-[5vw] mobile:text-left tablet:text-[2.5vw] tablet:w-[80%]'>Entry & Mid Level Professionals</p>
            </div> 
            <span className='h-[20vw] w-[1px] bg-black mobile:h-[1px] mobile:w-full '/>

            <div className='flex flex-col items-center justify-center gap-[1.5vw] w-[30%] h-[20vw]  mobile:flex mobile:flex-row mobile:justify-start mobile:w-full mobile:gap-[10vw] tablet:w-full'>
                <Image src="/assets/icons/mid-level.svg" height={100} width={100} alt='students' className='fadein'/>
                <p data-para-anim className='text-[1.5vw] font-medium w-[50%] text-center mobile:text-[5vw] mobile:text-left tablet:text-[2.5vw] tablet:w-[80%]'>Mid to Senior Level Professionals</p>
            </div>

        </div>
        </div>
  </section>
  )
}

export default Benefit