import React from "react";
import HeroSection from "../components/HeroSection";
import Service from "../components/Service";
import Process from "../components/Process";
import WhyChooseUs from "../components/WhyChooseUs";
import Workwithus from "../components/Workwithus";
import HomeAbout from "../components/HomeAbout";
import CTA from "../components/CTA";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Service />
      <WhyChooseUs />
      <Process />
      <HomeAbout />
      <Workwithus />
      <CTA />
    </div>
  );
}