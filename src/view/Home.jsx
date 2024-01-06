import React from "react";
import Header from "../components/Header";
import Timeline from "../components/Timeline";
import NavPage from "../components/NavPage";
import Section from "../components/Section";

const Home = () => {
  return (
    <div>
      <NavPage fas="bg-red-500" />
      <Header />
      <Timeline />
      <Section />
    </div>
  );
};

export default Home;
