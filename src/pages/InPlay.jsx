import React from "react";
import "../assets/styles/Inplay.css";
import InPlayCard from "../components/InPlayCard";
import Bet_slip from "../components/Bet_slip";

import Mobiletabs from "../components/Tabs/Mobiletabs";

const InPlay = () => {
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
      ],
    },

    {
      name: "Tenis",
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
      ],
    },
  ];

  return (
    <div>
      <div className="Bars inplay">
        <div className="btn-box">
          <div className="inner-box">
            <Mobiletabs />

            <InPlayCard sportsData={sportsData} />
          </div>
        </div>

        <Bet_slip />
      </div>
    </div>
  );
};

export default InPlay;
