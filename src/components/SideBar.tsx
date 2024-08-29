import React from "react";
import s from "../stores/styling";
import { SideBarData } from "../stores/SideBarData";
import { useIsMobile } from "../context/MobileContext";
import DarkModeButton from "./DarkModeButton";

interface SideBarProps {
  sidebar: boolean;
  showSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ sidebar, showSidebar }) => {
  const group1 = SideBarData.slice(0, 3);
  const group2 = SideBarData.slice(3, 5);
  const group3 = SideBarData.slice(5, 7);
  const group4 = SideBarData.slice(7);

  const isMobile = useIsMobile()

  return (
    <>
      {sidebar && <s.Overlay onClick={showSidebar} />}
      <s.SideBar className="sidebar-wrapper">
        <s.NavBar className={`nav-menu active ${sidebar ? "active" : ""}`}>
            <s.StyledH3 className="sidebar-logo">Tapttoo</s.StyledH3>
              <s.StyledLink to="#" className="close-arrow">
                <s.LeftIcon className="close-arrow" />
              </s.StyledLink>

          <s.StyledUl className="nav-menu-items" onClick={showSidebar}>
            <s.StyledLi className="navbar-toggle">
            </s.StyledLi>
            <s.SideBar className="sidebar-box">
              {/* <s.SideBar className="sidebar-item"> */}
                {group1.map((item, index) => (
                  <s.StyledLi key={index} className={item.className}>
                    <s.StyledLink to={item.path} className="menu-texts">
                      <span>{item.title}</span>
                    </s.StyledLink>
                  </s.StyledLi>
                ))}
              {/* </s.SideBar> */}
              <s.SideBar className="sidebar-item">
                {group2.map((item, index) => (
                  <s.StyledLi key={index} className={item.className}>
                    <s.StyledLink to={item.path} className="menu-texts">
                      <span>{item.title}</span>
                    </s.StyledLink>
                  </s.StyledLi>
                ))}
              </s.SideBar>
              <s.SideBar className="sidebar-item">
                {group3.map((item, index) => (
                  <s.StyledLi key={index} className={item.className}>
                    <s.StyledLink to={item.path} className="menu-texts">
                      <span>{item.title}</span>
                    </s.StyledLink>
                  </s.StyledLi>
                ))}
              </s.SideBar>
              <s.SideBar className="sidebar-item">
                {group4.map((item, index) => (
                  <s.StyledLi key={index} className={item.className}>
                    <s.StyledLink to={item.path} className="menu-texts">
                      <span>{item.title}</span>
                    </s.StyledLink>
                  </s.StyledLi>
                ))}
              </s.SideBar>
            </s.SideBar>
          <DarkModeButton/>
          </s.StyledUl>
        </s.NavBar>
      </s.SideBar>
    </>
  );
};

export default SideBar;
