import React from "react";
import "../assets/styles/Cricket.css";
import Menu_select from "../components/Menu_select";
import Bet_slip from "../components/Bet_slip";

const Multimarket = () => {
  const menuItems = [
    { title: "Sports", isHeader: true },
    { title: "All Sports", isHeader: false },
    { title: "Cricket", isHeader: false },
    { title: "Soccer", isHeader: false },
    { title: "Tennis", isHeader: false },
    { title: "E_soccer", isHeader: false },
    { title: "FancyBet", isHeader: false },
    { title: "Kabaddi", isHeader: false },
  ];

  return (
    <>
      <div className="Cricket-wrap">
        <Menu_select menuItems={menuItems} />
        <div
          className="Middle-wraper Middle-wraper-multi"
          style={{ paddingTop: "8px", fontFamily: "sans-serif" }}
        >
          <h4 style={{ fontSize: "13.8px" }}>Multi Markets</h4>
          <p style={{ fontSize: "12px", marginTop: "5px" }}>
            There are currently no followed multi markets.
          </p>
        </div>
        <Bet_slip />

        <div className="multicard-main" style={{ display: "flex", justifyContent: "space-between", width:"100%" }}>
          <div className="multicard">
            <h3>
              There are currently no followed multi markets.
              <hr />
              <h5>Please add some markets from events.</h5>
            </h3>
          </div>
          <div className="inplay-outer-box" style={{ marginTop: "100px" }}>
            <div className="inplay-rightbar">
              <h5>Open Bets</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Multimarket;
