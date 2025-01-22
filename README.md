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
  fancyBets: [
    { bet: "20 Over BANG", no: "69", yes: "71" },
    { bet: "10 Over IRE", no: "42", yes: "44" },
  ],
};




      {/* Bookmaker Market Section */}
      <div className="bookmaker-section">
        <div className="Bookmaker-Market-head">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={btnaddpin} alt="" />
            <h4 style={{ fontSize: "14px" }}>
              Bookmaker Market{" "}
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

        {/* Bookmaker Odds Table */}
        <table className="bookmaker-table">
          <thead>
            <tr>
              <th className="section-head section-head2"></th>
              <th className="market-top-head market-top-head2"></th>
              <th className="market-top-head market-top-head2"></th>
              <th className="market-top-head market-top-head2">Back</th>
              <th className="market-top-head market-top-head2">Lay</th>
              <th className="market-top-head market-top-head2"></th>
              <th className="market-top-head market-top-head2"></th>
            </tr>
          </thead>
          <tbody>
            {matchData.matchOdds.map((team, index) => (
              <React.Fragment key={index}>
                {/* Team Row */}
                <tr className="table-row">
                  <td
                    style={{
                      textAlign: "start",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    {team.team}
                  </td>

                  {/* Back Odds with Toggle */}
                  <td colSpan="3" style={{ padding: "0px" }}>
                    <dl
                      className={`lay-gradient ${
                        openMenu === index && activeToggle === "back"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleBackToggle(index)}
                      style={{ cursor: "pointer" }}
                    >
                      {team.back.map((odd, i) => (
                        <div key={`lay-gradient-${i}`}>
                          <p>{odd}</p>
                        </div>
                      ))}
                    </dl>
                  </td>

                  {/* Lay Odds with Toggle */}
                  <td colSpan="3" style={{ padding: "0px" }}>
                    <dl
                      className={`back-gradient ${
                        openMenu === index && activeToggle === "lay"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleLayToggle(index)}
                      style={{ cursor: "pointer" }}
                    >
                      {team.lay.map((odd, i) => (
                        <div key={`back-gradient-${i}`}>
                          <p>{odd}</p>
                        </div>
                      ))}
                    </dl>
                  </td>
                </tr>

                {/* Sub Menu (Toggle Visibility) */}
                {openMenu === index && (
                  <tr>
                    <td style={{ padding: "0px" }} colSpan="7">
                      <div
                        className={`sub-menu ${
                          openMenu === index && activeToggle === "lay"
                            ? "lay"
                            : ""
                        }`}
                      >
                        <div className="checkbox-section-main">
                          <div className="checkbox-section">
                            <input type="checkbox" id={`acceptOdds-${index}`} />
                            <label
                              htmlFor={`acceptOdds-${index}`}
                              style={{ fontWeight: "400" }}
                            >
                              Accept Any Odds
                            </label>
                          </div>

                          {/* Buttons Section */}
                          <div className="buttons-section">
                            <button
                              className="button"
                              onClick={() => setOpenMenu(null)} // Close menu
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
                            />
                            <button className="button button-active">
                              Place Bets
                            </button>
                          </div>
                        </div>

                        {/* Quick Bet Buttons */}
                        <div className="quick-buttons">
                          {["4", "30", "50", "200", "500", "1000"].map(
                            (value, i) => (
                              <button
                                key={i}
                                className="quick-button"
                                onClick={() => handleQuickButtonClick(value)}
                              >
                                {value}
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bookmaker Market mobile Section */}
      <BookmakMobile />
      {/* Bookmaker Market mobile Section */}

      {/* Fancy Bet Section with Tabs */}
      <div className="fancy-section">
        <div id="fancyBetHead" className="fancy-head">
          <div className="bet-shape">
            <img src={pinshape} alt="" />
          </div>
          <h4 className="in-play">
            <span id="headerName">
              <img src={icon_irun} alt="" /> Fancy Bet
            </span>
            <div className="shape-img-box">
              <div className="shape-img-outer">
                <img className="shape-img" src={shape} alt="" />
              </div>
            </div>
          </h4>
        </div>

        {/* Fancy Bet Tabs */}
        <div className="fancy-tabs-box">
          <div className="fancy-tabs">
            {["All", "Fancy"].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active-tab" : ""}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Fancy Bet Table */}
        {activeTab === "Fancy" && (
          <>
            <table className="fancy-table">
              <thead style={{ backgroundColor: "white" }}>
                <tr>
                  <th
                    colSpan={1}
                    style={{ padding: "5px", fontSize: "13px" }}
                  ></th>
                  <th style={{ padding: "5px", fontSize: "13px" }}>No</th>
                  <th style={{ padding: "5px", fontSize: "13px" }}>Yes</th>
                  <th style={{ padding: "5px", fontSize: "13px" }}></th>
                </tr>
              </thead>
              <tbody>
                {matchData.fancyBets.map((bet, index) => (
                  <tr key={index}>
                    <td style={{ textAlign: "start" }}>
                      <dl class="fancy-th-layout">
                        <dt>
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: "12px",
                              color: "black",
                            }}
                            id="marketName"
                          >
                            BRHW Will Win The Toss Bhav
                          </p>
                        </dt>
                      </dl>
                    </td>
                    <td style={{ backgroundColor: "#faa9ba" }}>
                      <b
                        style={{
                          fontWeight: "bold",
                          fontSize: "12px",
                          color: "black",
                        }}
                      >
                        1
                      </b>
                      <br />
                      <p
                        style={{
                          fontSize: "11px",
                          color: "black",
                        }}
                      >
                        {bet.no}
                      </p>
                    </td>
                    <td style={{ backgroundColor: "#72bbef" }}>
                      <b
                        style={{
                          fontWeight: "bold",
                          fontSize: "12px",
                          color: "black",
                        }}
                      >
                        1
                      </b>
                      <br />
                      <p
                        style={{
                          fontSize: "11px",
                          color: "black",
                        }}
                      >
                        {bet.yes}
                      </p>
                    </td>
                    <td>
                      <dl>
                        <dt
                          style={{
                            textAlign: "start",
                            fontSize: "11px",
                            color: "#7e97a7",
                          }}
                        >
                          Min/Max
                        </dt>
                        <dd
                          style={{
                            textAlign: "start",
                            fontSize: "11px",
                            color: "black",
                          }}
                          id="minMax"
                        >
                          {" "}
                          1.00 / 781.00
                        </dd>
                      </dl>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <FancyBetMobile />
          </>
        )}
      </div>