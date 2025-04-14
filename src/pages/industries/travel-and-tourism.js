import Hero from '@/components/IndustryDetail/Hero'
import React from 'react'
import img from '../../../public/assets/images/industry/travel-and-tourism-detail.png'
import Layout from '@/components/Layout'
import Content from '@/components/IndustryDetail/Content'
import Related from '@/components/IndustryDetail/RelatedCaseStudies'
import { fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'

const data = {
    overview:"Travel is an emotion. It’s discovery, escape, joy — and in the digital world, it begins long before the ticket is booked. Successful travel brands inspire first, then convert.",
    approach:"HiveMinds creates evocative digital experiences that turn wanderlust into bookings. We blend storytelling, visual content, and smart targeting to transport users into your world before they ever board a plane.",
    difference:[
        {
            title:"Experience-Led Storytelling:",
            detail:"We create content that immerses, inspires, and drives imagination — from destination teasers to itinerary deep-dives."
        },
        {
            title:"Journey-Centric Campaigns:",
            detail:"Every digital interaction mirrors the customer’s travel planning mindset, offering useful nudges at the right time."
        },
        {
            title:"Seamless Discovery to Booking:",
            detail:"We unify visibility and performance marketing to turn interest into action across search, social, and marketplaces."
        },
    ]
}
const Travel = () => {
    paraAnim();
    fadeUp();
    headingAnim();
  return (
    <>
    <Layout>
    <Hero title1={"Travel &"} title2={" Tourism"} img={img}/>
    <Content data={data}/>
    <Related/>
    </Layout>
    </>
  )
}

export default Travel