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

import search_img01 from "../assets/images/search_img01.jpg";
import search_img02 from "../assets/images/search_img02.jpg";

const items = CarouselItemConverter(searchMainImages);

export default function SearchNew() {
  return (
    <>
      <s.Search className="search-wrapper">
        <s.Search className="top-container main">
          <CustomCarousel items={items} renderItem={defaultRenderItem} />
        </s.Search>
        <s.Search className="circles-container">
          <SearchProfiles />
        </s.Search>
        <s.Search className="search-container">서치바</s.Search>

        <s.Search className="top-container">
          <s.Search className="extra-margin">
            <s.Search className="mid-conatiner left">
              <s.Image
                src={search_img01}
                alt="image"
                className="search-square"
              />
            </s.Search>
            <s.Search className="mid-conatiner right">
              <s.Image
                src={search_img02}
                alt="image"
                className="search-square"
              />
              <s.Search className="item-box">
                <s.Search className="text-box">와</s.Search>
                <s.Search className="text-box">우</s.Search>
              </s.Search>
            </s.Search>
          </s.Search>
        </s.Search>

        <s.Search className="top-container column">
          <s.StyledH3 className="search-title">UPCOMING EVENTS</s.StyledH3>
          <s.Search className="line-box">
            <s.Line className="dark"/>


            <SearchEventProfile/>


          </s.Search>
        </s.Search>
        <s.Search className="top-container">4</s.Search>
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
      </s.Search>
    </>
  );
}
