import React, { useState, useEffect } from "react";
import s from "../stores/styling";

const WishList: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
    );
    setIsMobile(mobile);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHovered(false);
    }
  };

  const handleMouseClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setClicked(!clicked);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setClicked(!clicked);
  };

  const renderIcon = () => {
    if (clicked) {
      return <s.WishIconClicked />;
    } else if (hovered) {
      return <s.WishIconHover />;
    } else {
      return <s.WishIconLine />;
    }
  };

  return (
    <s.ArticleDiv
      className="heart-wrapper"
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      onClick={handleMouseClick}
      onTouchStart={handleTouchStart}
    >
      {renderIcon()}
    </s.ArticleDiv>
  );
};

export default WishList;
