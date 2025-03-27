import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";

const features =[
  {
    image:"/assets/images/about/hiveminds-1.png",
    icon:"/assets/images/about/innovation.png",
    heading:"Innovation"
  },
  {
    image:"/assets/images/about/hiveminds-2.png",
    icon:"/assets/images/about/collaboration.png",
    heading:"Collaboration"
  },
  {
    image:"/assets/images/about/hiveminds-3.png",
    icon:"/assets/images/about/skill-growth.png",
    heading:"Skill Growth"
  },
  {
    image:"/assets/images/about/hiveminds-4.png",
    icon:"/assets/images/about/data-driven.png",
    heading:"Data-Driven"
  },
  {
    image:"/assets/images/about/hiveminds-5.png",
    icon:"/assets/images/about/recognition.png",
    heading:"Recognition"
  },
  {
    image:"/assets/images/about/hiveminds-6.png",
    icon:"/assets/images/about/training.png",
    heading:"Training"
  }
]

const WhyUs = () => {
  const previewContainerRef = useRef(null);
  // const handleImageHover = (item) => {
  //   const { image: imgSrc} = item;
  //   const previewContainer = previewContainerRef.current;
  //   const currentLastImg = previewContainer.querySelector('img:last-child');
  //   if (currentLastImg) {
  //     gsap.to(currentLastImg, { duration: 1, bottom: '0%'});
  //   }
  //   const newImg = document.createElement('img');
  //   newImg.src = imgSrc;
  //   newImg.style.position = 'absolute';
  //   newImg.style.left = '0%';
  //   newImg.style.bottom = '-100%';
  //   newImg.style.width = '100%';
  //   newImg.style.height = '100%';
    
  //   newImg.style.objectFit = 'cover';
  //   previewContainer.appendChild(newImg);
  //   gsap.to(newImg, { duration: 1, left: '0%' });
  // };  
  return (
    <section className="w-screen h-full pb-[5%] mobile:pb-10" id="why-us">
      <div className="cotainer-lg flex flex-col px-[5vw]">
        <div className="flex flex-col items-center justify-center gap-[1vw] pb-[5vw] mobile:items-start mobile:gap-5 mobile:pb-8 tablet:items-start tablet:gap-[3vw]">
          <h2 className="heading-2 headingAnim mobile:w-3/5">
            Why
            <span className="blue-text"> Hiveminds?</span>
          </h2>
          <p className="content w-[70%] text-center fadein mobile:w-full mobile:text-left tablet:text-left">
            HiveMinds thrives on innovation, data, and creativity, fostering a
            culture that champions collaboration and continuous growth. Our
            commitment to excellence makes us a trusted partner for both clients
            and our team.
          </p>
        </div>

        <div className="w-full flex justify-between mobile:block tablet:flex-col">
          <div className="h-[43vw] w-[40%] rounded-[1.5vw] overflow-hidden fadeup mobile:w-full mobile:rounded-3xl mobile:h-[80vw] mobile:mb-6 tablet:w-full tablet:h-[60vw]" ref={previewContainerRef}>
            <Image src={"/assets/images/about/hiveminds-1.png"} alt="" className="w-full h-full object-cover" width={720} height={940}  />
          </div>
          <div className="w-[55%] flex flex-col  mobile:w-full tablet:w-full">
          {features.map((item,index)=>(  
            <div key={index} className="flex flex-col gap-[2vw] mt-[2vw] fadein mobile:gap-5 mobile:mt-5 tablet:gap-[4vw] tablet:mt-[4vw]" >
              <span className="w-full h-[1px] bg-black"></span>
              
                <div  className="flex gap-[2vw] items-center mobile:gap-6 mobile:px-3 tablet:gap-[4vw]"  
                >
                    <Image src={item.icon} alt="icons" width={30} height={30} className="w-[3vw] h-[3vw] mobile:w-10 tablet:w-[8vw]" />
                    <p className="text-[1.2vw] mobile:text-[5.1vw] tablet:text-[4vw]">{item.heading}</p>
                  </div>
            </div> 
             ))}
              <span className="w-full h-[1px] bg-black my-[2vw]"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
