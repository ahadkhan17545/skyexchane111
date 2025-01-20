import React, { useEffect } from "react";
import Banner from "../components/Banner/Banner";
import "../assets/styles/Home.css";
import MatchCard from "../components/MatchCard/MatchCard";
import Footer from "../components/Footer/Footer";


const Home = () => {


  return (
    <>
      <div className="main-wrap">
        <Banner />
         <MatchCard />
        <Footer />
      </div>
    </>
  );
};

export default Home;
