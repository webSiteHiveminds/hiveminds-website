import React from 'react';

import styles from "./casestudystyles.module.css"

const Content = ({ content , categories , industry ,services}) => {

    return (
        <>
            <section className='h-full w-screen py-[5vw]' id='blog-detail'>
                <div className='container-lg w-full h-full flex items-start justify-between mobile:flex-col-reverse tablet:flex-col-reverse '>
                    
                    <div className='w-[65%] h-full space-y-[1.5vw] mobile:w-full mobile:mt-[4vw] mobile:space-y-[4vw] tablet:w-full'>
                        <div
                            className={`${styles.caseStudyContent}`}
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    </div>
                    <div className='w-[20%] category mobile:w-full tablet:w-full tablet:py-[3vw] sticky mobile:static tablet:static top-[6vw] h-full'>
                    <div className='py-[1vw] mobile:py-[2vw]'>
                        <p data-para-anim className='content '> Industry:</p>
                        <p className='text-[1.5vw] font-bold py-[0.5vw] fadein mobile:text-[6.5vw] tablet:text-[2.8vw] '>{industry}</p>
                    </div>
                    <div className='py-[1vw] mobile:py-[2vw]'>
                        <p data-para-anim className='content '> Service:</p>
                        {
                            services.map((service)=>(
                                <div key={service.id} className='space-y-[0.2vw]'>
                                    <p  className='text-[1.5vw] font-bold py-[0.5vw] fadein mobile:text-[6.5vw] tablet:text-[2.8vw] '>{service.name}</p>
                                    </div>

                            ))
                        }
                    </div>
                    <div className='py-[1vw] mobile:py-[2vw]'>
                        <p data-para-anim className='content '>Category:</p>
                        {
                            categories.map((category)=>(
                                <div key={category.id} className='space-y-[0.2vw]' >
                                    <p  className='text-[1.5vw] font-bold fadein mobile:text-[6.5vw] tablet:text-[2.8vw] '>{category.name}</p>

                                    </div>

                            ))
                        }
                        
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Content;