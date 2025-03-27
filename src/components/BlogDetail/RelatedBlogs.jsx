import React, { useEffect } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import styles from "../Button/styles.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const relatedBlogsData = [
  {
    id: 1,
    title: "How to Find Your Dream Digital Marketing Job",
    category: "Digital Marketing",
    date: "9 June, 2024",
    imgSrc: "/assets/images/blogs/blog-img3.png",
    link: "#",
  },
  {
    id: 2,
    title: "How to use ChatGPT for Keyword Research",
    category: "SEO",
    date: "9 June, 2024",
    imgSrc: "/assets/images/blogs/blog-img4.png",
    link: "/",
  },
  {
    id: 3,
    title: "How to Use Wikipedia to Scale your Off-Page SEO",
    category: "Digital Marketing",
    date: "9 June, 2024",
    imgSrc: "/assets/images/blogs/blog-img5.png",
    link: "#",
  },
];

const RelatedBlogs = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".related-blog", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#related-blogs",
          start: "top 60%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="h-full w-screen pb-[5%] mobile:py-[10%]" id="related-blogs">
      <div className="py-[4vw] w-full container-lg">
        <h2 className="heading-2 w-[80%] fadein mobile:w-full">
          Related <span className="text-primary">Blogs</span>
        </h2>
        <div className="w-full flex justify-between mobile:flex-col mobile:gap-[7vw] mobile:mt-[5vw]">
          <p className="text-[1.2vw] mt-[2vw] w-[35%] fadein mobile:w-full mobile:text-[4vw] tablet:text-[2.4vw] tablet:w-[50%]">
            Discover our accolades and industry recognition that highlight our
            commitment to excellence.
          </p>
          <div className="w-fit">
            <PrimaryButton text={"All Blogs"} href={"/blog"} className="fadein" />
          </div>
        </div>
        <div className="w-full flex pt-[5vw] pb-[1vw] gap-[1vw] mobile:flex-col mobile:gap-[7vw] mobile:mt-[7vw] tablet:gap-[2vw]">
          {relatedBlogsData.map((blog) => (
            <div key={blog.id} className={`blogs related-blog group blog-link ${blog.id%3==0?"tablet:hidden":""}`}>
              <Link href={"#"} className="w-[30vw] h-[22vw] rounded-[1.2vw] overflow-hidden block mobile:w-full mobile:h-[70vw] mobile:rounded-[4vw] tablet:w-[44vw] tablet:h-[30vw] tablet:rounded-[2.5vw]">
                <Image
                  src={blog.imgSrc}
                  height={390}
                  width={570}
                  alt={blog.title}
                  className="object-cover w-full h-full group-hover:scale-[1.1] transistion-all duration-500 ease-in-out"
                /> 
              </Link>
              <div className="py-[1vw] w-[80%] mobile:w-full mobile:mt-[7vw] mobile:flex mobile:flex-col mobile:gap-[1.5vw] tablet:ml-[1vw]">
                <p className="text-[1.5vw] font-medium mobile:text-[6vw] mobile:leading-[1.2] tablet:text-[3vw]">{blog.title}</p>
                <div className="flex items-center gap-[3vw] w-[80%] py-[1vw] pb-[2vw] mobile:w-full mobile:justify-between tablet:w-full tablet:gap-[5vw] ">
                  <p className=" text-[1vw] mobile:text-[4vw] tablet:text-[2vw]">{blog.category}</p>
                  <p className=" text-[1vw] mobile:text-[4vw] tablet:text-[2vw]">{blog.date}</p>
                </div>
                <Link href="#">
                  <div className="w-fit">
                    <div
                      className={`cursor-pointer flex w-fit relative text-[1.1vw] gap-[0.7vw] items-center mobile:gap-[2vw] tablet:text-[2.5vw] mobile:text-[5vw] `}
                    >
                      <span className="relative link-line group-hover:text-primary ">
                        View More
                      </span>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogs;
