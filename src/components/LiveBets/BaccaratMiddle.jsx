import React, { useState } from "react";
import "../../assets/styles/Menu_Middle.css";

import VideoFrame from "../VideoFrame/VideoFrame";
import Popup from "../BetsPopup/Popup";
import Chips from "../../../public/chips1.svg";
import Chips1k from "../../../public/chips1k.svg";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const BaccaratMiddle = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [clickedItem, setClickedItem] = useState("");

  const handleItemClick = (item) => {
    setClickedItem(item);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setClickedItem("");
  };

  const results = [
    { label: "D", color: "#72bbef" },
    { label: "D", color: "#f9a9ba" },
    { label: "T", color: "#72bbef" },
    { label: "T", color: "#72bbef" },
    { label: "D", color: "#72bbef" },
    { label: "D", color: "#ffff33" },
    { label: "D", color: "#f9a9ba" },
    { label: "T", color: "#f9a9ba" },
    { label: "D", color: "#f9a9ba" },
  ];

  const [selectedValue, setSelectedValue] = useState(null);

  const chips = [
    { id: 1, value: 100, img: Chips },
    { id: 2, value: 200, img: Chips },
    { id: 3, value: 300, img: Chips },
    { id: 4, value: 400, img: Chips },
    { id: 5, value: 500, img: Chips },
    { id: 6, value: 600, img: Chips },
    { id: 7, value: 700, img: Chips },
    { id: 8, value: "1k", img: Chips1k },
  ];

  const handleChipClick = (value) => {
    if (selectedValue === value) {
      setSelectedValue(null);
    } else {
      setSelectedValue(value);
    }
  };

  console.log(selectedValue);

  const data = {
    labels: ["Player", "Banker", "Tie"],
    datasets: [
      {
        label: "Statistics",
        data: [38, 52, 10],
        backgroundColor: ["#007bff", "#dc3545", "#28a745"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 20,
          padding: 10,
        },
      },
      datalabels: {
        color: "#fff",
        font: {
          size: 14,
          weight: "bold",
        },
        formatter: (value) => `${value}%`,
      },
    },
  };

  return (
    <div className="Middle-wraper Middle-wraper2">
      <VideoFrame />

      <div className="baccarat-main">
        <div className="baccarat">
          <div className="baccarat-inner">
            <h2>
              PLAYER PAIR <br />
              <span>11</span>
            </h2>
          </div>
          <div className="baccarat-inner-round">
            <h2>
              TIE <br />
              <span>8.00</span>
            </h2>
          </div>
          <div className="baccarat-inner">
            <h2>
              PLAYER PAIR <br />
              <span>11</span>
            </h2>
          </div>
        </div>

        <div className="baccarat baccarat2">
          <div className="baccarat-inner">
            <h2>
              PLAYER PAIR <br />
              <span>11</span>
            </h2>
          </div>
          <div className="baccarat-inner">
            <h2>
              BANKER PAIR <br />
              <span>11</span>
            </h2>
          </div>
        </div>

        <div className="baccarat-chips">
          <div className="Statistics-box">
            <h3>STATISTICS</h3>
            <div className="Statistics-chart">
              <Pie data={data} options={options} />
            </div>
          </div>

          <div className="Statistics-box chips-outer">
            <h3>CHIPS</h3>
            <div className="chips-main">
              {chips.map((chip) => (
                <div
                  key={chip.id}
                  className={`chips-box ${
                    selectedValue === chip.value ? "active" : ""
                  }`}
                  onClick={() => handleChipClick(chip.value)}
                >
                  <img src={chip.img} alt={`Chip ${chip.value}`} />
                  <p>{chip.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="recent-res">
        <h2>Recent Result</h2>
        <ul>
          {results.map((result, index) => (
            <li
              key={index}
              style={{ backgroundColor: result.color }}
              className={result.label === "D" ? "d-list" : "t-list"}
              onClick={() => handleItemClick(result.label)}
            >
              {result.label}
            </li>
          ))}
        </ul>
      </div>

      {isPopupVisible && (
        <Popup onClose={handleClosePopup} clickedItem={clickedItem} />
      )}
    </div>
  );
};

export default BaccaratMiddle;
