'use client'

import ComparisonTable from "./components/comparisonTable";
import Features from "./components/features";
import LandingPage from "./components/hero";
import Impact from "./components/impact";
import WhyWeBuilt from "./components/whyWeBuilt";
import HowItWorks from "./components/howItWorks";
import Architecture from "./components/architecture";
import Roadmap from "./components/roadmap";
import DevelopmentProcess from "./components/developmentProcess";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-r from-[rgb(22,21,40)] via-[rgb(16,16,12)] to-[rgb(22,21,40)] text-[rgb(242,245,249)] min-h-screen">
      <LandingPage/>
      <Features/>
      <Impact/>
      <WhyWeBuilt/>
      <HowItWorks/>
      <Architecture/>
      <Roadmap/>
      <DevelopmentProcess/>
      <ComparisonTable/>
    </div>
  );
}
