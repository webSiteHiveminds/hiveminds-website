/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState } from "react";
import CaseStudyCard from "../CaseStudy/CaseStudyCard";
import { useQueryState } from "next-usequerystate";

import styles from '../Button/styles.module.css'


const Listing = ({ industries, caseStudies }) => {
  const [industry, setIndustry] = useQueryState("industry");
  const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudies);


  // Filtering Logic
  useEffect(() => {
    let filtered = caseStudies;

    if (industry) {
      filtered = filtered.filter(
        (caseStudy) => caseStudy.industries[0].slug === industry
      );
    }

    setFilteredCaseStudies(filtered);
  }, [industry, caseStudies]);
  // console.log(industry)

  // Function to clear filters
  const clearFilters = () => {
    setIndustry(null);
  };

  return (
    <section className="w-screen h-full pb-[7%] mobile:pt-[5%] tablet:pb-[20%]">
      <div className="container-lg h-full">
        <div className="flex flex-col items-center justify-start gap-[1vw] pt-[7vw] pb-[3vw] mobile:block mobile:space-y-[4vw] tablet:items-start  tablet:gap-[4vw] tablet:pb-0">
          <h2 className="heading-2 headingAnim">
            Our Case <span className="blue-text">Studies</span>
          </h2>
          <p
            data-para-anim
            className="content w-[55%] text-center mobile:w-[90%] mobile:text-left tablet:w-[90%] tablet:text-left"
          >
            At HiveMinds, we tackle your most challenging business problems with
            our specialised digital marketing approach - integrating strategic
            expertise, cutting-edge technology, and data-driven insights to
            craft campaigns that elevate your brand and drive sustainable
            growth.
          </p>
        </div>

        <CaseStudyFilter
          industries={industries}
          industry={industry}
          setIndustry={setIndustry}
          clearFilters={clearFilters}
        />

        <div className="flex flex-wrap items-start justify-start gap-x-[2%] gap-y-[5vw] mobile:flex-col mobile:gap-y-10 tablet:justify-between tablet:gap-x-0 tablet:gap-y-[5vw] tablet:mt-[5vw] mobile:mt-[10vw]">
          {filteredCaseStudies.map((item) => (
            <CaseStudyCard
              key={item.id}
              image={item.featuredImage}
              title={item.title}
              description={item.excerpt}
              link={item.slug}
            />
          ))}
        </div>
        <div className="w-full flex justify-center mt-[4vw]">
        <a className={`cursor-pointer flex w-fit relative text-[1.1vw] gap-[0.7vw] items-center group mobile:gap-[2vw] tablet:text-[2.5vw] mobile:text-[5vw] `} href="/casestudies#casestudy-listing">
            <span className="relative link-line">View More</span>
            <svg className="relative -rotate-[90deg] w-[1vw] h-[1vw] mt-[-0.2vw] overflow-hidden mobile:w-[4.5vw] mobile:h-[4.5vw] mobile:mt-[-1vw] tablet:w-[2.5vw] tablet:h-[2.5vw]" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={`origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 ${styles.linkbutton}`} d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
                <path className={`origin-center group-hover:scale-0 group-hover:translate-y-[110%] ${styles.linkbutton}`} d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
            </svg>
        </a>

        </div>
      </div>
    </section>
  );
};

export default Listing;

const CaseStudyFilter = ({
  industries,
  industry,
  setIndustry,
  clearFilters,
}) => {
  const isFilterApplied = industry;
  const [openFilter, setOpenFilter] = useState(false);
  const [currentIndustry, setIsCurrentIndustry] = useState(industry||"All Industry")
  const activeFilter = () => {
    setOpenFilter((prev) => !prev);
  };
 

  return (
    <div className="flex gap-[1vw] pb-[3vw] tablet:items-end mobile:items-end">
      <div className="flex flex-col">
        <p className="content px-[1vw] py-[0.5vw] mobile:py-[3vw] tablet:mt-[4vw]">Filters:</p>
        <div
          className="w-fit px-[2vw] h-[4vw]  border border-black rounded-full flex justify-between gap-[2vw] mobile:gap-[5vw] mobile:px-[7vw] mobile:py-[7vw] tablet:py-[3vw] tablet:px-[4vw] items-center relative cursor-pointer"
          onClick={activeFilter}
        >
          <p className="mobile:text-[4vw] tablet:text-[2.5vw] cursor-pointer">
          {currentIndustry}
          </p>
          <div
            className={` w-fit h-fit transition-transform duration-300 cursor-pointer ${
              openFilter ? "-rotate-180" : "rotate-0"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[1vw] w-[1vw] tablet:w-[2vw] tablet:h-[2vw] mobile:w-[4vw] mobile:h-[4vw] group-hover:rotate-[-180deg] ease-in-out transition-all duration-700 "
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
          </div>

          <div
            className={`absolute top-[110%] left-0 w-[20vw] mobile:w-[70vw] tablet:w-[40vw] overflow-hidden  z-[10] transition-all duration-500 ease-in-out  ${openFilter ? "h-[28vw] mobile:h-[80vw] tablet:h-[40vw]" : "h-[0vw]"}`}
          >
            <div className="w-full bg-white rounded-[0.8vw] flex flex-col gap-[0.5vw]   p-[1.5vw] mobile:p-[3vw] mobile:gap-[1.5vw] mobile:rounded-[2vw] tablet:p-[2.5vw] tablet:gap-[1vw] ">
              {industries.map((item) => (
                <div key={item.slug} value={item.slug}>
                  <div
                  className="cursor-pointer"
                 
                    onClick={() => {
                      setIndustry(item.slug);
                      setIsCurrentIndustry(item.name);
                    }}
                  >
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isFilterApplied && (
        <button
          className="bg-[#134bd5] text-white px-[3vw] py-[1vw] mt-[3vw] rounded-[30px] tablet:py-[1.5vw] tablet:px-[5vw] mobile:text-[4vw] mobile:px-[7vw] mobile:py-[3vw]"
          onClick={()=>{
            clearFilters()
            setIsCurrentIndustry("All Industry")
          }}
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};
