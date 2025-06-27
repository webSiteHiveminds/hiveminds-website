/* eslint-disable react-hooks/rules-of-hooks */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitInLineWord, SplitInLine} from "./splitTextUtils";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {useLenis} from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export function headingAnim() {

  const router = useRouter();

  useEffect(()=>{
      const ctx = gsap.context(()=>{
          const headingAnim = document.querySelectorAll(".headingAnim");
          headingAnim.forEach((headingAnim)=>{
              SplitInLineWord(headingAnim);
              const headingWord = headingAnim.querySelectorAll(".word");
              gsap.fromTo(headingWord,{
                 
                    maskPosition: "100% 100%",
                  
              },{
                  maskPosition:"0% 100%",
                  stagger:0.05,
                  duration:2.5,
                  ease:"power3.out",
                  scrollTrigger: {
                    trigger: headingWord,
                    start: 'top 85%', 
                  },
              });
          })
      });
      
      return () => ctx.revert();
  },[router.pathname]);
      
}

export function imgAnim(){

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      const imgAnim = document.querySelectorAll(".imgAnim")
      imgAnim.forEach((img)=>{
        gsap.to(img,{
          scaleY:0,
          duration:1.5,
          ease:"power4.inOut",
          scrollTrigger:{
            trigger:img,
            start:"top 90%",
          
          }
       
         })

      })


    })
    return()=>ctx.revert()
  })
}

export function paraAnim() {
    useEffect(() => {
      const ctx = gsap.context(() => {
        const paraAnimations = document.querySelectorAll("[data-para-anim]");
        paraAnimations.forEach((paraAnimation) => {
          SplitInLine(paraAnimation);
          const paraLine = paraAnimation.querySelectorAll(".line-internal");
          gsap.from(paraLine, {
            scrollTrigger: {
              trigger: paraAnimation,
              start: "top 90%",
            },
            duration: 1.2,
            yPercent: 100,
            stagger: 0.07,
            ease: "power3.out"
          });
        });
      });
      return () => ctx.revert();
    }, []);
  }
  export function fadeUp() {
    const router = useRouter();
    useEffect(() => {
      if (globalThis.innerWidth > 0) {
        const ctx = gsap.context(() => {
          const content = document.querySelectorAll(".fadeup");
          content.forEach((content) => {
            gsap.from(content, {
              scrollTrigger: {
                trigger: content,
                start: "top 90%",
              
                
              },
              opacity: 0,
              y:50,
              ease:"power3.out",
              duration: 2,
              
            });
          });
        });
        return () => ctx.revert();
      }
    }, [router.pathname]);
  }
  export function fadeIn() {
    useEffect(() => {
      if (globalThis.innerWidth > 0) {
        const ctx = gsap.context(() => {
          const content = document.querySelectorAll(".fadein");
          content.forEach((content) => {
            gsap.from(content, {
              scrollTrigger: {
                trigger: content,
                start: "top 90%",
                // end: "bottom 60%",
              },
              opacity: 0,
              ease:"power1.out",
              duration: 1,
              stagger: 0.1,
            });
          });
        });
        return () => ctx.revert();
      }
    }, []);
  }

export function slideIn(){
    useEffect(()=>{

        const Slide = document.querySelectorAll(".slideIn");
    
        Slide.forEach((slide) => {
          let ctx = gsap.context(() => {
      
            gsap.from(
              slide,
              {
                opacity: 0,
                xPercent:100,
                duration:1,
                
                scrollTrigger: {
                  trigger: slide,
                  start: "top 80%",
                  
                },
              }
            );
          });

          return () => ctx.revert();  
    },[])
    });
}

export function lineAnim() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lineDraws = document.querySelectorAll(".lineDraw");
      lineDraws.forEach((lineDraw) => {
        gsap.from(lineDraw, {
          scrollTrigger: {
            trigger: lineDraw,
            start: "top 80%",
          },
          scaleX: 0,
          transformOrigin: "left",
          duration: 1,
          yPercent: 100,
          stagger: 0.07,
          ease: "power3.out",
        });
      });
    })
    return () => ctx.revert()
  }, []);
}

export function routeChangeTop(){
  const router = useRouter();
    const lenis = useLenis();
  useEffect(() => {
    const handleRouteChange = () => {
      if (lenis) {
        lenis.start();
        lenis.scrollTo(0, { immediate: true });
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, lenis]);
}