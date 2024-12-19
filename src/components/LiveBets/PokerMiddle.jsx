import React, { useState, useEffect } from "react";
import "../../assets/styles/Menu_Middle.css";
import VideoFrame from "../VideoFrame/VideoFrame";
import Popup from "../BetsPopup/Popup";
import { IoInformationCircle } from "react-icons/io5";

const PokerMiddle = ({ marketData }) => {
  const [suspended, setSuspended] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [activeToggle, setActiveToggle] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [clickedItem, setClickedItem] = useState("");

  const handleItemClick = (item) => {
    setClickedItem(item);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setClickedItem("");
  };

  const results = [
    { label: "D", color: "#72bbef" },
    { label: "D", color: "#f9a9ba" },
    { label: "T", color: "#72bbef" },
    { label: "T", color: "#72bbef" },
    { label: "D", color: "#72bbef" },
    { label: "D", color: "#ffff33" },
    { label: "D", color: "#f9a9ba" },
    { label: "T", color: "#f9a9ba" },
    { label: "D", color: "#f9a9ba" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSuspended((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (suspended) {
      setOpenMenu(null);
    }
  }, [suspended]);

  const handleBackToggle = (marketIndex, playerIndex) => {
    setOpenMenu((prev) =>
      prev?.marketIndex === marketIndex && prev?.playerIndex === playerIndex
        ? null
        : { marketIndex, playerIndex }
    );
    setActiveToggle("back");
    setSelectedValue("");
  };

  const handleQuickButtonClick = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="Middle-wraper Middle-wraper2">
      <VideoFrame />

      <div className="Poker-Player">
        <button>PLAYER A</button>
        <button>PLAYER B</button>
      </div>

      {marketData.map((market, marketIndex) => (
        <div className=" PokerMarket" key={marketIndex}>
          <div className="PokerMarket-Item">
            <div className="Poker-title">
              <h4>{market.title}</h4>
              <div className="win-info">
                <IoInformationCircle />
              </div>
            </div>
            <div className="market-inner">
              {market.players.map((player, playerIndex) => (
                <div
                  className={`market-inner-item ${
                    openMenu?.marketIndex === marketIndex &&
                    openMenu?.playerIndex === playerIndex
                      ? "active"
                      : ""
                  }`}
                  key={playerIndex}
                  onClick={() => handleBackToggle(marketIndex, playerIndex)}
                >
                  <div className="market-item">
                    <div>
                      <strong>{player.odds}</strong>
                      <p>{player.amount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {suspended && (
              <div className="marketScroll-suspended">
                <h2>SUSPENDED</h2>
              </div>
            )}
          </div>

          {market.players.map(
            (player, playerIndex) =>
              openMenu?.marketIndex === marketIndex &&
              openMenu?.playerIndex === playerIndex && (
                <div className="sub-menu" key={playerIndex}>
                  <div className="checkbox-section-main">
                    <div className="checkbox-section"></div>
                    <div className="buttons-section">
                      <button
                        className="button"
                        onClick={() => setOpenMenu(null)}
                      >
                        Cancel
                      </button>
                      <span className="coin-button">
                        <b>346</b>
                        <p>100</p>
                      </span>
                      <input
                        value={selectedValue}
                        type="text"
                        className="input-field"
                        onChange={(e) => setSelectedValue(e.target.value)}
                      />
                      <button className="button button-active">
                        Place Bets
                      </button>
                    </div>
                  </div>
                  <div className="quick-buttons">
                    {["4", "30", "50", "200", "500", "1000"].map((value, i) => (
                      <button
                        key={i}
                        className="quick-button"
                        onClick={() => handleQuickButtonClick(value)}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      ))}

      <div className="recent-res">
        <h2>Recent Result</h2>
        <ul>
          {results.map((result, index) => (
            <li
              key={index}
              style={{ backgroundColor: result.color }}
              className={result.label === "D" ? "d-list" : "t-list"}
              onClick={() => handleItemClick(result.label)}
            >
              {result.label}
            </li>
          ))}
        </ul>
      </div>

      {isPopupVisible && (
        <Popup onClose={handleClosePopup} clickedItem={clickedItem} />
      )}
    </div>
  );
};

export default PokerMiddle;
