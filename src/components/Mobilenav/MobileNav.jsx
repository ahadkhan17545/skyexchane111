import React, { useState } from "react";
import "./MobileNav.css";
import HomeImg from "../../../public/home.svg";
import Timer from "../../../public/clock.svg";
import trofhy from "../../../public/trofy.svg";
import paper from "../../../public/pin.svg";
import user from "../../../public/profile.svg";
import promote from "../../../public/promot.svg";
import { Link, NavLink } from "react-router-dom";

function MobileNav() {


  return (
    <div>

     <div className="footer2">

       <Link to="/promote">
          <div className="footer-box promote">
            <img src={promote} alt="" />
          </div>
        </Link>

       

        <NavLink to="/cricket">
          <div className="footer-box trofy">
            <img src={trofhy} alt="" />
            <p>Sports</p>
          </div>
        </NavLink>

        <NavLink to="in-play">
          <div className="footer-box">
            <img src={Timer} alt="" />
            <p>In-Play</p>
          </div>
        </NavLink>

        <NavLink to="/">
          <div className="footer-box">
            <img src={HomeImg} alt="" />
            <p>Home</p>
          </div>
        </NavLink>

       

        <NavLink to="/multi-markets">
          <div className="footer-box">
            <img src={paper} alt="" />
            <p>Multi Ma...</p>
          </div>
        </NavLink>

        <NavLink to='/profile' >
          <div className="footer-box">
            <img src={user} alt="" />
            <p>Account</p>
          </div>
        </NavLink>

      </div>
    </div>
  );
}
export default MobileNav;