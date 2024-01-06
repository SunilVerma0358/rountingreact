import React from "react";
import NavPage from "../components/NavPage";
import Timeline from "../components/Timeline";
import Header from "../components/Header";
import Faq from "../components/Faq";

const About = () => {
  return (
    <div>
      <NavPage faq="hello" fas=" bg-red-700" />
      <Header />
      <Timeline />
      <Faq />
    </div>
  );
};

export default About;
