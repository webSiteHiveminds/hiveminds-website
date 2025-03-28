/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import React from "react";
import {
  fadeIn,
  fadeUp,
  headingAnim,
  paraAnim,
  routeChangeTop,
} from "@/components/gsapAnimations";
import Hero from "@/components/Hero";
import Image from "next/image";
import img from "../../public/assets/images/ip/ips-hero-img.png";
import Metadata from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

const metadata={
  title:"HiveMinds: Innovative Digital Marketing Tools for Brand Growth",
  metaDescription:"Explore HiveMinds' proprietary tools like FeedX, Vizual, and OptiMMMix, designed to optimize digital campaigns and drive brand growth.",
  path:"our-ips",
  img:"homepage.png",
    date_published: "2025-03-21T00:00",
    date_modified: "2025-03-21T00:00",
}
const ips = () => {
  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();
   routeChangeTop()
  return (
    <>
    <Metadata metadata={metadata}/>
    <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <Hero
          title1={"Our"}
          title2={"IPs"}
          para={
            "Our data suite empowers brands by turning complex data into clear, actionable insights. Our integrated tools optimize digital campaigns, driving growth and efficiency at every step."
          }
          img={img}
        />
        <main>
          <section className="w-screen h-full py-[5vw]">
            <div className="container-lg text-center flex items-center justify-center  h-full mobile:text-left tablet:items-start tablet:justify-start">
              <div className="w-[75%] text-center mobile:text-left mobile:w-full tablet:text-left tablet:w-[90%]">
                <p data-para-anim className="content py-[1vw]">
                  Unlock the full potential of your data with HiveMinds&apos;
                  innovative tools. FeedX offers seamless catalog management for
                  D2C brands, handling millions of SKUs daily without ad
                  rejections. Vizual employs AI and ML to extract rapid image
                  insights, and OptiMMMix optimizes media spend using
                  Meta&apos;s Robyn technology.
                </p>
                <p data-para-anim className="content py-[1vw]">
                  With ADH, we perform deterministic, privacy-compliant campaign
                  analysis. BidSmart manages real-time bidding, while
                  Leadscoring ensures focus on high-potential prospects.
                  Hamuli&apos;s tailored BI dashboards and Hivepulse&apos;s
                  advanced sentiment analysis further empower data- driven
                  decision-making for sustained growth.
                </p>
              </div>
            </div>
          </section>
          <section className="w-screen h-full py-[2vw] pb-[10vw] mobile:pb-[15%]">
            <div className="container-lg w-full h-full flex flex-wrap gap-y-[5vw] justify-between mobile:flex-col">
              {ip.map((item, index) => (
                <div
                  key={index}
                  className="w-[48%]  py-[2vw] h-[55vw] pb-[5vw] rounded-[1.5vw] flex-col flex items-start shadow-lg px-[1.9vw] fadeup mobile:w-full mobile:h-full mobile:shadow-md mobile:rounded-[4.5vw] mobile:px-[3vw] mobile:pt-[3vw] tablet:w-[95%] tablet:h-[65vh] tablet:px-[3vw] tablet:py-[3vw] tablet:rounded-[3vw]"
                >
                  <div className="h-[30vw] pb-[2vw] mobile:w-full mobile:h-[50vw] tablet:w-3/5 tablet:h-[40vw]">
                    <Image
                      src={item.img}
                      width={790}
                      height={1090}
                      alt="service-card"
                      className="rounded-[1.2vw] fadein w-full h-full object-cover mobile:rounded-[3vw] tablet:rounded-[3vw]"
                    />
                  </div>
                  <div className="tablet:px-[1vw]">
                    <h2 className="text-[2.8vw] font-medium headingAnim mobile:text-[6.5vw] tablet:text-[4vw]">
                      {item.title}
                    </h2>
                    <p
                      className="content tracking-wide para py-[1vw] fadeup tablet:w-[90%] "
                      dangerouslySetInnerHTML={{ __html: item.para }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ips;

const ip = [
  {
    img: "/assets/images/ip/feedx-img.png",
    title: " FeedX",
    para: "FeedX is a state-of-the-art catalog management solution developed by HiveMinds for D2C brands on Google and Facebook. It efficiently handles over 3 million SKUs daily with a proven record of zero ad disapprovals, refreshing entire product catalogs in just 20 minutes. This robust tool ensures your digital campaigns display accurate, up-to-date information, streamlining operations, reducing manual errors, and optimizing digital advertising for maximum impact and efficiency.",
  },
  {
    img: "/assets/images/ip/wizual-img.png",
    title: " Vizual",
    para: "Vizual is an advanced image analysis solution by HiveMinds that leverages Machine Learning and Artificial Intelligence to transform visual data. By automating image scrutiny, Vizual rapidly extracts critical insights, eliminating manual review. This innovative tool provides actionable intelligence for optimizing creative strategies and enhancing campaign precision, enabling brands to quickly understand visual trends, optimize content, and gain a competitive edge in today’s dynamic digital marketplace.",
  },
  {
    img: "/assets/images/ip/optimmmix-img.png",
    title: " OptiMMMix",
    para: "OptiMMMix is an in-house optimization tool developed by HiveMinds that harnesses Meta’s Robyn technology and insights from proprietary MMM models. It analyzes media saturation levels, identifies effective channels, eliminates bias in decision-making, and delivers precise recommendations for media reallocation. This powerful solution enables brands to fine-tune their advertising strategies in real time, ensuring maximum efficiency, optimal ROI, and superior performance across all digital channels—unlocking unmatched efficiency in every campaign.",
  },
  {
    img: "/assets/images/ip/ip-image.png",
    title: " ADH",
    para: "Google Ads Data Hub (ADH) is a cutting-edge, privacy-compliant measurement solution that empowers advertisers with deterministic insights into digital campaign performance. Acting as a secure data clean room, ADH enables HiveMinds to merge proprietary brand data with event-level Google data, offering a comprehensive understanding of audience behavior and campaign impact.This innovative tool facilitates precise campaign analysis, ensuring strategies are optimized, transparent, and aligned with regulatory standards for enhanced ROI, maximizing clarity and actionable measurable results.",
  },
  {
    img: "/assets/images/ip/bidsmart-img.png",
    title: " BidSmart ",
    para: "BidSmart is an advanced bid optimization engine developed by HiveMinds that leverages near real-time data to manage cost-per-click and return on ad spend efficiently. By automating bid adjustments and eliminating manual processes, BidSmart ensures data-driven bidding on e- commerce platforms, maximizing campaign performance and ROI. It empowers brands to respond instantly to market changes, dynamically optimizing bids for the best possible outcomes. BidSmart delivers measurable efficiency and exceptional digital results at scale.",
  },
  {
    img: "/assets/images/ip/ip-image.png",
    title: " Leadscoring",
    para: "Leadscoring is a transformative tool that revolutionizes how businesses identify and prioritize high-value leads in a competitive market. By assigning scores based on demographics, behavior, and engagement, it streamlines the sales process and maximizes conversion rates. This data-driven approach ensures efficient resource allocation, eliminates wasted efforts, and empowers teams to focus on prospects with the greatest potential, driving revenue growth and propelling sales strategies to unprecedented heights. Experience measurable, sustainable growth through streamlined, optimized lead prioritization and conversion.",
  },
  {
    img: "/assets/images/ip/ip-image.png",
    title: " Hamuli",
    para: "Hamuli is HiveMinds’ bespoke BI dashboard service that unlocks your data’s full potential. Utilizing cutting-edge technology, Hamuli crafts intuitive, customizable dashboards that visualize KPIs, track trends, and forecast insights in real time. By seamlessly integrating data from multiple sources, it provides actionable intelligence for informed decision-making, empowering teams to boost efficiency, optimize performance, and drive sustainable growth in a dynamic business environment. Hamuli transforms raw data into strategic insights, enabling faster, effective decisions and measurable operational improvements for lasting growth.",
  },
  {
    img: "/assets/images/ip/hivepulse-img.png",
    title: " Hivepulse",
    para: "Hivepulse is HiveMinds’ advanced sentiment analysis tool that leverages AI to transform vast text data into clear, actionable insights. By analyzing customer feedback, public opinion, and brand perception, Hivepulse reveals valuable emotional and attitudinal trends. This empowers businesses to make informed decisions, enhance customer experiences, and mitigate risks effectively. Hivepulse converts data overload into strategic intelligence, enabling organizations to navigate complex digital landscapes with confidence and drive measurable, sustainable growth. Unlocking insights that propel remarkable success and innovation at scale.",
  },
];
