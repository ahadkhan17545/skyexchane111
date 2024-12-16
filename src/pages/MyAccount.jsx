import React from "react";
import "../assets/styles/MyAccount.css";
import AccountSidebar from "../components/AccountSidebar";

const MyAccount = () => {
  return (
    <div className="my-account-container">
      {/* Sidebar */}
      <AccountSidebar />

      {/* Account Details */}
      <div className="account-details">
        <h4 className="section-title">Account Details</h4>

        <div className="account-details-inner">

          <div className="section">
            <div className="subsection">
              <h5 className="subsection-title">About You</h5>
              <ul>
                <li>
                  <p>First Name</p> <span>null</span>
                </li>
                <li>
                  <p>Last Name</p> <span></span>
                </li>
                <li>
                  <p>Birthday</p> <span>--</span>
                </li>
                <li>
                  <p>Password</p> <span>********************************</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="section">
            <h5 className="subsection-title">Setting</h5>

            <div className="subsection">
              <ul>
                <li>
                  <p>Currency</p> <span>IR</span>
                </li>
                <li>
                  <p>Odds Format</p> <span>--</span>
                </li>
              </ul>
            </div>

            <div className="subsection subsection-Commission">
              <h5 className="subsection-title">Commission</h5>
              <ul>
                <li>
                  <p>Comm charged</p> <span>2.00 %</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="section" style={{ marginTop: "-5px" }}>
            <h5 className="subsection-title">Address</h5>
            <div className="subsection">
              <ul>
                <li>
                  <p>Address</p> <span>--</span>
                </li>
                <li>
                  <p>Town/City</p> <span>--</span>
                </li>
                <li>
                  <p>Country</p> <span>--</span>
                </li>
                <li>
                  <p>Country/State</p> <span>--</span>
                </li>
                <li>
                  <p>Postcode</p> <span>--</span>
                </li>
                <li>
                  <p>Timezone</p> <span>IST</span>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
