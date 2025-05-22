import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import service1 from "../../../public/assets/images/homepage/services/Digital-Brand-building.png";
import service2 from "../../../public/assets/images/homepage/services/Grow-D2C-Revenue.png";
import service3 from "../../../public/assets/images/homepage/services/Drive-Organic-Revenue.png";
import service4 from "../../../public/assets/images/homepage/services/App-Marketing-Solutions.png";
import service5 from "../../../public/assets/images/homepage/services/Accelerate-Ecommerce-Growth.png";
import service6 from "../../../public/assets/images/homepage/services/Demand-Generation.png";
import service7 from "../../../public/assets/images/homepage/services/Maximise-Retention.png";

const services = [
    {
        id: 1,
        slug:"#digital-brand-building",
        img: service1,
        title: "Digital Brand Building",
        para: "Transform your digital identity with strategic brand positioning. We leverage data-driven insights to craft compelling narratives, create memorable brand experiences, and establish a powerful online presence that resonates with your target audience.",
        link:"/solutions#solution-details"
    },
    {
        id: 2,
        slug:"#d2c-revenue",
        img: service2,
        title: "Grow D2C Revenue ",
        para: "Unlock direct-to-consumer potential through precision marketing. Our approach combines advanced targeting, personalized customer journeys, and optimized conversion strategies to drive sustainable revenue growth and maximize customer lifetime value",
        link:"#"
    },
    {
        id: 3,
        slug:"#organic-revenue",
        img: service3,
        title: "Drive Organic Revenue",
        para: "Elevate your organic performance with intelligent marketing solutions. We deploy cutting-edge SEO strategies, content optimization, and data-powered insights to increase visibility, attract high-intent customers, and naturally boost your revenue streams.",
        link:"#"
    },
    {
        id: 4,
        slug:"#app-marketing",
        img: service4,
        title: "App Marketing Solutions",
        para: "Accelerate app growth and user acquisition through comprehensive marketing strategies. From user onboarding to retention optimization, we deploy targeted campaigns that increase downloads, enhance engagement, and drive meaningful app interactions.",
        link:"#"
    },
    {
        id: 5,
        slug:"#ecommerce-growth",
        img: service5,
        title: "Accelerate Ecommerce Growth",
        para: "Scale your online retail potential with our integrated ecommerce marketing approach. We combine technological innovation, data analytics, and strategic marketing to optimize conversion rates, enhance customer experience, and drive exponential revenue growth.",
        link:"#"
    },
    {
        id: 6,
        slug:"#demand-generation",
        img: service6,
        title: "Demand Generation",
        para: "Generate high-quality leads and create a robust pipeline of potential customers. Our data-driven demand generation strategies leverage sophisticated targeting, multi-channel approaches, and intelligent content marketing to attract and nurture valuable prospects.",
        link:"#"
    },
    {
        id: 7,
        slug:"#maximizing-retention",
        img: service7,
        title: "Maximise Retention",
        para: "Transform customers into loyal brand advocates through intelligent retention strategies. We utilize advanced analytics, personalized engagement tactics, and predictive modeling to reduce churn, increase customer lifetime value, and build lasting customer relationships.",
        link:"#"
    },
];

const ServiceCard = ({ service, isActive, onMouseEnter , slug}) => {
    const cardRef = useRef(null);
    const headingRef = useRef(null);
    const headinginnerRef = useRef(null);
    const contentRef = useRef(null);
    const linkRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timelineRef.current) {
                timelineRef.current.kill();
            }
        };
    }, []);

    useEffect(() => {
        if(globalThis.innerWidth>1024){


            if (timelineRef.current) {
                timelineRef.current.kill();
            }
    
            timelineRef.current = gsap.timeline({
                defaults: {
                    ease: "power2.inOut",
                    duration: 0.5
                }
            });
            if (timelineRef.current) {
                timelineRef.current.kill();
            }
    
            timelineRef.current = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                    duration: 0.6
                }
            });
    
            const tl = timelineRef.current;
    
            if (isActive) {
                tl.to(cardRef.current, {
                    width: "45%",
                    duration: 0.5,
                    ease: "power1.out"
                })
                    .to(headinginnerRef.current,{
                        opacity:1,
                        duration: 0.5,
                        yPercent:-10
                    })
                    .to(contentRef.current, {          
                        opacity: 1,
                        
                        yPercent:0,
                        duration: 0.5,
                    }, "-=0.53")
                    .to(linkRef.current, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.4,
                    }, "-=0.4");
                tl.add([
                    gsap.to(cardRef.current, {
                        width: "45%"
                    }),
                   
                ], "<")
                    .to([contentRef.current, linkRef.current], {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: 0.25,
                    }, "-=0.3");
            } else {
                tl.to(cardRef.current, {
                    width: "18%",
                    duration: 0.5,
                    ease: "power2.inOut"
                })
                    .to(headinginnerRef.current,{
                        opacity:0,
                        yPercent:10,
                        delay:-0.5,
                        duration: 0.5,
                        delay:-1,
                    })
                    .to(contentRef.current, {
                        opacity: 0,
                        y: 0,
                        yPercent:5,
                     
                        duration: 0.4,
                    }, "-=2.5")
                    .to(linkRef.current, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.4,
                    }, "-=0.5");
                tl.add([
                    gsap.to(cardRef.current, {
                        width: "18%"
                    }),
                   
                ], "<")
                     
                    .to([contentRef.current, linkRef.current], {
                        opacity: 0,
                        scale: 1,
                        
                        duration: 0.4,
                    }, "-=0.6");
            }
        }
        else{

            if (timelineRef.current) {
                timelineRef.current.kill();
            }
    
            timelineRef.current = gsap.timeline({
                defaults: {
                    ease: "power2.inOut",
                    duration: 0.5
                }
            });
            if (timelineRef.current) {
                timelineRef.current.kill();
            }
    
            timelineRef.current = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                    duration: 0.6
                }
            });
    
            const tl = timelineRef.current;
    
            if (isActive) {
                tl.to(cardRef.current, {
                    width: "100%",
                    height:"600%",
                    duration: 0.5,
                    ease: "power2.inOut"
                })
                 
                    .to(headinginnerRef.current,{
                        opacity:1,
                        duration: 0.5,
                        yPercent:-10
                    })
                    .to(contentRef.current, {
                        
                        opacity: 1,
                        delay: 0.28,
                        yPercent:0,
                        duration: 0.5,
                    }, "-=0.8")
                    .to(linkRef.current, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.4,
                    }, "-=0.4");
                tl.add([
                    gsap.to(cardRef.current, {
                        width: "100%",
                        height:"600%",

                    }),
                   
                ], "<")
                    .to([contentRef.current, linkRef.current], {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: 0.25,
                    }, "-=0.3");
            } else {
                tl.to(cardRef.current, {
                    width: "100%",
                    height:"130%",
                    duration: 0.5,
                    ease: "power2.inOut"
                })
                    .to(headinginnerRef.current,{
                        opacity:0,
                        yPercent:10,
                        delay:-0.5,
                        duration: 0.5,
                        delay:-1,
                    })
                    .to(contentRef.current, {
                        opacity: 0,
                        y: 0,
                        yPercent:10,
                     
                        duration: 0.4,
                    }, "-=2.5")
                    .to(linkRef.current, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.4,
                    }, "-=0.5");
                tl.add([
                    gsap.to(cardRef.current, {
                        width: "100%",
                        height:"130%"
                    }),
                   
                ], "<")
                     
                    .to([contentRef.current, linkRef.current], {
                        opacity: 0,
                        scale: 1,
                        
                        duration: 0.4,
                    }, "-=0.6");
            }
        }
    }, [isActive]);

    return (
        <div 
            ref={cardRef}
            className="relative h-full overflow-hidden rounded-[1.2vw] service-card w-[18%] group mobile:w-full mobile:rounded-[4vw] tablet:w-full"
            onMouseEnter={onMouseEnter}
        >
            <Image
                src={service.img}
                alt={service.title}
                fill
                placeholder="blur"
                className="absolute inset-0 z-0 object-cover w-full h-full"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-end gap-[1.5vw] p-[2vw] pb-[1vw] text-white z-10 mobile:px-[4vw] mobile:pb-[10vw] tablet:pb-[5vw] tablet:px-[3vw]">
                <h3
                    ref={headingRef}
                    className={`text-white text-[1.5vw] absolute w-[28vw] text-left leading-[1.2] rotate-[-90deg] ${isActive?"opacity-0 left-[30%]":"opacity-100 left-[45%]"} transition-all duration-300 ease-in-out mobile:text-[5vw] tablet:text-[3vw] tablet:rotate-0 tablet:!top-[35%] tablet:!left-[5%] tablet:w-full mobile:rotate-0 mobile:!top-[38%] mobile:w-full mobile:!left-[5%] `}
                    style={{
                        transformOrigin: "0% 50%",
                        rotation: -90,
                        top: "90%",
                        
                    }}
                >
                    {service.title}
                </h3>
                <h3
                    ref={headinginnerRef}
                    className="text-white text-[1.7vw] text-left  leading-[1.2] opacity-0 translate-y-[10%] mobile:text-[5vw] tablet:text-[4vw]"
                  
                >
                    {service.title}
                </h3>

                <p
                    ref={contentRef}
                    className="content !text-white opacity-0 text-left  pt-0   !leading-[1.3] translate-y-[5%] tablet:!text-[2.5vw]"
                >
                    {service.para}
                </p>

                <a  href={`/solutions${slug}`}>
                    <div
                        ref={linkRef}
                        className="absolute top-4 right-4 bg-transparent border border-white text-white p-4 rounded-full flex items-center justify-center opacity-0 scale-0"
                    >
                        <Image
                            src="/assets/icons/top-right-arrow-white.svg"
                            height={15}
                            width={15}
                            alt="top-right-arrow"
                        />
                        </div>
                    </a>
            </div>
        </div>
    );
};

const Solutions = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="services">
            <div className="w-screen h-full flex flex-col items-center justify-center container-lg pb-[4%] relative">
                <div className="flex flex-col items-center justify-center gap-[1vw] py-[4vw] mobile:items-start mobile:gap-[4vw] tablet:items-start tablet:gap-[2.5vw]">
                    <h2 className="heading-2 headingAnim">
                        Your <span className="blue-text"> Goals </span>, Our Impact
                    </h2>
                    <p className="content w-[70%] text-center fadeup mobile:text-left mobile:w-[90%] tablet:text-left tablet:w-[60%]">
                        See how our strategic partnerships and collaboration drive innovation and accelerate your business growth
                    </p>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[60vh] flex overflow-hidden gap-[1.5vw] fadein mobile:flex-col mobile:h-[280vw] mobile:gap-[3vw] mobile:mt-[5vw] tablet:h-[150vw] tablet:flex-col tablet:mt-[4vw]">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                slug={service.slug}
                                link={service.link}
                                service={service}
                                isActive={index === activeIndex}
                                onMouseEnter={() => setActiveIndex(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="absolute h-[2vw] w-[2.2vw] top-[20%] right-[3%] blue-hexagon-animation mobile:hidden tablet:hidden">
                    <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon" />
                </div>
                <div className="absolute h-[2vw] w-[2.2vw] top-[10%] left-[5%] yellow-hexagon-animation mobile:hidden tablet:hidden" >
                    <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon" />
                </div>
            </div>
        </section>
    );
};

export default Solutions;