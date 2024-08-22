import React, { useState, useEffect } from "react";
import s from "../stores/styling";

interface ScrollToTopProps {
  sortedData?: any[]; 
  handleSort?: (sortedArray: any[]) => void; 
  showSortButton: boolean;
}

const ScrollToTop: React.FC<ScrollToTopProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const test = () => {
    console.log("Test function called");
    // 여기에 추가적인 로직을 넣으세요.
  };

  const clickEvent = () => {
    if (window.scrollY > 500) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", clickEvent);
    return () => {
      window.removeEventListener("scroll", clickEvent);
    };
  }, []);

  return (
    <s.Overlay className="scroll-top-box">
      <s.Button  onClick={isScrolled ? scrollToTop : test} className="scroll-top-btn">
        <s.TopArrowIcon />
      </s.Button>
    </s.Overlay>
  );
};

export default ScrollToTop;
