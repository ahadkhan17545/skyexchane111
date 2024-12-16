import React from "react";
import "../assets/styles/Cricket.css";
import Menu_select from "../components/Menu_select";
import Menu_Middle from "../components/Menu_Middle";
import Bet_slip from "../components/Bet_slip";

const Soccer = () => {
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

  const sportsData = [
    {
      name: "Cricket",
      events: [
        {
          title: "India v England",
          matched: "PTE68,239",
          odds: [
            { back: "1.2", lay: "1.5" },
            { back: "2.0", lay: "2.5" },
            { back: "2.5", lay: "3.0" },
          ],
        },
        {
          title: "Australia v Pakistan",
          matched: "PTE68,240",
          odds: [
            { back: "1.1", lay: "1.3" },
            { back: "2.1", lay: "2.6" },
            { back: "3.0", lay: "3.5" },
          ],
        },
        {
          title: "New Zealand v South Africa",
          matched: "PTE68,241",
          odds: [
            { back: "1.3", lay: "1.6" },
            { back: "2.3", lay: "2.8" },
            { back: "3.5", lay: "4.0" },
          ],
        },
        {
          title: "Sri Lanka v West Indies",
          matched: "PTE68,242",
          odds: [
            { back: "1.4", lay: "1.7" },
            { back: "2.2", lay: "2.9" },
            { back: "4.0", lay: "4.5" },
          ],
        },
        {
          title: "Bangladesh v Afghanistan",
          matched: "PTE68,243",
          odds: [
            { back: "1.0", lay: "1.2" },
            { back: "1.8", lay: "2.4" },
            { back: "3.2", lay: "3.7" },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div className="Cricket-wrap">
        <Menu_select menuItems={menuItems} />
        <Menu_Middle sportsData={sportsData}/>
        <Bet_slip />
      </div>
    </>
  );
};

export default Soccer;
