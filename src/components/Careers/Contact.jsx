import React from 'react';
import Image from 'next/image';

import LinkButton from '../Button/LinkButton';

import Careerform from './Careerform';


const Contact = () => {


  return (
    <section id="contact">
      <div className="w-screen h-full z-[10] relative container-lg py-[7%] overflow-hidden mobile:py-[12%]">
        <div className="w-full h-full flex gap-[10vw] mobile:flex-col tablet:flex-col ">
          <div className="w-[45%] flex flex-col gap-[2vw] mobile:w-full mobile:flex-col mobile:gap-[5vw] tablet:w-full">
            <h2 className="heading-2 headingAnim">
              Apply <span className="blue-text">Now</span>
            </h2>
            <p data-para-anim className="content w-[70%] mobile:w-full">
            Leave us your details and a member of our team will get back to you as soon as possible.
            </p>
            <div className='pt-[4vw] flex flex-col gap-[2vw] w-[50%] mobile:w-full mobile:gap-[5vw] tablet:gap-[3.5vw]'>
           <p data-para-anim className='text-[1.5vw] font-medium mobile:text-[5.5vw] tablet:text-[3vw]'>Don&apos;t see any <span className='text-primary'>job opening</span> that might fit you?</p>
           <LinkButton btnLink={"mailto:ta@hiveminds.in"} btnText={"Send Resume"}/>
           {/* <Link href={"mailto:ta@hiveminds"}>Send Resume</Link> */}
           </div>
          </div>

          <div className="w-[50%] h-full mobile:w-full tablet:w-full">
            <Careerform />
          </div>
        </div>

        <div
          className="absolute h-[2vw] w-[2.2vw] top-[25%] left-[25%] blue-hexagon-animation mobile:hidden tablet:hidden"
         
        >
          <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon" />
        </div>
        <div
          className="absolute h-[2vw] w-[2.2vw] top-[5%] left-[15%] yellow-hexagon-animation mobile:hidden tablet:hidden"
   
        >
          <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
