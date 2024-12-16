import React from "react";
import "../assets/styles/MyAccount.css";
import AccountSidebar from "../components/AccountSidebar";

const AccountCashStatement = () => {
  return (
    <div className="my-account-container">
      {/* Sidebar */}
      <AccountSidebar />

      {/* Account Details */}
      <div className="account-details">
        <h4 className="section-title">Account Statement</h4>

        {/* Transaction Table */}
        <div className="transaction-table">
          <div className="table-header">
            <span>Date</span>
            <span>Transaction №</span>
            <span>Debits</span>
            <span>Credits</span>
            <span>Balance</span>
            <span>Remarks</span>
            <span style={{textAlign:"end"}}>From/To</span>
          </div>
          {/* Add rows dynamically here */}
          <div className="table-row11">
            <span>01/12/2024</span>
            <span>#12345</span>
            <span>100</span>
            <span>50</span>
            <span>50</span>
            <span>Example Remark</span>
            <span style={{textAlign:"end"}}>Shamsher</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCashStatement;
