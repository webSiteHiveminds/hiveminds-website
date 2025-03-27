import React, { useState } from "react";

import CaseStudyFilter from "./CaseStudyFilter";
import CaseStudyCard from "./CaseStudyCard";


const IndustryCsListing = ({ industry, industries }) => {
  const [currentIndustry, setCurrentIndustry] = useState("industry");

  const clearFilters = () => {
    setCurrentIndustry(null);
  };
  // console.log(industry);

  return (
    <section className="w-screen h-full py-[7%] mobile:py-[5%]">
      <div className="container-lg h-full">
        <CaseStudyFilter
          industries={industries}
          industry={industry.slug}
          setIndustry={setCurrentIndustry}
          clearFilters={clearFilters}
        />

        <div className="flex flex-wrap items-start justify-start gap-x-[2%] gap-y-[5vw] mobile:flex-col mobile:gap-y-10 tablet:justify-between tablet:gap-x-0 tablet:gap-y-[5vw] tablet:mt-[5vw] mobile:mt-[10vw]">
          {industry.caseStudies.map(
            (item,id) =>
             (
                <CaseStudyCard
                  key={id}
                  image={item.featuredImage.node}
                  title={item.title}
                  description={item.excerpt}
                  link={item.slug}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default IndustryCsListing;
