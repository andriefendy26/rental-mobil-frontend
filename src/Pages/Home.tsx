import { BookingSection } from "@/Layout/BookingSection";
import Footer from "@/Layout/Footer";
import { Hero } from "@/Layout/Hero";
import Keunggulan from "@/Layout/Keunggulan";
import { Navbar } from "@/Layout/Navbar";
import Tahapan from "@/Layout/Tahapan";
// import React from 'react'

const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <BookingSection></BookingSection>
      <Tahapan></Tahapan>
      <Keunggulan></Keunggulan>
      <Footer></Footer>
    </div>
  );
};

export default Home;
