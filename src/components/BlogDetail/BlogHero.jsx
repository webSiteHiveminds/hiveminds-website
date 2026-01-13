import Image from "next/image";
import React from "react";


const BlogHero = ({ title, excerpt, featuredImg, category }) => {

  return (
    <section
      className="w-screen h-full overflow-hidden bg-[#F1F1F1] pt-[10%] pb-[4%] mobile:bg-[#fafafa] mobile:pt-[20%] tablet:pb-[7%]"
      id="contact-hero"
    >
      <div className="w-full h-full container-lg flex  justify-between mobile:flex-col mobile:gap-[7vw] tablet:flex-col tablet:gap-[5vw]">
        <div className="w-[45%] flex flex-col gap-[1vw] pt-[5vw] mobile:w-full mobile:gap-[4vw] tablet:w-full">
          <h1 className="heading-2 leading-[1.2] w-full headingAnim">
            {title}
          </h1>
          <ul className="list-disc py-[1vw] px-[1vw] mobile:px-[4vw]">
            <li data-para-anim className="content">{category}</li>
          </ul>
          <div
            dangerouslySetInnerHTML={{ __html: excerpt }}
            className="content w-[88%] tracking-wide para mobile:w-full tablet:w-[90%] fadeup"
          />
        </div>
        <div className="w-[40%] h-[40vw] relative rounded-[1.2vw] overflow-hidden  mobile:w-full mobile:rounded-[4.5vw] mobile:h-[85vw] tablet:w-full tablet:h-[60vw] tablet:rounded-[3vw]">
          <div className="absolute w-full h-[100%] z-[2] top-0 left-0 overflow-hidden bg-[#f1f1f1] mobile:bg-white1 imgAnim origin-bottom">

          </div>
          <Image
            src={featuredImg.sourceUrl}
            sizes={featuredImg.sizes}
            fill
            priority={true}
            quality={90}
            alt="hero-img"
            className="w-full h-full object-cover !static fadein"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
