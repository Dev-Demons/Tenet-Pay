import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import logo from "../assets/logo-primary.png";
import "../assets/css/header.css"

const HeaderBar = () => {

  const navigate = useNavigate();
  const [navIndex, setNavIndex] = useState(0);

  const handleRoute = (data, index) => {
    setNavIndex(index);
    navigate(`/${data}`);
  }
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1170px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1170px)' });

  React.useEffect(() => {

  }, [isTabletOrMobile]);

  return (
    <div className="w-100">
      {isDesktopOrLaptop && (
        <>
          <div className="main-menu-bar d-flex flex-row justify-content-between align-items-center shadow-sm ps-8 pe-8" >
            <div>
              <h1 style={{ color: '#0093cb' }}>Tenet Pay</h1>
            </div>
            <ul className="nav">
              <li className="nav-item">
                <a className={`nav-link active`} onClick={() => handleRoute('', 0)}>
                  <div className="text-center">
                    <i className="bi bi-house-door fs-4"></i><br />
                    Home
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link`} onClick={() => handleRoute('my_wallet', 1)}>
                  <div className="text-center">
                    <i className="bi bi-wallet2 fs-4"></i><br />
                    My Wallet
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link`} onClick={() => handleRoute('login', 3)}>
                  <div className="text-center">
                    <i className="bi bi-person-lock fs-4"></i><br />
                    Login
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link`} onClick={() => handleRoute('signup', 4)}>
                  <div className="text-center">
                    <i className="bi bi-person-plus fs-4"></i><br />
                    Signup
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link`} onClick={() => handleRoute('reset_password', 2)}>
                  <div className="text-center">
                    <i className="bi bi-file-earmark-lock fs-4"></i><br />
                    Reset Password
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link`} >
                  <div className="text-center">
                    <i className="bi bi-list-task fs-4"></i><br />
                    More
                  </div>
                </a>
              </li>
            </ul>

          </div>
        </>
      )}

      {isTabletOrMobile && (
        <>
          <div className="top-banner d-flex flex-row justify-content-between align-items-center mt-0 pe-1 pe-sm-2 pe-xs-4">
            <div className="top-leader-res text-light d-flex flex-row justify-content-center align-items-center w-30 bg-primary h-100 px-5">
              <span><i className="bi bi-record2 fs-6"></i>Welcome to Ukeshe</span>
            </div>
          </div>
          <div className="main-menu-bar d-flex flex-row justify-content-between align-items-center shadow-sm px-5">
            <img className="logo" src={logo} />

            <ul className="nav">
              <li className="nav-item bg-primary rounded-5 d-flex justify-content-center">
                <a className=" fs-6 nav-link text-light">Sign In</a>
              </li>
              <li className="border cursor-pointer ms-3 border-2 rounded-circle border-primary d-flex justify-content-center align-items-center" style={{
                width: 46,
                height: 46,
              }}>
                <i className="bi bi-list-ul fs-5 text-primary"></i>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default HeaderBar;