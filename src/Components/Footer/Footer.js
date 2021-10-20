import React from "react";
import appstore from "../../assets/appstore.webp";
import playstore from "../../assets/playstore.webp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FooterBanner from "./FooterBanner";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer_banner">
        <FooterBanner />
      </div>

      <div className="container-fluid main_wrapper">
        <div className="row">
          <div className="col-md-5 pb-5">
            <div className="row">
              <div className="col-6">
                <h6 className="heading_field">POPULAR LOCATIONS</h6>
                <ul className="list_field">
                  <li>Lahore</li>
                  <li>Karachi</li>
                  <li>Islamabad</li>
                  <li>Faisalabad</li>
                </ul>
              </div>
              <div className="col-6">
                <h6 className="heading_field">TRENDING LOCATIONS</h6>
                <ul className="list_field">
                  <li>Sialkot</li>
                  <li>Multan</li>
                  <li>Rawalpindi</li>
                  <li>Sahiwal</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5 pb-5">
            <div className="row">
              <div className="col-6">
                <h6 className="heading_field">ABOUT US</h6>
                <ul className="list_field">
                  <li>About OLX Group</li>
                  <li>Careers</li>
                  <li>Contact Us</li>
                  <li>OLX People</li>
                  <li>Waah Jobs</li>
                </ul>
              </div>
              <div className="col-6">
                <h6 className="heading_field">OLX</h6>
                <ul className="list_field">
                  <li>Help</li>
                  <li>Sitemap</li>
                  <li>Legal & Privacy Information</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-2 pb-5 social_wrapper">
            <h6 className="heading_field">FOLLOW US</h6>
            <span>
              <FacebookOutlinedIcon className="social_icon" />
            </span>
            <span>
              <InstagramIcon className="social_icon" />
            </span>
            <span>
              <TwitterIcon className="social_icon" />
            </span>
            <span>
              <YouTubeIcon className="social_icon" />
            </span>
            <div className="mt-4">
              <div className="row">
                <div className="col-6">
                  <img
                    src={appstore}
                    alt="olx"
                    style={{ height: "25px", width: "94px" }}
                    className="appstore"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={playstore}
                    alt="olx"
                    style={{
                      height: "25px",
                      width: "94px",
                      position: "relative",
                      left: "-10px",
                    }}
                    className="playstore"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright_footer pt-3">
        <div className="row">
          <div className="col-md-6">
            <p className="copyright_para1">
              Other Countries India - South Africa - Indonesia
            </p>
          </div>
          <div className="col-md-6">
            <p className="copyright_para2">
              Free Classifieds in Pakistan. © 2006-2021 OLX
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
