import React from "react";
import "./Popup.css";
import { FaTrophy } from "react-icons/fa";

const Popup = ({ onClose, clickedItem }) => {




  return (
    <div className="popup-box">
      <div className="popup-content">
        <div className="popup-header">
          <h2>20-20 DRAGON TIGER</h2>
          <button className="win-close-btn" onClick={onClose}>✖</button>
        </div>
        <h5 className="roundId">Round Id: 9191912081054 </h5>
        <div className="popup-body">
          <div className="cards-section">
            <div className="win-card dragon">
              <h3>Dragon</h3>
              <div className="card-value">
                <span>6</span>
                <div className="card-icon">♦</div>
              </div>

              <button className="winner-btn">Winner</button>
            </div>
            <div className="win-card tiger">
              <h3>Tiger</h3>
              <div className="card-value">
                <span>10</span>
                <div className="card-icon">♦</div>
              </div>
            </div>
          </div>

          <div className="results-section">
            <div className="result-row">
              <h4>TIGER ODD/EVEN</h4>
              <div className="result">
                <div className="result-box">
                  <div>
                    TIGER -
                    <span className="win-icon">
                      <FaTrophy />
                    </span>
                  </div>
                  <div>
                    TIE -{" "}
                    <span className="win-icon loss-icon">
                      <FaTrophy />
                    </span>
                  </div>
                </div>
                <div className="result-box">
                  <div>
                    DRAGON -{" "}
                    <span className="win-icon">
                      <FaTrophy />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="results-section">
            <div className="result-row">
              <h4>WINNER</h4>
              <div className="result">
                <div className="result-box">
                  <div>
                    TIE -{" "}
                    <span className="win-icon loss-icon">
                      <FaTrophy />
                    </span>
                  </div>
                </div>
                <div className="result-box">
                  <div>
                    DRAGON -{" "}
                    <span className="win-icon">
                      <FaTrophy />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="results-section">
            <div className="result-row">
              <h4>DRAGON ODD/EVEN</h4>
              <div className="result">
                <div className="result-box">
                  <div>
                    TIGER -
                    <span className="win-icon">
                      <FaTrophy />
                    </span>
                  </div>
                </div>
                <div className="result-box">
                  <div>
                    DRAGON -{" "}
                    <span className="win-icon">
                      <FaTrophy />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
