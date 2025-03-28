import Image from "next/image";
import React, { useEffect, useState } from "react";


const Awards = () => {
  const [mobileWidth, setMobileWidth] = useState(false);
  useEffect(() => {
    if (globalThis.innerWidth > 541) {
      setMobileWidth(false);
    } else {
      setMobileWidth(true);
    }
  }, []);
  const mainawards = [
    {
      imgSrc: "/assets/images/impact/awards/emvies.png",
      awardTitle: "EMVIEs",
      date: "2025",
      type:"2 (Bronze)"
    },
    {
      imgSrc: "/assets/images/impact/awards/abbys.png",
      awardTitle: "ABBYs",
      date: "2024",
      type:"2 (Bronze)"
    },
    {
      imgSrc: "/assets/images/impact/awards/google-agency.png",
      awardTitle: "Google Agency Excellence Awards",
      date: "2024",
      type:"1 (Gold)"
    },
  ]
  const awardsData = [
    {
      imgSrc: "/assets/images/impact/awards/ima.png",
      awardTitle: "IMA",
      date: "2025",
      type:"1 (Gold) | 1 (Bronze)"
    },
    {
      imgSrc: "/assets/images/impact/awards/dg-plus.png",
      awardTitle: "DigiPlus",
      date: "2024",
      type:"4 (Silver) | 1 (Bronze)"
    },
    {
      imgSrc: "/assets/images/impact/awards/maddies.png",
      awardTitle: "Maddies",
      date: "2024",
      type:"1 (Gold) | 3 (Silver) | 2 (Bronze)"
    },
    {
      imgSrc: "/assets/images/impact/awards/digies.png",
      awardTitle: "Digies",
      date: "2024",
      type:"2 (Gold) | 4 (Silver) | 3 (Bronze) )"
    },
    {
      imgSrc: "/assets/images/impact/awards/adgully.png",
      awardTitle: "Addgully Finxx",
      date: "2024",
      type:"3 (Gold) "
    },
    {
      imgSrc: "/assets/images/impact/awards/amazon-ads.png",
      awardTitle: "Amazon Ads",
      date: "2023",
      type:"2 (Bronze)"
    },
    {
      imgSrc: "/assets/images/impact/awards/premier.png",
      awardTitle: "Google Premier",
      date: "2023",
      type:"2 (Gold)"
    },
    {
      imgSrc: "/assets/images/impact/awards/iamai.png",
      awardTitle: "IAMAI",
      date: "2023",
      type:"1 (Silver) | 1 (Bronze)"
    },
  ];

  return (
    <section className="w-screen h-full overflow-hidden tablet:py-[7%]" id="awards">
      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center gap-[1vw] pt-[7vw] pb-[5vw] container-lg mobile:items-start mobile:gap-[4vw] tablet:items-start">
        <h2 className="heading-2 headingAnim">
          Awards & <span className="blue-text"> Accolades</span>
        </h2>
        <p
          data-para-anim
          className="content w-[50%] text-center mobile:w-[90%] mobile:text-start tablet:text-left tablet:w-[90%]"
        >
          Discover our accolades and industry recognition that highlight our
          commitment to excellence.
        </p>
      </div>

      {/* Awards List */}
      {!mobileWidth ? (
        <>
         <div className="container-lg flex flex-wrap justify-center gap-[3vw] mb-[5vw]">
            {mainawards.map((award, id) => (
              <div key={id} className="w-[20vw] h-auto flex flex-col fadeup tablet:w-[43vw]">
                <div className="w-full h-[11vw] shadow-sm drop-shadow-sm rounded-[1.2vw] overflow-hidden tablet:h-[25vw] tablet:rounded-[3vw]">
                  <Image
                    src={award.imgSrc}
                    alt="award-image"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full "
                  />
                </div>
                <div className="flex flex-wrap items-center justify-center gap-[0.5vw] mt-4">
                <p className=" text-[1.2vw]  font-semibold tablet:text-[2.5vw]">
                  {award.awardTitle} |
                </p>
                <p className="text-gray-500  content"> {award.date} | </p>
                <p className="text-gray-500  content"> {award.type}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="container-lg flex flex-wrap justify-center gap-[3vw]">
            {awardsData.map((award, id) => (
              <div key={id} className="w-[20vw] h-auto flex flex-col fadeup tablet:w-[43vw]">
                <div className="w-full h-[11vw] shadow-sm drop-shadow-sm rounded-[1.2vw] overflow-hidden tablet:h-[25vw] tablet:rounded-[3vw]">
                  <Image
                    src={award.imgSrc}
                    alt="award-image"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full "
                  />
                </div>
                <div className="flex flex-wrap items-center justify-center gap-[0.5vw] mt-4">
                <p className=" text-[1.2vw]  font-semibold tablet:text-[2.5vw]">
                  {award.awardTitle} |
                </p>
                <p className="text-gray-500  content"> {award.date} | </p>
                <p className="text-gray-500  content"> {award.type}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
        <div className="overflow-scroll">
           <div className="w-fit flex justify-center gap-[3vw]  px-[5vw] mobile:mt-[5vw]">
            {awardsData.map((award, id) => (
              <div key={id} className="w-[50vw] h-auto flex flex-col fadeup rounded-[3vw] overflow-hidden">
                <div className="w-full h-[11vw] shadow-sm drop-shadow-sm rounded-[3vw] overflow-hidden mobile:h-[35vw] ">
                  <Image
                    src={award.imgSrc}
                    alt="award-image"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full "
                  />
                </div>
                <p className="mt-4 text-[1.2vw] pl-[0.5vw] font-semibold mobile:text-[4vw]">
                  {award.awardTitle}
                </p>
                <p className="text-gray-500 pl-[0.5vw] ">{award.date}</p>
              </div>
            ))}
          </div>

        </div>
        </>
      )}
    </section>
  );
};

export default Awards;
