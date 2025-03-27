import React from 'react'

const Overview = ({ title1, title2, para }) => {
    return (
        <section className='w-screen h-full bg-white'>
            <div className='w-full h-full px-[3vw] py-[5vw] flex items-center justify-between mobile:flex-col mobile:px-[5vw] mobile:py-10 mobile:gap-4 tablet:flex-col tablet:py-[8vw] tablet:items-start tablet:px-[6vw]'>
                <div className='w-[45%] mobile:w-full tablet:w-[90%]'>
                    <h2 className='font-bold heading-2 headingAnim'>{title1}
                        <span className='text-primary'> {title2} </span>
                    </h2>
                </div>
                <div className='w-[60%] flex items-end justify-end flex-col mobile:w-full tablet:w-full tablet:justify-start tablet:items-start'>
                    <p className='content w-[68%] tracking-wide para py-[2vw] fadeup mobile:w-full tablet:w-[90%] tablet:py-[4vw]' dangerouslySetInnerHTML={{ __html: para }}></p>
                </div>
            </div>
        </section>
    )
}

export default Overview;