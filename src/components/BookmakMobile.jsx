import React, { useState } from "react";
import bookmark from "../../public/bookmark.svg";
import btnaddpin from "../../public/btn-add-pin.png";

const matchData = {
  matchOdds: [
    {
      team: "Bangladesh Women",
      back: ["1.27", "1.28", "1.29"],
      lay: ["1.30", "1.31", "1.32"],
    },
    {
      team: "Ireland Women",
      back: ["4.3", "4.4", "4.5"],
      lay: ["4.6", "4.7", "4.8"],
    },
  ],
};

const BookmakMobile = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [stake, setStake] = useState(72);

  const handleToggle = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleStakeChange = (amount) => {
    setStake((prevStake) => prevStake + amount);
  };

  return (
    <div
      className="bookmaker-section-mobile"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="Bookmaker-Market-head">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img className="desktop-bookmark" src={btnaddpin} alt="" />
          <h4 style={{ fontSize: "14px" }}>
            <img className="mobile-bookmark" src={bookmark} alt="" />
            Bookmaker Market
            <span
              style={{
                fontSize: "12.5px",
                color: "#bec4c8",
                marginLeft: "5px",
                fontWeight: "400",
              }}
            >
              | Zero Commission
            </span>
          </h4>
        </div>
        <div className="Commission-max-box">
          <div className="Commission-max-item">
            <button>Min</button>
            <p>1.00</p>
          </div>
          <div className="Commission-max-item">
            <button>Max</button>
            <p>3,906.00</p>
          </div>
        </div>
      </div>

      <div
        style={{
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f8f6e1",
            borderBottom: "1px solid #7e97a7",
            paddingLeft: "4px",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "4vw",
              width: "50%",
            }}
          ></div>

          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "18.6666666667vw",
                cursor: "pointer",
                padding: "0.8vw",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  borderRadius: "1.0666666667vw",

                  fontSize: "3.4666666667vw",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Back
              </p>
            </div>

            <div
              style={{
                width: "18.6666666667vw",
                cursor: "pointer",
                padding: "0.8vw",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  borderRadius: "1.0666666667vw",

                  fontSize: "3.4666666667vw",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Lay
              </p>
            </div>
          </div>
        </div>
      </div>

      {matchData.matchOdds.map((team, index) => (
        <div
          key={index}
          style={{
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#f8f6e1",
              borderBottom: "1px solid #7e97a7",
              paddingLeft: "4px",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "4vw",
                width: "50%",
              }}
            >
              {team.team}
            </div>

            <div style={{ display: "flex" }}>
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(151, 199, 234, 0.7) 0%, #97c7ea 65%)",
                  width: "18.6666666667vw",
                  cursor: "pointer",
                  padding: "0.8vw",
                  textAlign: "center",
                }}
                onClick={() => handleToggle(index)}
              >
                <p
                  style={{
                    backgroundColor: "#72bbef",
                    border: "1px solid #fff",
                    borderRadius: "1.0666666667vw",
                    padding: "1.6vw",
                    fontSize: "3.4666666667vw",
                    fontWeight: "bold",
                    minHeight: "11.2vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {team.back[2]}
                </p>
              </div>
              <div
                style={{
                  backgroundImage:
                    " linear-gradient(270deg, rgba(247, 205, 214, 0.75) 5%, #f0c0cb 60%)",
                  width: "18.6666666667vw",
                  cursor: "pointer",
                  padding: "0.8vw",
                  textAlign: "center",
                }}
                onClick={() => handleToggle(index)}
              >
                <p
                  style={{
                    backgroundColor: "#faa9ba",
                    border: "1px solid #fff",
                    borderRadius: "1.0666666667vw",
                    padding: "1.6vw",
                    fontSize: "3.4666666667vw",
                    fontWeight: "bold",
                    minHeight: "11.2vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {team.lay[0]}
                </p>
              </div>
            </div>
          </div>

          {openMenu === index && (
            <div
              style={{
                backgroundColor: "#dceaf4",
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
                      53
                    </span>
                  </div>
                </li>
                <li>
                  <p className="dynamic-min-bet">
                    Min Bet: <strong id="dynamicMinBet"></strong>
                  </p>
                  <div id="inputStake" className="input-num input-stake">
                    <a id="stakeDown" className="icon-minus"></a>
                    <span id="stake" className="typed typeing">
                      72
                    </span>
                    <a id="stakeUp" className="icon-plus"></a>
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
                      <button>{num}</button>
                    </li>
                  ))}
                </div>
                <button id="delete" className="btn-delete"></button>
              </div>

              <div className="mobile-cls-bet">
                <button onClick={() => setOpenMenu(null)}>Cancel</button>
                <button>Place Bets</button>
              </div>

              <div className="bet-setting-box">
                <input
                  type="checkbox"
                  name="acceptAnyOdds"
                  id="acceptAnyOdds"
                />
                <label htmlFor="acceptAnyOdds">Accept Any Odds</label>
              </div>
            </div>
          )}
          
        </div>
      ))}
    </div>
  );
};

export default BookmakMobile;
