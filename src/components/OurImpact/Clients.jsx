/* eslint-disable @next/next/no-img-element */
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const clients1 = [
  "/assets/images/impact/clients/bigbasket.png",
  "/assets/images/impact/clients/dominos.png",
  "/assets/images/impact/clients/fly-dubai.png",
  "/assets/images/impact/clients/portea.png",
  "/assets/images/impact/clients/cleartrip.png",
  "/assets/images/impact/clients/bigbasket.png",
  "/assets/images/impact/clients/dominos.png",
  "/assets/images/impact/clients/fly-dubai.png",
  "/assets/images/impact/clients/portea.png",
  "/assets/images/impact/clients/cleartrip.png",
];

const clients2 = [
  "/assets/images/impact/clients/urban-ladder.png",
  "/assets/images/impact/clients/crompton.png",
  "/assets/images/impact/clients/godrej.png",

  "/assets/images/impact/clients/jockey.png",
  "/assets/images/impact/clients/urban-ladder.png",
  "/assets/images/impact/clients/crompton.png",
  "/assets/images/impact/clients/godrej.png",
 
  "/assets/images/impact/clients/jockey.png",
];
const clients3 = [
 
  "/assets/images/impact/clients/abbott.png",
  "/assets/images/impact/clients/boAt.png",
  "/assets/images/impact/clients/discovery.png",
  "/assets/images/impact/clients/instapay.png",
  
  "/assets/images/impact/clients/abbott.png",
  "/assets/images/impact/clients/boAt.png",
  "/assets/images/impact/clients/discovery.png",
  "/assets/images/impact/clients/instapay.png",
];
const clients4 = [
  
  "/assets/images/impact/clients/itc.png",
  "/assets/images/impact/clients/licious.png",
  "/assets/images/impact/clients/pidilite.png",
  "/assets/images/impact/clients/sugar.png",
 
  "/assets/images/impact/clients/itc.png",
  "/assets/images/impact/clients/licious.png",
  "/assets/images/impact/clients/pidilite.png",
  "/assets/images/impact/clients/sugar.png",
];

const platform1 = [
  "/assets/images/impact/clients/facebook.png",
  "/assets/images/impact/clients/times-network.png",
  "/assets/images/impact/clients/sony-liv.png",
  "/assets/images/impact/clients/amazon.png",
  "/assets/images/impact/clients/quora.png",
  "/assets/images/impact/clients/facebook.png",
  "/assets/images/impact/clients/times-network.png",
  "/assets/images/impact/clients/sony-liv.png",
  "/assets/images/impact/clients/amazon.png",
  "/assets/images/impact/clients/quora.png",
];
const platform2 = [
  "/assets/images/impact/clients/flipkart-ads.png",
  "/assets/images/impact/clients/network18.png",
  "/assets/images/impact/clients/ndtv.png",
  "/assets/images/impact/clients/gaana.png",
  "/assets/images/impact/clients/spotify.png",
  "/assets/images/impact/clients/flipkart-ads.png",
  "/assets/images/impact/clients/network18.png",
  "/assets/images/impact/clients/ndtv.png",
  "/assets/images/impact/clients/gaana.png",
  "/assets/images/impact/clients/spotify.png",
];
const platform3 = [
  "/assets/images/impact/clients/your-story.png",
  "/assets/images/impact/clients/et.png",
  "/assets/images/impact/clients/the-hindu.png",
  "/assets/images/impact/clients/disney-hotstar.png",
  "/assets/images/impact/clients/double-click.png",
  "/assets/images/impact/clients/your-story.png",
  "/assets/images/impact/clients/et.png",
  "/assets/images/impact/clients/the-hindu.png",
  "/assets/images/impact/clients/disney-hotstar.png",
  "/assets/images/impact/clients/double-click.png",
];

export function Clients() {
  return (
    <section id="clients" className="tablet:py-[7%]">
      <div className="w-screen h-full flex flex-col items-center justify-center">
        {/* <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw] mobile:items-start mobile:pl-[3.8vw] mobile:gap-[4vw] tablet:items-start tablet:px-[6vw]">
          <h2 className="heading-2 headingAnim">
            Our
            <span className="blue-text"> Clients</span>
          </h2>
          <p className="content w-[70%] text-center fadein mobile:w-[90%] mobile:text-start tablet:text-left tablet:w-[90%]">
            Our diverse & growing portfolio spanning from lean startups to
            household brands - and everything in between
          </p>
        </div> */}
        <div className="  text-center">
          {/* <Marquee pauseOnHover="true" speed={40}>
            {clients1.map((logoSrc, index) => (
              <div
                key={index}
                className="relative h-full w-[20vw] flex items-center justify-center group fadeup mobile:w-[40vw] tablet:w-[30vw]"
              >
                <Image
                width={300}
                height={120}
                  src={logoSrc}
                  alt={`Logo ${index}`}
                  loading="lazy"
                  className="h-[7vw] w-[17vw] saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-cover mobile:w-[30vw] mobile:h-[20vw] tablet:w-full tablet:h-[15vw]"
                />
              </div>
            ))}
          </Marquee> */}

          {/* <Marquee pauseOnHover="true" speed={40} direction="right">
            {clients2.map((logoSrc, index) => (
              <div
                key={index}
                className="relative h-full w-[20vw] flex items-center justify-start group fadeup mobile:w-[40vw] tablet:w-[30vw]"
              >
                <img
                  src={logoSrc}
                  alt={`Logo ${index}`}
                  loading="lazy"
                  className="h-[7vw] w-[17vw] saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-cover mobile:w-[30vw] mobile:h-[20vw] tablet:w-full tablet:h-[15vw]"
                />
              </div>
            ))}
          </Marquee> */}
          {/* <Marquee pauseOnHover="true" speed={40} direction="left">
            {clients3.map((logoSrc, index) => (
              <div
                key={index}
                className="relative h-full w-[20vw] flex items-center justify-start group fadeup mobile:w-[40vw] tablet:w-[30vw]"
              >
                <img
                  src={logoSrc}
                  alt={`Logo ${index}`}
                  loading="lazy"
                  className="h-[7vw] w-[17vw] saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-cover mobile:w-[30vw] mobile:h-[20vw] tablet:w-full tablet:h-[15vw]"
                />
              </div>
            ))}
          </Marquee> */}
          {/* <Marquee pauseOnHover="true" speed={40} direction="right">
            {clients4.map((logoSrc, index) => (
              <div
                key={index}
                className="relative h-full w-[20vw] flex items-center justify-start group fadeup mobile:w-[40vw] tablet:w-[30vw]"
              >
                <img
                  src={logoSrc}
                  alt={`Logo ${index}`}
                  loading="lazy"
                  className="h-[7vw] w-[17vw] saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-cover mobile:w-[30vw] mobile:h-[20vw] tablet:w-full tablet:h-[15vw]"
                />
              </div>
            ))}
          </Marquee> */}

          <div className="flex flex-col items-center justify-center gap-[1vw] pt-[7vw] pb-[5vw] mobile:items-start mobile:ml-[3.8vw] mobile:gap-[4vw] mobile:pt-[10vw] tablet:items-start tablet:justify-start tablet:px-[6vw] tablet:py-[10%]">
            <h2 className="heading-2 headingAnim">
              Our Platform &<span className="blue-text"> Media Partners</span>
            </h2>
            <p data-para-anim className="content w-[50%] text-center mobile:text-start mobile:w-[90%] tablet:text-left tablet:w-[90%]">
            Collaboration fuels impact! Our robust network of media partners enables us to amplify ideas, drive meaningful conversations, and foster genuine engagement.
            </p>
          </div>

          <Marquee pauseOnHover="true" speed={40}>
            {platform1.map((logoSrc, index) => (
              <div
                key={index}
                className="relative h-full w-[20vw]  flex items-center justify-start group fadeup mobile:w-[40vw] tablet:w-[30vw]"
              >
                <img
                  src={logoSrc}
                  alt={`Logo ${index}`}
                  loading="lazy"
                  className="h-[7vw] w-[17vw] saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-cover mobile:w-[30vw] mobile:h-[20vw] tablet:w-full  tablet:h-[15vw]"
                />
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover="true" speed={40} direction="right">
            {platform2.map((logoSrc, index) => (
              <div
                key={index}
                className="relative h-full w-[20vw]  flex items-center justify-start group fadeup mobile:w-[40vw] tablet:w-[30vw]"
              >
                <img
                  src={logoSrc}
                  alt={`Logo ${index}`}
                  loading="lazy"
                  className="h-[7vw] w-[17vw] saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-cover mobile:w-[30vw] mobile:h-[20vw] tablet:w-full tablet:h-[15vw]"
                />
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover="true" speed={40}>
            {platform3.map((logoSrc, index) => (
              <div
                key={index}
                className="relative h-full w-[20vw]  flex items-center justify-start group fadeup mobile:w-[40vw] tablet:w-[30vw]"
              >
                <img
                  src={logoSrc}
                  alt={`Logo ${index}`}
                  loading="lazy"
                  className="h-[7vw] w-[17vw] saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-cover mobile:w-[30vw] mobile:h-[20vw] tablet:w-full tablet:h-[15vw]"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
