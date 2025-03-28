
import Link from "next/link";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

const CaseStudyFilter = ({ industries, industry }) => {
    const [isFilterApplied, setIsFilterApplied] = useState(false);
    const [currentIndustry, setCurrentIndustry] = useState(industry || "All Industry")
    const [openFilter, setOpenFilter] = useState(false)
    const router = useRouter();

    useEffect(() => {
        if (currentIndustry == "All Industry") {
            setIsFilterApplied(false)
        }
        else {
            setIsFilterApplied(true)
        }

    }, [currentIndustry])
    const activeFilter = () => {
        setOpenFilter((prev) => !prev)
    }
    // console.log(industries)

    return (
        <div className="flex gap-[1vw] pb-[3vw] tablet:items-end mobile:items-start mobile:flex-col">
            <div className="flex flex-col">
                <p className="content px-[1vw] py-[0.5vw] mobile:py-[3vw]">Filters:</p>


                <div className="w-fit px-[2vw] h-[4vw]  border border-black rounded-full flex justify-between gap-[2vw] mobile:gap-[5vw] mobile:px-[7vw] mobile:py-[5vw] tablet:py-[3vw] tablet:px-[4vw] items-center relative" onClick={activeFilter}>

                    <p className="mobile:text-[4.5vw] tablet:text-[2.5vw] cursor-pointer">{currentIndustry}</p>
                    <div
                        className={` w-fit h-fit transition-transform duration-300 cursor-pointer ${openFilter ? "-rotate-180" : "rotate-0"
                            }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-[1vw] w-[1vw] tablet:w-[3vw] tablet:h-[3vw] mobile:w-[5vw] mobile:h-[5vw] group-hover:rotate-[-180deg] ease-in-out transition-all duration-700 "
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

                    <div className={`absolute top-[110%] left-0 w-full overflow-hidden  z-[10] transition-all duration-500 ease-in-out ${openFilter ? "h-[28vw] mobile:h-[80vw] tablet:h-[40vw]" : "h-[0vw]"}`}>
                        <div className="w-full bg-white rounded-[0.8vw] flex flex-col gap-[0.5vw]   p-[1.5vw] mobile:p-[3vw] mobile:gap-[1.5vw] mobile:rounded-[2vw] tablet:p-[2.5vw] tablet:gap-[1vw]">

                            {industries.map((item) => (
                                <div key={item.slug} value={item.slug} >
                                    <Link href={`/casestudies/industries/${item.slug}`} onClick={() => {
                                        setCurrentIndustry(item.name)
                                    }}>
                                        {item.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {isFilterApplied && (
                <button
                    className="bg-[#134bd5] text-white px-[3vw] py-[1vw] mt-[3vw] rounded-[3vw] tablet:py-[1.5vw] tablet:px-[5vw] mobile:rounded-[9vw] mobile:text-[4vw] mobile:px-[7vw] mobile:py-[3vw]"
                    onClick={() => router.push("/casestudies")} >
                    Clear Filters
                </button>
            )}

        </div>
    )
}

export default CaseStudyFilter;