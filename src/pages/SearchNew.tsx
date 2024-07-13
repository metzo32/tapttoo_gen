import React from "react";
import s from "../stores/styling";
import { CarouselItem } from "../types/CarouselType";
import {
  CustomCarousel,
  defaultRenderItem,
} from "../components/CustomCarousel";

import { CarouselItemConverter } from "../stores/CarouselItemConverter";
import searchMainImages from "../stores/CarouselData";
import SearchProfiles from "../components/SearchProfiles";
import SearchEventProfile from "../components/SearchEventProfile";
import { CircularProgressbar } from 'react-circular-progressbar';
import SearchCard from "../components/SearchCard";
import InfiniteText from "../components/InfiniteText";

import search_img01 from "../assets/images/search_img01.jpg";
import search_img02 from "../assets/images/search_img02.jpg";
import search_today01 from "../assets/images/search_today01.jpg";

const items = CarouselItemConverter(searchMainImages)


const percentage = 66;
export default function SearchNew() {
  return (
    <>
      <s.Search className="search-wrapper">
        <s.Search className="top-container main">
          <CustomCarousel items={items} renderItem={defaultRenderItem} />
        </s.Search>

        
        <CircularProgressbar value={percentage} text={`${percentage}%`} />;

        <s.Search className="circles-container">
          <SearchProfiles />
        </s.Search>
        <s.Search className="search-container">서치바</s.Search>

        <SearchCard
          imageMain={search_img01}
          imageSub={search_img02}
          desMain="테스트"
          desSub="테스트테스트"
        />

        <s.Search className="top-container">
          <s.Search className="extra-margin">
            <s.Search className="today-container">
              <s.StyledH3 className="search-title">
                CHOICE OF THE DAY
              </s.StyledH3>

              <s.Search className="arrow">화살표</s.Search>
              <s.StyledP className="event-text">
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

        {/* <CircularProgressbar/> */}

        <s.Search className="top-container column">
          <s.StyledH3 className="search-title margin">
            UPCOMING EVENTS
          </s.StyledH3>
          <s.Search className="line-box">
            <s.Line className="dark" />

            <SearchEventProfile />
          </s.Search>
        </s.Search>
        <s.Search className="top-container column">
          <s.Line className="infinite" />
          <InfiniteText text="TAPTTOO EXCLUSIVE 2024" repeat={1000} />
          <s.Line className="infinite" />
        </s.Search>
      </s.Search>
      {/* <s.StyledH1 className='new-artists-title'>
                Lastest Artists
            </s.StyledH1> */}
      {/* <s.StyledH2 className='artist-name'>
                COCINAMADRE
            </s.StyledH2>
            <s.StyledP className='hashtag'>
                #핸드포크 #섬세한 #개성있는
            </s.StyledP>
            <s.Search className='new-img-box'>
                <s.Image src={new01} alt='photo' className='new-artist-img'/>
                <s.Image src={new02} alt='photo' className='new-artist-img'/>
                <s.Image src={new03} alt='photo' className='new-artist-img'/>
            </s.Search> */}


      <s.Search className="top-container extra-margin">
        <s.Image className="search-wide" src="" alt="image"/>
      </s.Search>


      <s.Search className="top-container extra-margin">
        <s.Search>
            <s.StyledH3 className="search-title">
            Reviews
            </s.StyledH3>
        </s.Search>
        <s.Search className="review-container">
            <s.Search>
                description
            </s.Search>
            <s.Search className="review-image-container">
            <s.Image className="search-review" src="" alt="image"/>
            </s.Search>
        </s.Search>
        <s.Search className="review-container">
            <s.Search>
                description
            </s.Search>
            <s.Search className="review-image-container">
            <s.Image className="search-review" src="" alt="image"/>
            </s.Search>
        </s.Search>

      </s.Search>
      <s.Search className="top-container">4</s.Search>
      <s.Search className="top-container">4</s.Search>
    </>
  );
}
