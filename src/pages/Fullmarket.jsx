import React from "react";
import Menu_select from "../components/Menu_select";
import Bet_slip from "../components/Bet_slip";
import FullMarketEvent from "../components/FullMarketEvent";

const Fullmarket = () => {
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

  return (
    <div>
      <div className="Fullmarket-wrap">
        <Menu_select menuItems={menuItems} />
           <FullMarketEvent />
        <Bet_slip />
      </div>
    </div>
  );
};

export default Fullmarket;
