import React from 'react';
import s from '../stores/styling';
import { SideBarData } from '../stores/SideBarData';
import { GoChevronLeft } from "react-icons/go";

interface SideBarProps {
    sidebar: boolean;
    showSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ sidebar, showSidebar }) => {

  const group1 = SideBarData.slice(0, 3);
  const group2 = SideBarData.slice(3, 5);
  const group3 = SideBarData.slice(5, 7);
  const group4 = SideBarData.slice(7);

  return (
    <>
        {sidebar && <s.Overlay onClick={showSidebar} />}
        <s.SideBar className='sidebar-dark'>
            <s.NavBar className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <s.StyledUl className='nav-menu-items' onClick={showSidebar}>
                    <s.TapttooIcon />
                    <s.StyledLi className='navbar-toggle'>
                        <s.StyledLink to='#' className='close-arrow'>
                            <GoChevronLeft className='close-arrow'/>
                            {/* 닫기버튼 */}
                        </s.StyledLink>
                    </s.StyledLi>
                    <s.SideBar className="sidebar-box">
                        <s.SideBar className="sidebar-item">
                            {group1.map((item, index) => (
                                <s.SidebarLi key={index} className={item.className}>
                                    <s.StyledLink to={item.path} className='menu-texts'>
                                        <span>{item.title}</span>
                                    </s.StyledLink>
                                </s.SidebarLi>
                            ))}
                        </s.SideBar>
                        <s.SideBar className="sidebar-item">
                            {group2.map((item, index) => (
                                <s.SidebarLi key={index} className={item.className}>
                                    <s.StyledLink to={item.path} className='menu-texts'>
                                        <span>{item.title}</span>
                                    </s.StyledLink>
                                </s.SidebarLi>
                            ))}
                        </s.SideBar>
                        <s.SideBar className="sidebar-item">
                            {group3.map((item, index) => (
                                <s.SidebarLi key={index} className={item.className}>
                                    <s.StyledLink to={item.path} className='menu-texts'>
                                        <span>{item.title}</span>
                                    </s.StyledLink>
                                </s.SidebarLi>
                            ))}
                        </s.SideBar>
                        <s.SideBar className="sidebar-item">
                            {group4.map((item, index) => (
                                <s.SidebarLi key={index} className={item.className}>
                                    <s.StyledLink to={item.path} className='menu-texts'>
                                        <span>{item.title}</span>
                                    </s.StyledLink>
                                </s.SidebarLi>
                            ))}
                        </s.SideBar>
                    </s.SideBar>
                </s.StyledUl>
            </s.NavBar>
        </s.SideBar>
    </>
  );
}

export default SideBar;
