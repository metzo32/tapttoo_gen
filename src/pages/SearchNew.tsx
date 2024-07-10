import React from 'react'
import s from '../stores/styling'
import { CarouselItem } from '../types/CarouselType'
import { CustomCarousel, defaultRenderItem } from '../components/CustomCarousel'

import { CarouselItemConverter } from '../stores/CarouselItemConverter'
import searchMainImages from '../stores/CarouselData'


const items = CarouselItemConverter(searchMainImages);

export default function SearchNew() {
  return (
    <>
        <s.Search className='search-wrapper'>
            <s.Search className='large-container'>
                <CustomCarousel items={items} renderItem={defaultRenderItem} />
            </s.Search>
            <s.Search className='circles-container'>
                프로필
            </s.Search>
            <s.Search className='search-container'>
                서치바
            </s.Search>
            <s.Search className='large-container'>
                2
            </s.Search>
            <s.Search className='large-container'>
                3
            </s.Search>
            <s.Search className='large-container'>
                4
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
        </s.Search>
    </>
  )
}

