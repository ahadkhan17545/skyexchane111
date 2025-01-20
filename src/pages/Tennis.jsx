import React, { useContext, useState, useEffect } from "react";
import "../assets/styles/Cricket.css";
import Menu_select from "../components/Menu_select";
import Menu_Middle from "../components/Menu_Middle";
import Bet_slip from "../components/Bet_slip";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatchesByEventId } from "../redux/slices/matchSlice";

const Tennis = () => {
  const menuItems = [
    { title: "Sports", isHeader: true },
    { title: "All Sports", isHeader: false },
    { title: "Cricket", isHeader: true },
    { title: "Common", isHeader: false },
    { title: "Abu Dhabi T10", isHeader: false },
    { title: "ICC Men's T20 WC Asia Qualifier", isHeader: false },
    { title: "Indian Premier League", isHeader: false },
    { title: "One Day Internationals", isHeader: false },
    { title: "Sheffield Shield", isHeader: false },
    { title: "Test Matches", isHeader: false },
    { title: "Test Matches Series Markets", isHeader: false },
    { title: "Twenty20 Big Bash", isHeader: false },
    { title: "WBBL", isHeader: false },
    { title: "Womens International Twenty20 Matches", isHeader: false },
    { title: "Womens One Day Internationals", isHeader: false },
    { title: "Others", isHeader: false },
  ];

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { matches: tennisMatches } = useSelector(
    (state) => state.matches.tennis
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const tennis = dispatch(
          fetchMatchesByEventId({ eventId: 2, sport: "tennis" })
        );

        await Promise.allSettled([tennis]);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return (
    <>
      <div className="Cricket-wrap">
        <Menu_select menuItems={menuItems} />
          <Menu_Middle cricketMatches={tennisMatches} MatchName={"Tenis"} loader={loading}/>
        <Bet_slip />
      </div>
    </>
  );
};

export default Tennis;
