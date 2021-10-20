import React, { useContext, useEffect } from "react";
import "./Header.css";
import SellButton from "../../assets/SellButton";
import { AuthContext } from "../../Store/Context";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ProfileDropdown from "./ProfileDropdown";
import NavbarSecond from "./Categories/NavbarSecond";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Header() {
  const { user } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
    }
  }, []);

  const loginMove = () => {
    history.push("/login");
  };

  const createPage = () => {
    history.push("/create");
  };

  return (
    <>
      <nav className="nav_main pb-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-1 logo_wrapper">
              <div className="img_logo">
                <img src={logo} alt="olx" style={{ height: "25px" }} />
              </div>
            </div>
            <div className="col-md-3 search_bar_main">
              <div className="search_bar">
                <button type="submit" className="search_btn">
                  <SearchIcon className="icon1" />
                </button>
                <input
                  className="search_field"
                  type="text"
                  placeholder="Search For Places.."
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="search_bar2">
                <input
                  className="search_field2"
                  type="text"
                  placeholder="Find car, mobile phone and more..."
                />
                <button type="submit" className="search_btn2">
                  <SearchIcon className="icon2" />
                </button>
              </div>
            </div>
            <div className="col-md-1 english_div">
              <span>ENGLISH</span>
              <KeyboardArrowDownIcon />
            </div>
            <div className="col-md-1 pt-1 login_wrapper">
              {user ? (
                <span className="btn_login1">
                  <ProfileDropdown />
                </span>
              ) : (
                <button onClick={loginMove} className="btn_login">
                  Login
                </button>
              )}
            </div>
            <div className="col-md-1 ">
              <div className="sellMenu" onClick={createPage}>
                <SellButton></SellButton>
                <div className="sellMenuContent">
                  <span>SELL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <NavbarSecond />
    </>
  );
}

export default Header;
