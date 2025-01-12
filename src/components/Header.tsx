import {  useState } from "react";
import s from "../stores/styling";
import SideBar from "./SideBar";
import useWindowSize from "../hooks/WindowSizeHook";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const { width } = useWindowSize();

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <s.HeaderDiv className="header-wrapper">
        <SideBar sidebar={sidebar} showSidebar={showSidebar} />

        <s.Button onClick={showSidebar} className="header-button-item">
          {width && width <= 767 ? <s.HamburgerIcon /> : null}
          메뉴
        </s.Button>

        <s.Button
          className="header-button-item"
        >
          {width && width <= 767 ? <s.HomeIcon /> : null}홈
        </s.Button>

        <s.Button
          className="header-button-item"
        >
          {width && width <= 767 ? <s.SearchIcon /> : null}
          아래로
        </s.Button>

      </s.HeaderDiv>
    </>
  );
}
