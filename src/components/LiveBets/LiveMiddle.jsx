import React, { useState, useEffect } from "react";
import "../../assets/styles/Menu_Middle.css";

const LiveMiddle = ({ marketData }) => {
  const [suspended, setSuspended] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [activeToggle, setActiveToggle] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");


  useEffect(() => {
    const interval = setInterval(() => {
      setSuspended((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);


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
      <div className="live-video">
        <iframe
          width="100%"
          height="100%"
          src="https://recklinesports.com/#/casino-video?id=3030&amp;controls=0"
          frameBorder="0"
        ></iframe>
      </div>

      {marketData.map((market, marketIndex) => (
        <div className="marketScroll" key={marketIndex}>
          <div className="minMaxDesktop">
            <h4>{market.title}</h4>
            <h4>Min/Max: {market.minMax}</h4>
          </div>
          <div className="market-inner">
            {market.players.map((player, playerIndex) => (
              <div
                className={`market-inner-item ${openMenu?.marketIndex === marketIndex && openMenu?.playerIndex === playerIndex ? "active" : ""}`}
                key={playerIndex}
                onClick={() => handleBackToggle(marketIndex, playerIndex)}
              >
                <div className="market-item">
                  <h4>{player.name}</h4>
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

          {market.players.map((player, playerIndex) => (
            openMenu?.marketIndex === marketIndex &&
            openMenu?.playerIndex === playerIndex && (
              <div className="sub-menu" key={playerIndex}>
                <div className="checkbox-section-main">
                  <div className="checkbox-section">
                   
                  </div>
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
          ))}
        </div>
      ))}
    </div>
  );
};

export default LiveMiddle;
