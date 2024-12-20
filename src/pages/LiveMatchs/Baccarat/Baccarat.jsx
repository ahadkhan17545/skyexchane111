import React from "react";
import Menu_select from "../../../components/Menu_select";
import Bet_slip from "../../../components/Bet_slip";
import BaccaratMiddle from "../../../components/LiveBets/BaccaratMiddle";
import "./Baccarat.css"

const Baccarat = () => {
  const menuItems = [
    { title: "Sports", isHeader: true },
    { title: "All Sports", isHeader: false },
    { title: "Cricket", isHeader: true },
    { title: "Common", isHeader: false },
    { title: "Abu Dhabi T10", isHeader: false },
    { title: "ICC Men's T20 WC Asia Qualifier", isHeader: false },
    { title: "Indian Premier League", isHeader: false },
    { title: "One Day Internationals", isHeader: false },
    { title: "Sheffield Shield", isHeader: false },
    { title: "Test Matches", isHeader: false },
    { title: "Test Matches Series Markets", isHeader: false },
    { title: "Twenty20 Big Bash", isHeader: false },
    { title: "WBBL", isHeader: false },
    { title: "Womens International Twenty20 Matches", isHeader: false },
    { title: "Womens One Day Internationals", isHeader: false },
    { title: "Others", isHeader: false },
  ];

  const marketData = [
    {
      title: "WINNER",
      minMax: "200 - 600000",
      players: [
        { name: "PLAYER C", odds: 2.1, amount: 1234567 },
        { name: "PLAYER D", odds: 1.85, amount: 9876543 },
        { name: "PLAYER D", odds: 1.85, amount: 9876543 },
      ],
    },
  
  ];
  

  return (
    <>
      <div className="Cricket-wrap">
        <Menu_select menuItems={menuItems} />
          <BaccaratMiddle marketData={marketData} />
        <Bet_slip />
      </div>
    </>
  );
};

export default Baccarat;
