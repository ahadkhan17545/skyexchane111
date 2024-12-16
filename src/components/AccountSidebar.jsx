import React from 'react'
import { NavLink } from "react-router-dom";

const AccountSidebar = () => {
  return (
    <>
        <div className="sidebar">
        <h3 className="sidebar-title">My Account</h3>
        <ul className="sidebar-menu">
          <li><NavLink to="/myAccount/profile">My Profile</NavLink></li>
          <li><NavLink to="/myAccount/summary">Balance Overview</NavLink></li>
          <li><NavLink to="/myAccount/accountCashStatement">Account Statement</NavLink></li>
          <li><NavLink to="/myAccount/current_bets">My Bets</NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default AccountSidebar
