import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import s from "../stores/styling";
import AuthContext from "../context/AuthContext";
import SideBar from "./SideBar";
import { IconContext } from "react-icons";

import { LiaPenSquareSolid } from "react-icons/lia";

export default function Header() {

  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  const [sidebar, setSidebar] = useState(false);

  const handleProfileNavigation = () => {
    if (isLoggedIn) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#6e6560", size: "1.8em" }}>
      <s.HeaderWrapper>
        <SideBar sidebar={sidebar} showSidebar={showSidebar} />
        <s.ButtonWrapper>
          <s.Button onClick={() => handleNavigation("/")}>
            <s.HomeIcon className="header" />
          </s.Button>
          <s.Button>
            <s.HamburgerIcon className="header" onClick={showSidebar} />
          </s.Button>
          <s.Button onClick={() => handleNavigation("/article")}>
            <LiaPenSquareSolid className="header" />
          </s.Button>
          <s.Button onClick={() => handleNavigation("/search")}>
            <s.SearchIcon className="header" />
          </s.Button>
        </s.ButtonWrapper>

        <s.ButtonWrapper>
          <s.Button>EN</s.Button>
          <s.Button>다크</s.Button>
          <s.Button onClick={() => handleProfileNavigation()}>
          로그인  
          </s.Button>
        </s.ButtonWrapper>
      </s.HeaderWrapper>
    </IconContext.Provider>
  );
}
