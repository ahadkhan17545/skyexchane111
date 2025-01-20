import React, { useContext, useState, useEffect } from "react";
import dots from "../../public/dots.png";
import { BsPinFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatchesByEventId } from "../redux/slices/matchSlice";

const InPlayCard = () => {
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

  const dispatch = useDispatch();

  const { matches: cricketMatches } = useSelector(
    (state) => state.matches.cricket
  );
  const { matches: soccerMatches } = useSelector(
    (state) => state.matches.soccer
  );
  const { matches: tennisMatches } = useSelector(
    (state) => state.matches.tennis
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cricket = dispatch(
          fetchMatchesByEventId({ eventId: 4, sport: "cricket" })
        );
        const soccer = dispatch(
          fetchMatchesByEventId({ eventId: 1, sport: "soccer" })
        );
        const tennis = dispatch(
          fetchMatchesByEventId({ eventId: 2, sport: "tennis" })
        );

        await Promise.allSettled([cricket, soccer, tennis]);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  const renderOdds = (filteredOdds) => {
    return filteredOdds?.runners[0]?.ex.availableToBack.map((back, index) => (
      <div key={index} className="link-event">
        <button className="btn-back">
          <b>{back?.price || "--"}</b>
        </button>
        <button className="btn-lay">
          <b>
            {filteredOdds?.runners[0]?.ex?.availableToLay[index]?.price || "--"}
          </b>
        </button>
      </div>
    ));
  };

  return (
    <>
      <ul className="dropdownul">
        <li onClick={() => toggleDropdown("cricket")}>Cricket</li>
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
                      <Link to={`/fullMarket?id=1`}>
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

                  <div className="link-event-box">
                    {renderOdds(filteredOdds)}
                    <div className="book-mark">
                      <div className="book-mark-icon">
                        <BsPinFill />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </ul>

      <ul className="dropdownul">
        <li onClick={() => toggleDropdown("soccer")}>Soccer</li>
        <div className="subdropdown" id="sub-soccer">
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

          {soccerMatches?.data
            ?.filter((e) => e?.matchOdds?.some((odds) => odds.inplay))
            .map((e, i) => {
              const filteredOdds = e?.matchOdds?.find(
                (odds) => odds.marketId === e.marketId
              );
              return (
                <div className="innerlink2" key={i}>
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link to={`/fullMarket?id=1`}>
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

                  <div className="link-event-box">
                    {renderOdds(filteredOdds)}
                    <div className="book-mark">
                      <div className="book-mark-icon">
                        <BsPinFill />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </ul>

      <ul className="dropdownul">
        <li onClick={() => toggleDropdown("tennis")}>Tennis</li>
        <div className="subdropdown" id="sub-tennis">
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

          {tennisMatches?.data
            ?.filter((e) => e?.matchOdds?.some((odds) => odds.inplay))
            .map((e, i) => {
              const filteredOdds = e?.matchOdds?.find(
                (odds) => odds.marketId === e.marketId
              );
              return (
                <div className="innerlink2" key={i}>
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link to={`/fullMarket?id=1`}>
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

                  <div className="link-event-box">
                    {renderOdds(filteredOdds)}
                    <div className="book-mark">
                      <div className="book-mark-icon">
                        <BsPinFill />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </ul>
    </>
  );
};

export default InPlayCard;
