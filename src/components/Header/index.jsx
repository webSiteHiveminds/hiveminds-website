import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import PlainButton from "../Button/PlainButton";
import MobileMenu from "./MobileMenu";
import styles from "../Button/styles.module.css";
import solutionImg from "../../../public/assets/images/solutions/solutions-hero-img.png";
import ipImg from "../../../public/assets/images/ip/ips-hero-img.png";
import digitalImg from "../../../public/assets/images/schoolofdigital/school-of-digital-hero-img.png";

const Header = ({ isOpen }) => {
  const lenis = useLenis();
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileWidth , setIsMobileWidth] = useState(false)

  const [openMenu, setOpenMenu] = useState(false);
  const headerRef = useRef();
  const services = [
    { name: "Performance Marketing", href: "/services/performance-marketing" },
    { name: "Retail Marketing", href: "/services/retail-marketing" },
    { name: "Search Engine Optimization", href: "/services/search-engine-optimization" },
    { name: "Creative & Content", href: "/services/creative-content-management" },
    { name: "ORM", href: "/services/online-reputation-management" },
    { name: "Consumer Insights", href: "/services/consumer-insights" },
    { name: "Influencer Marketing", href: "/services/influencer-marketing" },
    { name: "Affiliate Marketing", href: "/services/affiliate-marketing" },
    { name: "Social Media Marketing", href: "/services/social-media-marketing" },
    { name: "Data Analysis", href: "/services/data-analytic" },
    { name: "Branding & Programatic Ads", href: "/services/branding" },
  ];
  const industries = [
    { name: "FMCG & Beauty", href: "/industry#fmcg-and-beauty" },
        { name: "Health & Wellness", href: "/industry#health-and-wellness" },
        { name: "BFSI - Fintech", href: "/industry#bfsi-fintech" },
        { name: "E-Commerce", href: "/industry#e-commerce" },
        { name: "Fashion & Lifestyle", href: "/industry#fashion-and-lifestyle" },
        { name: "Electronics ", href: "/industry#electronics" },
        { name: "Consumer Durables", href: "/industry#consumer-durables" },
        { name: "Telecom", href: "/industry#telecom" },
        { name: "Automobiles", href: "/industry#automobiles" },
        { name: "Travel & Tourism", href: "/industry#travel-and-tourism" },
  ];
  const links = [
    {
      href: "/solutions",
      imgSrc: solutionImg,
      text: "SOLUTIONS"
    },
    {
      href: "/our-ips",
      imgSrc: ipImg,
      text: "IPs",
    },
    {
      href: "/school-of-digital",
      imgSrc: digitalImg,
      text: "SCHOOL OF DIGITAL",
    },
  ];
  const menuItems = [
    { label: "Our Impact", href: "/our-impact" },
    { label: "What's Buzzing", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ];

  useEffect(() => {

    if(globalThis.innerWidth>1024){

      setIsMobileWidth(false)
    }
    else{
      setIsMobileWidth(true)
    }
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const openHam = () => {
    setOpenMenu((prev) => !prev);
  };
  useEffect(() => {
    if (openMenu) {
      lenis && lenis.stop();
    } else {
      lenis && lenis.start();
    }
  }, [openMenu, lenis]);

  const entredMouse = ()=>{

    setOpenMenu(true)
  }

  const leaveMouse = ()=>{

    setOpenMenu(false)
  }
  return !isOpen ? (
    <header
      className={`fixed top-0 left-0 w-full z-[100] header transition-all ease duration-500 ${
        isHidden ? "-translate-y-full" : "translate-y-0 header-glassmorphism"
      }`}
    >

     {!mobileWidth?(<>
     
      <div className={``}>
        <div
          className={`h-fit w-full flex items-center justify-between px-[5vw] py-[1.5vw] tablet:py-[3vw]`}
          ref={headerRef}
        >
          <Link href={"/"}>
            <div className="w-[10.5vw] h-[3.2vw] relative mobile:h-[17vw] mobile:w-[30vw] tablet:w-[20vw] tablet:h-[7vw]">
              <Image
                src="/assets/icons/logo.svg"
                width={200}
                height={100}
                alt="hiveminds-logo"
                quality={100}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
          <div className="flex items-center justify-center gap-[2vw] text-[0.94vw] montreal font-medium uppercase mobile:hidden tablet:hidden">
            <div>
              <ul className="flex items-center justify-between gap-[1.5vw]">
                <li className="relative group flex items-center gap-1 after:content-[''] after:bg-transparent after:block after:absolute after:top-[20px] after:left-0 after:w-full after:h-[30px]">
                  <Link
                    href={"/about-us"}
                    className="relative link-line"
                    prefetch={false}
                  >
                    Who We Are
                  </Link>
                </li>
                <li className="relative group flex items-center gap-1 after:content-[''] after:bg-transparent after:block after:absolute after:top-[20px] after:left-0 after:w-full after:h-[30px]" onMouseEnter={entredMouse}>
                  <Link
                    href={"#"}
                    className="relative link-line"
                    prefetch={false}
                  >
                    What We do
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 group-hover:rotate-[-180deg] ease-in-out transition-all duration-700 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>

                  <div className={`w-[97.5vw] left-[-52vw] bg-white h-0  top-[4.5vw] px-[3vw]  overflow-hidden rounded-[1.5vw] absolute group-hover:h-[40vw]  ease-in-out transition-all duration-500 block bgblur ${openMenu?"h-[40vw]":"h-0"} `} onMouseLeave={leaveMouse}>
                    <div className="py-[5vw] flex justify-between gap-[2vw]">
                      <div>
                        <Link
                          href="/services"
                          prefetch={false}
                          className="uppercase text-primary link-line text-[1.2vw] font-avenir"
                        >
                          Services
                        </Link>
                        <ul className="flex flex-col p-2 mt-4 px-0 rounded-[0.5vw] space-y-[0.2vw] normal-case top-full pointer-events-auto font-avenir ">
                          {services.map((service, index) => (
                            <li key={index} className=" content ">
                              <Link
                                href={service.href}
                                prefetch={false}
                                className="link-line"
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <span className="bg-black h-[32vw] w-[1px] " />
                      <div>
                        <Link
                          href="/industry"
                          prefetch={false}
                          className="uppercase text-primary link-line text-[1.2vw] font-avenir"
                        >
                          Industries
                        </Link>
                        <ul className="flex flex-col p-2 mt-4 px-0 rounded-[0.5vw] space-y-[0.2vw] normal-case top-full pointer-events-auto font-avenir">
                          {industries.map((industry, index) => (
                            <li key={index} className=" content">
                            <Link
                              href={industry.href}
                              prefetch={false}
                              className="link-line"
                           >
                              {industry.name}
                            </Link>
                          </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-[2vw]">
                        {links.map((link, index) => (
                          <div
                            key={index}
                            className="w-fit flex flex-col gap-[1vw]"
                          >
                            <Link
                              href={link.href}
                              className="w-[18vw] h-[16vw] rounded-[1.2vw] overflow-hidden flex flex-col gap-[1vw]"
                            >
                              <Image
                                src={link.imgSrc}
                                placeholder="blur"
                                alt={link.text}
                                className="hover:scale-[1.2] transition-all duration-500 ease-in-out"
                              />
                            </Link>
                            <Link href={link.href} className="w-fit">
                              <div className="cursor-pointer flex w-fit relative text-[1.1vw] pl-[0.4vw] gap-[0.7vw] items-center mobile:gap-[2vw] tablet:text-[2.5vw] mobile:text-[4vw] normal-case">
                                <span className="relative link-line text-primary">
                                  {link.text}
                                </span>
                                <svg
                                  className="relative -rotate-[90deg] w-[1vw] h-[1vw] overflow-hidden mobile:w-[4vw] mobile:mt-[-1vw] mobile:h-[4vw] tablet:w-[2.5vw] tablet:h-[2.5vw]"
                                  width="19"
                                  height="23"
                                  viewBox="0 0 19 23"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    className={`origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 ${styles.linkbutton}`}
                                    d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                                    fill="#134bd5"
                                  />
                                  <path
                                    className={`origin-center group-hover:scale-0 group-hover:translate-y-[110%] ${styles.linkbutton}`}
                                    d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                                    fill="#134bd5"
                                  />
                                </svg>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="relative group flex items-center gap-1 cursor-pointer"
                  >
                    <Link
                      href={item.href}
                      className="relative link-line font-avenir"
                      prefetch={false}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <PlainButton
                aria-label="to contact us"
                link={"/contact-us"}
                text={"Partner with us"}
                data-btn-blue
              />
            </div>
          </div>
          <div
            id="nav-icon3"
            className={`hidden mobile:block tablet:block fixed z-[999] ${openMenu ? "open" : ""}`}
            onClick={openHam}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
     
     </>):(<>
      <MobileMenu openMenu={openMenu} />
     
     </>)
     
    } 
    </header>
  ) : (
    <></>
  );
};

export default Header;
