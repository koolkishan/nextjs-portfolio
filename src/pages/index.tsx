import Head from "next/head";
import Email from "@/components/Email";
import Loader from "@/components/Loader";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import React from "react";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

function index() {
  return (
    <div className="app">
      <Head>
        <title>Kishan Sheth</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <SocialIcons />
      <Email />
      <Hero />
      <About />
      <Contact />
      <Footer />
      <Loader />
    </div>
  );
}

export default index;
