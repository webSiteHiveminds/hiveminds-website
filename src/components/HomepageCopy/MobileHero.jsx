
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import PrimaryButton from "../Button/PrimaryButton";
import MobileHeroSwiper from "./MobileHeroSwiper";
const MobileHeroCopy = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeDetail, setActiveDetail] = useState(0);
  const headRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  const details = [
    {
      num1: "2.35x",
      para1: "Growth in installs",
      // num2: "430K + ",
      para2: "Expanding Horizons in Non-Metro Cities.",
    },
    {
      num1: " 500K+",
      para1: "New Orders in 12 Months",
      // num2: "1.90x",
      para2: "Success Through Influencer Power",
    },
    {
      num1: "67%",
      para1: "Increase in Brand Searches",
      // num2: "5.90x",
      para2: "New Routes Soar to Success",
    },
  ];
  const slidesData = [
    {
      title: "Data-Backed",
      subtitle: "Growth",
      description:
        "Expert-driven, Tech-powered, Data-optimized growth for lean startups to household brands",
      href: "/our-impact",
    },
    {
      title: "Optimise, Engage,",
      subtitle: "Convert",
      description:
        "Helping brands stand out with impactful campaigns and strategies",
      href: "/our-impact",
    },
    {
      title: "Clicks That",
      subtitle: "Convert",
      description:
        "Unlocking new orders with innovative strategies tailored to your business goals",
      href: "/our-impact",
    },
  ];
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headRef.current, {
        maskPosition: "100% 100%",
        duration: 3.5,
      })
        .to(headRef.current, {
          opacity:0,
          delay:2,
          // maskPosition:"-50% 100%",
          duration: 0.5,
        })
        .from(
          paraRef.current,
          { yPercent: 100, opacity: 0, duration: 1 },
          "-=6"
        )
        .to(paraRef.current, { opacity: 0, duration: 1 }, "-=0.9")
        .from(
          buttonRef.current,
          { opacity: 0, yPercent: 100, duration: 1 },
          "-=6"
        )
        .to(buttonRef.current, { opacity: 0, duration: 1, delay: -1 });
    });

    return () => ctx.revert();
  }, [activeIndex]);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slidesData.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".content-detail , .content-para", {
        yPercent: 20,
        opacity: 0,
        duration: 1,
      }).to(".content-detail , .content-para", {
        delay: 4,
        yPercent: -20,
        opacity: 0,
        duration: 1,
      });
    });
    return () => ctx.revert();
  }, [activeDetail]);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDetail((prevIndex) => (prevIndex + 1) % details.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [details.length]);

  return (
    <section
      className="w-screen h-full pt-[30%] pb-[15%] overflow-hidden tablet:pt-[20%] tablet:h-[90vh] hidden mobile:block tablet:block"
      id="hero"
    >
      <div className="container-lg flex flex-col gap-[5vw]">
        <div className="w-full h-[100vw] rounded-[5vw] overflow-hidden relative tablet:h-fit tablet:rounded-[2vw]">
            
          <MobileHeroSwiper/>
          <div className="w-full h-[22vw] glassmorphism-dark absolute bottom-0 left-0 z-[1] flex tablet:h-[14vw]">
          <div className="w-full h-full flex justify-between items-center px-[3vw] gap-[3vw] tablet:px-[5vw]">
            <div className="flex gap-[2vw] w-[50%] justify-between ">
              <p className="text-[5vw] font-extrabold uppercase leading-[1] content-detail tablet:text-[4vw]">
                {details[activeDetail].num1}
              </p>

              <p className="text-[3.1vw] !leading-[1.3] content-para tablet:text-[2.5vw]">
                {details[activeDetail].para1}
              </p>
            </div>

            <span className="h-[15.5vw] w-[1px] bg-black tablet:h-[10vw]"></span>

            <div className="flex flex-col items-end w-[50%]">
              

              <p className="text-[3.4vw] !leading-[1.3] content-para tablet:text-[2.5vw] text-center">
                {details[activeDetail].para2}
              </p>
            </div>
          </div>
                  </div>
        </div>
        <div className="w-full h-full flex items-center justify-between mobile:pl-[2vw] pt-[5vw] pr-[2vw] tablet:pr-0 tablet:pt-0">
          <div className="w-full flex flex-col gap-[5vw] flex-wrap">
            <h1
              ref={headRef}
              className="heading-1 mobile:!text-[11vw] leading-[1.2] hero-heading"
            >
              {slidesData[activeIndex].title}{" "}
              <span className="text-primary">
                {slidesData[activeIndex].subtitle}
              </span>
            </h1>

            <p ref={paraRef} className="content w-full tracking-wide para tablet:w-[70%]">
              {slidesData[activeIndex].description}
            </p>

            <PrimaryButton
              href={slidesData[activeIndex].href}
              text="View Case Study"
              className="button"
              ref={buttonRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHeroCopy;
