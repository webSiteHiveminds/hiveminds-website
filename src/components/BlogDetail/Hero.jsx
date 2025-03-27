import Image from "next/image";
import React from "react";

const Hero = ({title1,title2,para,img, category}) => {
  return (
    <section
      className="w-screen h-full overflow-hidden bg-[#F1F1F1] pt-[10%] pb-[4%] mobile:bg-[#fafafa] mobile:pt-[20%]"
      id="contact-hero"
    >
      <div className="w-full h-full container-lg flex  justify-between mobile:flex-col mobile:gap-[7vw]">
        <div className="w-[45%] flex flex-col gap-[1vw] pt-[7vw] mobile:w-full mobile:gap-[4vw]">
          <h1 className="heading-2 leading-[1.2] w-full ">
            {title1}
            <span className="text-primary">{" "}{title2}</span>
          </h1>
          <ul className="list-disc py-[1vw] px-[1vw] mobile:px-[4vw]">
            <li data-para-anim className="content">{category}</li>   
        </ul>
          <p data-para-anim  className="content w-[88%] tracking-wide para mobile:w-full">
         {para}
          </p>
        </div>
        <div className="w-[40%] h-[100%] rounded-[1.2vw] overflow-hidden fadein mobile:w-full mobile:rounded-[4.5vw] mobile:h-[85vw]">
        <Image
         src={img}
         width={400}
         height={700}
         alt="hero-img"
         className="w-full h-full object-cover"
        />

        </div>
      </div>
    </section>
  );
};

export default Hero;
