/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React, { useEffect } from 'react'
import { fadeIn, fadeUp, headingAnim, paraAnim, routeChangeTop } from '@/components/gsapAnimations'
import Hero from '@/components/Hero';
import img from '../../public/assets/images/careers/careers-hero-img.png'
import Culture from '@/components/Careers/Culture';
import Contact from '@/components/Careers/Contact';
import Metadata from '@/components/Metadata';
import { WebpageJsonLd } from '@/lib/json-ld';
import  styles from '@/styles/jobs.module.css'

const metadata={
    title:"HiveMinds Careers | Join Our Innovative Digital Team",
    metaDescription:"Explore career opportunities at HiveMinds. Join our team to drive digital transformation, innovate in marketing, and grow your career in a collaborative environment.",
    path:"careers",
    img:"homepage.png",
    date_published: "2025-03-21T00:00",
    date_modified: "2025-03-21T00:00",
}
const careers = () => {
    headingAnim();
    paraAnim();
    fadeUp();
    fadeIn();
     routeChangeTop()
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.khConfig = {
                identifier: "ba2656db-0fdb-4859-a652-f6eec08f8d7e",
                domain: "https://hiveminds.keka.com/careers/",
                targetContainer: "#khembedjobs",
            };

            const script = document.createElement("script");
            script.src =
                "https://hiveminds.keka.com/careers/api/embedjobs/js/ba2656db-0fdb-4859-a652-f6eec08f8d7e";
            script.defer = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <>
        <Metadata metadata={metadata}/>
        <WebpageJsonLd metadata={metadata}/>
        <Layout>
            <Hero title1={"Careers"} title2={"With Us"} para={"Join HiveMinds, where creativity, data, and innovation converge. Our collaborative team drives digital transformation with passion and purpose, offering dynamic careers that empower you to shape the future of marketing."} img={img} />
            <Culture />
            <section className='relative py-[5vw] w-screen h-full overflow-hidden mobile:pb-[10%]'>
            <div className='w-full h-full container-lg'>
                <div className="flex flex-col items-center justify-center gap-[1vw] pb-[5vw] mobile:items-start tablet:items-start tablet:gap-[3vw] mobile:gap-[4vw]">
                    <h2 data-heading-anim className="heading-2 headingAnim">
                        Job
                        <span className="blue-text"> Openings</span>
                    </h2>
                    <p data-para-anim className="content w-[55%] text-center fadein mobile:w-full mobile:text-left tablet:w-[70%] tablet:text-left">
                        Discover rewarding careers at HiveMinds—where innovative minds thrive. Our roles span creative strategy, data analytics, and digital marketing, offering opportunities to grow, collaborate, and transform the future of digital success.
                    </p>
                </div>

               
            </div>
            
        </section>
            <section>
                <div className="container-lg">
                    <div id="khembedjobs" className={styles.jobs}>
                    </div>
                </div>
            </section>
            <Contact />
        </Layout>
        </>
    )
}

export default careers
