import React, { useState } from "react";
import s from "../stores/styling";
import { ArtistDataProps } from "../assets/datas/artitst_data";

interface SortButtonsProps {
sortBefore: ArtistDataProps[];
sortDone: (sortedArray: ArtistDataProps[]) => void;
}

export default function SortButtons({ sortBefore, sortDone }: SortButtonsProps) {
  const [showDropLeft, setShowDropLeft] = useState(false);
  const [isDropped, setIsDropped] = useState<null | boolean>(null);

  const handleSortAlphabet = () => {
    const sorted = [...sortBefore].sort((a, b) =>
      a.nickname.localeCompare(b.nickname)
    );
    sortDone(sorted);
  };

  const handleSortAlphabetReverse = () => {
    const sorted = [...sortBefore].sort((a, b) =>
      b.nickname.localeCompare(a.nickname)
    );
    sortDone(sorted);
  };

  const handleSortOld = () => {
    const sorted = [...sortBefore].sort((a, b) => a.id - b.id);
    sortDone(sorted);
  };

  const handleSortNew = () => {
    const sorted = [...sortBefore].sort((a, b) => b.id - a.id);
    sortDone(sorted);
  };

  //메뉴 열기
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

  return (
    <>
      <s.ArticleDiv className="button-container">
        <s.StyledUl
          className={`dropdown-box ${
            isDropped === null
              ? ""
              : isDropped
              ? "open-drop-left"
              : "close-drop-left"
          }`}
        >
          <s.StyledLi className="dropdown-li">
            <s.Button className="dropdown-btn" onClick={handleSortAlphabet}>
              오름차순
            </s.Button>
          </s.StyledLi>

          <s.StyledLi className="dropdown-li">
            <s.Button
              className="dropdown-btn"
              onClick={handleSortAlphabetReverse}
            >
              내림차순
            </s.Button>
          </s.StyledLi>

          <s.StyledLi className="dropdown-li">
            <s.Button className="dropdown-btn" onClick={handleSortNew}>
              신규순
            </s.Button>
          </s.StyledLi>

          <s.StyledLi className="dropdown-li">
            <s.Button className="dropdown-btn" onClick={handleSortOld}>
              오래된순
            </s.Button>
          </s.StyledLi>
        </s.StyledUl>
        
        <s.Button className="header-button-item">
          <s.SortIcon onClick={handleDropLeft} />
        </s.Button>
      </s.ArticleDiv>
    </>
  );
}
