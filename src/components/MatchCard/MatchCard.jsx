import React from "react";
import "./MatchCard.css";
import { cards } from "../../data";
import Bach from "../../../public/wireless.svg";
import { useNavigate } from "react-router-dom";



const MatchCard = () => {
  const navigate = useNavigate()
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div className="card" key={index} onClick={() => navigate(`${card.livebeat}?id=${card.id}`)}>
          <img src={card.image} alt={card.title} className="card-image" />
          {card.buttonText && (
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <button className="card-button">{card.buttonText}</button>
            </div>
          )}

          {card.live && (
            <div className="live_Match">
              <div className="badge">
                <strong className="bach-box">
                  <img src={Bach} alt="" />
                </strong>
                <span className="badge-text">Live</span>
              </div>

              <div className="live_Match_lists_wrapper">
                {Array.isArray(card.live) && card.live.length > 0 && (
                  <div className="live_Match_lists_wrapper">
                    {card.live.map((e, i) => (
                      <div className="live_Match_lists" key={i}>
                        <p>{e.name}</p>
                        <span>{e.score}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MatchCard;
