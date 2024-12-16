import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MobileNav.css";
import { IoMdSearch } from "react-icons/io";
import Search from "../../Config/MobileSearch/Search";

const MobileMenu = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      <div className="mobile-menu">
        <ul>
          <li>
            <NavLink to="/cricket">
              <img src="/cri1.svg" alt="Cricket Icon" height={17} /> Cricket
              <div className="badge">
                <strong className="bach-box">
                  <img src="/wireless.svg" alt="Badge Icon" />
                </strong>
                <span className="badge-text">9</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/soccer">
              <img src="/cri2.svg" alt="Soccer Icon" height={17} /> Soccer
              <div className="badge">
                <strong className="bach-box">
                  <img src="/wireless.svg" alt="Badge Icon" />
                </strong>
                <span className="badge-text">9</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tennis">
              <img src="/cri3.svg" alt="Tennis Icon" height={17} /> Tennis
              <div className="badge">
                <strong className="bach-box">
                  <img src="/wireless.svg" alt="Badge Icon" />
                </strong>
                <span className="badge-text">9</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/e-soccer">
              <img src="/cri4.svg" alt="E-Soccer Icon" height={17} /> E-Soccer
              <div className="badge">
                <strong className="bach-box">
                  <img src="/wireless.svg" alt="Badge Icon" />
                </strong>
                <span className="badge-text">9</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/kabaddi">
              <img src="/cri5.svg" alt="Kabaddi Icon" height={17} /> Kabaddi
              <div className="badge">
                <strong className="bach-box">
                  <img src="/wireless.svg" alt="Badge Icon" />
                </strong>
                <span className="badge-text">9</span>
              </div>
            </NavLink>
          </li>
        </ul>

        {/* Search Icon */}
        <div className="mobile-search" onClick={toggleSearch}>
          <IoMdSearch />
        </div>
      </div>

      {/* Render Search Component */}
      {isSearchOpen && <Search closeSearch={closeSearch} />}

      <div className="wrap-highlight_list">
        <h3>Highlights</h3>
      </div>
    </>
  );
};

export default MobileMenu;
