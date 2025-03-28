import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../Button/styles.module.css";
import Link from "next/link";
import industry from "@/pages/industry";
import useLenis from "lenis/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const caseStudiesData = [
  {
    id: 1,
    industry: "E-Commerce",
    imgSrc: "/assets/images/impact/casestudy/flipkart-healthplus-cs-banner.png",
    title: "Flipkart Health+",
    description:
      "<p><span class='text-primary'>India’s #1</span> Medical App for 1.5 Years</p><p>Up with the App Installs</p>",
    link: "/casestudies/flipkart-healthplus",
  },
  {
    id: 2,
    industry: "BFSI-Fintech",
    imgSrc: "/assets/images/impact/casestudy/max-life-cs-banner.png",
    title: "Max Life Insurance",
    description:
      "<p><span class='text-primary'> 45% </span>Revenue Surge in 3 Months</p><p>Powering Growth</p>",
    link: "/casestudies/max-life",
  },
  {
    id: 3,
    industry: "E-Commerce",
    imgSrc: "/assets/images/impact/casestudy/bigbasket-cs-banner.png",
    title: "Big Basket",
    description:
      "<p><span class='text-primary'>2.35x </span> Growth in Installs</p> <p>Expanding Horizons in Non-Metro Cities</p>",
    link: "/casestudies/bigbasket",
  },
  {
    id: 4,
    industry: "Travel & Tourism",
    imgSrc: "/assets/images/impact/casestudy/flydubai-cs-banner.png",
    title: "Fly Dubai",
    description:
      "<p><span class='text-primary'>67% </span> Increase in Brand Searches</p> <p>New Routes Soar to Success</p>",
    link: "/casestudies/flydubai",
  },
  { 
    id: 5,
    industry: "E-Commerce",
    imgSrc: "/assets/images/impact/casestudy/dominos-cs-banner.png",
    title: "Dominos",
    description:
      "<p><span class='text-primary'> 500K+ </span> New Orders in 12 Months.</p><p>Success Through Influencer Power</p>",
    link: "/casestudies/dominos",
  },
  {
    id: 6,
    industry: "BFSI-Fintech",
    imgSrc: "/assets/images/impact/casestudy/digit-cs-banner.png",
    title: "Digit",
    description:
      "<p><span class='text-primary'> 46M </span> Impressions in 12 Months</p><p>Dominating Organic Search</p>",
    link: "/casestudies/digit",
  },
  {
    id: 7,
    industry: "International",
    imgSrc: "/assets/images/impact/casestudy/murfai-cs-banner.png",
    title: "Murf AI",
    description:
      "<p><span class='text-primary'>10x </span> Growth in Traffic</p> <p>Leading in Speech Synthesis Innovation</p>",
    link: "/casestudies/murfai",
  },
  {
    id: 8,
    industry: "FMCG & Beauty",
    imgSrc: "/assets/images/impact/casestudy/saffola-cs-banner.png",
    title: "Saffola Honey",
    description:
      "<p><span class='text-primary'>100% </span> CTR Growth and 50% Higher Conversions</p> <p> Achieving Excellence</p>",
    link: "/casestudies/saffola-honey",
  },
  {
    id: 9,
    industry: "FMCG & Beauty",
    imgSrc: "/assets/images/impact/casestudy/saffola-triumph-cs-hero.jpg",
    title: "Saffola Honey",
    description:
      "<p>From Zero to 500 Units a Day in <span class='text-primary'> 4 Weeks </span></p> <p>Launching Success in Just 4 Weeks</p>",
    link: "/casestudies/saffola-triumph",
  },

  {
    id: 10,
    industry: "Electronics and Consumer Durables",
    imgSrc: "/assets/images/impact/casestudy/bajaj-coolers-cs-banner.png",
    title: "Bajaj",
    description:
      "<p><span class='text-primary'>50% </span> YoY Growth in Offtakes</p> <p>Leading Seasonal Success</p>",
    link: "/casestudies/bajaj-aircooler",
  },
  {
    id: 11,
    industry: "FMCG & Beauty",
    imgSrc: "/assets/images/impact/casestudy/parachute-cs-banner.png",
    title: "Parachute Advansed",
    description:
      "<p><span class='text-primary'>60% </span> ACOS Growth</p> <p>Shining with E-Commerce-Specific Packs</p>",
    link: "/casestudies/parachute-advansed",
  },
  {
    id: 12,
    industry: "Electronics and Consumer Durables",
    imgSrc: "/assets/images/impact/casestudy/crompton-cs-banner.png",
    title: "Crompton",
    description:
      "<p><span class='text-primary'>#1</span> in Water Heaters</p> <p>Converting with Category-Leading Benchmarks</p>",
    link: "/casestudies/crompton",
  },

];


const CaseStudyCard = ({ imgSrc, title, description, link }) => {
  return (
    <div className="w-[32%] fadeup group blog-link mobile:w-[90vw] tablet:w-[48%] tablet:h-full">
      <div className="h-[25.5vw] w-full relative overflow-hidden rounded-[1.5vw] mobile:h-[80vw] mobile:rounded-[4vw]">
        <Link href={link}>
          <Image
            src={imgSrc}
            fill
            alt={`${title} Case Study`}
            className="group-hover:scale-[1.1] transition-all duration-500 ease-in-out "
          />
        </Link>
      </div>
      <div className="mt-[1vw] px-[0.5vw] flex flex-col h-[28%] gap-[1vw] justify-between mobile:mt-[3vw] tablet:h-full tablet:gap-[3vw] ">
        <div>
          <p className="text-[2vw] font-medium py-[0.5vw] mobile:text-[7vw] tablet:text-[4vw]">{title}</p>
          <div
            className="content w-[95%] mobile:text-[4.5vw] tablet:text-[2vw]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <Link href={link}>
          <div className="w-fit">
            <div
              className={`cursor-pointer flex w-fit relative text-[1.1vw] gap-[0.7vw] items-center mobile:gap-[2vw] tablet:text-[2.5vw] mobile:text-[4vw] `}
            >
              <span className="relative link-line group-hover:text-primary ">
                View Detail
              </span>
              <svg
                className="relative -rotate-[90deg] w-[1vw] h-[1vw] overflow-hidden mobile:w-[4.5vw] mobile:h-[4.5vw] mobile:mt-[-1vw] tablet:w-[2.5vw] tablet:h-[2.5vw]"
                width="19"
                height="23"
                viewBox="0 0 19 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={`origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:text-primary ${styles.linkbutton}`}
                  d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                  fill="currentColor"
                />
                <path
                  className={`origin-center group-hover:scale-0 group-hover:translate-y-[110%] group-hover:text-primary ${styles.linkbutton}`}
                  d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudiesData);
 
  const lenis = useLenis({
    prevent: (node) => node.id === '[data-radix-select-viewport]',
  });

  const handleFilter = () => {
    const filtered = caseStudiesData.filter(
      (study) =>
        (selectedIndustry ? study.industry === selectedIndustry : true)
    );
    setFilteredCaseStudies(filtered);
  };
  return (
    <section className="w-screen h-full pb-[7%] mobile:pt-[5%] tablet:pb-[20%]">
      <div className="container-lg h-full">
        <div className="flex flex-col items-center justify-start gap-[1vw] pt-[7vw] pb-[3vw] mobile:block mobile:space-y-[4vw] tablet:items-start  tablet:gap-[4vw] tablet:pb-0">
          <h2 className="heading-2 headingAnim">
            Our Case <span className="blue-text">Studies</span>
          </h2>
          <p data-para-anim className="content w-[55%] text-center mobile:w-[90%] mobile:text-left tablet:w-[90%] tablet:text-left">
            At HiveMinds, we tackle your most challenging business problems with
            our specialised digital marketing approach - integrating strategic
            expertise, cutting-edge technology, and data-driven insights to
            craft campaigns that elevate your brand and drive sustainable
            growth.
          </p>
        </div>
        <div className="flex gap-[1vw] pb-[3vw] tablet:items-end mobile:items-end">
          <div data-lenis-prevent className="flex flex-col">
            <p className="content px-[1vw] py-[0.5vw] mobile:py-[3vw]">Filters:</p>
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger className="w-[22vw] h-[3.5vw] drop-shadow-none shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 border-[1.5px] border-black rounded-full mobile:w-[40vw] mobile:rounded-[9vw] mobile:border-[1px] ">
                <SelectValue placeholder="All Indutries" />
              </SelectTrigger>
              <SelectContent data-lenis-prevent id="modal">
                <SelectGroup data-lenis-prevent id="modal">
                  <SelectItem value="E-Commerce">E-Commerce</SelectItem>
                  <SelectItem value="BFSI-Fintech">BFSI-Fintech</SelectItem>
                  <SelectItem value="Travel & Tourism">Travel & Tourism</SelectItem>
                  <SelectItem value="International">International</SelectItem>
                  <SelectItem value="FMCG & Beauty">FMCG & Beauty</SelectItem>
                  <SelectItem value="Electronics and Consumer Durables">Electronics and Consumer Durables</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <button onClick={handleFilter}
            className="bg-[#134bd5] text-white px-[3vw] py-[1vw] mt-[3vw] rounded-[30px] tablet:py-[1.5vw] tablet:px-[5vw] mobile:text-[4vw] mobile:px-[7vw] mobile:py-[3vw]">
            Apply
          </button>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-y-[5vw] mobile:flex-col tablet:justify-start tablet:gap-x-[3vw] tablet:gap-y-[3vw] tablet:mt-[5vw] mobile:mt-[10vw]">
          {filteredCaseStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              imgSrc={study.imgSrc}
              title={study.title}
              dcppara={study.dcppara}
              description={study.description}
              link={study.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
