import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import Link from "next/link";
import img1 from '../../../public/assets/images/homepage/hero-bigbasket-img1.png'
import img2 from '../../../public/assets/images/homepage/hero-bigbasket-img2.png'
import img3 from '../../../public/assets/images/homepage/hero-dominos-img1.png'
import img4 from '../../../public/assets/images/homepage/hero-dominos-img2.png'
import img5 from '../../../public/assets/images/homepage/hero-flydubai-img1.png'
import img6 from '../../../public/assets/images/homepage/hero-flydubai-img2.png'

const Hero = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeDetail, setActiveDetail] = useState(0);
  const headRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  const images = [
    {
      src1: img1,
      src2: img2,
      link: "/casestudies/bigbasket"
    },
    {
      src1: img3,
      src2: img4,
      link: "/casestudies/dominos",
    },
    {
      src1: img5,
      src2: img6,
      link: "/casestudies/flydubai",
    },
  ];

  const details = [
    {
      num1: "2.35x",
      para1: "Growth in installs",
      para2: "Expanding Horizons in Non-Metro Cities.",
    },
    {
      num1: " 500K+",
      para1: "New Orders in 12 Months",
      para2: "Success Through Influencer Power",
    },
    {
      num1: "67%",
      para1: "Increase in Brand Searches",
      para2: "New Routes Soar to Success",
    },
  ];
  const slidesData = [
    {
      title: "Transforming Potential Into Growth With ",
      subtitle: "Every Step",
      description: "",
      href: "/our-impact",
    },
    {
      title: "Data-Backed",
      subtitle: "Growth",
      description: "Expert-driven, Tech-powered, Data-optimized growth for lean startups to household brands",
      href: "/our-impact",
    },
    {
      title: "Optimise, Engage,",
      subtitle: "Convert",
      description: "Helping brands stand out with impactful campaigns and strategies",
      href: "/our-impact",
    },
    {
      title: "Clicks That",
      subtitle: "Convert",
      description: "Unlocking new orders with innovative strategies tailored to your business goals",
      href: "/our-impact",
    }

  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headRef.current, {
        maskPosition: "100% 100%",
        duration: 3.5,
      })
        .to(headRef.current, {
          opacity: 0,
          delay: 1,
          // maskPosition:"-50% 100%",
          duration: 0.5,
        })
        .from(
          paraRef.current,
          { yPercent: 100, opacity: 0, duration: 1 },
          "-=5"
        )
        .to(paraRef.current, { opacity: 0, duration: 1 }, "-=0.9")
        .from(
          buttonRef.current,
          { opacity: 0, yPercent: 100, duration: 1 },
          "-=5"
        )
        .to(buttonRef.current, { opacity: 0, duration: 1, delay: -1 });
    });

    return () => ctx.revert();
  }, [activeIndex]);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slidesData.length]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".Marquee-container", {
      top: "80%",
      duration: 6,
      ease: "none",
    });
    tl.to(".Marquee-container", {
      yPercent: -50,
      duration: images.length * 6,
      repeat: -1,
      ease: "none",
    });
  }, [images.length]);
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
  // console.log(activeIndex)
  return (
    <section
      id="hero"
      className="flex w-screen h-screen overflow-hidden relative bg-[#F1F1F1]"
    >
      {/* Left Section */}
      <div className="w-[45%] h-screen flex items-center justify-between container-lg pt-[5vw] pl-[5vw] pr-[2vw]">
        <div className="w-full flex flex-col gap-[2vw] flex-wrap">
          <h1 ref={headRef} className="heading-1 leading-[1.1] heading hero-heading pr-[3vw]">
            {slidesData[activeIndex].title}{" "}
            <span className="text-primary">
              <br />
              {slidesData[activeIndex].subtitle}
            </span>
          </h1>

          <p ref={paraRef} className="content w-[75%] tracking-wide para">
            {slidesData[activeIndex].description}
          </p>

          <PrimaryButton
            prefetch={false}
            aria-label="to casestudy"
            href={slidesData[activeIndex].href}
            text="View Case Study"
            className={`button ${activeIndex == 0 ? "!hidden" : "block"}`}
            ref={buttonRef}
          />
        </div>
      </div>

      {/* Right Section - Infinite Marquee Gallery */}
      <div className="w-[55vw] h-screen overflow-hidden flex flex-col items-end relative">
        <div className="Marquee-container relative top-0">

          {Array(2)
            .fill(images)
            .flat()
            .map((imageSet, index) => (
              <div
                key={index}
                className="w-[55vw] h-fit flex gap-[0.9vw] gallery-block relative"
              >

                <div className="w-[25vw] h-full my-[4vw] flex flex-col gap-[2vw] rounded-[1vw] overflow-hidden group">
                  <Link href={imageSet.link} prefetch={false}>
                    <Image
                      priority={index === 0 ? true : false}
                      src={imageSet.src1}
                      placeholder="blur"
                      className="object-fill w-full h-full rounded-[1vw] group-hover:scale-[1.08] transition-all duration-700 ease-in-out"
                      alt="gallery image"
                    />
                  </Link>
                </div>

                <div className="w-[25vw] h-full mt-[-1vw] flex flex-col gap-[0.9vw] rounded-[1vw] overflow-hidden group">
                  <Link href={imageSet.link} prefetch={false}>
                    <Image
                      priority={index === 0 ? true : false}
                      src={imageSet.src2}
                      placeholder="blur"
                      className="object-fill w-full h-full rounded-[1vw] group-hover:scale-[1.08] transition-all duration-700 ease-in-out"
                      alt="gallery image"
                    />
                  </Link>

                </div>
              </div>
            ))}
        </div>
        <div className="w-[51vw] h-[7vw] absolute bottom-0 rounded-tl-[2vw] rounded-tr-[2vw] border left-0 glassmorphism-dark z-[5]">
          <div className="w-full h-full flex justify-between items-center px-[3vw]">
            <div className="flex items-center w-[50%]">
              <p className="text-[2.4vw] font-extrabold uppercase leading-[1] content-detail">
                {details[activeDetail].num1}
              </p>

              <p className="content !leading-[1] content-para pl-[0.8vw]">
                {details[activeDetail].para1}
              </p>
            </div>

            <span className="h-[4.5vw] w-[1px] bg-black"></span>

            <div className="flex flex-col items-center w-[50%]">


              <p className="content !leading-[1] content-para">
                {details[activeDetail].para2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
