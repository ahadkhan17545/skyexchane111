import React from "react";
import "../assets/styles/Loading.css";
import Load from "../../public/loading.gif";

const Loading = () => {
  return (
    <>
      <div id="loading" className="loading-wrap2">
        <ul className="loading2">
          <p>
            <img src={Load} alt="" />
          </p>
          <p>Loading...</p>
        </ul>
      </div>
    </>
  );
};

export default Loading;
