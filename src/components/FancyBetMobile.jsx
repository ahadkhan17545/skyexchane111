import React from "react";
import arrow from "../../public/arrow.svg";
import info from "../../public/info.svg";

const matchData = {
  fancyBets: [
    { bet: "25 Over SL", no: "71", yes: "72" },
    { bet: "21 Over SL", no: "62", yes: "63" },
    { bet: "2nd Wkt SL", no: "84", yes: "84" },
    { bet: "2nd Wkt Pship Boundaries SL", no: "7", yes: "7" },
  ],
};

const FancyBetMobile = () => {
  return (
    <div className="fbm-container">
      <div className="fbm-bet-container">
        <div className="fbm-header-row">
          <div className="line_market-selection"></div>
          <div className="fbm-header-cell">No</div>
          <div className="fbm-header-cell">Yes</div>
        </div>
        {matchData.fancyBets.map((bet, index) => (
          <div key={index} className="fbm-bet-row">
            <div className="fbm-bet-name">
              {bet.bet}
              <img className="fbm-info-icon" src={info} alt="" />
            </div>

            <div className="line_market-selection-main">
              <div className="line_market-selection">
                <h4>
                  <img src={arrow} alt="" /> 00.5
                </h4>
                {/* <p>2nd Wkt Pship Boundaries SL</p> */}
              </div>
              <div className="fbm-line_market-item">
                <div className="fbm-cell fbm-cell-no">
                  <h4>{bet.no}</h4>
                  <p className="fbm-small-text">100</p>
                </div>
                <div className="fbm-cell fbm-cell-yes">
                  <h4>{bet.yes}</h4>
                  <p className="fbm-small-text">100</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FancyBetMobile;
