import Link from "next/link";
import React, { useEffect, useState } from "react";
import Map from "../Footer/Map";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Locations = () => {
    const [location, setLocation] = useState("Bengaluru")
  
  useEffect(() => {
    const ctx = gsap.context(() => {
       gsap.from(".location-card",{
        y:100,
        opacity:0,
        stagger:0.2,
        duration:2,
        ease:"power3.out",
        scrollTrigger:{
          trigger:"#locations",
          start:"top 60%"
        }
       })

    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="w-screen h-[70vw] py-[5%] pb-[25vw] bg-[#134bd5] mobile:h-[370vw] mobile:py-[10%] tablet:h-[160vw] tablet:py-[10%]"
      id="locations"
    >
      <div className="container-lg flex flex-col gap-[4vw] items-center justify-center tablet:items-start">
        <h2 className="heading-2 headingAnim !text-white">
          Our Office Locations
        </h2>
        <div className="flex w-full justify-between mobile:flex-col mobile:gap-[4vw] mobile:mt-[7vw] tablet:flex-wrap tablet:justify-center tablet:gap-[3vw] tablet:mt-[4vw]">
          <div className="w-[29vw] h-[31vw] rounded-[1.2vw] bg-white p-[3vw] flex flex-col items-center location-card relative mobile:w-[90vw] mobile:h-[90vw] mobile:rounded-[4vw] mobile:pt-[10vw] tablet:w-[43vw] tablet:h-[50vw]">
            <h4 className="text-[2.8vw] montreal font-medium mobile:text-[8vw] tablet:text-[4.5vw]">Bengaluru</h4>
            <span className="bg-[#134bd5] text-white py-[0.1vw] px-[0.9vw] rounded-full absolute top-[25%] text-[1vw] left-[45%] mobile:text-[4vw] mobile:px-[4vw] mobile:py-[1vw] mobile:top-[25%] mobile:left-[43%] montreal tablet:text-[2vw] tablet:px-[1.5vw] tablet:top-[20%]">
              HQ
            </span>
            <div className="w-full h-[1px] bg-black my-[4vw] mobile:mt-[15vw] mobile:mb-[7vw] tablet:my-[7vw]"></div>
            <p className="text-center text-[1.2vw] mobile:text-[4vw] tablet:text-[2.2vw]">
              No. 11, Seventh Floor, Global Tech Park, O Shaughnessy Rd,
              Langford Town, Langford Gardens, Bengaluru, Karnataka 560025
            </p>
            <div className="cursor-pointer" onMouseEnter={() => setLocation("Bengaluru")}>
              <p className="content !font-medium hover:text-blue-700 link-line transition-all duration-300 ease-in-out  mt-[3vw] mobile:mt-[10vw]">
                Show On Google Map
              </p>
            </div>
          </div>
          <div className="w-[29vw] h-[31vw] rounded-[1.2vw] bg-white p-[3vw] flex flex-col items-center location-card mobile:w-[90vw] mobile:h-[90vw] mobile:rounded-[4vw] mobile:pt-[10vw] tablet:w-[43vw] tablet:h-[50vw]">
            <h4 className="text-[2.8vw] montreal font-medium mobile:text-[8vw] tablet:text-[4.5vw]">Mumbai</h4>
            <div className="w-full h-[1px] bg-black my-[4vw] mobile:mt-[15vw] mobile:mb-[7vw] tablet:my-[7vw]"></div>
            <p className="text-center text-[1.2vw] mobile:text-[4vw] tablet:text-[2.2vw]">
              Office no 301 & 302, 3rd Floor, The Eagle&apos;s Flight Building,
              Gundavali, Andheri East, Andheri, Mumbai, Maharashtra 400047
            </p>
            <div className="cursor-pointer" onMouseEnter={() => setLocation("Mumbai")}>
              <p className="content !font-medium hover:text-blue-700 link-line transition-all duration-300 ease-in-out   mt-[3vw]">
                Show On Google Map
              </p>
            </div>
          </div>
          <div className="w-[29vw] h-[31vw] rounded-[1.2vw] bg-white p-[3vw] flex flex-col items-center location-card mobile:w-[90vw] mobile:h-[90vw] mobile:rounded-[4vw] mobile:pt-[10vw] tablet:w-[43vw] tablet:h-[50vw]">
            <h4 className="text-[2.8vw] montreal font-medium mobile:text-[8vw] tablet:text-[4.5vw]">Gurugram</h4>
            <div className="w-full h-[1px] bg-black my-[4vw] mobile:mt-[15vw] mobile:mb-[10vw] tablet:my-[7vw]"></div>
            <div className="flex flex-col justify-between h-[60%] items-center">
              <p className="text-center text-[1.2vw]  mobile:text-[4vw] w-[85%] tablet:text-[2.2vw]">
                Spring House Coworking, 4th Floor, JMD Regent Arcade, Haryana
                122002
              </p>
              <div className="flex justify-center items-center w-fit h-full">
                <div className="cursor-pointer" onMouseEnter={() => setLocation("Gurgaon")}>
                  <p className=" content !font-medium link-line hover:text-blue-700 div-line transition-all duration-300 ease-in-out  mt-[3vw]">
                    Show On Google Map
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-[5vw]">
        <div className="w-[90vw] h-[40vw]  relative rounded-[1.2vw] overflow-hidden mt-[7vw] z-[10] mobile:w-[88vw] mobile:h-[110vw] mobile:rounded-[6vw] tablet:h-[60vw]">
          <Map location={location} height={"600px"}/>
          {/* <Image
            src={"/assets/images/contactpage/contact-map-image.png"}
            alt="map"
            fill
            className="object-cover"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Locations;
