import Link from "next/link";
import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import SubscribeNewsletter from "./SubscribeNewsletter";
import SocialMedia from "./SocialMedia";
import { expertiseLinks, industriesLinks, solutionsLinks } from "@/data/sitemapLinks";

const MapComponent = dynamic(() => import("./Map"), {
  loading: () => <p>...loading</p>,
});

const addresses = [
  {
    location: "Bengaluru",
    label: "BENGALURU (HQ)",
    address:
      "No. 11, Seventh Floor, Global Tech Park, O Shaughnessy Rd, Langford Town, Langford Gardens, Bengaluru, Karnataka 560025",
  },
  {
    location: "Mumbai",
    label: "MUMBAI",
    address:
      "Office no 301 & 302, 3rd Floor, The Eagle's Flight Building, Gundavali, Andheri East, Andheri, Mumbai, Maharashtra 400047",
  },
  {
    location: "Gurgaon",
    label: "GURGAON",
    address:
      "Spring House Coworking, 4th Floor, JMD Regent Arcade, Haryana 122002",
  },
];

const Footer = () => {
  const [location, setLocation] = useState("Bengaluru");

  const handleMouseEnter = useCallback((loc) => {
    setLocation(loc);
  }, []);

  return (
    <footer
      id="footer"
      className="w-screen h-[55vw] bg-transparent tablet:h-full"
      // style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="w-screen h-[55vw] flex flex-col items-center justify-between bg-[#134bd5] pt-[3vw] pb-[2vw] gap-[0.5vw] tablet:h-full tablet:static tablet:pt-20">
        <div className="w-full flex items-center justify-between gap-[10vw] text-white container-lg tablet:block tablet:space-y-16">
          <div className="w-[30%] h-full flex flex-col items-start justify-start gap-[2vw] tablet:w-full tablet:flex-row">
            <div className="flex flex-col gap-[2vw] tablet:w-3/5">
              <p className="uppercase tracking-wider text-[1.16vw] text-white font-medium montreal tablet:text-[3.2vw] tablet:mb-5">
                Our Office Address
              </p>
              {addresses.map(({ location: loc, label, address }) => (
                <div
                  key={loc}
                  onMouseEnter={() => handleMouseEnter(loc)}
                  className="under-multi-parent"
                >
                  <span className="content-white under-multi">
                    {label} : {address}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-[15vw] w-[25vw] relative rounded-[12px] tablet:w-2/5 tablet:h-[35vw] overflow-hidden tablet:mt-[6vw]">
              <MapComponent location={location} height="250px" />
            </div>
          </div>

          <div className="w-[55%] h-full flex flex-col items-start justify-start gap-[8vw] tablet:w-full">
            <div className="flex items-start justify-between w-full tablet:gap-4">
              <div className="space-y-[1.5vw]">
                <p className="uppercase tracking-wider text-[1.16vw] text-white font-medium montreal tablet:text-[3.2vw]">
                  Expertise
                </p>
                <ul className="text-[1.05vw] text-white montreal font-medium flex flex-col items-start gap-[0.5vw] tablet:text-[2.2vw] tablet:gap-2">
                  {expertiseLinks.links.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="link-line">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-[1.5vw]">
                <p className="uppercase tracking-wider text-[1.16vw] text-white font-medium montreal tablet:text-[3.2vw]">
                  Solutions
                </p>
                <ul className="text-[1.05vw] text-white montreal font-medium flex flex-col items-start gap-[0.5vw] tablet:text-[2.2vw] tablet:gap-2">
                  {solutionsLinks.links.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="link-line">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-[1.5vw]">
                <p className="uppercase tracking-wider text-[1.16vw] text-white font-medium montreal tablet:text-[3.2vw]">
                  Industries
                </p>
                <ul className="text-[1.05vw] text-white montreal font-medium flex flex-col items-start gap-[0.5vw] tablet:text-[2.2vw] tablet:gap-2">
                  {industriesLinks.links.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="link-line">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div> 

            <div className="flex w-full items-center justify-center tablet:items-start">
              <SocialMedia />
              <SubscribeNewsletter />
            </div>
          </div>
        </div>
        <div className="mt-[3vw] tablet:mt-[8vw] tablet:w-[92%] tablet:mx-auto">
          <span className="w-[95vw] h-[1px] bg-white block tablet:w-full"></span>
          <div className="w-full flex items-center justify-between mt-[2vw] tablet:items-start">
            <Link href="https://weareenigma.com/">
              <p className="text-white text-[0.94vw] tracking-wide tablet:text-xl hover:underline">
                By: Enigma
              </p>
            </Link>
            <p className="text-white text-[0.94vw] tracking-wide tablet:text-xl tablet:w-[60%] pr-[5vw] tablet:pr-[8vw]">
              © 2025 HiveMinds Innovative Market Solutions Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div >
    </footer >
  );
};

export default Footer;
