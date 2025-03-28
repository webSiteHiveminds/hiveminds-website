import Image from "next/image";
import React from "react";
import img1 from "../../../public/assets/images/about/csr-1.jpg";
import img2 from "../../../public/assets/images/about/csr-2.jpg";
import img3 from "../../../public/assets/images/about/csr-3.jpg";
import img4 from "../../../public/assets/images/about/csr-4.jpg";
import img5 from "../../../public/assets/images/about/csr-5.jpg";
import img6 from "../../../public/assets/images/about/csr-6.jpg";

const Responsibility = () => {
  return (
    <>
      <section className="w-screen h-full py-[5%] mobile:py-10 tablet:py-[8%]" id="responsibility">
        <div className="flex flex-col items-center justify-center gap-[1vw] pb-[5vw] mobile:block mobile:pb-8 tablet:items-start container-lg tablet:gap-[3vw]">
          <h2 className="heading-2 headingAnim mobile:pb-4">
            Corporate Social <span className="blue-text">Responsibility</span>
          </h2>
          <p className="content w-[70%] text-center fadein mobile:text-left mobile:w-full tablet:text-left">
          Growth isn&apos;t just about numbers—it&apos;s about the positive impact we create. Through our CSR programs, we support education, sustainability, and community well-being, ensuring that our success contributes to a larger purpose.
          </p>
        </div>
        <div className="container-lg grid grid-cols-16 grid-rows-5 gap-[1.2vw] h-[35vw] mobile:grid-cols-2 mobile:grid-rows-none mobile:h-full mobile:gap-4 mobile:pb-10">
          <div className="overflow-hidden rounded-2xl col-span-4 row-span-3 mobile:col-span-2 mobile:row-auto mobile:h-[70vw]">
            <Image src={img1} alt="responsibilty-images" placeholder="blur" className="object-fit w-full h-full hover:scale-[1.05] ease-in-out duration-500" />
          </div>
          <div className="overflow-hidden rounded-2xl col-span-4 row-span-2 row-start-4 mobile:col-span-1 mobile:row-auto mobile:h-[60vw]">
            <Image src={img2} alt="responsibilty-images" placeholder="blur" className="object-cover w-full h-full hover:scale-[1.05] ease-in-out duration-500" />
          </div>
          <div className="overflow-hidden rounded-2xl col-span-5 row-span-5 mobile:col-span-1 mobile:row-auto mobile:h-[60vw]">
            <Image src={img5} alt="responsibilty-images" placeholder="blur" className="object-fit w-full h-full hover:scale-[1.05] ease-in-out duration-500" />
          </div>
          <div className="overflow-hidden rounded-2xl col-span-3 row-span-2 mobile:col-span-2 mobile:row-auto mobile:h-[70vw]">
            <Image src={img4} alt="responsibilty-images" placeholder="blur" className="object-fit w-full h-full hover:scale-[1.05] ease-in-out duration-500" />
          </div>
          <div className="overflow-hidden rounded-2xl col-span-3 row-span-3 order-3 mobile:order-last mobile:col-span-1 mobile:row-auto mobile:h-[60vw]">
            <Image src={img3} alt="responsibilty-images" placeholder="blur" className="object-cover w-full h-full hover:scale-[1.05] ease-in-out duration-500" />
          </div>
          <div className="overflow-hidden rounded-2xl col-span-4 row-span-5 mobile:col-span-1 mobile:row-auto mobile:h-[60vw]">
            <Image src={img6} alt="responsibilty-images" placeholder="blur" className="object-fit w-full h-full hover:scale-[1.05] ease-in-out duration-500" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Responsibility;
