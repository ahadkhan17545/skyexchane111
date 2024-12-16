import React from "react";




const Marquee = ({newsItems}) => {
  return (
    <div className="marquee-box">
      <h4>News</h4>
      <div className="marquee">
        <div className="js-marquee">
          {newsItems.map((item, index) => (
            <a key={index}>
              <span>{item.date}</span> Event :- {item.event} : Market :-{" "}
              {item.market} {item.message}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
