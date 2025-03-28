import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FreeMode } from "swiper/modules";

const awards=[
  {
    img: "/assets/images/impact/awards/google-agency.png",
    title:"Google agency excellance awards",
    year:"2024",
    category:"Measurement solution"
  },
  {
    img: "/assets/images/impact/awards/abbys.png",
    title:"Abby 2024 ",
    year:"2024",
    category:"Innovative Use of Paid Search "
  },
  {
    img: "/assets/images/impact/awards/abbys.png",
    title:"Abby 2024 ",
    year:"2024",
    category:"Innovative Use of Digital Search SEO"
  },
  {
    img: "/assets/images/impact/awards/emvies.png",
    title:"Emvies ",
    year:"2024",
    category:"Best SEO/SEM Campaign"
  },
  {
    img: "/assets/images/impact/awards/brand-storyz.png",
    title:"Brand Storyz 2023",
    year:"2023",
    category:"Brand Initiatives - Best use of Quora"
  },
  {
    img: "/assets/images/impact/awards/yt-works.png",
    title:"Youtube awards ",
    year:"2023",
    category:"Multiformat Story Telling"
  },
  {
    img: "/assets/images/impact/awards/amazon-ads.png",
    title:"Amazon Ads Case League",
    year:"2023",
    category:"Consideration "
  },
  {
    img: "/assets/images/impact/awards/premier.png",
    title:"Google Premier Awards ",
    year:"2023",
    category:"Google premier partner - Lead gen "
  },
  {
    img: "/assets/images/impact/awards/amazon-ads.png",
    title:"Amazon Ads Case League",
    year:"2023",
    category:"Awareness"
  },
  {
    img: "/assets/images/impact/awards/premier.png",
    title:"Google Premier Awards ",
    year:"2023",
    category:"Google premier partner - App growth "
  },
  {
    img:"/assets/images/homepage/jury-award.png",
    title:"The Jury awards (Flipkart) ",
    year:"2022",
    category:"Best media mix category "
  },
];


const AwardCard = ({ img, title, year, category ,key}) => {
  return (
    <>
      <div key={key} className="w-[34.2vw] h-[11.5vw] border-[0.5px] border-white/20 rounded-[1.2vw] flex items-center  px-[1.5vw]  bg-white/10 awards-card hover:scale-[1.02] duration-500 ease-in-out transition-all mobile:w-[80vw] mobile:h-[25vw] mobile:rounded-[2.5vw] mobile:px-[3vw] tablet:w-[65vw] tablet:h-[20vw]">
        <div className="flex items-center justify-between gap-[1vw] w-full mobile:gap-[3vw] tablet:gap-[2.5vw]">
          <div className="w-[10vw] h-[8.3vw] relative rounded-[1.1vw] overflow-hidden mobile:w-[20vw] mobile:h-[18vw] tablet:w-[15vw] tablet:h-[15vw]">
            <Image src={img} fill alt="awards-1" className="object-cover" />
          </div>
          <div className="w-[80%] flex flex-col mobile:flex-col-reverse mobile:gap-[0.5vw]">
            <p className="text-white text-[1.25vw] font-medium montreal mobile:text-[3.5vw] tablet:text-[2vw] ">
              {title}
            </p>
            <p className="content-white mobile:!text-[3vw]">{year}</p>
            <p className="content-white mobile:text-[3.5vw] mobile:w-[90%] mobile:leading-[1.2]">{category}</p>
          </div>
        </div>
      </div>
    </>
  );
};
const Awards = () => {
  const swiperRef = useRef(null); 
  const [activeButton, setActiveButton] = useState("");

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); 
      setActiveButton("next"); 
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); 
      setActiveButton("prev"); 
    }
  };
  return (
    <section id="awards " className="bg-primary mobile:py-[10%] tablet:py-[7%] rounded-tl-[2vw] rounded-tr-[2vw] mobile:rounded-tl-[5vw] mobile:rounded-tr-[5vw]">
      <div className="h-full w-[100vw] py-[5%] rounded-[30px] flex flex-col items-start justify-center px-[3vw] overflow-hidden relative mobile:pb-[25%]">
        <div className="w-[35%] flex flex-col gap-[2vw] mobile:w-full mobile:gap-[4vw] tablet:w-[70%]">
          <h2 className="heading-2 font-medium montreal !text-white headingAnim">
            Our Accolades Speak For Themselves
          </h2>
          <p data-para-anim className="content-white w-[80%] mobile:w-full tablet:w-[60%] tablet:!leading-[1.4]" >
            Discover our accolades and industry recognition that highlight our
            commitment to excellence.
          </p>
        </div>
        <div className="w-[100vw] h-full flex items-center justify-center ml-[-3vw] px-[3vw] mt-[5%] fadeup  ">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            spaceBetween={30}
            slidesPerView={1.2}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              720:{
                slidesPerView: 1.4,
                spaceBetween: 15,
              },
             
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 2.7,
                spaceBetween: 35,
              },
              1536: {
                slidesPerView: 2.7,
                spaceBetween: 35,
              },
            }}
            modules={[FreeMode]}
            freeMode={true}
            className="awards-swiper w-full h-full flex items-center justify-center "
          >
            {awards.map((item, index) => ( 
              <SwiperSlide key={index}>
              <AwardCard
                img={item.img}
                title={item.title}
                year={item.year}
                category={item.category}
              />
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className={`absolute z-[5] top-[35%] right-[5%] w-[4vw] h-[4vw] overflow-hidden rounded-full next-button hover:bg-white cursor-pointer border border-white mobile:top-[85%] mobile:w-fit mobile:h-fit mobile:p-[3vw] tablet:w-fit tablet:h-fit tablet:p-[2vw] tablet:top-[30%]
                ${
                  activeButton === "next" ? " text-white" : "bg-transparent"
                } transition-colors duration-300`} // Added background color transition
          onClick={handleNext} // Trigger next slide
        >
          <div className="w-[4vw] h-[4vw]  relative z-[6] mobile:w-[7.5vw] mobile:h-[7.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw] flex justify-center items-center group transition-all duration-500">
            <span className="w-[1.5vw] h-[1.5vw] flex justify-center items-center mobile:w-[5.5vw] mobile:h-[5.5vw]">
              <svg
              width="16"
              height="29"
              viewBox="0 0 16 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9769 14.2073L14.9771 14.2074C15.0572 14.2866 15.1004 14.3919 15.1004 14.4997C15.1004 14.6073 15.0572 14.7126 14.9771 14.7918L14.9769 14.792L1.64366 27.9741L1.64356 27.9742C1.5595 28.0573 1.44901 28.1004 1.3333 28.1004C1.21755 28.1004 1.10707 28.0573 1.02314 27.9743L1.02303 27.9742C0.858507 27.8115 0.858492 27.5522 1.02295 27.3895C8.19902 20.2949 8.1993 8.70514 1.02303 1.61059C0.858491 1.44792 0.858492 1.18853 1.02299 1.02587C1.19326 0.857514 1.47343 0.85759 1.64352 1.02578L1.64359 1.02585L14.9769 14.2073Z"
                fill="white"
                stroke="white"
                className="group-hover:fill-[#134bd5] group-hover:stroke-[#134bd5] transition-all duration-500"
                strokeWidth="1.79924"
              />
            </svg>
              </span>
          </div>
        </div>
        <div
          className={`absolute z-[5] w-[4vw] h-[4vw] top-[35%] right-[11%]  border border-white overflow-hidden group hover:bg-white transition-all duration-500 rounded-full prev-button cursor-pointer mobile:top-[85%] mobile:w-fit mobile:h-fit mobile:p-[3vw] mobile:right-[25%] tablet:w-fit tablet:h-fit tablet:p-[2vw] tablet:right-[15%] tablet:top-[30%]
                ${
                  activeButton === "prev"
                    ? " text-white"
                    : "bg-transparent text-[#134bd5]"
                } transition-colors duration-300`} // Added background color transition
          onClick={handlePrev} // Trigger previous slide
        >
          <div className="w-[4vw] h-[4vw]  mobile:w-[7.5vw] mobile:h-[7.5vw] relative z-[6]  tablet:w-[2.5vw] tablet:h-[2.5vw] flex justify-center items-center ">
            <span className="w-[1.5vw] h-[1.5vw] flex justify-center items-center mobile:w-[5.5vw] mobile:h-[5.5vw]">
            <svg
              width="16"
              height="29"
              viewBox="0 0 16 29"
              fill="none"
              className="rotate-180"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9769 14.2073L14.9771 14.2074C15.0572 14.2866 15.1004 14.3919 15.1004 14.4997C15.1004 14.6073 15.0572 14.7126 14.9771 14.7918L14.9769 14.792L1.64366 27.9741L1.64356 27.9742C1.5595 28.0573 1.44901 28.1004 1.3333 28.1004C1.21755 28.1004 1.10707 28.0573 1.02314 27.9743L1.02303 27.9742C0.858507 27.8115 0.858492 27.5522 1.02295 27.3895C8.19902 20.2949 8.1993 8.70514 1.02303 1.61059C0.858491 1.44792 0.858492 1.18853 1.02299 1.02587C1.19326 0.857514 1.47343 0.85759 1.64352 1.02578L1.64359 1.02585L14.9769 14.2073Z"
                fill="white"
                stroke="white"
                className="group-hover:fill-[#134bd5] group-hover:stroke-[#134bd5] transition-all duration-500"
                strokeWidth="1.79924"
              />
            </svg>

            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
