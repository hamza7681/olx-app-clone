import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import dp from '../../assets/dp.png'
import FileCopyIcon from '@mui/icons-material/FileCopy';
import WorkIcon from '@mui/icons-material/Work';
import PaymentIcon from '@mui/icons-material/Payment';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import TuneIcon from '@mui/icons-material/Tune';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import { Dropdown } from "antd";
import "antd/dist/antd.css";
import {auth} from '../../firebase_config'
import {signOut} from 'firebase/auth'
import { useHistory } from "react-router-dom";
import {Link, Router, Switch} from 'react-router-dom'

function ProfileDropdown() {

    const history = useHistory();
    const logout = () => {
        signOut(auth)
          .then(() => {
            localStorage.removeItem("token");
            history.push("/");
          })
          .catch((e) => alert(e.message));
      };

const user = auth.currentUser;




    const menu = (
        <div className="dr">
          <div className="container">
            <div className="row">
              <div className="col-3 pt-3">
                <img src={dp} style={{ width: "60px", height: "60px" }} />
              </div>
              <div className="col-9">
                <span className="hello">Hello,</span>
                <br />
                <span className="name">{user && user.displayName}</span>
                <br />
                <span className="edit">View and edit Profile</span>
              </div>
      
              <p className="steps mt-4 pl-3" >2 Steps Left</p>
              <div className="container one_wrapper">
                <div className="profile_divs">
                  <div className="sub_div"></div>
                  <div className="sub_div"></div>
                  <div className="sub_div"></div>
                  <div className="sub_div"></div>
                  <div className="sub_div2"></div>
                  <div className="sub_div2"></div>
                </div>
                <p style={{ fontSize: "12px", fontWeight: "300" }}>
                  OLX is built on trust. Help other people get to know you. Tell them
                  about the things you like.
                </p>
              </div>
      
              <div className="container-fluid two_wrapper">
                <ul className="dp_list">
                  <li className="dp_li pt-2 pb-2">
                   
               
                       <FileCopyIcon className="dp_list_icon" />
                    <span className="dp_list_item">My Ads</span>
                    
                   
                  
                  </li>
                  <li className="dp_li pb-2 pt-2">
                    <WorkIcon className="dp_list_icon" />
                    <span className="dp_list_item">Buy Business Package</span>
                  </li>
                  <li className="dp_li pb-2 pt-2">
                    <PaymentIcon className="dp_list_icon" />
                    <span className="dp_list_item">Brought Package and Billing</span>
                  </li>
                </ul>
              </div>
      
              <div className="container-fluid two_wrapper">
                <ul className="dp_list">
                  <li className="dp_li pt-2 pb-2">
                    <HelpOutlineIcon className="dp_list_icon" />
                    <span className="dp_list_item">Help</span>
                  </li>
                  <li className="dp_li pb-2 pt-2">
                    <TuneIcon className="dp_list_icon" />
                    <span className="dp_list_item">Settings</span>
                  </li>
                </ul>
              </div>
      
              <div className="container-fluid two_wrapper">
                <ul className="dp_list">
                  <li className="dp_li pt-2 pb-2">
                    <SystemUpdateAltIcon className="dp_list_icon" />
                    <span className="dp_list_item">Install OLX Lite App</span>
                  </li>
                </ul>
              </div>
              <div className="container-fluid">
                <ul className="dp_list">
                  <li className="dp_li pt-2 pb-2" onClick={logout}>
                    <SubdirectoryArrowLeftIcon className="dp_list_icon" />
                    <span className="dp_list_item">Logout</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );



    return (
        <>
             <Dropdown overlay={menu} trigger={["click"]}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <img src={dp} style={{ width: "40px", height: "40px" }} />{" "}
          <KeyboardArrowDownIcon className="dp_icon" />
        </a>
      </Dropdown>
        </>
    )
}

export default ProfileDropdown
