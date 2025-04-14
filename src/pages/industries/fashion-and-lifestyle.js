import Hero from '@/components/IndustryDetail/Hero'
import React from 'react'
import img from '../../../public/assets/images/industry/fashion-detail.png'
import Layout from '@/components/Layout'
import Content from '@/components/IndustryDetail/Content'
import Related from '@/components/IndustryDetail/RelatedCaseStudies'
import { fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'

const data = {
    overview:"In fashion and lifestyle, perception is power. Audiences are drawn to brands that inspire, express identity, and reflect culture. Digital marketing here is less about product — and more about personality.",
    approach:"HiveMinds crafts immersive digital experiences that elevate your brand as a style authority. Through trend-sensitive storytelling and aesthetic precision, we capture attention, create aspiration, and spark conversation.",
    difference:[
        {
            title:"Visual Identity Amplification:",
            detail:"We develop visually compelling narratives that enhance your brand’s style signature across platforms."
        },
        {
            title:"Cultural Pulse Integration:",
            detail:"Our campaigns mirror seasonal trends, cultural moments, and audience sentiment to stay hyper-relevant."
        },
        {
            title:"Marketplace Empowerment:",
            detail:"We optimize presence and performance across marketplaces, bringing consistency and elegance to every listing."
        },
    ]
}
const fashion = () => {
    paraAnim();
    fadeUp();
    headingAnim();
  return (
    <>
    <Layout>
    <Hero title1={"Fashion &"} title2={"Lifestyle"} img={img}/>
    <Content data={data}/>
    <Related/>
    </Layout>
    </>
  )
}

export default fashion