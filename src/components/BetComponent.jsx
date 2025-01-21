import React, { useState } from "react";

const BetComponent = ({ openMenu, index, setOpenMenu, selectedIndex, selectedValue, selectedType }) => {

  const [currentValue, setCurrentValue] = useState(0);
  
  const handleCancelClick = () => {
    setOpenMenu(null); 
  };

  const handleQuickButtonClick = (value) => {
    setCurrentValue(value); 
    const newValue = selectedIndex * currentValue;
    console.log("new value", newValue);
  };

  const handleNumPadClick = (num) => {
    setCurrentValue((prevValue) => prevValue + num);
  
  };

  const handleDeleteClick = () => {
    setCurrentValue((prevValue) => {
      return prevValue.toString().slice(0, -1);
    });
  };


  const handleIncreaseClick = () => {
    setCurrentValue((prevValue) => parseFloat(prevValue) + 1);
  };

  const handleDecreaseClick = () => {
    setCurrentValue((prevValue) => (parseFloat(prevValue) > 0 ? parseFloat(prevValue) - 1 : 0)); // Decrease value by 1, ensuring it doesn't go below 0
  };


  return (
    <>
      {openMenu === index && (
        <div
          style={{
            backgroundColor: `${selectedType === "Back" ? "#dceaf4" : "#f2e5e8"}`,
            display: "flex",
            flexDirection: "column",
            borderBottom: "1px solid #7e97a7",
          }}
        >
          <ul className="btn-list">
            <li>
              <p className="dynamic-min-bet">&nbsp;</p>
              <div id="inputOdds" className="input-num disable">
                <span id="odds" className="typed">
                  {selectedValue}
                </span>
              </div>
            </li>
            <li>
              <p className="dynamic-min-bet">
                Min Bet: <strong id="dynamicMinBet"></strong>
              </p>
              <div id="inputStake" className="input-num input-stake">
                <a
                  id="stakeDown"
                  className="icon-minus"
                  onClick={handleDecreaseClick}
                >
           
                </a>
                <span id="stake" className="typed typeing">
                  {currentValue}
                </span>
                <a
                  id="stakeUp"
                  className="icon-plus"
                  onClick={handleIncreaseClick}
                >
              
                </a>
              </div>
            </li>
          </ul>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
            className="coin-list"
          >
            {["4", "30", "50", "200", "500", "1000"].map((value, i) => (
              <button
                key={i}
                style={{
                  backgroundColor: "#f8f8f8",
                  border: "1px solid #ccc",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  flex: "1",
                }}
                onClick={() => handleQuickButtonClick(value)}
              >
                {value}
              </button>
            ))}
          </div>

          <div id="keyboard" className="keyboard-wrap">
            <div id="numPad" className="btn-tel">
              {[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "0",
                "00",
                ".",
              ].map((num, index) => (
                <li key={index}>
                  <button onClick={() => handleNumPadClick(num)}>{num}</button>
                </li>
              ))}
            </div>
            <button id="delete" className="btn-delete" onClick={handleDeleteClick}></button>
          </div>

          <div className="mobile-cls-bet">
            <button onClick={handleCancelClick}>Cancel</button>
            <button>Place Bets</button>
          </div>

          <div className="bet-setting-box">
            <input type="checkbox" name="acceptAnyOdds" id="acceptAnyOdds" />
            <label htmlFor="acceptAnyOdds">Accept Any Odds</label>
          </div>
        </div>
      )}
    </>
  );
};

export default BetComponent;
