import Image from "next/image";
import React from "react";

const team = [
  {
    id: 1,
    name: "Jyothirmayee J T",
    src: "/assets/images/about/jyothirmayee.png",
    designation: "Chief Executive Officer, Founder",
  },
  {
    id: 2,
    name: "Deepti Bhadauria",
    src: "/assets/images/about/deepti-bhadauria.png",
    designation: "Chief Strategy Officer",
  },
  {
    id: 3,
    name: "Pradeep Saluja",
    src: "/assets/images/about/pradeep-saluja.png",
    designation: "Chief Operating Officer",
  },
  {
    id: 4,
    name: "Kunal Danda",
    src: "/assets/images/about/kunal-danda.png",
    designation: "SVP - Client Success",
  },
  {
    id: 5,
    name: "Sajeesh Radhakrishnan",
    src: "/assets/images/about/sajeesh-radhakrishnan.png",
    designation: "SVP- Operations",
  },
  {
    id: 6,
    name: "Abhishek Upadhya",
    src: "/assets/images/about/abhishek-updhya.png",
    designation: "SVP - Digital Innovation & Strategy",
  },
  {
    id: 7,
    name: "Venu Gopal H G",
    src: "/assets/images/about/venu-gopal.png",
    designation: "SVP- Client Success & Operations",
  },
  {
    id: 8,
    name: "Aparna Thakur",
    src: "/assets/images/about/aparna-thakur.png",
    designation: "SVP - Client Servicing",
  },
  {
    id: 9,
    name: "Vinod Monubol",
    src: "/assets/images/about/vinod-monubol.png",
    designation: "VP - Client Success",
  },
  
 
  {
    id: 10,
    name: "Aayush Arora",
    src: "/assets/images/about/aayush-arora.png",
    designation: "VP - Client Success",
  },
 
  // {
  //   id: 11,
  //   name: "Mohit Grover",
  //   src: "/assets/images/about/mohit-grover.png",
  //   designation: "VP - Client Servicing",
  // },
  
  {
    id: 11,
    name: "Sikha Agrawalla",
    src: "/assets/images/about/sikha-agrawalla.png",
    designation: "VP - People & Culture",
  },
  
];
const Leadership = () => {
  return (
    <>
      <section className="w-screen h-full py-[5vw] mobile:pt-8 mobile:pb-12" id="leadership">
        <div className="container-lg h-full flex items-center justify-center flex-col mobile:max-w-full tablet:items-start">
          <div className="py-[1vw] w-[75%] text-center px-[1vw] mobile:w-full mobile:text-left mobile:px-[5vw] tablet:text-left tablet:w-full">
            <p className="content fadein">
              We revolutionize digital marketing through innovative strategies,
              creative insights, and data-driven solutions. We empower brands to
              transform their online presence, optimize customer journeys, and
              drive sustainable growth. Our collaborative approach and
              relentless pursuit of excellence set us apart, ensuring every
              campaign delivers measurable impact and long-term success
              together.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw] mobile:block mobile:py-8 mobile:px-[5vw] tablet:items-start tablet:gap-[3vw]">
              <h2 className="heading-2 headingAnim">
                Our
                <span className="blue-text"> Leadership</span>
              </h2>
              <p className="content w-[70%] text-center fadein mobile:w-full mobile:mt-5 mobile:text-left tablet:text-left">
                Meet our dynamic leaders—visionaries and industry experts who
                blend strategic insight with creative passion, steering
                HiveMinds and our clients toward digital excellence.
              </p>
            </div>

            <div className="mobile:w-screen mobile:overflow-hidden">
              <div className="flex gap-[1.5vw] flex-wrap w-full h-full py-[2vw] mobile:flex-nowrap mobile:overflow-x-auto mobile:gap-[5vw] tablet:gap-[2.5vw]">
                {team.map((team, id) => (
                  <div className="flex flex-col mb-[2vw] gap-[0.5vw] py-[1vw] fadeup mobile:first:pl-[5vw] mobile:last-of-type:pr-[5vw] mobile:gap-4 tablet:gap-[1.5vw]" key={id}>
                    <div className="w-[29.5vw] h-[33vw] rounded-[1.4vw] overflow-hidden bg-black mobile:w-[80vw] mobile:h-[90vw] mobile:rounded-[1.2rem] tablet:w-[43vw] tablet:h-[50vw]">
                      <Image
                        src={team.src}
                        alt={`${team.name} image`}
                        width={500}
                        height={700}
                        className="w-full h-full object-cover hover:scale-[1.07] transition-all duration-500 ease-in-out"
                      />
                    </div>
                    <div className="flex flex-col mobile:pl-2 tablet:pl-2">
                      <h4 className="text-[1.6vw] pt-[1vw] mobile:text-lg leading-[1.2] tablet:text-[3.5vw]">{team.name}</h4>
                      <p className="content">{team.designation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leadership;
