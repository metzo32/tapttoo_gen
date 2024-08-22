import React, { useState, useEffect } from "react";
import s from "../stores/styling";
import { HandleScrollToTop } from "./HandleScrollToTop";

type ScrollToTopProps = {
  showSortButton: true;
  sortedData: any[];
  handleSort: (sortedArray: any[]) => void;
} | {
  showSortButton: false;
  sortedData?: undefined;
  handleSort?: undefined;
};

const ScrollToTopButton: React.FC<ScrollToTopProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // 스크롤 이벤트 핸들러
  const scrollEvent = () => {
    if (window.scrollY > 500) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // 작은 스크롤 (10px) 이동하는 함수
  const test = () => {
    window.scrollTo({
      top: 10,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    // 버튼이 항상 화면에 표시되도록 수정
    <s.Overlay className="scroll-top-box">
      <s.Button onClick={isScrolled ? HandleScrollToTop : test} className="scroll-top-btn">
      {isScrolled ? <s.TopArrowIcon /> : <s.SortIcon/>}
      </s.Button>
    </s.Overlay>
  );
};

export default ScrollToTopButton;
