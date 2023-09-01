import React from 'react';
import { Hero, WhoWeAre, Featured, WhyChooseUs, Team, Testimonials, HomeGallery, BMI, Pricing, HomeBlog, CallBanner } from '../../containers';

import { FeaturedCTA, LogoBar } from '../../components';

const Home = () => {
  return (
    <>
    <Hero />
    <WhoWeAre />
    <Featured />
    <FeaturedCTA />
    <WhyChooseUs />
    <Team />
    <Testimonials />
    <LogoBar />
    <HomeGallery />
    <BMI />
    <Pricing />
    <HomeBlog />
    <CallBanner />
    </>
  )
}

export default Home