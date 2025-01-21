import React, { useState, useContext } from "react";
import dots from "../../public/dots.png";
import { BsPinFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { AppContext } from "../Context/AppContext";
import { useDispatch, useSelector } from "react-redux";
import LinkEventBox from "./LinkEventBox";
import { setRunningData } from "../redux/slices/fullmarketSlice";

const SportsCard = ({ cricketMatches, MatchName }) => {
  const { setSelectedData, selectedData } = useContext(AppContext);

  const dispatch = useDispatch();

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

  const toggleDropdown = (id) => {
    document.getElementById(`sub-${id}`).classList.toggle("onsub");
  };

  const handleMarket = (runningData) => {
    dispatch(setRunningData(runningData));
  };

  return (
    <>
      <ul className="dropdownul">
        <li onClick={() => toggleDropdown("cricket")}>{MatchName}</li>
        <div className="subdropdown" id="sub-cricket">
          <div className="slip-head">
            <div className="slip-head-one">
              <p>Matched</p>
            </div>

            <div className="slip-head-two">
              <div className="slip-head-two-item">1</div>
              <div className="slip-head-two-item">x</div>
              <div className="slip-head-two-item">2</div>
              <div className="item-book"></div>
            </div>
          </div>

          {cricketMatches?.data
            ?.filter((e) => e?.matchOdds?.some((odds) => odds.inplay))
            .map((e, i) => {
              const filteredOdds = e?.matchOdds?.find(
                (odds) => odds.marketId === e.marketId
              );
              return (
                <div className="innerlink2" key={i}>
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link
                        to={`/fullMarket?eventType=4&eventId=${e.eventId}&marketId=${e.marketId}&competitionId=${e.competitionId}`}
                        onClick={() => handleMarket(e.matchRunners)}
                      >
                        <img className="icon-in_play" src={dots} alt="dots" />{" "}
                        {e.eventName}
                      </Link>

                      {e?.matchOdds?.some((odds) => odds?.inplay) && (
                        <p>
                          <span>In-Play</span> <div className="play-btn"></div>
                        </p>
                      )}
                    </div>

                    <div className="Matched-details">
                      <p>PTE---</p>
                    </div>
                  </div>

                  <LinkEventBox
                    eventName={e.eventName}
                    filteredOdds={filteredOdds}
                    handleDataClick={handleDataClick}
                    eventId={i}
                  />
                </div>
              );
            })}
        </div>
      </ul>
    </>
  );
};

export default SportsCard;
