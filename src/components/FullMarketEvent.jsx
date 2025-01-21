import React, { useState, useEffect, useContext } from "react";
import "../assets/styles/FullMarketEvent.css";
import { BsPinFill } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";
import { MdAlarmOn } from "react-icons/md";
import iconChart from "../../public/icon-chart.png";
import btnaddpin from "../../public/btn-add-pin.png";
import icon_irun from "../../public/icon-irun.png";
import { AppContext } from "../Context/AppContext";
import Cookies from "js-cookie";
import MatchOddsMobile from "./MatchOddsMobile";
import BookmakMobile from "./BookmakMobile";
import shape from "../../public/bg-fanctbet_rules.svg";
import pinshape from "../../public/pinshape.svg";
import FancyBetMobile from "./FancyBetMobile";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMarketOdds } from "../redux/slices/fullmarketSlice";

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

const FullMarketEvent = () => {
  const dispatch = useDispatch();
  const { data, loading, error, runningData } = useSelector(
    (state) => state.marketOdds
  );
  
  const [searchParams] = useSearchParams();
  
  const eventType = searchParams.get("eventType");
  const eventId = searchParams.get("eventId");
  const marketId = searchParams.get("marketId");
  const competitionId = searchParams.get("competitionId");
  const [previousData, setPreviousData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      if (eventType && eventId && marketId && competitionId) {
        try {
          const marketOdds = await dispatch(
            fetchMarketOdds({ eventType, competitionId, eventId, marketId })
          );
  
          // Check if the fetched data is different from the previous data
          if (JSON.stringify(previousData) !== JSON.stringify(marketOdds)) {
            // Set the new data as previousData
            setPreviousData(marketOdds);
          }
        } catch (error) {
          console.error("Error fetching market odds:", error);
        }
      }
    };
  
    fetchData();
  

      const interval = setInterval(() => {
        fetchData();
      }, 2000);
  
      return () => clearInterval(interval);

  }, [dispatch,]);

  const { setSelectedData, selectedData } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState("Fancy");
  const [selectedValue, setSelectedValue] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [activeToggle, setActiveToggle] = useState(null);

  const handleDataClick = (teamName, odds, type) => {
    const newData = {
      teamName: teamName,
      odds: odds,
      oddsType: type,
    };

    const existingData = Cookies.get("selectedData");
    const dataArray = existingData ? JSON.parse(existingData) : [];

    const isDuplicate = dataArray.some(
      (item) =>
        item.teamName === newData.teamName &&
        item.odds === newData.odds &&
        item.oddsType === newData.oddsType
    );

    if (!isDuplicate) {
      dataArray.push(newData);

      Cookies.set("selectedData", JSON.stringify(dataArray));

      setSelectedData(newData);
    } else {
      console.log("Duplicate data, not saving.");
    }
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleBackToggle = (index) => {
    setOpenMenu((prev) =>
      prev === index && activeToggle === "back" ? null : index
    );
    setActiveToggle("back");
    setSelectedValue(null);
  };

  const handleLayToggle = (index) => {
    setOpenMenu((prev) =>
      prev === index && activeToggle === "lay" ? null : index
    );
    setActiveToggle("lay");
    setSelectedValue(null);
  };

  const handleQuickButtonClick = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="market-event-container">
      {/* Top Header Section */}
      <div className="top-header"></div>

      {/* Live Match Tracking Section */}

      <div style={{ backgroundColor: "white" }}>
        <div className="live-match-track">
          <div className="live-match-track__box">
            <button>
              <BsPinFill />
              <p>Pin</p>
            </button>
            <button>
              <IoMdRefresh />
              <p>Refress</p>
            </button>
          </div>
        </div>

        {/* Match Odds Section */}
        <div className="match-odds">
          <div
            style={{
              display: "flex",
              gap: 14,
              height: "100%",
              alignItems: "center",
            }}
          >
            <button>Match Odds</button>
            <div className="gameInfoDate-box">
              <div className="gameInfoDate">
                <MdAlarmOn />
              </div>
              <p>In-Play</p>
            </div>
          </div>
          <div className="max-num">Max 400</div>
          <div className="Matched-num">
            Matched <b>PTE {data?.data?.[0]?.totalMatched || 0}</b>
          </div>
        </div>
      </div>

      {/* Match Odds Table Section */}
      <div className="odds-section">
        <table className="odds-table">
          <thead>
            <tr>
              <th className="section-head">2 Selection</th>
              <th className="market-top-head market-top-head-one">100.9%</th>
              <th className="market-top-head"></th>
              <th className="market-top-head" style={{ padding: "0px" }}>
                <div className="back-header">Back All</div>
              </th>
              <th className="market-top-head" style={{ padding: "0px" }}>
                <div className="lay-header">Lay All</div>
              </th>
              <th className="market-top-head"></th>
              <th className="market-top-head market-top-head-last">100.9%</th>
            </tr>
          </thead>
          <tbody>
            {data?.data[0]?.runners?.map((runner, index) => {
              const runnerData = runningData.find(
                (data) => data.selectionId === runner.selectionId
              );

              return (
                <tr key={index}>
                  <td
                    style={{
                      textAlign: "start",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <img src={iconChart} alt="Team Icon" />
                    {/* Display the runnerName from runningData */}
                    {runnerData ? runnerData.runnerName : ""}
                  </td>

                  {/* Back Odds */}
                  <td
                    onClick={() =>
                      handleDataClick(
                        runnerData.runnerName,
                        runner?.ex?.availableToBack[2]?.price,
                        "Back",
                        eventId
                      )
                    }
                  >
                    {runner?.ex?.availableToBack[2]?.price || "--"}
                    <br />{" "}
                    <span style={{ fontSize: "8px" }}>
                      {runner?.ex?.availableToBack[2]?.size}
                    </span>
                  </td>

                  <td
                    onClick={() =>
                      handleDataClick(
                        runnerData.runnerName,
                        runner?.ex?.availableToBack[1]?.price,
                        "Back",
                        eventId
                      )
                    }
                  >
                    {runner?.ex?.availableToBack[1]?.price || "--"}
                    <br />{" "}
                    <span style={{ fontSize: "8px" }}>
                      {runner?.ex?.availableToBack[1]?.size}
                    </span>
                  </td>

                  <td
                    onClick={() =>
                      handleDataClick(
                        runnerData.runnerName,
                        runner?.ex?.availableToBack[0]?.price,
                        "Back",
                        eventId
                      )
                    }
                  >
                    {runner?.ex?.availableToBack[0]?.price || "--"}
                    <br />{" "}
                    <span style={{ fontSize: "8px" }}>
                      {runner?.ex?.availableToBack[0]?.size}
                    </span>
                  </td>

                  {/* Lay Odds */}

                  <td
                    onClick={() =>
                      handleDataClick(
                        runnerData.runnerName,
                        runner?.ex?.availableToLay[2]?.price,
                        "Lay",
                        eventId
                      )
                    }
                  >
                    {runner?.ex?.availableToLay[2]?.price || "--"}
                    <br />{" "}
                    <span style={{ fontSize: "8px" }}>
                      {runner?.ex?.availableToLay[2]?.size}
                    </span>
                  </td>

                  <td
                    onClick={() =>
                      handleDataClick(
                        runnerData.runnerName,
                        runner?.ex?.availableToLay[1]?.price,
                        "Lay",
                        eventId
                      )
                    }
                  >
                    {runner?.ex?.availableToLay[1]?.price || "--"}
                    <br />{" "}
                    <span style={{ fontSize: "8px" }}>
                      {runner?.ex?.availableToLay[1]?.size}
                    </span>
                  </td>

                  <td
                    onClick={() =>
                      handleDataClick(
                        runnerData.runnerName,
                        runner?.ex?.availableToLay[0]?.price,
                        "Lay",
                        eventId
                      )
                    }
                  >
                    {runner?.ex?.availableToLay[0]?.price || "--"}
                    <br />{" "}
                    <span style={{ fontSize: "8px" }}>
                      {runner?.ex?.availableToLay[0]?.size}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Live Match mobile Tracking Section */}
      <MatchOddsMobile data={data} runningData={runningData} />
      {/* Live Match mobile Tracking Section */}

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
    </div>
  );
};

export default FullMarketEvent;
