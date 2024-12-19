import React, { useState } from "react";

import AccountSidebar from "../../components/AccountSidebar";
import MyBeatNav from "../../components/MyBeatNav";
import timerImg from '../../../public/icon-time.png'
import icon_user from '../../../public/icon-user.png'

const Profit_loss = () => {
  const [activeCategory, setActiveCategory] = useState("Exchange");

  const getCategoryContent = (category) => {
    switch (category) {
      case "Exchange":
        return <div>Content for FancyBet Category</div>;
      case "FancyBet":
        return <div>Content for FancyBet Category</div>;
      case "Sportsbook":
        return <div>Content for Sportsbook Category</div>;
      case "BookMaker":
        return <div>Content for BookMaker Category</div>;
      default:
        return <div>Select a category to view content</div>;
    }
  };

  return (
    <div className="my-account-container">
      {/* Sidebar */}
      <AccountSidebar />

      <div className="account-details">
        <h4 className="section-title">My Bets</h4>

        <MyBeatNav />

        <div style={{ padding: "10px", backgroundColor: "white" }}>
          <h4
            style={{
              fontFamily: "sans-serif",
              fontSize: "15px",
              marginBottom: "7px",
              color: "#3b5160",
            }}
          >
            Profit & Loss - Main wallet
          </h4>
          <div className="user-sention2">
            <p><img src={icon_user} alt="" /> shamsher</p>
            <p><img src={timerImg} alt="" /> 2024-12-02 22:17</p>
          </div>

          <div className="categories categories2">
            <button
              className={`category-button ${
                activeCategory === "Exchange" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("Exchange")}
            >
              Exchange
            </button>
            <button
              className={`category-button ${
                activeCategory === "FancyBet" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("FancyBet")}
            >
              FancyBet
            </button>
            <button
              className={`category-button ${
                activeCategory === "Casino" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("Casino")}
            >
              Casino
            </button>
            <button
              className={`category-button ${
                activeCategory === "Sportsbook" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("Sportsbook")}
            >
              Sportsbook
            </button>
            <button
              className={`category-button ${
                activeCategory === "BookMaker" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("BookMaker")}
            >
              BookMaker
            </button>
            <button
              className={`category-button ${
                activeCategory === "BPoker" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("BPoker")}
            >
              BPoker
            </button>
            <button
              className={`category-button ${
                activeCategory === "SABA" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("SABA")}
            >
              SABA
            </button>
            <button
              className={`category-button ${
                activeCategory === "MiniGame" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("MiniGame")}
            >
              MiniGame
            </button>
            <button
              className={`category-button ${
                activeCategory === "Royal" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("Royal")}
            >
              Royal
            </button>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#e0e6e6",
                padding: "10px",
              }}
            >
              {/* Bet Status */}

              {/* Period */}
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "11px",
                }}
              >
                Period:
                <input
                  type="date"
                  style={{
                    padding: "3px",
                    borderRadius: "4px",
                    width: "110px",
                    boxShadow: "inset 0px 1px 0px rgba(0, 0, 0, .5)",
                    border: "none",
                  }}
                />
              </label>
              <input
                type="number"
                style={{
                  padding: "4px",
                  borderRadius: "3px",
                  width: "45px",
                  boxShadow: "inset 0px 1px 0px rgba(0, 0, 0, .5)",
                  border: "none",
                }}
              />

              <span style={{ fontSize: "11px" }}>to</span>

              <input
                type="date"
                style={{
                  padding: "3px",
                  borderRadius: "4px",
                  width: "110px",
                  boxShadow: "inset 0px 1px 0px rgba(0, 0, 0, .5)",
                  border: "none",
                }}
              />
              <input
                type="number"
                style={{
                  padding: "4px",
                  borderRadius: "3px",
                  width: "45px",
                  boxShadow: "inset 0px 1px 0px rgba(0, 0, 0, .5)",
                  border: "none",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "10px",
                paddingTop: "3px",
                marginBottom: "10px",
                borderBottom: "1px solid #7e97a7",
                backgroundColor: "#e0e6e6",
              }}
            >
              <button
                style={{
                  padding: "5px 10px",
                  border: "1px solid #bbb",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "12px",
                  minWidth: "95px",
                  boxShadow: "inset 0 2px 0 0 rgba(255,255,255,.5)",
                  backgroundImage:
                    "linear-gradient(180deg, #ffffff 0%, #eeeeee 89%)",
                }}
              >
                Just For Today
              </button>
              <button
                style={{
                  padding: "5px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "12px",
                  minWidth: "95px",
                  boxShadow: "inset 0 2px 0 0 rgba(255,255,255,.5)",
                  backgroundImage:
                    "linear-gradient(180deg, #ffffff 0%, #eeeeee 89%)",
                  cursor: "pointer",
                }}
              >
                From Yesterday
              </button>
              <button
                style={{
                  padding: "5px 10px",
                  border: "1px solid #222",
                  borderRadius: "4px",
                  fontSize: "12px",
                  minWidth: "95px",
                  boxShadow: "inset 0 2px 0 0 rgba(255,255,255,.5)",
                  backgroundImage:
                    "linear-gradient(180deg, #474747 0%, #070707 100%)",
                  color: "#ffb600",
                  cursor: "pointer",
                  fontWeight: "700",
              
                }}
              >
                Get P & L
              </button>
            </div>
          </div>

          <div style={{ fontSize: "12px", color: "#7e97a7" }}>
            <p>
              Betting History enables you to review the bets you have placed.
            </p>
            <p style={{ marginBottom: "7px" }}>
              Specify the time period during which your bets were placed, the
              type of markets on which the bets were placed, and the sport.
            </p>
            <p style={{ marginBottom: "7px" }}>
              Betting History is available online for the past 62 days.
            </p>
            <p>User can search up to 14 days records per query only .</p>
          </div>

          <div className="category-content">
            {/* {getCategoryContent(activeCategory)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profit_loss;
