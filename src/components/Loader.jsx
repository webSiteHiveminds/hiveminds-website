import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

const LoaderHome = () => {
  const gradient = useRef(null);
  const loaderMain = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stop Lenis scroll while loader is active
  

      const tl = gsap.timeline();
      tl.to(gradient.current, {
        duration: 2,
        xPercent: 100,
        delay: 0.5,
        ease: "power3.out",
      })
      .to(loaderMain.current, {
        duration: 0.5,
        yPercent: -100,
        delay: -0.5,
        onComplete: () => {
          gsap.set(loaderMain.current, {
            display: 'none',
            pointerEvents: 'none',
          });

          // Restart Lenis scroll after animation
   
        },
      });
    });

    return () => ctx.revert();
  }, [lenis]); // Ensure lenis is included in the dependency array

  return (
    <>
      <div
        ref={loaderMain}
        id="preloader"
        className="bg-white text-white h-screen w-screen fixed z-[999] flex items-center justify-center"
      >
        <div className="relative flex items-center justify-center mb-10">
          <Image
            src={"/assets/icons/logo.svg"}
            alt="hiveminds-logo"
            priority={true}
            width={150}
            height={80}
            className="w-[18vw] h-[15vw] mobile:w-[50vw] tablet:w-[35vw] tablet:h-[20vw] mobile:h-[30vw] object-contain"
          />
          <span
            ref={gradient}
            className="absolute top-0 -left-full block w-[200%] h-full bg-gradient-to-l from-current via-current to-transparent"
          />
        </div>
      </div>
    </>
  );
};

export default LoaderHome;
