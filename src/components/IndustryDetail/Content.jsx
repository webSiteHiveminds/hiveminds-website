import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Lenis from "lenis";
import Link from "next/link";
import styles from "../Button/styles.module.css";

const Content = ({ sections }) => {
    const startupRef = useRef(null);
    const growthRef = useRef(null);
    const maturedRef = useRef(null);
    const refs = {
        startupRef,
        growthRef,
        maturedRef,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const sectionRefs = [startupRef, growthRef, maturedRef];
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const container = document.querySelector(".industryContent");
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            let progress = 0;
            if (rect.top < windowHeight && rect.bottom > 0) {
                const totalScroll = rect.height + windowHeight;
                progress = 1 - (rect.bottom / totalScroll);
                progress = Math.min(progress * 1.4, 1);
                if (progress < 0) progress = 0;
            }

            setScrollProgress(1 - progress);
            const scrollYCenter = window.scrollY + windowHeight / 2;

            sectionRefs.forEach((ref, index) => {
                const section = ref.current;
                if (!section) return;

                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;

                if (scrollYCenter >= top && scrollYCenter < bottom) {
                    setActiveIndex(index);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); 

        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionRefs]);

    const lenis = useRef(null);
    useEffect(() => {
        lenis.current = new Lenis();

        function raf(time) {
            lenis.current.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);

    const scrollToSection = (id) => {
        const target = document.getElementById(id);
        if (target && lenis.current) {
            lenis.current.scrollTo(target, {
                offset: -100,
                duration: 1.2,
                easing: (t) => t * (2 - t),
            });
        }
    };

    const strokeDasharray = 360;
    const strokeDashoffset = scrollProgress * strokeDasharray;

    return (
        <section
            className="h-full w-screen py-[10vw] mobile:pt-0"
            id="industry-detail"
        >
            <div className="container-lg w-full h-full flex items-start justify-between mobile:flex-col tablet:flex-col industryContent mobile:pb-[10%]  tablet:pb-[5%]">
                <div className="w-[20%] flex gap-[0.5vw] mobile:hidden tablet:hidden sticky top-[20%] h-[19.5vw]">
                    <motion.svg
                        width="17"
                        height="376"
                        viewBox="0 0 17 376"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="overflow-visible h-full"
                    >
                        <line
                            x1="8.75"
                            y1="7"
                            x2="8.74998"
                            y2="367"
                            stroke="#b1b1b1"
                            strokeWidth="1.5"
                            className="svg-line transition-all duration-500"
                        />
                        <motion.line
                            x1="8.75"
                            y1="7"
                            x2="8.75"
                            y2="367"
                            stroke="#111111"
                            strokeWidth="1.5"
                            className="!origin-top"
                            strokeDasharray={strokeDasharray}
                            strokeDashoffset={strokeDashoffset}
                            style={{ originY: 0 }}
                            transition={{ ease: "linear" }}
                        />

                        {[0, 1, 2].map((idx) => {
                            const circleY = [7.5, 187.5, 367.5][idx];
                            const isActive = idx <= activeIndex;
                            return (
                                <motion.circle
                                    key={idx}
                                    cx="8.5"
                                    cy={circleY}
                                    r="6"
                                    stroke="#111111"
                                    initial={false}
                                    animate={{
                                        fill: isActive ? "#111111" : "#FAFAFA",
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            );
                        })}
                    </motion.svg>

                    <div className="flex flex-col items-start justify-center gap-[7.5vw]">
                        {["Startup", "Growth", "Matured"].map((label, i) => (
                            <motion.p
                                key={i}
                                onClick={() =>
                                    scrollToSection(
                                        ["stage-startup", "stage-growth", "stage-matured"][i]
                                    )
                                }
                                className="stage-text text-[1.25vw] font-medium transition-colors duration-500 cursor-pointer"
                                initial={false}
                                animate={{
                                    color: i === activeIndex ? "#111111" : "#b1b1b1",
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {label}
                            </motion.p>
                        ))}
                    </div>
                </div>

                <div className="w-[67%] h-full  space-y-[6vw] mobile:w-full mobile:mt-[4vw] mobile:space-y-[12vw] tablet:w-full tablet:space-y-[10vw]">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            id={section.id}
                            ref={refs[section.ref]}
                            className="space-y-[1.5vw] w-full mobile:space-y-[2vw] tablet:space-y-[2vw]"
                        >
                            <div className="pb-[1vw] space-y-[1vw] mobile:pb-[5vw] mobile:space-y-[5vw]">
                                <h2 className="heading-2 headingAnim overflow-hidden">
                                    {section.heading}
                                </h2>
                                {section.tagline && (
                                    <p className="text-[1.5vw] mobile:text-[4.5vw] tablet:text-[1.5rem] pb-[0.5vw] fadeup  overflow-hidden">{section.tagline}</p>
                                )}
                                <ul className="text-[1.2vw] mobile:text-[4vw] tablet:text-[1.4rem] list-disc pl-[2vw] space-y-[1vw] pb-[1.5vw] fadeup mobile:pl-[5vw]">
                                    {section.content.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-[1vw] mobile:gap-[5vw] tablet:gap-[3vw]">
                                {section.images.map((item, i) => (
                                    <Link key={i} href={item.link}>
                                        <div className="relative casestudy w-[30vw] h-[22vw] overflow-hidden rounded-[1.2vw] group cursor-pointer mobile:w-[85vw] mobile:h-[70vw] mobile:rounded-[4vw] tablet:h-[35vw] tablet:w-[43vw] tablet:rounded-[3vw] fadeup">
                                            <Image
                                                src={item.img}
                                                height={450}
                                                width={450}
                                                alt={"casestudy"}
                                                className="hover:scale-[1.05] object-cover object-top transition-all ease-in-out duration-500 hover:brightness-75 w-full h-full object-fit"
                                            />
                                            <div className="absolute bottom-[10%] left-[10%] flex items-center justify-between gap-[1vw] mobile:gap-[2.5vw] mobile:left-[5%]">
                                                <p className="text-white text-[1.9vw] font-medium montreal mobile:text-[6.5vw] tablet:text-[4vw]">
                                                    {item.title}
                                                </p>
                                                <div>
                                                    <svg
                                                        className="relative -rotate-[90deg] w-[1.5vw] h-[1.5vw] overflow-hidden mobile:w-[6vw] mobile:h-[6vw] tablet:h-[3vw] tablet:w-[3vw]"
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Content;