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
  const awardsData = [
    {
      imgSrc: "/assets/images/impact/awards/image.png",
      awardTitle: "DG+",
      date: "2024",
    },
    {
      imgSrc: "/assets/images/impact/awards/im-award.png",
      awardTitle: "Indian Marketing Awards",
      date: "2024",
    },
    {
      imgSrc: "/assets/images/impact/awards/maddies-award.png",
      awardTitle: "The Maddies",
      date: "2024",
    },
    {
      imgSrc: "/assets/images/impact/awards/yt-award.png",
      awardTitle: "Youtube awards",
      date: "2023",
    },
    {
      imgSrc: "/assets/images/impact/awards/bs-award.png",
      awardTitle: "Brand Storyz 2023",
      date: "2023",
    },
    {
      imgSrc: "/assets/images/impact/awards/emves.png",
      awardTitle: "Emvies",
      date: "2023",
    },
    {
      imgSrc: "/assets/images/impact/awards/abyss-award.png",
      awardTitle: "Abby 2024",
      date: "2024",
    },
    {
      imgSrc: "/assets/images/impact/awards/google-award.png",
      awardTitle: "Google agency excellance awards",
      date: "2024",
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
                <p className="mt-4 text-[1.2vw] pl-[0.5vw] font-semibold tablet:text-[2.5vw]">
                  {award.awardTitle}
                </p>
                <p className="text-gray-500 pl-[0.5vw] content">{award.date}</p>
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
