import PrimaryButton from '@/components/Button/PrimaryButton'
import Header from '@/components/Header'
import Metadata from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'
import Image from 'next/image'
import React from 'react'

const metadata = {
  title: "404 Page not found - Hiveminds Agency",
  metaDescription: "It looks like nothing was found at this location. Maybe try go back to homepage.",
  path: "404",
  img: "homepage.png",
  date_published: "2025-03-21T00:00",
  date_modified: "2025-03-21T00:00",
}

const error = () => {
  return (
    <>
      <Metadata metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <section className='w-screen h-screen bg-white'>
        <Header />
        <div className='w-full h-screen flex justify-center items-center flex-col tablet:gap-[4vw] mobile:gap-[10vw]'>
          <div className='w-full flex gap-[2vw] justify-center'>
            <Image src={"/assets/icons/bee-404.png"} alt='' className='object-contain tablet:w-[15vw] mobile:w-[25vw] w-[9vw]' width={120} height={50} />
            <h1 className='text-[7.5vw] font-medium montreal text-primary tablet:text-[11vw] mobile:text-[15vw]'>404</h1>

          </div>
          <div className='flex flex-col gap-[2.5vw] justify-center items-center tablet:gap-[5vw] mobile:gap-[7vw]'>

            <p className='w-[80%] text-center tablet:text-[2.4vw]'>The page you are looking for doesn&apos;t exist OR some other error occurred, Go Back to Homepage</p>
            <PrimaryButton href={"/"} text={"Go Back"} />
          </div>
        </div>
      </section>
    </>
  )
}

export default error
