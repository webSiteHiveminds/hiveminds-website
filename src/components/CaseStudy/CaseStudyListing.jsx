import React, { useEffect, useState } from "react";
import { useQueryState } from "next-usequerystate";
import CaseStudyFilter from "./CaseStudyFilter";
import Pagination from "../Pagination";
import CaseStudyCard from "./CaseStudyCard";
import CasePagination from "../CasePagination";

const CaseStudyListing = ({ caseStudies, pagination, industries }) => {
  const [industry, setIndustry] = useQueryState("industry");
  const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudies);


  // Filtering Logic
  useEffect(() => {
    let filtered = caseStudies;

    if (industry) {
      filtered = filtered.filter((caseStudy) => caseStudy.industries[0].slug === industry);
    }

    setFilteredCaseStudies(filtered);
  }, [industry, caseStudies]);
  // console.log(caseStudies)

  // Function to clear filters
  const clearFilters = () => {
    setIndustry(null);
  };

  return (
    <section className="w-screen h-full py-[7%] mobile:py-[5%] " id="casestudy-listing">
      <div className="container-lg h-full">

        <CaseStudyFilter industries={industries} industry={industry} setIndustry={setIndustry} clearFilters={clearFilters} />

        <div className="flex flex-wrap items-start justify-start gap-x-[2%] gap-y-[5vw] mobile:flex-col mobile:gap-y-10 tablet:justify-between tablet:gap-x-0 tablet:gap-y-[5vw] tablet:mt-[5vw] mobile:mt-[10vw]">
          {caseStudies.map((item) => (
            <CaseStudyCard
              key={item.id}
              image={item.featuredImage}
              title={item.title}
              description={item.excerpt}
              link={item.slug}
            />
          ))}
        </div>

        <div>
          {pagination && (
            <CasePagination
              addCanonical={false}
              currentPage={pagination?.currentPage}
              pagesCount={pagination?.pagesCount}
              basePath={pagination?.basePath}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyListing;
