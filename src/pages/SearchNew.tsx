import React from "react";
import s from "../stores/styling";
import CustomCarousel from "../components/CustomCarousel";
import { useNavigate } from "react-router-dom";

import SearchEventProfile from "../components/SearchEventProfile";

import SearchCard from "../components/SearchCard";
import InfiniteText from "../components/InfiniteText";
import CircularText from "../components/CircularText";
import MagneticBox from "../components/MagneticBox";
import HoverButton from "../components/HoverButton";

import search_img01 from "../assets/images/search_img01.jpg";
import search_img02 from "../assets/images/search_img02.jpg";
import search_today01 from "../assets/images/search_today01.jpg";

export default function SearchNew() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <s.Search className="search-wrapper">
        {/* <MagneticBox /> */}
        <CustomCarousel />

        <SearchEventProfile />

        <s.Search className="top-container column">
          <s.Line className="infinite" />
          <InfiniteText text="TAPTTOO EXCLUSIVE 2024" repeat={1000} />
          <s.Line className="infinite" />
        </s.Search>
      </s.Search>

      <s.Search className="top-container">
          
          <s.Search className="sub-container extra-margin">
            <s.Search className="today-container">
              <s.StyledH3 className="search-title">
                CHOICE <br />
                OF THE DAY
              </s.StyledH3>

              <s.Search className="arrow">
                <CircularText />
              </s.Search>
              <s.StyledP>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus quae impedit deleniti repellat! Aspernatur
                deleniti, mollitia officia obcaecati eaque ipsam provident,
                dignissimos repellendus numquam magnam architecto maiores
                laudantium quidem soluta.
              </s.StyledP>
            </s.Search>
            <s.Search className="today-image-container">
              <s.Image
                className="search-square hover-event"
                src={search_today01}
                alt="image"
              />
            </s.Search>
          </s.Search>
        </s.Search>


      <s.Search className="search-container center">
          <s.Search className="search-gen-titles">
            <s.StyledH3 className="search-generate">
              " 당신의 이야기를 예술로. "
            </s.StyledH3>
            <s.StyledH3 className="search-generate">
              당신만을 위한 유니크한 디자인을&nbsp;
              <br />
              만나보세요.
            </s.StyledH3>
          </s.Search>

          <HoverButton
            onClick={() => handleNavigation("/your_custom_tattoo")}
            circle={true}
            text="나만의 도안 만들어보기"
          />
        </s.Search>


      <s.Search className="top-container sub-container extra-margin">
        <s.Search>
          <s.StyledH3 className="search-title">Reviews</s.StyledH3>
        </s.Search>
        <s.Search className="review-container">
          <s.Search>description</s.Search>
          <s.Search className="review-image-container">
            <s.Image className="search-review" src="" alt="image" />
          </s.Search>
        </s.Search>
        <s.Search className="review-container">
          <s.Search>description</s.Search>
          <s.Search className="review-image-container">
            <s.Image className="search-review" src="" alt="image" />
          </s.Search>
        </s.Search>
      </s.Search>

    </>
  );
}
