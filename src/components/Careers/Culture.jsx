import Image from 'next/image'
import React from 'react'
import img from '../../../public/assets/images/careers/culture-img.png'
import PrimaryButton from '../Button/PrimaryButton'

const Culture = () => {
    return (
        <section className='h-full w-screen py-[5vw] overflow-hidden'>
            <div className='w-full h-full container-lg'>
                <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw] mobile:items-start mobile:gap-[4vw] tablet:items-start tablet:gap-[3vw]">
                    <h2 data-heading-anim className="heading-2 headingAnim">
                        Our
                        <span className="blue-text"> Culture</span>
                    </h2>
                    <p data-para-anim className="content w-[55%] text-center fadein mobile:w-full mobile:text-left tablet:text-left tablet:w-[80%]">
                        At HiveMinds, our culture thrives on innovation, collaboration, and a relentless pursuit of excellence. We celebrate diversity and encourage creative thinking, fostering a dynamic environment where every team member is empowered to grow, challenge the norm, and drive impactful digital marketing solutions.
                    </p>
                </div>
                <div className='flex items-start justify-between py-[1vw] mobile:flex-col mobile:gap-[7vw] tablet:flex-col'>
                    <div className='w-[45%] h-full mobile:w-full tablet:w-full tablet:rounded-[3vw] rounded-[1.5vw] overflow-hidden '>
                    <Image alt='culture-img' src={img} height={890} width={790} className=' tablet:h-[50vw] object-cover hover:scale-[1.1] transition-all duration-500 ease-in-out'/>
                    </div>
                    <div className='w-[50%] mobile:w-full tablet:w-full tablet:mt-[4vw] '>
                    <p data-para-anim className='content font-medium py-[2vw] mobile:text-[5vw] tablet:text-[2.5vw]'>We cultivate an environment that encourages creative problem-solving, continuous learning, and collaborative teamwork. Every voice is heard, and every idea is valued. Our diverse and inclusive community celebrates milestones together, supports personal growth, and drives digital transformation—making our workplace not only a hub for professional success but also a place where lifelong relationships are forged.</p>
                    <div className='mt-[3vw] mobile:mt-[7vw]'>
                    <PrimaryButton text={"Join Our Team"} href="/careers#job-openings"/>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Culture