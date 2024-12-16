import React, { useContext, useState } from "react";
import dots from "../../public/dots.png";
import { BsPinFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Cookies from "js-cookie";

const InPlayCard = ({ sportsData }) => {
  const { setSelectedData } = useContext(AppContext);
  const [clickedButtons, setClickedButtons] = useState({});

  const handleDataClick = (teamName, odds, type, eventId) => {
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

    if (isDuplicate) {
      // Remove only the clicked type (Back or Lay)
      const updatedData = dataArray.filter(
        (item) =>
          !(
            item.teamName === newData.teamName &&
            item.odds === newData.odds &&
            item.oddsType === newData.oddsType
          )
      );

      Cookies.set("selectedData", JSON.stringify(updatedData));
      setClickedButtons((prev) => ({
        ...prev,
        [eventId]: {
          ...prev[eventId],
          [type]: false, // Reset only the clicked type
        },
      }));
      console.log(`${type} removed.`);
    } else {
      // Add the new type (Back or Lay)
      dataArray.push(newData);
      Cookies.set("selectedData", JSON.stringify(dataArray));
      setSelectedData(newData);

      setClickedButtons((prev) => ({
        ...prev,
        [eventId]: {
          ...prev[eventId],
          [type]: true, // Set only the clicked type
        },
      }));
      console.log(`${type} added.`);
    }
  };

  const toggleDropdown = (id) => {
    document.getElementById(`sub-${id}`).classList.toggle("onsub");
  };

  return (
    <>
      {sportsData.map((sport, index) => (
        <ul className="dropdownul" key={index}>
          <li onClick={() => toggleDropdown(index)}>{sport.name}</li>
          <div className="subdropdown" id={`sub-${index}`}>
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

            {sport.events.map((event, i) => (
              <div className="innerlink2" key={i}>
                <div className="linkbox">
                  <div className="innerlink">
                    <Link to={`/fullMarket?id=${i + 1}`}>
                      <img className="icon-in_play" src={dots} alt="dots" />{" "}
                      {event.title}
                    </Link>
                    <p>
                      <span>In-Play</span> <div className="play-btn"></div>
                    </p>
                  </div>

                  <div className="Matched-details">
                    <p>{event.matched}</p>
                  </div>
                </div>

                <div className="link-event-box">
                  {event.odds.map((odd, j) => (
                    <div className="link-event" key={j}>
                      <button
                        onClick={() =>
                          handleDataClick(event.title, odd.back, "Back", i)
                        }
                        className={`btn-back ${
                          clickedButtons[i]?.Back ? "active-back" : ""
                        }`}
                      >
                        <b>{odd.back}</b>
                      </button>

                      <button
                        onClick={() =>
                          handleDataClick(event.title, odd.lay, "Lay", i)
                        }
                        className={`btn-lay ${
                          clickedButtons[i]?.Lay ? "active-lay" : ""
                        }`}
                      >
                        <b>{odd.lay}</b>
                      </button>
                    </div>
                  ))}
                  <div className="book-mark">
                    <div className="book-mark-icon">
                      <BsPinFill />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ul>
      ))}
    </>
  );
};

export default InPlayCard;
