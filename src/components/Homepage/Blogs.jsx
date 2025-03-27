import React from "react";
import Image from "next/image";
import Link from "next/link";
import PlainButton from "../Button/PlainButton";
import styles from "../Button/styles.module.css";

import { formatDate } from "@/lib/datetime";


const BlogCard = ({ link, para, src, date  ,className}) => {
    const formattedDate = formatDate(date);
  return (
    <>
      <Link
        href={link}
        className={`h-[35vw] w-[26vw] bg-white rounded-[1.5vw] flex flex-col blog-link items-start gap-[1vw] px-[1vw] py-[1vw] group hover:shadow-lg hover:drop-shadow-lg transition-all ease-in-out duration-500 mobile:w-[85vw] mobile:h-[110vw] mobile:p-[3.5vw] mobile:rounded-[4vw] tablet:w-full tablet:h-full tablet:px-[3vw] tablet:py-[3vw] tablet:rounded-[4vw] ${className}`}
      >
        <div className="h-[55%] w-full relative overflow-hidden rounded-[1.2vw] mobile:rounded-[2.5vw] tablet:h-[50vw] tablet:rounded-[3vw]">
          <Image
            src={src}
            fill
            alt="blogs-img"
            className="group-hover:scale-[1.1] transition-all ease-in-out duration-500"
          />
        </div>
        <div className="px-[0.5vw] w-[90%] h-[40%] flex flex-col gap-[1vw] mt-[1vw] mobile:mt-[3vw] tablet:h-[20%] tablet:gap-[3vw]">
          <p className="text-[1.35vw] font-medium montreal mobile:text-[4.5vw] tablet:text-[3vw] tablet:leading-[1.2]">{para}</p>
          <div className="flex flex-col justify-between h-full w-full pb-[2vw] tablet:gap-[2vw]">
            <p className="text-[1vw] text-black/50 mobile:text-[4vw] tablet:text-[2vw]">{formattedDate}</p>
            <div className="w-fit">
              <div
                className={`cursor-pointer flex w-fit relative text-[1.1vw] gap-[0.7vw] items-center mobile:gap-[2vw] tablet:text-[2.5vw] mobile:text-[4vw] `}
              >
                <span className="relative link-line group-hover:text-primary ">Read More</span>
                <svg
                  className="relative -rotate-[90deg] w-[1vw] h-[1vw] overflow-hidden mobile:w-[4vw] mobile:h-[4vw] mobile:mt-[-1vw] tablet:w-[2.5vw] tablet:h-[2.5vw]"
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
          </div>
        </div>
      </Link>
    </>
  );
};

const Blogs = ({posts}) => {
 
  // useEffect(() => {
  //   if (globalThis.innerWidth > 1024) {
  //     const ctx = gsap.context(() => {
  //       gsap.from(".blog", {
  //         xPercent: 100,
  //         opacity: 0,
  //         duration: 1.2,
  //         scrollTrigger: {
  //           trigger: "#blogs",
  //           start: "top 80%"
  //         }
  //       })
  //     })
  //     return () => ctx.revert();
  //   }
  // }, []);

  return (
    <>
      <section id="blogs" className="relative">
        <div className="w-screen h-full flex items-center justify-center z-[10] mobile:flex-col ">
          <div className="w-[92%] h-full rounded-[1.2vw] bg-[#F2F2F2] flex  justify-center px-[2vw] py-[6vw] gap-[2vw]  drop-shadow-xl shadow-inner overflow-hidden mobile:flex-col mobile:py-[10vw] mobile:drop-shadow-none mobile:shadow-md mobile:px-[3.5vw] mobile:rounded-[4vw] tablet:flex-col tablet:rounded-[3vw] tablet:px-[5vw]">
            <div className="w-[35%] h-full mobile:w-full tablet:w-full ">
              <div className="flex flex-col gap-[2vw] mobile:gap-[4vw] tablet:gap-[3vw]">
                <h2 className="heading-2 headingAnim">
                  <span className="blue-text"> Passionate </span> About All
                  Things Digital?
                </h2>
                <p data-para-anim className="content w-[80%] mobile:w-[90%] tablet:w-[60%]">
                  Stay updated with our latest industry insights, company news,
                  and thought leadership.
                </p>
              </div>
              <div className="flex flex-wrap items-center mt-[2vw] gap-[0.7vw] mobile:gap-[1.5vw] tablet:gap-[2vw]">
                <PlainButton text={"Blogs"} link={"/blog?category=Blog"} className="fadeup" aria-label="to blogs" />
                <PlainButton text={"News"} link={"/blog?category=pr"} className="fadeup" aria-label="to pr"/>
              </div>
            </div>
            <div className="w-[70%] h-full flex items-center justify-center blog mobile:w-full mobile:flex-col mobile:mt-[8vw] tablet:w-full tablet:items-start tablet:justify-start tablet:mt-[5vw]">
              <div className="flex items-start justify-center gap-[1vw] h-full w-full mobile:flex-col mobile:gap-[7vw] tablet:justify-start tablet:flex-col tablet:gap-[5vw]">
                
                
                {posts.map((post,id)=>(
                  <BlogCard
                  key={id}
                  src={post.featuredImage.sourceUrl}
                  link={`/blog/${post.slug}`}
                  className={`${id>1?"hidden":""}`}
                  date={post.date}
                  para={
                    post.title
                  }
                />

                  
                ))}
              
                <div className="flex items-center justify-center h-[35vw] w-[7vw]  mobile:h-fit mobile:w-full tablet:h-fit tablet:w-full">
                  <Link href={"/blog"}
                    className={`cursor-pointer flex w-fit relative text-[1.1vw] gap-[0.7vw] group items-center mobile:gap-[2vw] tablet:text-[2.5vw] mobile:text-[4vw]  `}
                  >
                    <span className="relative link-line ">View All</span>
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
                        fill="currentColor"
                      />
                      <path
                        className={`origin-center group-hover:scale-0 group-hover:translate-y-[110%] ${styles.linkbutton}`}
                        d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile:block h-[60%] mobile:h-[40%] w-screen bg-primary absolute top-0 left-0 mobile:rounded-bl-[4vw] z-[-1] mobile:rounded-br-[4vw] rounded-bl-[2vw] rounded-br-[2vw] tablet:block tablet:h-[150vw] ">

        </div>
      </section>
    </>
  );
};

export default Blogs;
