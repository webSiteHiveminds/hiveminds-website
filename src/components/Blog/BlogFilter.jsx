import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BlogFilter = ({ category, setCategory, year, setYear, clearFilters }) => {
  const isFilterApplied = category || year;

  return (
    <div className="flex items-end py-[3vw] space-x-4 mobile:flex-col mobile:items-start mobile:gap-[4vw] mobile:space-x-0 mobile:py-[7vw]">
      {/* Category Filter */}
      <div className="flex flex-col">
        <p className="content px-[1vw] py-[0.5vw] mobile:py-[2vw]">Category:</p>
        <Select value={category || ""} onValueChange={setCategory}>
          <SelectTrigger className="w-[10vw] h-[3.5vw] border-[1.5px] mobile:border-[1px] border-black rounded-full tablet:w-[20vw] mobile:w-[40vw]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Blog">Blog</SelectItem>
              <SelectItem value="pr">PR</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Year Filter */}
      <div className="flex flex-col">
        <p className="content px-[1vw] py-[0.5vw] mobile:py-[2vw]">Year:</p>
        <Select value={year || ""} onValueChange={setYear}>
          <SelectTrigger className="w-[10vw] h-[3.5vw] border-[1.5px] border-black mobile:border-[1px] rounded-full tablet:w-[20vw] mobile:w-[40vw] ">
            <SelectValue placeholder="Select Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters Button */}
      {isFilterApplied && ( 
        <button
          className="bg-primary text-white px-[2vw] py-[1vw] rounded-full mobile:text-[4vw] mobile:px-[5vw] mobile:py-[2vw]"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      )}

    </div>
  );
};

export default BlogFilter;
