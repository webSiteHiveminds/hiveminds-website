import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'

const Join = () => {
  return (
    <section className='py-[5vw] mobile:pb-[15%] tablet:py-[7%]'>
      <div className='w-full h-full container-lg  rounded-[1.5vw] p-[5vw] shadow-md mobile:py-[10vw] mobile:px-[7vw] mobile:rounded-[6vw]  '>
        <div className='flex items-center justify-between mobile:flex-col mobile:items-start mobile:gap-[7vw]  '>
          <h3 data-heading-anim className='heading-2 w-[30%] mobile:w-full tablet:w-[50%]'>Are you Ready to Get Join?</h3>
          <PrimaryButton text={"Join Us"} href={"/school-of-digital#brochure"} />
        </div>
      </div>
    </section>
  )
}

export default Join