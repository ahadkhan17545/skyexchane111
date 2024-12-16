import React from "react";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./Search.css";

const Search = ({ closeSearch }) => {
  return (
    <div className="mobile-search-wrap">
      {/* Header */}
      <div className="search-header">
        <MdKeyboardArrowLeft className="icon back-icon" onClick={closeSearch}/>
        <input
          type="text"
          className="input-box"
          placeholder="Search by keyword"
        />

        <div className="mobile-search-box">
          <IoMdClose className="icon close-icon" />
          <IoMdSearch className="icon-search-icon" />
        </div>
      </div>
    </div>
  );
};

export default Search;
