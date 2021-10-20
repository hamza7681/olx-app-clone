import React from "react";
import "./Footer.css";
import banner from "../../assets/mobile.webp";
import appstore from "../../assets/appstore.webp";
import playstore from "../../assets/playstore.webp";

function FooterBanner() {
  return (
    <>
      <div
        className="container-fluid main"
        style={{ backgroundColor: "#f7f8f8" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={banner} alt="olx" />
            </div>
            <div
              className="col-md-5 mt-4 mb-4 pl-5"
              style={{
                borderRightWidth: "2px",
                borderRightColor: "#aaa",
                borderRightStyle: "solid",
              }}
            >
              <div className="container">
                <h2 style={{ fontWeight: "bold", color: "#002f34" }}>
                  TRY THE OLX APP
                </h2>
                <h5 style={{ color: "#002f34" }}>
                  Buy, sell and find just about anything using the app on your
                  mobile.
                </h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="container mt-5">
                <p
                  style={{
                    position: "relative",
                    top: "12px",
                    fontWeight: "bold",
                    color: "#002f34",
                  }}
                >
                  GET YOUR APP TODAY
                </p>
                <div className="row">
                  <div className="col-6">
                    <img
                      src={appstore}
                      alt="olx"
                      style={{ height: "40px", width: "120px" }}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={playstore}
                      alt="olx"
                      style={{ height: "40px", width: "120px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterBanner;
