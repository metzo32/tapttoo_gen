import { Div, H3, NavBar, Overlay, Ul, Li } from "./SideBar.style";
import { SideBarData } from "../../stores/SideBarData";
import DarkModeButton from "../DarkModeButton/DarkModeButton";

interface SideBarProps {
  sidebar: boolean;
  showSidebar: () => void;
}

const SideBar = ({ sidebar, showSidebar }: SideBarProps) => {
  return (
    <>
      {sidebar && <Overlay onClick={showSidebar} />}
      <Div className="sidebar-wrapper">
        <NavBar className={`${sidebar ? "active" : ""}`}>
          <H3>Tapttoo</H3>
          <Ul className="nav-menu-items">
            {SideBarData.map((item, index) => (
              <Li key={index} onClick={showSidebar}>
                <span>{item.title}</span>
              </Li>
            ))}
            <Li>
              <DarkModeButton />
            </Li>
          </Ul>
        </NavBar>
      </Div>
    </>
  );
};

export default SideBar;
