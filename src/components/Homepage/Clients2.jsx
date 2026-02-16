/* eslint-disable @next/next/no-img-element */
import { Marquee } from "@/components/ui/marquee";

import Image from "next/image";
const clients1 = [
  "/assets/images/homepage/logos/clients/big-basket.png",
  "/assets/images/homepage/logos/clients/dominos.png",
  "/assets/images/homepage/logos/clients/urban-ladder.png",
  "/assets/images/homepage/logos/clients/pidilite.png",
  "/assets/images/homepage/logos/clients/P&G.png",
  "/assets/images/homepage/logos/clients/portea.png",
  "/assets/images/homepage/logos/clients/big-basket.png",
  "/assets/images/homepage/logos/clients/dominos.png",
  "/assets/images/homepage/logos/clients/urban-ladder.png",
  "/assets/images/homepage/logos/clients/pidilite.png",
  "/assets/images/homepage/logos/clients/P&G.png",
  "/assets/images/homepage/logos/clients/portea.png",
];

const clients2 = [
  "/assets/images/homepage/logos/clients/airtel.png",
  "/assets/images/homepage/logos/clients/crompton.png",
  "/assets/images/homepage/logos/clients/godrej.png",
  "/assets/images/homepage/logos/clients/cleartrip.png",
  "/assets/images/homepage/logos/clients/jockey.png",
  "/assets/images/homepage/logos/clients/tanishq.png",
  "/assets/images/homepage/logos/clients/airtel.png",
  "/assets/images/homepage/logos/clients/crompton.png",
  "/assets/images/homepage/logos/clients/godrej.png",
  "/assets/images/homepage/logos/clients/cleartrip.png",
  "/assets/images/homepage/logos/clients/jockey.png",
  "/assets/images/homepage/logos/clients/tanishq.png",
];

const platform1 = [
  "/assets/images/homepage/logos/media/amazon.png",
  "/assets/images/homepage/logos/media/disney-hotstar.png",
  "/assets/images/homepage/logos/media/double-click.png",
  "/assets/images/homepage/logos/media/ET.png",
  "/assets/images/homepage/logos/media/fb.png",
  "/assets/images/homepage/logos/media/flipkart.png",
  "/assets/images/homepage/logos/media/gaana.png",
  "/assets/images/homepage/logos/media/google-partner.png",
  "/assets/images/homepage/logos/media/ndtv.png",
  "/assets/images/homepage/logos/media/network-18.png",
  "/assets/images/homepage/logos/media/quora.png",
  "/assets/images/homepage/logos/media/sony-liv.png",
  "/assets/images/homepage/logos/media/spotify.png",
  "/assets/images/homepage/logos/media/the-hindu.png",
  "/assets/images/homepage/logos/media/times-network.png",
  "/assets/images/homepage/logos/media/your-story.png",
];

export function Clients2() {
  return (
    <section id="clients" className="mobile:py-[5%] tablet:py-[5%]">
      <div className="w-screen h-full flex flex-col items-center justify-center container-lg">
        <div className="flex flex-col items-center justify-center gap-[1vw] pt-[1vw] pb-[5vw] mobile:items-start mobile:gap-[4vw] tablet:items-start tablet:gap-[2.5vw]">
          <h2 className="heading-2 headingAnim mobile:w-[50%]">
            <span className="blue-text">Proud</span> to work with
          </h2>
          <p className="content w-[70%] text-center fadeup mobile:text-start mobile:w-[90%] tablet:text-left tablet:w-[60%]">
            Our diverse & growing portfolio spanning from lean startups to
            household brands - and everything in between
          </p>
        </div>
        <div className="  text-center mobile:text-left">
          {/* <p className=" text-[1.24vw] text-[#111111] montreal font-bold mobile:text-[4.5vw] mobile:ml-[3.8vw] mobile:py-[7vw] tablet:text-[3vw]">
            Clients
          </p> */}

          {/* <Marquee pauseOnHover="true" speed={40}>
            {clients1.map((logoSrc, index) => (
              <div
                key={index}
                className="relative h-full w-[16vw] flex items-center justify-start group fadeup mobile:w-[40vw] tablet:w-[30vw]"
              >
                <Image
                  width={100}
                  height={100}
                  src={logoSrc}
                  alt={`Logo ${index}`}
                  loading="lazy"
                  className="h-[7vw] w-full saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-contain mobile:h-[20vw] tablet:h-[15vw]"
                />
              </div>
            ))}
          </Marquee> */}

          {/* <Marquee pauseOnHover="true" speed={40} direction="right">
            {clients2.map((logoSrc, index) => (
              <div
                key={index}
                className="relative h-full w-[16vw] flex items-center justify-start group fadeup mobile:w-[40vw] tablet:w-[30vw]"
              >
                <Image
                  width={100}
                  height={100}
                  src={logoSrc}
                  alt={`Logo ${index}`}
                  loading="lazy"
                  className="h-[7vw]  w-full saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-contain mobile:h-[20vw] tablet:h-[15vw]"
                />
              </div>
            ))}
          </Marquee> */}

          <p className="text-[1.24vw] text-[#111111] montreal font-bold py-[2vw] mobile:text-[4.5vw] mobile:ml-[3.8vw] mobile:py-[7vw] tablet:text-[3vw] tablet:py-[5vw]">
            Platform & Media Partner
          </p>

          <Marquee pauseOnHover="true" speed={60}>
            {platform1.map((logoSrc, index) => (
              <div
                key={index}
                className="relative h-full w-[16vw]  flex items-center justify-start group fadeup mobile:w-[40vw] tablet:w-[30vw] "
              >
                <Image
                  width={100}
                  height={100}
                  src={logoSrc}
                  alt={`Logo ${index}`}
                  loading="lazy"
                  className="h-[7vw] w-full saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-contain mobile:h-[20vw] tablet:h-[15vw]"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
