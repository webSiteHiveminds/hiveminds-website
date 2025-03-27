import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import Link from "next/link";
import img1 from '../../../public/assets/images/homepage/hero-bigbasket-img1.png'
import img2 from '../../../public/assets/images/homepage/hero-bigbasket-img2.png'
import img3 from '../../../public/assets/images/homepage/hero-dominos-img1.png'
import img4 from '../../../public/assets/images/homepage/hero-dominos-img2.png'
import img5 from '../../../public/assets/images/homepage/hero-flydubai-img1.png'
import img6 from '../../../public/assets/images/homepage/hero-flydubai-img2.png'

const MobileHeroSwiper = () => {
  const swiperRef = useRef(null);

  const images = [
    {
      src1: img1,
      src2: img2,
      link: "/casestudies/bigbasket",
    },
    {
      src1: img3,
      src2: img4,
      link: "/casestudies/dominos",
    },
    {
      src2: img5,
      src1: img6,
      link: "/casestudies/flydubai",
    },
  ];

  return (
    <div>
      <div className="w-[92vw] h-fit overflow-hidden">
        <Swiper
          ref={swiperRef}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          modules={[FreeMode, Autoplay ]}
          freeMode={true}
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            720:{
              slidesPerView: 2,
              spaceBetween:15,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween:15,
            },
          }}
          scrollbar={{
            draggable: true,
            hide: false,
            el: ".swiper-scrollbar",
          }}
          className="w-full h-full rounded-[4vw] overflow-hidden pr-[5vw] mobileHeroSwiper swiper-linear pointer-events-none tablet:rounded-[2vw]"
        >
          {images.map((image, index) => (
            <React.Fragment key={index}>
              <SwiperSlide>
                <Link href={image.link} prefetch={false}>
                  <div className="relative w-full mobile:h-[100vw] overflow-hidden tablet:h-[50vw] tablet:w-full tablet:rounded-[2vw]">
                    <Image
                      src={image.src1}
                      placeholder="blur"
                      fill
                      loading="lazy"
                      alt="casestudy"
                      className="object-cover group-hover:brightness-75 transition-all duration-500 ease-in-out"
                    />
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href={image.link} prefetch={false}>
                  <div className="relative w-[92vw] mobile:h-[100vw] overflow-hidden tablet:h-[50vw] tablet:w-full tablet:rounded-[2vw]">
                    <Image
                      src={image.src2}
                      placeholder="blur"
                      loading="lazy"
                      fill
                      alt="casestudy"
                      className="object-cover group-hover:brightness-75 transition-all duration-500 ease-in-out"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            </React.Fragment>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MobileHeroSwiper;
