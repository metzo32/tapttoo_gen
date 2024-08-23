import React, { useState, useEffect } from "react";
import s from "../stores/styling";
import { ArtistDataProps } from "../assets/datas/artitst_data";
import { handleScrollToTop } from "./HandleScrollToTop";
import { PopUpBelow } from "./FramerMotions/scrollMotions";

interface SortButtonsProps {
  sortBefore: ArtistDataProps[];
  sortHandle: (sortedArray: ArtistDataProps[]) => void;
}

export default function SortButtons({
  sortBefore,
  sortHandle,
}: SortButtonsProps) {
  const [showDropLeft, setShowDropLeft] = useState(false);
  const [isDropped, setIsDropped] = useState<null | boolean>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSortAlphabet = () => {
    const sorted = [...sortBefore].sort((a, b) =>
      a.nickname.localeCompare(b.nickname)
    );
    sortHandle(sorted);
  };

  const handleSortAlphabetReverse = () => {
    const sorted = [...sortBefore].sort((a, b) =>
      b.nickname.localeCompare(a.nickname)
    );
    sortHandle(sorted);
  };

  const handleSortOld = () => {
    const sorted = [...sortBefore].sort((a, b) => a.id - b.id);
    sortHandle(sorted);
  };

  const handleSortNew = () => {
    const sorted = [...sortBefore].sort((a, b) => b.id - a.id);
    sortHandle(sorted);
  };

  // 메뉴 열기
  const handleDropLeft = () => {
    if (isDropped === null) {
      setIsDropped(true);
      setShowDropLeft(true);
    } else {
      setShowDropLeft((prevShowDropLeft) => !prevShowDropLeft);
      if (isDropped) {
        setIsDropped(false);
        setTimeout(() => setShowDropLeft(false), 300);
      } else {
        setShowDropLeft(true);
        setTimeout(() => setIsDropped(true), 0);
      }
    }
  };

  // 스크롤 이벤트
  const scrollEvent = () => {
    if (window.scrollY > 500) {
      setIsScrolled(true);
      if (isDropped) {
        setIsDropped(false);
        setTimeout(() => setShowDropLeft(false), 300);
      }
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [isDropped]);

  return (
    <>
      <s.StyledUl
        className={`dropdown-box ${
          isDropped === null
            ? ""
            : isDropped
            ? "open-drop-left"
            : "close-drop-left"
        }`}
      >
        <PopUpBelow delay={0.5}>
          <s.StyledLi className="dropdown-li">
            <s.Button className="dropdown-btn" onClick={handleSortAlphabet}>
              오름차순
            </s.Button>
          </s.StyledLi>
        </PopUpBelow>

        <PopUpBelow delay={0.8}>
          <s.StyledLi className="dropdown-li">
            <s.Button
              className="dropdown-btn"
              onClick={handleSortAlphabetReverse}
            >
              내림차순
            </s.Button>
          </s.StyledLi>
        </PopUpBelow>

        <PopUpBelow delay={1.1}>
          <s.StyledLi className="dropdown-li">
            <s.Button className="dropdown-btn" onClick={handleSortNew}>
              신규순
            </s.Button>
          </s.StyledLi>
        </PopUpBelow>

        <PopUpBelow delay={1.4}>
          <s.StyledLi className="dropdown-li">
            <s.Button className="dropdown-btn" onClick={handleSortOld}>
              오래된순
            </s.Button>
          </s.StyledLi>
        </PopUpBelow>
      </s.StyledUl>

      <s.Button className="scroll-top-btn">
        {isScrolled ? (
          <s.TopArrowIcon onClick={handleScrollToTop} />
        ) : (
          <s.SortIcon onClick={handleDropLeft} />
        )}
      </s.Button>
    </>
  );
}
