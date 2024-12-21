import React from "react";
import Menu_select from "../../../components/Menu_select";
import Bet_slip from "../../../components/Bet_slip";
import InstantworliMiddle from "../../../components/LiveBets/InstantworliMiddle";

const Instantworli = () => {
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
        { name: "PLAYER C", odds: 1 },
        { name: "PLAYER D", odds: 2 },
        { name: "PLAYER D", odds: 3 },
        { name: "PLAYER D", odds: 4 },
        { name: "PLAYER D", odds: 5 },
        { name: "PLAYER D", odds: 6 },
        { name: "PLAYER D", odds: 7 },
        { name: "PLAYER D", odds: 8 },
        { name: "PLAYER D", odds: 9 },
        { name: "PLAYER D", odds: 0 },
      ],
    },

    {
      title: "LINE",
      minMax: "200 - 600000",
      players: [
        { name: "PLAYER C", odds: "LINE 1", count:"1 | 2 | 3 | 4 | 5 " },
        { name: "PLAYER D", odds: "LINE 2", count:"6 | 7 | 8 | 9 | 0 " },
      ],
    },

    {
      title: "ODD/EVEN",
      minMax: "200 - 600000",
      players: [
        { name: "PLAYER C", odds: "LINE 1", count:"1 | 2 | 3 | 4 | 5 " },
        { name: "PLAYER D", odds: "LINE 2", count:"6 | 7 | 8 | 9 | 0 " },
      ],
    },
  ];

  return (
    <>
      <div className="Cricket-wrap">
        <Menu_select menuItems={menuItems} />
        <InstantworliMiddle marketData={marketData} />
        <Bet_slip />
      </div>
    </>
  );
};

export default Instantworli;
