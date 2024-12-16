import React, { useState } from "react";
import AccountSidebar from "../../components/AccountSidebar";
import MyBeatNav from "../../components/MyBeatNav";

// Component for Exchange Bets
const Exchange = () => {
  const unmatchedBets = [
    {
      market: "Market 1",
      selectionType: "Type 1",
      betId: "#12345",
      betPlaced: "01/12/2024",
      oddsReq: "2.0",
      matched: "50",
      unmatched: "50",
      dateMatched: "Shamsher",
    },
  ];

  const matchedBets = [
    {
      market: "Market 2",
      selectionType: "Type 2",
      betId: "#67890",
      betPlaced: "01/12/2024",
      oddsReq: "1.8",
      matched: "50",
      avgOddsMatched: "1.9",
      dateMatched: "Shamsher",
    },
  ];

  return (
    <>
      <div className="transaction-table" style={{ marginBottom: "15px" }}>
        <div className="transaction-table-header">Unmatched</div>
        <div className="table-header table-header2">
          <span style={{ width: "395px" }}>Market</span>
          <span style={{ width: "150px" }}>Selection Type</span>
          <span>Bet ID</span>
          <span>Bet placed</span>
          <span>Odds req.</span>
          <span>Matched</span>
          <span>Unmatched</span>
          <span style={{ textAlign: "end" }}>Date matched</span>
        </div>

        {unmatchedBets.map((bet, index) => (
          <div key={index} className="table-row11 table-row2">
            <span style={{ width: "395px" }}>{bet.market}</span>
            <span style={{ width: "150px" }}>{bet.selectionType}</span>
            <span>{bet.betId}</span>
            <span>{bet.betPlaced}</span>
            <span>{bet.oddsReq}</span>
            <span>{bet.matched}</span>
            <span>{bet.unmatched}</span>
            <span style={{ textAlign: "end" }}>{bet.dateMatched}</span>
          </div>
        ))}
      </div>

      <div className="transaction-table">
        <div className="transaction-table-header">Matched</div>
        <div className="table-header table-header2">
          <span style={{ width: "395px" }}>Market</span>
          <span style={{ width: "150px" }}>Selection Type</span>
          <span>Bet ID</span>
          <span>Bet placed</span>
          <span>Odds req.</span>
          <span>Matched</span>
          <span>Avg. odds matched</span>
          <span style={{ textAlign: "end" }}>Date matched</span>
        </div>

        {matchedBets.map((bet, index) => (
          <div key={index} className="table-row11 table-row2">
            <span style={{ width: "395px" }}>{bet.market}</span>
            <span style={{ width: "150px" }}>{bet.selectionType}</span>
            <span>{bet.betId}</span>
            <span>{bet.betPlaced}</span>
            <span>{bet.oddsReq}</span>
            <span>{bet.matched}</span>
            <span>{bet.avgOddsMatched}</span>
            <span style={{ textAlign: "end" }}>{bet.dateMatched}</span>
          </div>
        ))}
      </div>
    </>
  );
};

const Current_bets = () => {
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

      {/* Account Details */}
      <div className="account-details">
        <h4 className="section-title">My Bets</h4>
        <MyBeatNav />

        {/* Categories Section */}
        <div className="categories">
          {["Exchange", "FancyBet", "Sportsbook", "BookMaker"].map((category) => (
            <button
              key={category}
              className={`category-button ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Filter Section */}
        <div className="filter-section">
          <label>
            Bet Status
            <select className="filter-select">
              <option value="all">All</option>
              <option value="settled">Settled</option>
              <option value="unsettled">Unsettled</option>
            </select>
          </label>

          <label>
            Period
            <input type="checkbox" className="filter-date" />
          </label>
          <label>
            Bet placed
            <input type="checkbox" className="filter-date" />
          </label>
        </div>

        <div className="category-content">
          {getCategoryContent(activeCategory)}
        </div>
      </div>
    </div>
  );
};

export default Current_bets;