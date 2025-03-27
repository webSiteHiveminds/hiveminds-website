import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import styles from "../Button/styles.module.css";
import Link from "next/link";
import PrimaryButton from "../Button/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  "All",
  "Healthcare",
  "Automobiles",
  "Wearables",
  "NBFC",
  "BFSI",
  "CDIT",
];

const caseStudies = [
  {
    img: "/assets/images/homepage/big-basket-casestudy.png",
    title: "2.35x",
    des: "Growth in installs",
    category: "",
    para: "Expanding the user base",
    link: "/casestudies/bigbasket",
  },
  {
    img: "/assets/images/homepage/dominos-casestudy.png",
    title: "500K+",
    des: "New orders within 12 months",
    category: "",
    para: "Growing the 30-min connection",
    link: "/casestudies/dominos",
  },
  {
    img: "/assets/images/homepage/flydubai-casestudy.png",
    title: "67%",
    des: "Increase in brand searches",
    category: "",
    para: "New Routes Soar to Success",
    link: "/casestudies/flydubai",
  },
  {
    img: "/assets/images/homepage/flipkart-healthplus-casestudy.png",
    title: "#1",
    des: "India’s Medical App for 1.5 Years",
    category: "Healthcare",
    para: "Up with the App Installs",
    link: "/casestudies/flipkart-healthplus",
  },
  {
    img: "/assets/images/homepage/max-life-casestudy.png",
    title: "45%",
    des: "Revenue Surge in 3 Months.",
    category: "BFSI",
    para: "Powering Growth",
    link: "/casestudies/max-life",
  },
];

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const swiperRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".swiper-scrollbar", {
        opacity: 0,
        delay: 0.8,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".swiper-wrapper", {
        opacity: 0,
        xPercent: 100,
        duration: 1,
        scrollTrigger: {
          trigger: ".slideInCaseCarousel",
          start: "top 80%",
        },
      });
    });
    return () => ctx.revert();
  }, [activeCategory]);

  const filteredCaseStudies =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter(
          (caseStudy) => caseStudy.category === activeCategory
        );

  return (
    <>
      <section id="caseStudies" className="pt-[10%] relative">
        <div className="w-screen h-[42vw] flex items-center justify-center z-[10] mobile:h-full tablet:h-full">
          <div className="w-[90vw] h-full rounded-[2vw] bg-white flex items-center justify-center casestudy-block pl-[3vw] pt-[3vw] pr-[1.5vw] shadow-2xl drop-shadow-2xl overflow-hidden mobile:shadow-none mobile:flex-col mobile:items-start mobile:py-[12vw] mobile:px-[5vw] mobile:gap-[4vw] mobile:rounded-[4vw] mobile:drop-shadow-md tablet:flex-col tablet:rounded-[3vw] tablet:py-[7vw]">
            <div className="w-[40%] h-full mt-[10vw] flex flex-col gap-[2vw] mobile:mt-0 tablet:mt-0 mobile:w-full mobile:gap-[4vw] tablet:w-full ">
              <h2 className="heading-2 headingAnim">
                Related Case
                <span className="blue-text">Studies</span>
              </h2>
              <p data-para-anim className="content w-[80%] tablet:w-[60%]">
                Explore the challenges we’ve overcome and the strategies we’ve
                implemented to deliver exceptional results across various
                industries.
              </p>
              <div>
                <PrimaryButton text={"All Case Studies"} href={"/our-impact"} />
              </div>
            </div>


            {/* Swiper Component with Always Visible Blue Scrollbar */}
            <div className="w-[60%] flex items-center slideInCaseCarousel mobile:w-full tablet:w-full tablet:mt-[7vw]">
              <Swiper
                ref={swiperRef}
                modules={[FreeMode, Scrollbar]}
                freeMode={true}
                spaceBetween={20}
                speed={1000}
                slidesPerView={1.2} // Default for small screens
                breakpoints={{
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 15,
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
                {filteredCaseStudies.map((study, index) => (
                  <SwiperSlide key={index}>
                    <Link href={study.link}>
                      <div className="relative w-[25vw] h-[30.5vw] group mobile:w-[67vw] mobile:h-[90vw] tablet:w-[55vw] tablet:h-[70vw]">
                        <Image
                          src={study.img}
                          fill
                          alt="casestudy"
                          className="object-contain group-hover:brightness-75 transistion-all duration-500 ease-in-out"
                        />

                        <div className="absolute top-0 right-0 w-[11.7vw] h-[4vw] flex items-center justify-center rounded-br-[20px] mobile:right-[5%] mobile:top-[8%] mobile:w-[25vw] tablet:w-[30vw] tablet:right-[-5%] tablet:top-[5%]">
                          <div className="flex flex-col justify-center  w-[70%] mobile:w-full">
                            <p className="font-medium text-[2vw] leading-[1] mobile:text-[5vw] tablet:text-[3vw]">
                              {study.title}
                            </p>
                            <p className="text-[0.9vw] font-medium w-full text-start leading-[1] ml-[0.1vw] mobile:text-[3vw] tablet:text-[2vw]">
                              {study.des}
                            </p>
                          </div>
                        </div>
                        <div className="absolute bottom-5 w-full flex items-center justify-center mobile:bottom-[15%] tablet:bottom-[10%]">
                          <p className="text-white text-[1.34vw] text-start leading-[1] group-hover:scale-[1.1] transistion-all duration-500 ease-in-out mobile:text-[4vw] tablet:text-[3vw]">
                            {study.para}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Scrollbar */}
              <div className="swiper-scrollbar "></div>
            </div>
          </div>
        </div>
        <div className="w-screen h-[70%] rounded-bl-[2vw] rounded-br-[2vw] mobile:rounded-bl-[4vw] mobile:rounded-tr-[4vw] bg-primary absolute top-0 left-0 z-[-1] "></div>
      </section>
    </>
  );
};

export default CaseStudies;
