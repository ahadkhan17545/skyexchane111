import React from "react";
import "../assets/styles/Inplay.css";
import InPlayCard from "../components/InPlayCard";
import Bet_slip from "../components/Bet_slip";
import Mobiletabs from "../components/Tabs/Mobiletabs";

const Tomorrow = () => {
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

  const toggleDropdown = (id) => {
    document.getElementById(`sub-${id}`).classList.toggle("onsub");
  };

  return (
    <div>
      <div className="Bars inplay">
        <div className="btn-box">
          <div className="inner-box">
            <Mobiletabs />

            {/* Play card component */}
            <InPlayCard sportsData={sportsData} />
          </div>
        </div>
        <Bet_slip />
      </div>
    </div>
  );
};

export default Tomorrow;
