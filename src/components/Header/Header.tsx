import { useState } from "react";
import { Div, Button, HomeIcon, HamburgerIcon, SearchIcon } from "./Header.style";
import SideBar from "../Sidebar/SideBar";
import useWindowSize from "../../hooks/useWindowSize";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const { width } = useWindowSize();

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Div className="header-wrapper">
        <SideBar sidebar={sidebar} showSidebar={showSidebar} />

        <Button onClick={showSidebar} className="header-button-item">
          {width && width <= 767 ? <HamburgerIcon /> : null}
          메뉴
        </Button>

        <Button className="header-button-item">
          {width && width <= 767 ? <HomeIcon /> : null}
          버튼
        </Button>

        <Button className="header-button-item">
          {width && width <= 767 ? <SearchIcon /> : null}
          버튼
        </Button>
      </Div>
    </>
  );
}
