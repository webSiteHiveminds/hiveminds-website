import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import styles from '../Button/styles.module.css'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const blogsData = [
  {
    id: 1,
    type: "PR",
    imgSrc: "/assets/images/blogs/short-video-apps.jpg",
    title: "Short Video Apps: Ad Investment Hesitation",
    category: "Video Formats",
    date: "August 31, 2023",
    description:
      "In the wake of rising digital maturity, brands are rethinking investments in 'desi' short video apps.",
    link: "/blog/short-video-apps-ad-investment-hesitation",
  },
  {
    id: 2,
    type: "PR",
    imgSrc: "/assets/images/blogs/screen-size.jpg",
    title: "Screen Size & Programmatic Ads: Does Size Matter?",
    category: "Programmatic Media Buying",
    date: "July 31, 2024",
    description:
      "Screen size plays a pivotal role in programmatic media buying. ",
    link: "/blog/screen-size-and-programatic-ads",
  },
  {
    id: 3,
    type: "PR",
    imgSrc: "/assets/images/blogs/building-foundation.jpg",
    title: "Building a Foundation for Success: Insights from Jyothirmayee",
    category: "Digital Marketing",
    date: "December 6, 2024",
    description:
      " Jyothirmayee JT emphasizes that building a strong foundation is essential for marketing success.",
    link: "/blog/building-a-foundation-for-success",
  },
  {
    id: 4,
    type: "PR",
    imgSrc: "/assets/images/blogs/bootstrapped-startup.jpg",
    title: "Building a Bootstrapped Startup",
    category: "Digital Marketing",
    date: "September 11, 2017",
    description:
      "Jyothirmayee JT’s inspiring journey of building HiveMinds from the ground up. ",
    link: "/blog/building-a-bootstrapped-startup",
  },
  {
    id: 5,
    type: "PR",
    imgSrc: "/assets/images/blogs/the-ai-era.jpg",
    title: "The AI Era: Navigating Digital Discovery & Brand Growth",
    category: "Branding",
    date: "February 13, 2024",
    description:
      "How brands leverage AI-driven insights to optimize campaigns, enhance consumer engagement...",
    link: "/blog/the-ai-era-navigating-digital-discovery-and-brand-growth",
  },
  {
    id: 6,
    type: "PR",
    imgSrc: "/assets/images/blogs/women-entrepreneurship.jpg",
    title: "The New Dawn: Women Entrepreneurship in India",
    category: "Digital Marketing",
    date: "March 8, 2019",
    description:
      "India's entrepreneurial landscape is being redefined by dynamic women leaders.",
    link: "/blog/the-new-dawn-of-women-entrepreneurship-in-india",
  },
  {
    id: 7,
    type: "PR",
    imgSrc: "/assets/images/blogs/retail-through-consumers-eyes.jpg",
    title: "Retail Through the Consumer's Eyes",
    category: "Digital Marketing",
    date: "March 27, 2023",
    description:
      "On BrandEquity, Deepti Bhadauria delivers thought-provoking insights into branding, digital marketing, and emerging consumer trends. ",
    link: "/blog/retail-through-consumers-eyes",
  },
  {
    id: 8,
    type: "PR",
    imgSrc: "/assets/images/blogs/hiveminds-ecommerce-conclave-2023.jpg",
    title: "Hiveminds E-commerce Conclave 2023: Industry Leaders Gather",
    category: "E-Commerce",
    date: "June 6, 2024",
    description:
      "Industry leaders converged at HiveMinds E-commerce Conclave 2023, a vibrant event showcasing cutting-edge trends in digital marketing and e-commerce.",
    link: "/blog/hiveminds-ecommerce-conclave-2023",
  },
  {
    id: 9,
    type: "PR",
    imgSrc: "/assets/images/blogs/hiveminds-ecommerce-conclave-2024.jpg",
    title: "Hiveminds eComm Conclave '24: India Opportunity Playbook",
    category: "E-Commerce",
    date: "June 17, 2024",
    description:
      "In “An India Opportunity Playbook,” the HiveMinds Ecomm Conclave 2024 article details a gathering of top industry experts. ",
    link: "/blog",
  },
  {
    id: 10,
    type: "PR",
    imgSrc: "/assets/images/blogs/ecommerce-cost-of-missing-early-trends.jpg",
    title: "E-commerce: The High Cost of Missing Early Trends",
    category: "E-Commerce",
    date: "April 05, 2023",
    description:
      "In today's fast-moving e-commerce arena, missing emerging trends can cost brands dearly.",
    link: "/blog/ecommerce-the-high-cost-of-missing-early-trends",
  },
  {
    id: 11,
    type: "PR",
    imgSrc: "/assets/images/blogs/ola-mapping-new-course-for-gps-advertising.jpg",
    title: "Ola: Mapping a New Course for GPS Advertising",
    category: "Digital Marketing",
    date: "April 5, 2023",
    description:
      "Ola Maps is carving out a new destination for GPS advertising, as the article details. ",
    link: "/blog/ola-mapping-a-new-course-for-gps-advertising",
  },
  {
    id: 12,
    type: "PR",
    imgSrc: "/assets/images/blogs/google-ends-continuous-scroll.jpg",
    title: "Google Ends Continuous Scroll: A New Search Era for Advertisers",
    category: "Digital Marketing",
    date: "July 9, 2024",
    description:
      "Google is set to end continuous scroll, prompting advertisers to embrace a return to traditional search pagination. ",
    link: "/blog/google-ends-continuous-scroll",
  }, {
    id: 13,
    type: "PR",
    imgSrc: "/assets/images/blogs/storytelling-in-digital-age.jpg",
    title: "Storytelling in the Digital Age: Brand Communication & Its Impact",
    category: "Digital Marketing",
    date: "May 30, 2024",
    description:
      "The piece explores how brands are revolutionizing communication by leveraging digital marketing to tell authentic stories.",
    link: "/blog/storytelling-in-digital-age",
  },
  {
    id: 14,
    type: "PR",
    imgSrc: "/assets/images/blogs/metaverse-and-ecommerce.jpg",
    title: "Metaverse & E-commerce: Game-Changer or Just Hype?",
    category: "Digital Marketing",
    date: "May 20, 2024",
    description:
      "Exploring the frontier of digital retail, the article investigates whether the metaverse can revolutionize e-commerce. ",
    link: "/blog/metaverse-and-ecommerce-game-changer-or-just-a-hype",
  }, {
    id: 15,
    type: "PR",
    imgSrc: "/assets/images/blogs/republic-day-campaigns.jpg",
    title: "Republic Day Campaigns: An Expert's Guide",
    category: "Digital Marketing",
    date: "January 23, 2024",
    description:
      "Industry experts share best practices for Republic Day campaigns in this guide, highlighting the importance of combining authentic storytelling with strategic digital execution. ",
    link: "/blog/republic-day-campaigns",
  },
  {
    id: 16,
    type: "PR",
    imgSrc: "/assets/images/blogs/indian-social-media.jpg",
    title: "Indian Social Media: Case Studies",
    category: "Social Media Management",
    date: "March 05, 2025",
    description:
      "This curated collection of Indian social media case studies reveals how brands are revolutionizing engagement. ",
    link: "/blog/indian-social-media-case-studies",
  },
  {
    id: 17,
    type: "Blog",
    imgSrc: "/assets/images/blogs/blog-detail-hero.png",
    title: "Decoding Attribution Windows: Finding the Perfect Fit for Your Marketing Strategy",
    category: "Digital Marketing",
    date: "June 6, 2024",
    description:
      "Discover how attribution windows shape your marketing efforts. This blog unpacks various models and their impact on campaign performance... ",
    link: "/blog/decoding-attribution-windows",
  },
  {
    id: 18,
    type: "Blog",
    imgSrc: "/assets/images/blogs/2024-seo-updates.jpg",
    title: "2024 SEO Updates All Bundled Together for You to Glance",
    category: "SEO",
    date: "June 24, 2025",
    description:
      "Discover how advanced attribution models can transform your marketing strategy. ",
    link: "/blog/2024-seo-updates-all-bundled-together-for-you-to-glance",
  },

];

const BlogCard = ({
  imgSrc,
  title,
  description,
  link,
  dcppara,
  category,
  date,
}) => {
  return (
    <div className="w-[30vw] h-[40vw] pl-[0.5vw] pb-[3vw] fadeup group blog-link tablet:w-[44vw] tablet:h-[70vw] mobile:w-[92vw] mobile:h-full">
      <Link href={link}>

        <div className="h-[20.5vw] w-full relative overflow-hidden rounded-[1.3vw] tablet:h-[30vw] mobile:h-[60vw] mobile:rounded-[4vw]">
          <Image
            src={imgSrc}
            fill
            alt={`${title} Case Study`}
            className="group-hover:scale-[1.1] transition-all duration-500 ease-in-out object-cover "
          />
        </div>
      </Link>
      <div className="mt-[1vw] px-[0.5vw] flex flex-col h-[28%] gap-[1.5vw] justify-between mobile:gap-[5vw] mobile:mt-[5vw] tablet:gap-[3vw]">
        <div className="flex flex-col gap-[0.5vw] mobile:gap-[2vw] tablet:gap-[1.5vw]">
          <p className="text-[1.6vw] font-medium py-[0.5vw] mobile:text-[6vw] tablet:text-[3vw] tablet:leading-[1.2]">{title}</p>
          <div className="flex gap-[4vw] text-black/70 mobile:w-full mobile:justify-between">
            <p className="content">{category}</p>
            <p className="content">{date}</p>
          </div>
          <div className=" w-[95%]" />
          <p className="content">
          {description}
          </p>
        </div>
        <Link href={link}>
          <div className="w-fit">
            <div
              className={`cursor-pointer flex w-fit relative text-[1.1vw] gap-[0.7vw] items-center mobile:gap-[2vw] tablet:text-[2.5vw] mobile:text-[5vw] `}
            >
              <span className="relative link-line group-hover:text-primary ">View More</span>
              <svg
                className="relative -rotate-[90deg] w-[1vw] h-[1vw] overflow-hidden mobile:w-[5vw] mobile:h-[5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]"
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

const Listing = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [filteredblogs, setFilteredblogs] = useState(blogsData);

  const handleFilter = () => {
    const filtered = blogsData.filter((study) => {
      const studyYear = new Date(study.date).getFullYear().toString();
  
      
      if (selectedCategory && !selectedYear) {
        return study.type === selectedCategory;
      }
      
     
      if (!selectedCategory && selectedYear) {
        return studyYear === selectedYear;
      }
  
    
      if (selectedCategory && selectedYear) {
        return study.type === selectedCategory && studyYear === selectedYear;
      }
  
    
      return true;
    });
  
    setFilteredblogs(filtered);
  };
  
  return (
    <section className="w-screen h-full pb-[7%] mobile:pb-[10%]">
    <div className="container-lg h-full">
      <div className="flex items-center py-[3vw] space-x-4 mobile:flex-col mobile:items-start mobile:gap-[4vw] mobile:space-x-0 mobile:py-[7vw] ">
        <div className="flex flex-col">
          <p className="content px-[1vw] py-[0.5vw] mobile:py-[2vw]">Category:</p>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[10vw] h-[3.5vw] drop-shadow-none shadow-none mobile:h-full mobile:py-3.5 mobile:px-6  border-[1.5px] border-black rounded-full tablet:w-[20vw] mobile:w-[80vw] ">
              <SelectValue placeholder="Category:" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Blog">Blog</SelectItem>
                <SelectItem value="PR">PR</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col">
          <p className="content px-[1vw] py-[0.5vw] mobile:py-[2vw]">Year:</p>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-[10vw] h-[3.5vw] drop-shadow-none shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 border-[1.5px] border-black rounded-full tablet:w-[20vw] mobile:w-[80vw]">
              <SelectValue placeholder="Select Year:" />
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
        <button
          className="bg-[#134bd5] text-white px-[3vw] py-[1vw] mt-[3vw] rounded-full mobile:text-[5vw] mobile:px-[7vw] mobile:py-[2.5vw]"
          onClick={handleFilter}
        >
          Apply
        </button>
      </div>

      {/* Filtered Case Studies */}
      <div className="flex flex-wrap items-start justify-start gap-[1vw] gap-y-[2vw] tablet:mt-[4vw] mobile:gap-y-[8vw]">
        {filteredblogs.map((study) => (
          <BlogCard
            key={study.id}
            category={study.category}
            date={study.date}
            imgSrc={study.imgSrc}
            title={study.title}
            dcppara={study.dcppara}
            description={study.description}
            link={study.link}
          />
        ))}
      </div>
    </div>

    {/* <div className="my-[3vw] border-[1.5px] border-black rounded-full py-[1.2vw] w-[30%] ml-auto mr-auto">
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive className={"text-[1.2vw] "}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className={"text-[1.2vw] "} > 2 </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className={"text-[1.2vw] "}>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className={"text-[1.2vw] "}>4</PaginationLink>
        </PaginationItem>
         <PaginationItem>
          <PaginationLink href="#" className={"text-[1.2vw] "}>5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </div> */}
  </section>
  );
};

export default Listing;
