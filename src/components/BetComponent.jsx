import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBetData } from "../redux/slices/fullmarketSlice";
import { toast } from "react-toastify";

const BetComponent = ({
  openMenu,
  index,
  setOpenMenu,
  selectedIndex,
  selectedValue,
  selectedType,
  data,
  oddsData,
}) => {
  const [currentValue, setCurrentValue] = useState("");
  const [calculateValue, setCalculateValue] = useState();
  const [acceptAnyOdds, setAcceptAnyOdds] = useState(false);
  const [liveValue, setLiveValue] = useState(null);

  const [odsValue, setOdsValue] = useState(selectedValue);

  useEffect(() => {
    setOdsValue(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    if (acceptAnyOdds) {
      setOdsValue(liveValue);
    }
  }, [acceptAnyOdds, liveValue]);
  
  console.log("OdsValue:", odsValue);

  const obsValue = useSelector((state) => state.marketOdds.odsValue);
  useEffect(() => {
    const filteredData = data?.data.map((e) => {
      const filteredRunners = e.runners.filter(
        (runner) => runner?.selectionId === oddsData?.selectionId
      );

      if (filteredRunners.length > 0) {
        let priceField =
          selectedType === "Back" ? "availableToBack" : "availableToLay";

        const filteredPrices = filteredRunners[0].ex[priceField].filter(
          (price) => price?.price > 0
        );

        if (filteredPrices.length > 0) {
          let selectedPrice = filteredPrices[0];

          if (priceField === "availableToLay" && filteredPrices.length > 1) {
            selectedPrice = filteredPrices[2];
          }

          if (!liveValue || liveValue?.price !== selectedPrice?.price) {
            setLiveValue(selectedPrice?.price);
          }
        }
      }
    });
  }, [data, oddsData, selectedType, liveValue]);



  const handleButtonClick = () => {
    if (odsValue === liveValue) {
      toast.success("Bet Confirmed", {
        autoClose: 3000,
      });
    } else {
      toast.warning("Bet Value Changed", {
        autoClose: 3000,
      });
    }
  };


  const dispatch = useDispatch();

  const updateCalculatedValue = (value) => {
    const addedValue = value;
    const calculatedValue = odsValue * value - value;

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
      const newValue = prevValue.toString().slice(0, -1) || "";
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

  const handleCheckboxChange = (e) => {
    setAcceptAnyOdds(e.target.checked);
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
                  {odsValue}
                </span>
              </div>
            </li>
            <li>
              <p className="dynamic-min-bet">
                Min Bet: 1<strong id="dynamicMinBet"></strong>
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
            <button
              disabled={!currentValue}
              style={{
                opacity: currentValue ? "1" : "0.4",
                cursor: currentValue ? "pointer" : "not-allowed",
              }}
              onClick={handleButtonClick}
            >
              Place Bets
            </button>
          </div>

          <div className="bet-setting-box">
            <input
              type="checkbox"
              name="acceptAnyOdds"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="acceptAnyOdds">Accept Any Odds</label>
          </div>
        </div>
      )}
    </>
  );
};

export default BetComponent;
