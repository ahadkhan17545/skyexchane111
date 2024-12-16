import React from "react";
import "../assets/styles/Menu_Middle.css";
import Footer from "./Footer/Footer";
import banner from "../assets/images/kv_cricket.jpg";
import SportsCard from "./SportsCard";
import Banner from "./Banner/Banner";
import MobileMenu from "./Mobilenav/MobileMenu";

const Menu_Middle = ({sportsData}) => {


  return (
    <>
      <div className="Middle-wraper">
        <div className="cricket-banner">
          <img src={banner} alt="" />
        </div>

        <Banner/>
        <MobileMenu/>

        <div className="Highlights-Head">
          <h4>Sports Highlights</h4>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p>View By</p>
            <div className="select">
              <select id="viewType" name="View">
                <option id="competitionName" value="competitionName">
                  Competition
                </option>
                <option id="openDateTime" value="openDateTime" selected="Time">
                  Time
                </option>
                <option id="totalMatched" value="totalMatched">
                  Matched
                </option>
              </select>
            </div>
          </div>
        </div>

         <SportsCard sportsData={sportsData} />

       <div className="footer-section">
        <Footer />
       </div>
      </div>
    </>
  );
};

export default Menu_Middle;
