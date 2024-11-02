import React from 'react';
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/HomePage/Footer";
import FooterCTA from "@/components/ui/HomePage/FooterCTA";

import FAQs from '@/components/ui/HomePage/Faqs';
import Stats from '@/components/ui/HomePage/Stats';
import Features from '@/components/ui/HomePage/Features';
import CTA from '@/components/ui/HomePage/Cta';
import CenteredCTAText from '@/components/ui/HomePage/CenterCTAText';
import LogoGrid from '@/components/ui/HomePage/LogoGrid';
import Hero from '@/components/ui/HomePage/Hero';
import Navbar from '@/components/ui/HomePage/HomeNav';
import { BackgroundBeamsWithCollision } from '@/components/BackgroundBeams';

export default async function Index() {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <>
          <Navbar />
          <Hero />
        </>
      </BackgroundBeamsWithCollision>
      <LogoGrid />
      <CenteredCTAText />
      <CTA />
      <Features />
      <Stats />
       <FAQs />
      <FooterCTA /> 
      <Footer/>
    </>
  );
}
