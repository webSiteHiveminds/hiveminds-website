import Image from "next/image";
import Link from "next/link";
import styles from '../Button/styles.module.css'
import { postPathBySlug } from "@/lib/blogs";
import { formatDate } from "@/lib/datetime";

const BlogCard = ({ imgSrc, title, description, link, category, date }) => {

    const path = postPathBySlug(link);
    const formattedDate = formatDate(date);
    
    // make description of 100 words 
    const descriptionTrimmed = description.substring(0, 95) + '...';

    return (
        <div className="w-[30vw] h-fit pl-[0.5vw] pb-[3vw] fadeup group blog-link tablet:w-[44vw] tablet:h-[70vw] mobile:w-[92vw] mobile:h-full">
            <Link href={`/${path}`}>
                <div className="h-[20.5vw] w-full relative overflow-hidden rounded-[1.3vw] tablet:h-[30vw] mobile:h-[60vw] mobile:rounded-[4vw]">
                    <Image
                        src={imgSrc.sourceUrl}
                        fill
                        sizes={imgSrc.sizes}
                        alt={imgSrc.altText}
                        className="group-hover:scale-[1.1] transition-all duration-500 ease-in-out object-cover"
                    />
                </div>
            </Link>
            <div className="mt-[1vw] px-[0.5vw] flex flex-col h-[28%] gap-[1.5vw] justify-between mobile:gap-[5vw] mobile:mt-[5vw] tablet:gap-[3vw]">
                <div className="space-y-[1vw] mobile:space-y-[2vw] tablet:space-y-[1.5vw]">
                    <h3 className="text-[1.6vw] font-medium py-[0.5vw] mobile:text-[6vw] tablet:text-[3vw] leading-[1.2]">{title}</h3>
                    <div className="flex gap-[4vw] justify-between text-black/60 text-[1vw] tablet:text-lg mobile:text-lg mobile:w-full mobile:justify-between">
                        <p className="">{category}</p>
                        <p className="">{formattedDate}</p>
                    </div>
                    <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: descriptionTrimmed }}
                    />
                </div>
                <Link href={`/${path}`}>
                    <div className="w-fit">
                        <div className={`cursor-pointer flex w-fit relative text-[1.1vw] gap-[0.7vw] items-center mobile:gap-[2vw] tablet:text-[2.5vw] mobile:text-[5vw]`}>
                            <span className="relative link-line group-hover:text-primary ">View More</span>
                            <svg className="relative -rotate-[90deg] w-[1vw] h-[1vw] overflow-hidden mobile:w-[5vw] mobile:h-[5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={`origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:text-primary ${styles.linkbutton}`} d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor" />
                                <path className={`origin-center group-hover:scale-0 group-hover:translate-y-[110%] group-hover:text-primary ${styles.linkbutton}`} d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;