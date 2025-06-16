import { BookingSection } from "@/Layout/BookingSection";
import Footer from "@/Layout/Footer";
import { Hero } from "@/Layout/Hero";
import Keunggulan from "@/Layout/Keunggulan";
import { Navbar } from "@/Layout/Navbar";
import Tahapan from "@/Layout/Tahapan";
import AboutUs from "@/Layout/AboutUs";
import Armada from "@/Layout/Armada";
// import React from 'react'

const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <BookingSection></BookingSection>
      <Tahapan></Tahapan>
      <AboutUs></AboutUs>
      <Keunggulan></Keunggulan>
      <Armada></Armada>
      <Footer></Footer>
    </div>
  );
};

export default Home;
