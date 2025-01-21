import React from "react";
import { BsPinFill } from "react-icons/bs";

const LinkEventBox = ({
  eventName,
  filteredOdds,
  handleDataClick,
  eventId,
}) => {
  return (
    <div className="link-event-box">
      {[0, 1, 2].map((index) => (
        <div className="link-event" key={index}>
          <button
            className="btn-back"
            onClick={() =>
              handleDataClick(
                eventName,
                filteredOdds?.runners[0]?.ex?.availableToBack[index]?.price ,
                "Back",
                eventId
              )
            }
          >
            <b>
              {filteredOdds?.runners[0]?.ex?.availableToBack[index]?.price ||
                "--"}
            </b>
          </button>
          <button
            className="btn-lay"
            onClick={() =>
              handleDataClick(
                eventName,
                filteredOdds?.runners[0]?.ex?.availableToLay[index]?.price,
                "Lay",
                eventId
              )
            }
          >
            <b>
              {filteredOdds?.runners[0]?.ex?.availableToLay[index]?.price ||
                "--"}
            </b>
          </button>
        </div>
      ))}
      <div className="book-mark">
        <div className="book-mark-icon">
          <BsPinFill />
        </div>
      </div>
    </div>
  );
};

export default LinkEventBox;
