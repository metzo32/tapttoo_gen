import { Div, H3, NavBar, Overlay, Ul, Button } from "./SideBar.style";
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
              <li key={index} onClick={showSidebar}>
                <Button>{item.title}</Button>
              </li>
            ))}
            <li>
              <DarkModeButton />
            </li>
          </Ul>
        </NavBar>
      </Div>
    </>
  );
};

export default SideBar;
