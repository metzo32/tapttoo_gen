import React from "react";
import s from "../stores/styling";
import { useState } from "react";
import { ArtistDataProps } from "../assets/datas/artitst_data";

interface SortButtonsProps {
  sortedData: ArtistDataProps[];
  sortDone: (sortedArray: ArtistDataProps[]) => void;
}

export default function SortButtons({ sortedData, sortDone }: SortButtonsProps) {
  const [showDropLeft, setShowDropLeft] = useState(false);

  const handleSortAlphabet = () => {
    const sorted = [...sortedData].sort((a, b) =>
      a.nickname.localeCompare(b.nickname)
    );
    sortDone(sorted);
  };

  const handleSortAlphabetReverse = () => {
    const sorted = [...sortedData].sort((a, b) =>
      b.nickname.localeCompare(a.nickname)
    );
    sortDone(sorted);
  };

  const handleSortOld = () => {
    const sorted = [...sortedData].sort((a, b) => a.id - b.id);
    sortDone(sorted);
  };

  const handleSortNew = () => {
    const sorted = [...sortedData].sort((a, b) => b.id - a.id);
    sortDone(sorted);
  };

  const handleDropLeft = () => {
    setShowDropLeft((prevShowDropLeft) => !prevShowDropLeft);
    console.log(showDropLeft);
  };


  return (
    <>
      <s.ArticleDiv className="button-container">
        <s.StyledUl
          className={`dropdown-box ${showDropLeft ? "open-drop-left" : ""}`}
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
 <s.Button
            className="header-button-item">
        <s.SortIcon onClick={handleDropLeft} />
        </s.Button>
      </s.ArticleDiv>
    </>
  );
}
