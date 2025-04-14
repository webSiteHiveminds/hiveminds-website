import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Hero = ({ title1,title2, img }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".image-cover", {
        scaleY: 0,
        duration: 1.5,
        ease: "power4.inOut"

      })

    })
    return () => ctx.revert()


  }, [])
  return (
    <section
      className="w-screen h-[50vw] overflow-hidden bg-[#F1F1F1] pt-[10%] pb-[4%] mobile:pb-8 mobile:bg-white1 mobile:pt-24 tablet:pb-[12vw] mobile:h-full tablet:h-full"
      id="contact-hero"
    >
      <div className="w-full h-full container-lg flex justify-between mobile:flex-col mobile:gap-10 tablet:flex-col tablet:gap-[10vw]">
        <div className="w-[50%] flex flex-col gap-[1vw] pt-[7vw] mobile:w-full mobile:gap-4 mobile:pt-0 tablet:w-full tablet:gap-[4vw]">
        <h1 className="heading-1 leading-[1.2] headingAnim">
            {title1}
            <span className="text-primary">{" "}{title2}</span>
          </h1>
        </div>
        <div className="w-[40%] h-[100%] relative rounded-[1.2vw] mobile:rounded-[1.2rem] overflow-hidden  mobile:w-full mobile:h-[90vw] tablet:w-3/5 tablet:rounded-3xl">
          <div className="absolute w-full h-[100%] z-[2] top-0 left-0 overflow-hidden bg-[#f1f1f1] mobile:bg-white1 image-cover origin-bottom" />
          <Image
            priority={true}
            width={620}
            height={700}
            src={img}
            // placeholder="blur"
            alt="hero-img"
            className="w-full h-full object-cover fadein"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
