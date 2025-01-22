import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBetData } from "../redux/slices/fullmarketSlice";

const BetComponent = ({
  openMenu,
  index,
  setOpenMenu,
  selectedIndex,
  selectedValue,
  selectedType,
}) => {
  const [currentValue, setCurrentValue] = useState("");
  const [calculateValue, setCalculateValue] = useState(0);

  const dispatch = useDispatch();

  const updateCalculatedValue = (value) => {
    const addedValue = value;
    const calculatedValue = selectedValue * value - value;

    setCalculateValue(calculatedValue);
    dispatch(
      setBetData({
        calculateValue: calculatedValue,
        index: selectedIndex,
        addedValue: addedValue,
      })
    );
  };

  const handleCancelClick = () => {
    setOpenMenu(null);
    setCurrentValue("");
    setCalculateValue("");

    dispatch(
      setBetData({
        calculateValue: null,
        addedValue: null,
        index: null,
      })
    );
  };

  const handleQuickButtonClick = (value) => {
    setCurrentValue(value);
    updateCalculatedValue(value);
  };

  const handleNumPadClick = (num) => {
    setCurrentValue((prevValue) => {
      const newValue = prevValue.toString() + num.toString();
      updateCalculatedValue(parseFloat(newValue) || 0);
      return newValue;
    });
  };

  const handleDeleteClick = () => {
    setCurrentValue((prevValue) => {
      const newValue = prevValue.toString().slice(0, -1) || "0";
      updateCalculatedValue(parseFloat(newValue) || 0);
      return newValue;
    });
  };

  const handleIncreaseClick = () => {
    setCurrentValue((prevValue) => {
      const newValue = parseFloat(prevValue) + 1;
      updateCalculatedValue(newValue);
      return newValue;
    });
  };

  const handleDecreaseClick = () => {
    setCurrentValue((prevValue) => {
      const newValue =
        parseFloat(prevValue) > 0 ? parseFloat(prevValue) - 1 : 0;
      updateCalculatedValue(newValue);
      return newValue;
    });
  };

  return (
    <>
      {openMenu === index && (
        <div
          style={{
            backgroundColor: `${
              selectedType === "Back" ? "#dceaf4" : "#f2e5e8"
            }`,
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
                ></a>
                <span id="stake" className="typed typeing">
                  {currentValue}
                </span>
                <a
                  id="stakeUp"
                  className="icon-plus"
                  onClick={handleIncreaseClick}
                ></a>
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
            <button
              id="delete"
              className="btn-delete"
              onClick={handleDeleteClick}
            ></button>
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
