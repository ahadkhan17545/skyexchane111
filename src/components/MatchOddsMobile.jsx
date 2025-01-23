import React, { useState, useEffect } from "react";
import topIcon from "../../public/betlimit.svg";
import grow from "../../public/grow.svg";
import BetComponent from "./BetComponent";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setOdsValue } from "../redux/slices/fullmarketSlice";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f1f5f9",
    borderBottom: "1px solid #ddd",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
  },
  matchedSection: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    width: "60%",
  },
  icon: {
    width: "10.4vw",
    height: "9.3333333333vw",
    backgroundColor: "#e0e6e6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  backLaySection: {
    display: "flex",
    height: "100%",
  },
  matchOddsSection: {
    display: "flex",
    flexDirection: "column",
  },
  teamRow: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #7e97a7",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  teamName: {
    fontWeight: "600",
    width: "60%",
    fontSize: "4vw",
    paddingLeft: "10px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  oddsContainerMain: {
    display: "flex",
  },

  oddsContainer: {
    display: "flex",
    gap: "5px",
  },
  oddsBox: {
    textAlign: "center",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "3.4666666667vw",
    width: "18.6666666667vw",
    height: "42px",
  },
  backOdds: {
    backgroundColor: "#72bbef",
    borderRight: "1px solid #ffff",
    fontWeight: "bold",
    fontSize: "3.4666666667vw",
    padding: " 1.6vw",
    color: "#1e1e1e",
  },
  layOdds: {
    backgroundColor: "#faa9ba",
    fontWeight: "bold",
    fontSize: "12px",
    padding: " 1.6vw",
    color: "#1e1e1e",
  },
  oddsVolume: {
    fontSize: "10px",
    color: "black",
    fontWeight: "400",
  },
  matchedItem: {
    display: "flex",
    flexDirection: "column",
  },
  BackSection: {
    textAlign: "center",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "12px",
    width: "18.6666666667vw",
    marginTop: "10px",
  },
  LaySection: {
    textAlign: "center",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "12px",
    width: "18.6666666667vw",
    marginTop: "10px",
  },
  Matched1: {
    fontSize: "10px",
  },
  Matched1Item: {
    fontSize: "11px",
  },
};

const MatchOddsMobile = ({ data, runningData, betData }) => {
  const dispatch = useDispatch();

  const [openMenu, setOpenMenu] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [localBetData, setLocalBetData] = useState(null);
  const [activeOdds, setActiveOdds] = useState({ index: null, type: null });

  const handleToggle = (index, value, type, selectionId) => {
    setSelectedIndex(index);
    setSelectedValue(value);
    setSelectedType(type);
    setActiveOdds({ index, type });
    setOpenMenu(index);

    dispatch(
      setOdsValue({
        obs_Value: value,
      })
    );

    const oddsData = {
      oddsType: type,
      selectionId: selectionId,
    };

    setLocalBetData(oddsData);
  };


  return (
    <div className="mobile-odds" style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        {/* Matched Section */}
        <div style={styles.matchedSection}>
          <div style={styles.icon} className="topIcon-Box">
            <img
              src={topIcon}
              alt="icon"
              style={{ width: "6.6666666667vw", height: "6.6666666667vw" }}
            />
          </div>
          <div style={{ display: "flex", gap: "5px", paddingLeft: "5px" }}>
            <img
              style={{ width: "6.6666666667vw", height: "6.6666666667vw" }}
              src={grow}
              alt=""
            />
            <div style={styles.matchedItem}>
              <span style={styles.Matched1}>Matched</span>
              <span style={styles.Matched1Item}>
                PTE {data?.data?.[0]?.totalMatched || 0}
              </span>
            </div>
          </div>
        </div>

        {/* Back & Lay Section */}
        <div style={styles.backLaySection}>
          <span style={styles.BackSection}>Back</span>
          <span style={styles.LaySection}>Lay</span>
        </div>
      </div>

      {data?.data[0]?.runners?.map((runner, index) => {
        const runnerData = runningData?.find(
          (data) => data.selectionId === runner.selectionId
        );

        return (
          <div style={styles.matchOddsSection} key={index}>
            <div style={styles.teamRow}>
              <div style={styles.teamName}>
                {runnerData ? runnerData?.runnerName : ""}

                {betData && (betData.calculateValue || betData.addedValue) && (
                  <span
                    style={{
                      fontSize: "9px",
                      color:
                        selectedType === "Lay"
                          ? betData.index === index
                            ? "red"
                            : "green"
                          : betData.index === index
                          ? "green"
                          : "red",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "3px",
                    }}
                  >
                    <IoIosArrowRoundForward size={12} />
                    {betData.index === index
                      ? betData.calculateValue
                      : betData.addedValue}{" "}
                  </span>
                )}
              </div>

              <div style={styles.oddsContainerMain}>
                <div
                  style={styles.oddsContainer}
                  onClick={() =>
                    handleToggle(
                      index,
                      runner?.ex?.availableToBack[0]?.price,
                      "Back",
                      runner?.selectionId 
                    )
                  }
                >
                  <div
                    className={
                      activeOdds.index === index && activeOdds.type === "Back"
                        ? "activeBackbord"
                        : ""
                    }
                    style={{ ...styles.oddsBox, ...styles.backOdds }}
                  >
                    {runner?.ex?.availableToBack[0]?.price || "--"}
                    <br />
                    <span style={styles.oddsVolume}>
                      {runner?.ex?.availableToBack[0]?.size}
                    </span>
                  </div>
                </div>

                <div
                  style={styles.oddsContainer}
                  onClick={() =>
                    handleToggle(
                      index,
                      runner?.ex?.availableToLay[2]?.price,
                      "Lay",
                      runner?.selectionId 
                    )
                  }
                >
                  <div
                    className={
                      activeOdds.index === index && activeOdds.type === "Lay"
                        ? "activeLaykbord"
                        : ""
                    }
                    style={{ ...styles.oddsBox, ...styles.layOdds }}
                  >
                    {runner?.ex?.availableToLay[2]?.price || "--"}
                    <br />
                    <span style={styles.oddsVolume}>
                      {runner?.ex?.availableToLay[2]?.size}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <BetComponent
              openMenu={openMenu}
              index={index}
              setOpenMenu={setOpenMenu}
              selectedIndex={selectedIndex}
              selectedValue={selectedValue}
              selectedType={selectedType}
              data={data}
              oddsData={localBetData}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MatchOddsMobile;
