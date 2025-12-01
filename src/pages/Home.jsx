import React from "react";
import NavBar from "../components/NavBar";
import Container from "../components/common/Container";
import Hero from "../components/Hero";
import Trusted from "../components/Trusted";
import DirectMail from "../components/DirectMail";
import ProfitPostCards from "../components/ProfitPostCards";
import BrandNeeds from "../components/BrandNeeds";
import FastLaunch from "../components/FastLaunch";
import LatestTrends from "../components/LatestTrends";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import PostPilotDTC from "../components/PostPilotDTC";

const Home = () => {
  return (
    <>
      <div>
        <NavBar />

        <Hero />
        <Trusted />
        <DirectMail />
        <ProfitPostCards />
        <BrandNeeds />
        <FastLaunch />
        <PostPilotDTC />

        <LatestTrends />
        <Footer />
      </div>
    </>
  );
};

export default Home;
