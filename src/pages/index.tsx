import Email from "@/components/Email";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import React from "react";

function index() {
  return (
    <div className="app">
      <SocialIcons />
      <Email />
      <Navbar />
      <Footer />
    </div>
  );
}

export default index;
