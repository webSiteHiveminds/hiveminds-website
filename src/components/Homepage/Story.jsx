/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useRef, useState } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ReelButton from "../Button/ReelButton";
import { useLenis } from "lenis/react";
import { initMagneticButton } from "../splitTextUtils";
import dynamic from "next/dynamic";
import LinkButton from "../Button/LinkButton";
import styles from "../Button/styles.module.css";
gsap.registerPlugin(ScrollTrigger);

const VideoModal = dynamic(() => import("@/components/VideoPlayer"));
const StoryCopy = ({ isOpen, setIsOpen }) => {
  
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lenis = useLenis();

  const handleOpen = () => {
    setIsModalOpen(true);
    setIsOpen(true);
    lenis.stop();
  };

  const handleClose = () => {
    setIsModalOpen(false);
    lenis.start();
    setIsOpen(false);
  };
  useEffect(() => {
    initMagneticButton();
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = videoRef.current;
            if (video && !videoLoaded) {
              video.src = "/assets/videos/about-video-short.mp4";
              video.load();
              video.play();
              setVideoLoaded(true);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const videoElement = videoRef.current;
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, [videoLoaded]);

  useEffect(() => {
    if (globalThis.innerWidth > 1024) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#story",
            scrub: true,
            start: "top 90%",
            end: "bottom 60%",
          },
        });
        tl.from(".video", {
          width: "100vw",
        });
      });
      return () => ctx.revert();
    }
  });
  return (
    <>
      <section id="story" className="pt-[15vw] w-screen overflow-hidden ">
        <div className="w-screen h-full py-[5vw] relative ">
          <div
            data-magnetic-target
            data-magnetic-strength="200"
            className="w-[90vw] h-[60%] bg-black rounded-[1.5vw] overflow-hidden absolute video top-[-15%] left-[50%] translate-x-[-50%] mobile:h-[70vw] mobile:rounded-[5vw] mobile:top-[-5%] tablet:top-[-5%] tablet:h-[60vw]"
          >
            <div className="absolute left-1/2 z-10 -translate-x-1/2 top-1/2 -translate-y-1/2 ">
              <ReelButton
                onClick={handleOpen}
                text="Play"
                className="magnetic-inner z-10"
              />
            </div>
            <video
              ref={videoRef}
              muted
              autoPlay
              loop
              poster="/assets/images/homepage/about-video-poster.webp"
              className="object-cover w-full h-full"
            ></video>
          </div>
          <div className="w-screen h-full py-[4vw] px-[5vw] mt-[5vw] pt-[22%] bg-[#134bd5] rounded-[2vw] flex items-start justify-between gap-[7vw] mobile:flex-col mobile:rounded-[4vw] mobile:pt-[60vw] mobile:pb-[15vw] tablet:flex-col tablet:pt-[50vw] tablet:pb-[10vw]">
            <div className="w-[40%] flex items-start justify-start flex-col  gap-[2vw] mobile:w-full mobile:gap-[4vw] tablet:w-full">
              <p className="text-[2.8vw] montreal text-[#FFFFFF] leading-[1.2] mobile:text-[9vw] tablet:text-[5vw] headingAnim">
                Fuelling Your Growth Ambitions, With Confidence.
              </p>
              <p data-para-anim className="content-white">
                At HiveMinds, we tackle your most challenging business problems
                with our specialized digital marketing approach - integrating
                strategic expertise, cutting-edge technology, and data-driven
                insights to craft campaigns that elevate your brand and drive
                sustainable growth.
              </p>
              <LinkButton
                btnLink={"/solutions"}
                btnText={"How We Do It"}
                className={"text-white fadeup"}
              />
            </div>
            <div className="w-[42%] flex items-start justify-start flex-col  gap-[2vw] mobile:w-full mobile:gap-[4vw] tablet:w-full">
              <p className="text-[2.8vw] montreal text-[#FFFFFF] leading-[1.2] w-[90%] headingAnim mobile:text-[9vw] tablet:text-[5vw]">
                Driven by Talent, Powered by Teamwork
              </p>
              <p data-para-anim className="content-white">
                Driven by a shared passion for elevating brands, we HiveMinders
                understands our clients&apos; unique goals and aspirations. We
                leverage our expertise to craft compelling brand experiences,
                ensuring that every campaign is executed with precision,
                creativity, and an unwavering commitment to excellence.
              </p>
              <div className="w-full flex items-center justify-start gap-[2vw] mobile:flex-col mobile:items-start mobile:mt-[4vw] tablet:mt-[3vw]">
                <PrimaryButton
                aria-label="to about us"
                  className="fadeup"
                  text="Explore The Hiveminds Way"
                  href="/about-us"
                  data-btn-white
                />
                
                <a href="/about-us#leadership" data-btn-b-white className={`${styles.btn} fadeup`} aria-label="to leadership section">
      
      <div aria-hidden="true" className={styles.btnCircle}>
        <div className={styles.btnCircleText}>
            <div>
          <svg
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.btnIcon}
          >
            <path
              data-v-f4363f2a
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
              className={`${styles.btnPath}`}
            />
            <path
              data-v-f4363f2a
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
              className={`${styles.btnPath}`}
            />
          </svg>

            </div>
          <span className={`${styles.btnText} !pr-0 !mt-[0.3vw]`}>Our Leadership Team</span>
        </div>
      </div>
      <span className={styles.btnText}>Our Leadership Team</span>
    </a>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <VideoModal
            poster="/assets/images/homepage/about-video-poster.webp"
            isOpen={isModalOpen}
            onClose={handleClose}
            videoSrc="/assets/videos/about-video.mp4"
          />
        )}
      </section>
    </>
  );
};

export default StoryCopy;
