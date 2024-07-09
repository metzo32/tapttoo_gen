import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import s from "../stores/styling";
import SideBar from "./SideBar";
import { AuthContext } from "../context/AuthContext";
import DarkModeButton from "./DarkModeButton";


export default function Header() {
  const navigate = useNavigate();
  const { currentlyLoggedIn } = useContext(AuthContext)

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [sidebar, setSidebar] = useState(false);

  const handleProfileNavigation = () => {
    if (currentlyLoggedIn) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    const viewportHeight = window.innerHeight;
console.log(viewportHeight);
  };

  const showSidebar = () => setSidebar(!sidebar);



  return (
    <s.HeaderDiv className="wrapper">
      <SideBar sidebar={sidebar} showSidebar={showSidebar} />
      <s.HeaderDiv className="button-wrapper">
        <s.Button 
          className="header-button-item" 
          onClick={showSidebar}
        >
          <s.HamburgerIcon/>
        </s.Button>

        <s.Button
          onClick={() => handleNavigation("/")}
          className="header-button-item"
        >
          <s.HomeIcon />
        </s.Button>


        <s.Button
          className="header-button-item"
          onClick={() => handleNavigation("/article")}
        >
          <s.SearchIcon />
        </s.Button>

      </s.HeaderDiv>
      <s.HeaderDiv className="button-wrapper">
        <DarkModeButton />
        <s.Button
          onClick={() => handleProfileNavigation()}
          className="header-button-item"
        >
          <s.ProfileIcon />
        </s.Button>
      </s.HeaderDiv>
    </s.HeaderDiv>
  );
}
