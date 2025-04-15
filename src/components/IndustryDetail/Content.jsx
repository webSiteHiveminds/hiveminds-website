import Image from 'next/image'
import React from 'react'

const Content = ({ data }) => {
    return (
        <section className='h-full w-screen py-[5vw]' id='industry-detail'>
            <div className='container-lg w-full h-full flex items-start justify-between mobile:flex-col tablet:flex-col'>
                <div className='w-[20%] flex gap-[0.5vw] fadeup mobile:hidden tablet:hidden'>
                    <Image src="/assets/images/industry/industry-detail-navigation.svg" height={375} width={15} alt='indutry-detail-navigation' className='h-[18vw] w-auto mt-2' />
                    <div className='flex flex-col items-start justify-between'>
                        <p className='content h-[1.6vw]'>Overview</p>
                        <p className='content h-[1.6vw] mt-1'>Our Approach</p>
                        <p className='content w-[90%] !leading-[1.4] h-[1.6vw]'>How We Make a Difference</p>
                    </div>
                </div>
                <div className='w-[65%] h-full pr-[3vw] space-y-[6vw] mobile:w-full mobile:mt-[4vw] mobile:space-y-[8vw] tablet:w-full tablet:space-y-[8vw]'>
                    <div className='space-y-[1.5vw] mobile:space-y-[2vw] tablet:space-y-[2vw]'>
                        <h2 className='heading-2 headingAnim'>Overview</h2>
                        <p data-para-anim className='text-[1.56vw] mobile:text-[4vw] tablet:text-[1.2rem]'> {data.overview}</p>
                    </div>
                    <div className='space-y-[1.5vw] mobile:space-y-[2vw] tablet:space-y-[2vw]'>
                        <h2 className='heading-2 headingAnim'>Our Approach</h2>
                        <p data-para-anim className='text-[1.56vw] mobile:text-[4vw] tablet:text-[1.2rem]'>{data.approach}</p>
                    </div>
                    <div className='space-y-[1.5vw] mobile:space-y-[2vw] tablet:space-y-[2vw]'>
                        <h2 className='heading-2 headingAnim'>How We Make a Difference</h2>
                        <div className='space-y-[2vw] mobile:space-y-[2vw] tablet:space-y-[2vw]'>
                            <ul className='list-disc px-[1.5vw] space-y-[1.5vw] mobile:space-y-[3vw] tablet:space-y-[2.5vw]'>
                                {data.difference.map((item, index) => (
                                    <li key={index} data-para-anim className='text-[1.56vw] mobile:text-[4vw] tablet:text-[1.2rem]'><span className='font-medium'>{item.title}</span> {item.detail}</li>
                                ))}
                            </ul></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content