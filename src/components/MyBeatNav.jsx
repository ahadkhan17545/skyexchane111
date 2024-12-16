import React from "react";
import { NavLink } from "react-router-dom";

const MyBeatNav = () => {
  return (
    <>
      <div className="tabs-container">
        <NavLink
          to="/myAccount/current_bets"
          className={({ isActive }) =>
            isActive ? "tab-link active" : "tab-link"
          }
        >
          Current Bets
        </NavLink>
        <NavLink
          to="/myAccount/bets-history"
          className={({ isActive }) =>
            isActive ? "tab-link active" : "tab-link"
          }
        >
          Bets History
        </NavLink>
        <NavLink
          to="/myAccount/profit-loss"
          className={({ isActive }) =>
            isActive ? "tab-link active" : "tab-link"
          }
        >
          Profit & Loss
        </NavLink>
      </div>
    </>
  );
};

export default MyBeatNav;
