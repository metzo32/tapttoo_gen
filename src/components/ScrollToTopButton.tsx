import React, { useState, useEffect } from "react";
import s from "../stores/styling";
import { handleScrollToTop } from "./HandleScrollToTop"

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <s.Overlay className="scroll-top-box">
          <s.Button onClick={handleScrollToTop} className="scroll-top-btn">
            <s.TopArrowIcon />
          </s.Button>
        </s.Overlay>
      )}
    </>
  );
};

export default ScrollToTopButton;
