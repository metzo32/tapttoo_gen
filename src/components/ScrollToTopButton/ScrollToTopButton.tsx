import React, { useState, useEffect } from "react";
import { Overlay, Button, TopArrowIcon } from "./ScrollToTopButton.style";

const ScrollToTopButton = () => {
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

const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Overlay className="scroll-top-box">
          <Button onClick={handleScrollToTop} className="scroll-top-btn">
            <TopArrowIcon />
          </Button>
        </Overlay>
      )}
    </>
  );
};

export default ScrollToTopButton;
