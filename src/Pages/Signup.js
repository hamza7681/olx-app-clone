import React from "react";
import logo from "../assets/logo.png";
import Signup from "../Components/Signup/Signup";

function SignupPage() {
  return (
    <div>
      <nav className="nav_main pb-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-5"></div>
            <div className="col-2">
              <div className="logo_wrapper">
                <div
                  className="img_logo"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <img src={logo} alt="olx" style={{ height: "25px" }} />
                </div>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </nav>
      <Signup />
    </div>
  );
}

export default SignupPage;
