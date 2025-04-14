import Image from "next/image";
import img from '../../../public/assets/images/schoolofdigital/school-of-digital-hero-img.png'
import PrimaryButton from "../Button/PrimaryButton";
import React from "react";
import { headingAnim, imgAnim } from "../gsapAnimations";


const Hero = () => {
  imgAnim()
  headingAnim()


  return (
    <section
      className="w-screen h-full overflow-hidden bg-[#F1F1F1] pt-[10%] pb-[4%] mobile:pb-8 mobile:bg-white1 mobile:pt-24 tablet:pb-[12vw]"
      id="contact-hero"
    >
      <div className="w-full h-full container-lg flex justify-between mobile:flex-col mobile:gap-10 tablet:flex-col tablet:gap-[10vw]">
        <div className="w-[50%] flex flex-col gap-[1vw] pt-[3vw] mobile:w-full mobile:gap-4 mobile:pt-0 tablet:w-full tablet:gap-[4vw]">
          <h1 className="heading-1 leading-[1.2] headingAnim">
            Hiveminds School
            <span className="text-primary">{" "}of Digital</span>
          </h1>
          <p data-para-anim className="text-[2vw] para w-[50%] mobile:text-[4.2vw] tablet:text-[2.4vw] mobile:w-full tablet:w-[80%]"> Upscale with our Digital Marketing Course</p>
          <p data-para-anim className="content w-[70%] tracking-wide para mobile:w-full tablet:w-4/5">
            Kickstart your digital marketing career with our carefully curated range of content to make you job-ready in 3 months.
          </p>
        </div>
        <div className="w-[40%] h-[80%] rounded-[1.2vw] mobile:rounded-[1.2rem] overflow-hidden relative  mobile:w-full mobile:h-[90vw] tablet:w-3/5 tablet:rounded-3xl">
          <div className="absolute w-full h-[100%] z-[2] top-0 left-0 overflow-hidden bg-[#f1f1f1] mobile:bg-white1 imgAnim origin-bottom">

          </div>
          <Image
            priority={true}
            src={img}
            placeholder="blur"
            alt="hero-img"
            className="w-full h-full object-cover fadein"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;
