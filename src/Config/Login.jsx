import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import "./LoginModal.css";
import { RiLoginBoxLine } from "react-icons/ri";

const Login = () => {
  const { setLoginOpen } = useContext(AppContext);
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setLoginOpen(false);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`modal-backdrop ${isVisible ? "fade-in" : ""}`}>
      <div className={`modal-dialog ${isVisible ? "modal-slide-in" : ""}`}>
        {/* Close Button */}
        <button onClick={handleClose} className="close-btn">
          &times;
        </button>

        {/* Left Image Section */}
        <div className="left-image"></div>

        {/* Right Form Section */}
        <div className="right-form">
          <h3>Please login to continue</h3>
          <form>
            <input
              type="text"
              placeholder="Username"
              className="input-field2"
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field2"
            />

            <div className="Validation-box">
              <input
                type="text"
                placeholder="Validation Code"
                className="input-field2"
                onInput={(e) => {
                  if (e.target.value.length > 4) {
                    e.target.value = e.target.value.slice(0, 4);
                  }
                }}
              />
              <span>2899</span>
            </div>
            <button type="submit" className="submit-btn">
              Login <RiLoginBoxLine/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
