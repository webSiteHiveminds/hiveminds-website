import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import styles from "../Button/styles.module.css";
import Link from "next/link";
import { caseStudyPathBySlug } from "@/lib/casestudies";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    btnName: "All",
    value: "",
    label:"to all casestudy"
  },
  {
    btnName: "E-Commerce",
    value: "e-commerce",
    label:"to e-commerce casestudy"
  },
  {
    btnName: "Travel",
    value: "travel-tourism",
    label:"to travel-tourism"
  },
  {
    btnName: "Healthcare",
    value: "Healthcare",
    label:"to healthcare"
  },
  {
    btnName: "BFSI",
    value: "bfsi-fintech",
    label:"to bfsi"
  },
  {
    btnName: "Automobiles",
    value: "Automobiles",
    label:"to automobiles"
  },
  {
    btnName: "Wearables",
    value: "Wearables",
    label:"to wearables"
  },
  {
    btnName: "NBFC",
    value: "NBFC",
    label:"to nbfc"
  },
  {
    btnName: "CDIT",
    value: "cdit",
    label:"to cdit"
  },
];

const CaseStudies= ({ caseStudies }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [slugValue, setslugValue] = useState("");
  const swiperRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".swiper-scrollbar", {
        opacity: 0,
        delay: 0.8,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(swiperRef.current, {
        opacity: 0,
        xPercent: 20,
        duration: 1,
        ease:"power3.out",
        scrollTrigger: {
          trigger: ".slideInCaseCarousel",
          start: "top 80%",
        },
      });
    });
    return () => ctx.revert();
  }, [activeCategory]);

  const filteredCaseStudies = caseStudies.filter((item) => {
    if (slugValue === "") return true;
    return (
      item.industries[0]?.slug?.toLowerCase() === slugValue.toLowerCase()
    );
  });

  return (
    <>
      <section id="caseStudies" className="pt-[10%] relative">
        <div className="w-screen h-[45vw] flex items-center justify-center z-[10] mobile:h-full tablet:h-full">
          <div className="w-[90vw] h-full rounded-[2vw] bg-white flex items-center justify-center casestudy-block pl-[3vw] pt-[3vw] pr-[1.5vw] shadow-sm drop-shadow-xl mobile:drop-shadow-none overflow-hidden mobile:w-full mobile:shadow-none mobile:flex-col mobile:items-start mobile:py-[12vw] mobile:px-[5vw] mobile:gap-[4vw] mobile:rounded-[4vw]  tablet:flex-col tablet:rounded-[3vw] tablet:py-[7vw]">
            <div className="w-[40%] h-full flex flex-col gap-[2vw] mobile:w-full mobile:gap-[4vw] tablet:w-full ">
              <h2 className="heading-2 headingAnim">
                Growth Isn&apos;t Just a Buzzword - It&apos;s About Real{" "}
                <span className="blue-text">Impact</span>
              </h2>
              <p data-para-anim className="content w-[80%] tablet:w-[60%]">
                Explore the challenges we&apos;ve overcome and the strategies
                we&apos;ve implemented to deliver exceptional results across
                various industries.
              </p>

              <div className="flex flex-wrap items-center mt-[2vw] gap-[1vw] mobile:gap-[2vw] w-[90%] mobile:w-full tablet:w-full">
                {categories.map((category) => (
                  <button
                  aria-label={category.label}
                    key={category.value}
                    data-text={category.btnName}
                    className={`${
                      styles.buttonPlain
                    } cursor-pointer relative overflow-hidden border-[#134bd5] border-[1.5px] rounded-[40px] text-[0.97vw] font-light h-fit flex items-center justify-center text-center px-[1.5vw] py-[0.5vw] transition-all duration-300 mobile:!text-[3.5vw] tablet:text-[2vw] tablet:px-[4vw] tablet:py-[1vw] tablet:w-fit tablet:h-fit ${
                      activeCategory === category.btnName
                        ? " text-white bg-[#134bd5]"
                        : ""
                    } `}
                    onClick={() => {
                      setActiveCategory(category.btnName);
                      setslugValue(category.value);
                    }}
                  >
                    <div className=" w-fit h-fit">{category.btnName}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Swiper Component */}
            <div className="w-[60%] flex items-center slideInCaseCarousel mobile:w-full mobile:h-[100vw] tablet:w-full tablet:mt-[7vw] mobile:mt-[7vw]">
              {filteredCaseStudies.length>0?(<>
              <Swiper
                ref={swiperRef}
                modules={[FreeMode, Scrollbar]}
                freeMode={true}
                spaceBetween={20}
                speed={1000}
                slidesPerView={1.2}
                breakpoints={{
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  720: {
                    slidesPerView: 1.5,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1280: {
                    slidesPerView: 2,
                    spaceBetween: 35,
                  },
                  1536: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                }}
                scrollbar={{
                  draggable: true,
                  hide: false,
                  el: ".swiper-scrollbar",
                }}
                className="w-full h-full rounded-[1vw] overflow-hidden pr-[5vw]"
              >
                
                  {filteredCaseStudies.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Link href={`/${caseStudyPathBySlug(item.slug)}`}>
                        <div className="relative w-[25vw] h-[30.5vw] group mobile:w-full mobile:h-[90vw] tablet:w-[55vw] tablet:h-[70vw]">
                          <Image
                            src={item.caseStudyFields.homepageListing.listingImage.node.sourceUrl}
                            fill
                            sizes={item.caseStudyFields.homepageListing.listingImage.node.sizes}
                            alt={
                              item.caseStudyFields.homepageListing.listingImage.node.altText ||
                              "case study image"
                            }
                            className="object-contain group-hover:brightness-75 transistion-all duration-500 ease-in-out"
                          />
                          <div className="absolute top-0 right-0 w-[11.7vw] h-[4vw] flex items-center justify-center rounded-br-[20px] mobile:right-[8%] mobile:top-[4%] mobile:w-[25vw] tablet:w-[30vw] tablet:right-[-5%] tablet:top-[5%]">
                            <div className="flex flex-col justify-center  w-[70%] mobile:w-full">
                              <p className="font-medium text-[2vw] leading-[1] mobile:text-[5vw] tablet:text-[3vw]">
                                {item.caseStudyFields.homepageListing.numberMetrics}
                              </p>
                              <p className="text-[0.9vw] font-medium w-full text-start leading-[1] ml-[0.1vw] mobile:text-[3vw] tablet:text-[2vw]">
                                {item.caseStudyFields.homepageListing.metricsSubtext}
                              </p>
                            </div>
                          </div>
                          <div className="absolute bottom-5 w-full flex items-center justify-center mobile:bottom-[15%] tablet:bottom-[10%]">
                            <p className="text-white text-[1.34vw] text-start leading-[1] group-hover:scale-[1.1] transistion-all duration-500 ease-in-out mobile:text-[4vw] tablet:text-[3vw]">
                              {item.caseStudyFields.homepageListing.subtitle}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                
              
                
              </Swiper>
              
              <div className="swiper-scrollbar "></div>
              
              </>):(<>
              <div className="w-full h-full justify-center tablet:h-[70vw] mobile:h-[90vw] items-center flex text-xl">
                No casestudies to show

              </div>
              </>)}

      
            </div>
          </div>
        </div>
        {/* <div className="w-screen h-[70%] rounded-tl-[2vw] rounded-tr-[2vw] mobile:rounded-tl-[4vw] mobile:rounded-tr-[4vw] bg-primary absolute bottom-0 left-0 z-[-1] "></div> */}
      </section>
    </>
  );
};

export default CaseStudies;
