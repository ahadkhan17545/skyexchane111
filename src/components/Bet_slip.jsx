import React, { useState, useEffect } from "react";
import "../assets/styles/Bet_slip.css";
import dots from "../../public/dots.png";
import del from "../../public/del.png";
import Cookies from "js-cookie";

const Bet_slip = () => {
  const [selectedData, setSelectedData] = useState([]);
  const [stakes, setStakes] = useState({});

  const getSelectedData = () => {
    const storedData = Cookies.get("selectedData");

    const dataArray = storedData ? JSON.parse(storedData) : [];

    return dataArray;
  };

  console.log("data", stakes);
  

  const selected = getSelectedData();

  const handleClearAll = () => {
    Cookies.remove("selectedData");
    setSelectedData([]);
    setStakes({});
  };

  const handleRemoveItem = (index) => {
    const updatedData = selected.filter((_, i) => i !== index);
    setSelectedData(updatedData);
    Cookies.set("selectedData", JSON.stringify(updatedData));
  };

  const handleButtonClick = (index, value) => {
    setStakes((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const handleInputChange = (index, value) => {
    setStakes((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  return (
    <div className="bet_slip-wrap">
      <h3>
        <a className="to-expand">Bet Slip</a>
      </h3>

      <div className="bet-slip-section">
        {selected.length > 0 ? (
          selected.map((e, i) => {
            const isLay = e.oddsType === "Lay";
            return (
              <div key={i} className={`bet-row ${isLay ? "bet-lay-row" : ""}`}>
                <div className="bet-title">
                  <p className="match-back">
                    {isLay ? "Lay (Bet Against)" : "Back (Bet For)"}
                  </p>
                  <div className="bet-title-odds">
                    <p>Odds</p>
                    <p>Stake</p>
                  </div>
                  <span>Profit</span>
                </div>
                <div className="bet-item">
                  <p className="bet-match">
                    <img src={dots} alt="dots" /> {e.teamName}
                  </p>
                  <div className={`bet-card ${isLay ? "bet-lay" : "bet-back"}`}>
                    <div className="Match-Odds-title">
                      <div className="Match-Odds-inner">
                        <img
                          src={del}
                          alt="delete"
                          onClick={() => handleRemoveItem(i)}
                          style={{ cursor: "pointer" }}
                        />{" "}
                        Northern Warriors
                        <span> Match Odds</span>
                      </div>
                      <div className="MatchOdds-input">
                        <input value={e.odds} type="number" />
                        <input
                          type="number"
                          value={stakes[i] || ""}
                          onChange={(event) =>
                            handleInputChange(i, event.target.value)
                          }
                        />
                      </div>
                      <p>100</p>
                    </div>
                  </div>
                  <div className="bet-buttons">
                    {[4, 30, 50, 200, 400, 700].map((value) => (
                      <button
                        key={value}
                        onClick={() => handleButtonClick(i, value)}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                  <div className="min-bet">
                    <p>
                      Min Bet: <b>1</b>
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p
            style={{
              fontSize: "13px",
              fontFamily: "sans-serif",
              textAlign: "center",
              marginTop: "15px",
            }}
          >
            Click on the odds to add selections to the betslip.
          </p>
        )}

        {selected.length > 0 && (
          <div>
            <div className="bet-actions">
              <p className="Liability">
                Liability <span>{stakes[0] || 0}</span>
              </p>
              <div className="bet-actions-btn">
                <button className="cancel-btn" onClick={handleClearAll}>
                  Cancel All
                </button>
                <button className="place-btn">Place Bets</button>
              </div>
            </div>
            <div className="confirm-bet" style={{ paddingLeft: "10px" }}>
              <input type="checkbox" id="confirm" />
              <label htmlFor="confirm">Please confirm your bets.</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bet_slip;
