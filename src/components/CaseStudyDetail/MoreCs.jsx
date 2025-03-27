import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "../Button/styles.module.css";
import PrimaryButton from "../Button/PrimaryButton";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: 1,
    title: "Dominos",
    imgSrc: "/assets/images/impact/dominos-listing.png",
    link: "/casestudies/dominos",
  },
  {
    id: 2,
    title: "Flydubai",
    imgSrc: "/assets/images/impact/flydubai-listing.png",
    link: "/casestudies/flydubai",
  },
  {
    id: 3,
    title: "Flipkart Health+",
    imgSrc: "/assets/images/impact/flipkart-healthplus-listing.png",
    link: "/casestudies/flipkart-healthplus",
  },
];

const MoreCs = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".casestudy", {
        y: 150,
        opacity: 0,
        stagger: 0.2,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".more-casestudies",
          start: "top 60%",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full h-full py-[5%] mobile:pb-[10%]" id="more-casestudy">
      <div className="w-screen h-full more-casestudies container-lg">
        <h2 className="heading-2 w-[80%] fadein mobile:w-full">
          More Case <span className="text-primary">Studies</span>
        </h2>
        <div className="w-full flex justify-between mobile:flex-col mobile:mt-[4vw] mobile:gap-[7vw]">
          <p className="text-[1.2vw] mt-[2vw] w-[40%] fadein mobile:w-full mobile:text-[4.2vw] tablet:text-[2.5vw] tablet:w-[60%]">
            Discover our accolades and industry recognition that highlight our
            commitment to excellence.
          </p>
          <div className="w-fit">
            <PrimaryButton
              text={"All Case Studies"}
              href={"/casestudies"}
              className="fadein"
            />
          </div>
        </div>
        <div className="w-full flex pt-[5vw] pb-[3vw] gap-[1vw] mobile:flex-col mobile:gap-[8vw] mobile:pt-[10vw] tablet:gap-[3vw] tablet:py-[7%]">
          {caseStudies.map((study, index) => (
            <Link key={study.id} href={study.link} className={`${index==2?"tablet:hidden":""}`}>
              <div className="relative casestudy w-[30vw] h-[30vw] overflow-hidden rounded-[1.2vw] group cursor-pointer mobile:w-full mobile:h-[85vw] mobile:rounded-[4vw] tablet:h-[45vw] tablet:w-[45vw] tablet:rounded-[3vw]">
                <Image
                  src={study.imgSrc}
                  height={450}
                  width={450}
                  alt={study.title}
                  className="hover:scale-[1.1] transition-all ease-in-out duration-500 hover:brightness-75 w-full h-full object-fit"
                />
                <div className="absolute bottom-[10%] left-[10%] flex items-center justify-between gap-[1vw] mobile:gap-[2.5vw] mobile:left-[5%]">
                  <p className="text-white text-[2.5vw] font-medium montreal mobile:text-[6.5vw]">
                    {study.title}
                  </p>
                  <div>
                    <svg
                      className="relative -rotate-[90deg] w-[2vw] h-[2vw] overflow-hidden mobile:w-[6vw] mobile:h-[6vw]"
                      width="19"
                      height="23"
                      viewBox="0 0 19 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className={`origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 text-white ${styles.linkbutton}`}
                        d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                        fill="currentColor"
                      />
                      <path
                        className={`origin-center group-hover:scale-0 group-hover:translate-y-[110%] text-white ${styles.linkbutton}`}
                        d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreCs;
