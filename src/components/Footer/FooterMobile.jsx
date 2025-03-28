import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import SocialMedia from "./SocialMedia";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { expertiseLinks, solutionsLinks, industriesLinks } from "@/data/sitemapLinks";

const MapComponent = dynamic(() => import("./Map"), {
    loading: () => <p>...loading</p>,
});

const FooterMobile = () => {
    const [openSection, setOpenSection] = useState(null);
    const [location, setLocation] = useState("Bengaluru");

    const sections = [expertiseLinks, solutionsLinks, industriesLinks];

    const toggleSection = (sectionTitle) => {
        setOpenSection((prev) => (prev === sectionTitle ? null : sectionTitle));
    };

    return (
        <footer className="w-screen h-full py-[10%] bg-primary z-[1] relative overflow-hidden">
            <div className="container-lg flex flex-col gap-[5vw]">
                <SubscribeNewsletter />
                <div>
                    {sections.map((section, index) => (
                        <div key={index} className="flex flex-col mt-[7vw]">
                            <div
                                className="flex justify-between w-full list-title cursor-pointer"
                                onClick={() => toggleSection(section.title)}
                            >
                                <p className="text-[5vw] uppercase montreal font-medium text-white">
                                    {section.title}
                                </p>
                                <div className="w-[10vw] h-[10vw] relative pt-[3vw] list-icon">
                                    <span
                                        className={`w-[6vw] h-[3px] block bg-white absolute transition-transform duration-300 ${openSection === section.title ? "" : ""
                                            }`}
                                    ></span>
                                    <span
                                        className={`w-[6vw] h-[3px] mt-[-1px] block bg-white transition-transform duration-300 ${openSection === section.title ? "rotate-180" : "rotate-90"
                                            }`}
                                    ></span>
                                </div>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ${openSection === section.title
                                        ? "max-h-[500px] opacity-100"
                                        : "max-h-0 opacity-0"
                                    }`}
                            >
                                <ul className="text-[4vw] pt-[3vw] pb-[7vw] text-white montreal font-medium flex flex-col items-start justify-center gap-[2vw]">
                                    {section.links.map((link, idx) => (
                                        <li key={idx}>
                                            <a className="link-line" href={link.href}>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full h-[1px] bg-white mt-[3vw]"></div>
                        </div>
                    ))}
                </div>
                <div className="w-full h-full flex flex-col items-start justify-start gap-[4vw] mobile:mt-[7vw] mobile:gap-[6vw]">
                    <p className="uppercase tracking-wider text-[1.16vw] text-white font-medium montreal order-1 mobile:text-[4.5vw]">
                        Our Office Address
                    </p>
                    <div className="order-3" onClick={() => setLocation("Bengaluru")}>
                        <p className="content-white mobile:!text-[4vw]">
                            BENGALURU (HQ) : No. 11, Seventh Floor, Global Tech Park, O
                            Shaughnessy Rd, Langford Town, Langford Gardens, Bengaluru, Karnataka 560025
                        </p>
                    </div>
                    <div className="order-4" onClick={() => setLocation("Mumbai")}>
                        <p className="content-white mobile:!text-[4vw]">
                            MUMBAI : Office no 301 & 302, 3rd Floor, The Eagle&apos;s Flight Building, Gundavali, Andheri East, Andheri, Mumbai, Maharashtra 400047
                        </p>
                    </div>
                    <div className="order-5" onClick={() => setLocation("Gurgaon")}>
                        <p className="content-white mobile:!text-[4vw]">
                            GURGAON : Spring House Coworking, 4th Floor, JMD Regent Arcade, Haryana 122002
                        </p>
                    </div>
                    <div className="h-[15vw] w-[25vw] relative rounded-[12px] order-2 mobile:w-full mobile:h-[70vw] overflow-hidden ">
                        <MapComponent location={location} height="300px" className="w-full h-full" />
                    </div>
                    <SocialMedia />
                </div>
                <div className="mt-[7vw]">
                    <span className="w-[92vw] h-[1px] bg-white block"></span>
                    <div className="w-full flex justify-between mt-[5vw] mobile:flex-col-reverse mobile:justify-start mobile:gap-[5vw]">
                        <Link href="https://weareenigma.com/">
                            <p className="text-white text-[0.94vw] tracking-wide mobile:text-[3.5vw] hover:underline">
                                By: Enigma
                            </p>
                        </Link>
                        <p className="text-white text-[0.94vw] tracking-wide mobile:text-[3.5vw] mobile:w-[70%]">
                            © 2025 HiveMinds Innovative Market Solutions Pvt. Ltd. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterMobile;
