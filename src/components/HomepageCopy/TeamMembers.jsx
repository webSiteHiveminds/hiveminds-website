import React, { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "@/styles/team.module.css";

const TeamMembers = () => {
  const [mobileWidth, setMobileWidth] = useState(false);
  useEffect(() => {
    if (globalThis.innerWidth > 1024) {
      setMobileWidth(false);
    } else {
      setMobileWidth(true);
    }
  
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.card}`);
    cards.forEach((card) => {
      const id = parseInt(card.getAttribute("data-id"), 10);
      const cardInner = card.querySelector(`.${styles.cardInner}`);

      if (cardInner) {
        if (id % 2 === 0) {
          gsap.set(cardInner, { rotationY: 180 });
        } else {
          gsap.set(cardInner, { rotationY: 0 });
        }
      }
    });

    const toggleCardRotation = () => {
      gsap.to(`.${styles.cardInner}`, {
        rotationY: (index, target) => {
          const cardInner = target;
          const currentRotation = gsap.getProperty(cardInner, "rotationY");
          return currentRotation === 0 ? 180 : 0;
        },
        duration: 0.2,
        stagger: 0.05,
        ease: "power3.out",
      });
    };

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        const cardInner = card.querySelector(`.${styles.cardInner}`);
        const rotation = gsap.getProperty(cardInner, "rotationY");
        if (rotation === 180) {
          toggleCardRotation();
        }
      });
    });

    // Cleanup event listeners
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
      });
    };
  }, []);

  return (
    <section id="team-members" className="py-[4%] mobile:py-[10%]">
      <div className="w-screen h-full flex flex-col items-center justify-center mb-[5vw] relative container-lg">
        <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw] mobile:items-start mobile:justify-start mobile:gap-[4vw] tablet:items-start tablet:justify-start tablet:gap-[2vw]">
          <h2 className="heading-2 headingAnim">
            Be A Part Of
            <span className="blue-text"> HiveMinds </span>
          </h2>
          <p className="content w-[45%] text-center mobile:text-[4vw] mobile:text-left mobile:w-[90%] fadeup tablet:text-left tablet:w-[60%]">
            Join the Hive Tribe—Where bold strategies meet fast-paced growth.
            We&apos;re a tribe of marketing mavericks turning vision into
            success. Be part of our journey as we transform brands and create
            tomorrow&apos;s digital legends.
          </p>
        </div>
        {!mobileWidth ? (
          <>
            <div className="hexagon absolute h-[2vw] w-[2.2vw] bottom-[10%] right-[5%] transition-all duration-100 ease-out blue-hexagon-animation mobile:hidden  ">
              <Image
                src="/assets/icons/blue-hexagon.svg"
                fill
                alt="blue-hexagon"
              />
            </div>
            <div className=" hexagon absolute h-[2vw] w-[2.2vw] top-[30%] right-[5%] transition-all duration-100 ease-out blue-hexagon-animation mobile:hidden ">
              <Image
                src="/assets/icons/blue-hexagon.svg"
                fill
                alt="blue-hexagon"
              />
            </div>
            <div className=" hexagon absolute h-[2vw] w-[2.2vw] top-[45%] left-[20%] transition-all duration-100 ease-out blue-hexagon-animation mobile:hidden ">
              <Image
                src="/assets/icons/blue-hexagon.svg"
                fill
                alt="blue-hexagon"
              />
            </div>
            <div className=" hexagon absolute h-[2vw] w-[2.2vw] top-[25%] left-[10%] transition-all duration-100 ease-out yellow-hexagon-animation  mobile:hidden">
              <Image
                src="/assets/icons/yellow-hexagon.svg"
                fill
                alt="yellow-hexagon"
              />
            </div>
            <div className=" hexagon absolute h-[2vw] w-[2.2vw] bottom-[5%] left-[5%] transition-all duration-100 ease-out yellow-hexagon-animation mobile:hidden ">
              <Image
                src="/assets/icons/yellow-hexagon.svg"
                fill
                alt="yellow-hexagon"
              />
            </div>
            <div className=" hexagon absolute h-[2vw] w-[2.2vw] top-[40%] right-[25%] transition-all duration-100 ease-out yellow-hexagon-animation mobile:hidden">
              <Image
                src="/assets/icons/yellow-hexagon.svg"
                fill
                alt="yellow-hexagon"
              />
            </div>

            <div className="team-container mx-auto grid grid-cols-12 items-center justify-center relative gap-[1.2vw]">
              {/* Manually created team cards */}
              <div
                className={`${styles.card} col-span-3 col-start-1 w-[20vw] h-[20vw] flex items-center relative `}
                data-id="1"
              >
                <div className={`${styles.cardInner} w-full relative h-full`}>
                  <div
                    className={`${styles.cardFront} absolute w-full h-full top-0 left-0 flex items-center justify-center`}
                  >
                    <Image
                      src="/assets/images/homepage/part-1.png"
                      width={200}
                      height={400}
                      alt="team"
                      className={`${styles.cardImage} w-full h-full object-cover rounded-[8px]`}
                    />
                  </div>
                  <div
                    className={`${styles.cardBack} absolute w-full h-full top-0 left-0 rounded-[8px] bg-[#134bd5]`}
                  ></div>
                </div>
              </div>

              <div
                className={`${styles.card}  col-span-4 col-start-4 w-full h-[33vw] relative`}
                data-id="2"
              >
                <div className={`${styles.cardInner} w-full relative h-full`}>
                  <div
                    className={`${styles.cardFront} absolute w-full h-full top-0 left-0 flex items-center justify-center`}
                  >
                    <Image
                      src="/assets/images/homepage/part-2.png"
                      width={300}
                      height={500}
                      alt="team"
                      className={`${styles.cardImage} w-full h-full object-cover rounded-[8px]`}
                    />
                  </div>
                  <div
                    className={`${styles.cardBack} absolute w-full h-full top-0 left-0 rounded-[8px] bg-[#134bd5]`}
                  ></div>
                </div>
              </div>

              <div
                className={`${styles.card} col-span-3 col-start-8 w-full h-[15vw] top-[-15%] relative`}
                data-id="4"
              >
                <div className={`${styles.cardInner} w-full relative h-full`}>
                  <div
                    className={`${styles.cardFront} absolute w-full h-full top-0 left-0 flex items-center justify-center`}
                  >
                    <Image
                      src="/assets/images/homepage/part-3.png"
                      width={200}
                      height={400}
                      alt="team"
                      className={`${styles.cardImage} w-full h-full object-cover rounded-[8px]`}
                    />
                  </div>
                  <div
                    className={`${styles.cardBack} absolute w-full h-full top-0 left-0 rounded-[8px] bg-[#134bd5]`}
                  ></div>
                </div>
              </div>

              <div
                className={`${styles.card} col-span-2 col-start-8 w-full h-[12vw] bottom-[1vw] absolute`}
                data-id="3"
              >
                <div className={`${styles.cardInner} w-full relative h-full`}>
                  <div
                    className={`${styles.cardFront} absolute w-full h-full top-0 left-0 flex items-center justify-center`}
                  >
                    <Image
                      src="/assets/images/homepage/part-4.png"
                      width={200}
                      height={400}
                      alt="team"
                      className={`${styles.cardImage} w-full h-full object-cover rounded-[8px]`}
                    />
                  </div>
                  <div
                    className={`${styles.cardBack} absolute w-full h-full top-0 left-0 rounded-[8px] bg-[#134bd5]`}
                  ></div>
                </div>
              </div>

              <div
                className={`${styles.card} col-span-4 col-start-11 w-full h-[22vw] flex items-center  top-[-20%] relative`}
                data-id="5"
              >
                <div className={`${styles.cardInner} w-full relative h-full`}>
                  <div
                    className={`${styles.cardFront} absolute w-full h-full top-0 left-0 flex items-center justify-center`}
                  >
                    <Image
                      src="/assets/images/homepage/part-5.png"
                      width={200}
                      height={400}
                      alt="team"
                      className={`${styles.cardImage} w-full h-full object-cover rounded-[8px]`}
                    />
                  </div>
                  <div
                    className={`${styles.cardBack} absolute w-full h-full top-0 left-0 rounded-[8px] bg-[#134bd5]`}
                  ></div>
                </div>
              </div>

              <div
                className={` absolute ${styles.card}  col-span-3 col-start-10 w-full h-[10vw] flex items-center bottom-[1vw] `}
                data-id="6"
              >
                <div className={`${styles.cardInner} w-full relative h-full`}>
                  <div
                    className={`${styles.cardFront} absolute w-full h-full top-0 left-0 flex items-center justify-center`}
                  >
                    <Image
                      src="/assets/images/homepage/part-6.png"
                      width={200}
                      height={400}
                      alt="team"
                      className={`${styles.cardImage} w-full h-full object-cover rounded-[8px]`}
                    />
                  </div>
                  <div
                    className={`${styles.cardBack} absolute w-full h-full top-0 left-0 rounded-[8px] bg-[#134bd5]`}
                  ></div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
         
            <div className="w-full h-[200vw] grid grid-cols-5 grid-rows-12 fadeup">
               <div className="col-start-1 col-span-2 row-span-3 rounded-[3vw] overflow-hidden">
                <Image src={"/assets/images/homepage/part-3.png"} alt="" width={300} height={500} className="w-full h-full object-cover"/>

               </div>
               <div className="col-start-3 col-span-3 row-span-5 rounded-[3vw] overflow-hidden ml-[4vw]">
               <Image src={"/assets/images/homepage/part-2.png"} alt="" width={300} height={500} className="w-full h-full object-cover"/>

               </div>
               <div className="col-start-1 col-span-2 row-span-3 rounded-[3vw] overflow-hidden my-[4vw]">
               <Image src={"/assets/images/homepage/part-1.png"} alt="" width={300} height={500} className="w-full h-full object-cover"/>


               </div>
               <div className="col-start-3 col-span-3 row-span-4 rounded-[3vw] overflow-hidden mt-[4vw] ml-[4vw] mb-[4vw]">
               <Image src={"/assets/images/homepage/part-4.png"} alt="" width={300} height={500} className="w-full h-full object-cover"/>


               </div>
               <div className="col-start-1 col-span-2 row-span-3 rounded-[3vw] overflow-hidden mb-[4vw] ">
               <Image src={"/assets/images/homepage/part-5.png"} alt="" width={300} height={500} className="w-full h-full object-cover"/>


               </div>
               <div className="col-start-1 col-span-5 row-span-3 rounded-[3vw] overflow-hidden ">
               <Image src={"/assets/images/homepage/part-6.png"} alt="" width={300} height={500} className="w-full h-full object-cover"/>


               </div>

            </div>
           
          </>
        )}
      </div>
    </section>
  );
};

export default TeamMembers;
