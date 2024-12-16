import React, { useState } from "react";
import "../assets/styles/Login.css";
import loginBg from "../../src/assets/images/KV-pic.png";
import loginLogin from "../../src/../public/logo.png";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const AuthLogin = () => {
  const navigator = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem("userId", "12345");
      alert("Login successful!");
      location.href = "/";
      setUsername("");
      setPassword("");
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-head">
          <img src={loginBg} alt="" />
          <img className="loginLogin" src={loginLogin} alt="" />
          <Link to="/">
            <div className="login-close">
              <IoMdClose />
            </div>
          </Link>
        </div>

        <from>
          <div className="auth-login-from">
            <div className="auth-login-input">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="auth-login-input">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="auth-login-input">
              <input type="text" placeholder="Validation Code" />
              <span>2504</span>
            </div>
            <button onClick={handleLogin}>Login</button>
          </div>
        </from>
        <div className="login-footer">
          <footer className="footer">
            {/* Links Section */}
            <div className="links-section">
              <a href="#">Privacy Policy</a> -
              <a href="#">Terms and Conditions</a> -
              <a href="#">Rules and Regulations</a> -<a href="#">KYC</a> -
              <a href="#">Responsible Gaming</a> -<a href="#">About Us</a> -
              <a href="#">Self-exclusion Policy</a>
            </div>

            {/* Contact Section */}
            <div className="contact-section">
              <div className="contact-box">
                <div className="contact-button">
                  Customer support1 | support2
                </div>
                <div className="contact-button">WhatsApp 3 | WhatsApp 4</div>
              </div>
              <div className="contact-button"></div>
              <div className="contact-box contact-box2">
                <div className="contact-button">Skype</div>
                <div className="contact-button">Email</div>
                <div className="contact-button">skyexchindia</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default AuthLogin;
