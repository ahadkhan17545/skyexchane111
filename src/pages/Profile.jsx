import React, { useState } from "react";
import "../assets/styles/User.css";
import { Link } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
import profileUser from "../../public/profileUser.svg";
import Marquee from "../components/Marquee";
import { toast } from "react-toastify";

const newsItems = [
  {
    date: "07 Dec 2024",
    event: "New Zealand v England",
    market: "30 Over NZ '96.300.500' (IST 03:46:09 - 03:47:12)",
    message: "Bets Voided Because Wrong Rate Offered By Mistake .. Sorry for the Inconvenience Caused",
  },
  {
    date: "07 Dec 2024",
    event: "Victoria v Rangpur Riders",
    market: "11 Over VIC '89.75.125' (IST 07:32:54 - 07:33:10)",
    message: "Bets Voided Because of Wrong Rate Offered By Mistake .. Sorry for the Inconvenience Caused",
  },
];

function Profile() {

  const handleLogout = () => {
    localStorage.clear(); 
    toast.success("Logout successful!");
    
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  };
  
  return (
    <div>
      <div className="user-main-box">
        <div className="saidebox ">
          <div className="saide-header ">
            <div className="box one spotrsone">
              <Marquee newsItems={newsItems}/>
              <div className="path-wrap">
                <div className="user-info">
                  <img src={profileUser} alt="" />
                  <h4>Shamsher</h4>
                  <span>Demo</span>
                </div>
                <div className="time-zone2">GMT-5:30</div>
              </div>
              <ul className="leful User">
                <li>
                  <Link to="/myAccount/profile">
                    My Profile
                    <div className="downarrow">
                      <MdArrowForwardIos />
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/myAccount/summary">
                    Balance Overview{" "}
                    <div className="downarrow">
                      <MdArrowForwardIos />
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/myAccount/current_bets">
                    MY Bets{" "}
                    <div className="downarrow">
                      <MdArrowForwardIos />
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/myAccount/bets-history">
                    Bets History
                    <div className="downarrow">
                      <MdArrowForwardIos />
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/myAccount/profit-loss">
                    Profit & Loss
                    <div className="downarrow">
                      <MdArrowForwardIos />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="Account-btn mobile-logout-btn">
            <button onClick={handleLogout}>
              LOGOUT <RiLogoutBoxRLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
