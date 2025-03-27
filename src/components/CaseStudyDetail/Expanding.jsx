
import React from 'react'

const Expanding = ({ content }) => {
  
    return (
        <section className='w-screen h-full py-[5vw] ' id='casestudy-detail'>
            <div className='container-lg flex justify-between mobile:flex-col-reverse tablet:flex-col-reverse min-h-screen h-full w-full'>

                <div className='w-[55%]  mobile:w-full mobile:pt-[15vw] tablet:w-full'>
                    <h2 className='heading-2 w-[70%] fadein mobile:w-full tablet:w-[90%]'>
                        {content.subtitle1}
                        <span className='text-primary fadein'> {content.subtitle2} </span>
                    </h2>
                    
                    <div className='w-[80%] fadein mobile:w-full text-[1.5vw] mobile:text-[5vw] tablet:text-[2.8vw] tablet:leading-[1.3] tablet:w-full tablet:py-[3vw]' dangerouslySetInnerHTML={{ __html: content.intro }} />
                    <span className='w-[120%] h-[1.5px] bg-black block mt-[2vw] lineDraw mobile:w-full mobile:h-[1px] mobile:my-[7vw] tablet:w-[98%]'></span>

                    <div className='py-[1vw] tablet:py-[3vw]'>
                        {content.features?.map((feature, index) => (
                            <React.Fragment key={index}>
                                <div className='fadein text-[1.5vw] mobile:text-[5vw] tablet:text-[2.8vw] ' dangerouslySetInnerHTML={{ __html: feature }} />
                                <span className='w-[120%] h-[1.5px] bg-black block my-[1vw] lineDraw mobile:w-full mobile:my-[7vw] mobile:h-[1px] tablet:w-[98%] tablet:my-[3vw]'></span>
                            </React.Fragment>
                        ))}
                    </div>


                    <div className='py-[4vw] mobile:py-[7vw] '>
                        <h2 className='heading-2 w-[80%] fadein mobile:w-full'>Problem <span className='text-primary'> Statement </span></h2>
                        <div className='fadein text-[1.5vw] mobile:text-[5vw] tablet:text-[2.8vw]  mobile:mt-[7vw]' dangerouslySetInnerHTML={{ __html: content.problem }} />
                        <span className='w-[60%] h-[1.5px] bg-black absolute mt-[3vw] lineDraw mobile:w-[92%] mobile:my-[7vw] mobile:h-[1px] tablet:w-[90%] tablet:my-[4vw]'></span>
                    </div>

                    <div className='py-[4vw] mobile:mt-[7vw]'>
                        <h2 className='heading-2 w-[80%] fadein mobile:w-full'>Our<span className='text-primary'> Approach </span></h2>
                        <div className='fadein text-[1.5vw] mobile:text-[5vw] tablet:text-[2.8vw] mobile:mt-[7vw]' dangerouslySetInnerHTML={{ __html: content.approach }} />
                        <span className='w-[60%] h-[1.5px] bg-black absolute mt-[3vw] lineDraw mobile:w-[92%] mobile:h-[1px] mobile:mt-[8vw] tablet:w-[90%]'></span>
                    </div>

                    <div className='py-[4vw] mobile:mt-[7vw]'>
                        <h2 className='heading-2 w-[80%] fadein'>Impact </h2>
                        <div className='fadein text-[1.5vw] mobile:text-[5vw] tablet:text-[2.8vw]  mobile:mt-[7vw]' dangerouslySetInnerHTML={{ __html: content.impact }} />
                        <span className='w-[60%] h-[1.5px] bg-black absolute mt-[3vw] lineDraw mobile:w-[92%] mobile:h-[1px] mobile:mt-[7vw] tablet:w-[90%]'></span>
                    </div>

                   
                </div>

                <div className='w-[20%] category mobile:w-full tablet:w-full tablet:py-[3vw] sticky mobile:static tablet:static top-[6vw] h-full'>
                    <div className='py-[1vw] mobile:py-[2vw]'>
                        <p data-para-anim className='content '> Industry:</p>
                        <p className='text-[1.5vw] font-bold py-[0.5vw] fadein mobile:text-[6.5vw] tablet:text-[2.8vw] '>{content.industry}</p>
                    </div>
                    <div className='py-[1vw] mobile:py-[2vw]'>
                        <p data-para-anim className='content '> Service:</p>
                        <p className='text-[1.5vw] font-bold py-[0.5vw] fadein mobile:text-[6.5vw] tablet:text-[2.8vw] '>{content.service}</p>
                    </div>
                    <div className='py-[1vw] mobile:py-[2vw]'>
                        <p data-para-anim className='content '>Category:</p>
                        <p className='text-[1.5vw] font-bold py-[0.5vw] fadein mobile:text-[6.5vw] tablet:text-[2.8vw] '>{content.category}</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Expanding
