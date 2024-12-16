import React, { useContext, useState } from "react";
import "./Navbar.css";
import { FaUser, FaCog } from "react-icons/fa";
import { MdSearch, MdOutlineLogin } from "react-icons/md";
import { HiXMark } from "react-icons/hi2";
import Logo from "../../../public/logo.png";
import Bach from "../../../public/wireless.svg";
import { NavLink, Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { IoMdRefresh } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { RiArrowDownSFill, RiLogoutBoxRLine } from "react-icons/ri";
import dolat_img from "../../../public/dolar.svg";
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
  const { setLoginOpen } = useContext(AppContext);
  const userId = localStorage.getItem("userId");
  const [menu, setMenu] = useState(false);

  const handaleToggle = () => {
    if (menu == false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem("userId", "12345");
      alert("Login successful!");
      setUsername("");
      setPassword("");
    } else {
      alert("Please enter both username and password.");
    }
  };

  const LoginModle = () => {
    setLoginOpen(true);
  };

  return (
    <div className="navbar">
      {/* Top Navbar */}
      <div className="navbar-top">
        <div className={`logo_search_box ${userId ? `user-logged-in` : ""}`}>
          <div className="navbar-logo">
            <img src={Logo} alt="Logo" className="logo" />
          </div>

          <div className="search-bar">
            <MdSearch className="search-icon" />
            <input type="text" placeholder="Search Events" />
            <div className="search-close">
              <HiXMark className="close-icon" />
            </div>
          </div>
        </div>

        {userId ? (
          <div className="account-wrap">
            <div className="main-wallet">
              <a href="">
                Main Balance{" "}
                <b style={{ marginLeft: "4px", marginRight: "4px" }}>IR 0.00</b>{" "}
                Exposure{" "}
                <b style={{ marginLeft: "4px", marginRight: "4px" }}>0.00</b>
                <span>
                  +<b>4</b>
                </span>
                <button>
                  <IoMdRefresh />
                </button>
              </a>
            </div>

            <div className="my-account">
              <button onClick={handaleToggle}>
                <FaUserAlt /> My Account <RiArrowDownSFill />
                {menu && (
                  <div className="my-account-doropdown">
                    <ul>
                      <h4>
                        Shamsher <span className="sp1">Demo</span>
                        <span className="sp2">GMT+530</span>
                      </h4>
                      <li>
                        <Link to="/myAccount/profile">My Profile</Link>
                      </li>
                      <li>
                        <Link to="/myAccount/summary">Balance Overview</Link>
                      </li>
                      <li>
                        <Link to="/myAccount/accountCashStatement">
                          Account Statement
                        </Link>
                      </li>
                      <li>
                        <Link to="/myAccount/current_bets">My Bets</Link>
                      </li>
                      <li>
                        <Link to="/myAccount/bets-history">Bets History</Link>
                      </li>
                      <li>
                        <Link to="/myAccount/profit-loss">Profit & Loss</Link>
                      </li>
                      <button>
                        LOGOUT <RiLogoutBoxRLine />
                      </button>
                    </ul>
                  </div>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="auth-container">
            <div className="user-section">
              <FaUser className="user-icon" />
              <input
                type="text"
                placeholder="Username"
                className="auth-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="validation">
              <input
                type="text"
                placeholder="Validation"
                className="auth-input"
              />
              <span className="validation-number">6043</span>
            </div>
            <button className="auth-btn login-btn" onClick={handleLogin}>
              Login <MdOutlineLogin />
            </button>
            <button className="auth-btn signup-btn">Sign Up</button>
          </div>
        )}

        <div className={`mobile-auth-btn ${userId ? `user-logged-in` : ""}`}>
          <Link>Sign up</Link>
          <Link to="/Login">
            <FaUser /> Login
          </Link>
        </div>

        {/* logged in section */}

        <ul className={`li-tv_bet-main ${userId ? `user-logged-in` : ""}`}>
          <li className="li-tv_bet">
            <img src={dolat_img} alt="" />
            Bets
          </li>
          <div className="main-wallet main-wallet-mobile">
            <a href="">
             <div>
             <div>
                Main
                <b style={{ marginRight: "4px" }}>IR 0.00</b>
              </div>
              <div>
                Exposure
                <b style={{ marginRight: "4px" }}>0.00</b>
              </div>
             </div>
              <span>
                +<b>4</b>
              </span>
              <button>
                <IoMdRefresh />
              </button>
            </a>
          </div>
          <li className="mobile-setting">
            <IoMdSettings/>
          </li>
        </ul>
        {/* logged in section */}
      </div>

      {/* Bottom Navbar */}
      <div className="navbar-bottom">
        <ul className="navbar-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/in-play">In-Play</NavLink>
          </li>
          <li>
            <NavLink to="/multi-markets">Multi Markets</NavLink>
          </li>
          <li>
            <NavLink to="/cricket">
              Cricket
              <div className="badge">
                <strong className="bach-box">
                  <img src={Bach} alt="" />
                </strong>
                <span className="badge-text">9</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/soccer">
              Soccer
              <div className="badge">
                <strong className="bach-box">
                  <img src={Bach} alt="" />
                </strong>
                <span className="badge-text">9</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tennis">Tennis</NavLink>
          </li>

          {userId ? (
            <li>
              <NavLink to="/virtual-cricket">Virtual Cricket</NavLink>
            </li>
          ) : (
            <li onClick={LoginModle}>
              <Link>Virtual Cricket</Link>
            </li>
          )}

          <li>
            <NavLink to="/e-soccer">
              E-Soccer
              <div className="badge">
                <strong className="bach-box">
                  <img src={Bach} alt="" />
                </strong>
                <span className="badge-text">9</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/kabaddi">
              Kabaddi
              <div className="badge">
                <strong className="bach-box">
                  <img src={Bach} alt="" />
                </strong>
                <span className="badge-text">0</span>
              </div>
            </NavLink>
          </li>
        </ul>

        <div className="navbar-right">
          <span className="time-zone">
            Time Zone: <b style={{ color: "black" }}>GMT +5:30</b>
          </span>
          <button className="btn-one-click">One Click Bet</button>
          <span className="settings">
            Setting <FaCog className="settings-icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
