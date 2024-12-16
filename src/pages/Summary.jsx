import React from "react";
import "../assets/styles/MyAccount.css";
import AccountSidebar from "../components/AccountSidebar";

const Summary = () => {
  return (
    <div className="my-account-container">
      {/* Sidebar */}
      <AccountSidebar />

      {/* Account Details */}
      <div className="account-details">
        <h4 className="section-title">Summary</h4>

        {/* Balances and Welcome Section */}
        <div className="account-header">
          <div className="balance-section">
            <h5>Your Balances</h5>
            <p className="balance-amount">0.00 <span>IR</span></p>
          </div>
          <div className="welcome-section">
            <h5>Welcome,</h5>
            <p>
              View your account details here. You can manage funds, review and
              change your settings and see the performance of your betting
              activity.
            </p>
          </div>
        </div>

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

export default Summary;
