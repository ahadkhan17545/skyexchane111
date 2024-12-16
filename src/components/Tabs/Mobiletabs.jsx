import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import Search from "../../Config/MobileSearch/Search";

const Mobiletabs = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
      setIsSearchOpen(!isSearchOpen);
    };
  
    const closeSearch = () => {
      setIsSearchOpen(false);
    };
  return (
    <>
      <div className="mobile-tabs1">
        <div className="inner-btn-box">
          <NavLink to="/in-play">
            <button className="btn-one">In-Play</button>
          </NavLink>
          <NavLink to="/Today">
            <button className="btn-two">Today</button>
          </NavLink>
          <NavLink to="/tomorrow">
            <button className="btn-three">Tomorrow</button>
          </NavLink>
        </div>
        <button className="tabs-search" onClick={toggleSearch}>
          <IoMdSearch />
        </button>
      </div>

       {/* Render Search Component */}
       {isSearchOpen && <Search closeSearch={closeSearch} />}
    </>
  );
};

export default Mobiletabs;
