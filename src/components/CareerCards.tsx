import React from 'react'
import s from '../stores/styling'

interface CareerDetailProps {
    title: string;
    semititle: string;
    text: string;
    hoverTitle: string;
    hoverSemititle: string;
    hoverText: string;
    imgsource: string;
}

const CareerCards: React.FC<CareerDetailProps> = ({ title, semititle, text, hoverTitle, hoverSemititle, hoverText, imgsource}) => (
        <s.CareerDetail className='card-item-container'>
            <s.CareerDetail className='card-item'>
                <s.StyledP className='card-title'>
                    {title}
                </s.StyledP>
                <s.StyledP className='card-semititle'>
                    {semititle}
                </s.StyledP>
                <s.StyledP className='card-text'>
                    {text}
                </s.StyledP>
            </s.CareerDetail>
            <s.CareerDetail className='cardImage'>
                <s.Image src={imgsource} alt='photo' className="card-image"/>
            </s.CareerDetail>
            <s.CareerDetail className='card-item-next'>
                <s.StyledP className='card-title'>
                    {hoverTitle}
                </s.StyledP>
                <s.StyledP className='card-semititle'>
                    {hoverSemititle}
                </s.StyledP>
                <s.StyledP className='card-text'>
                    {hoverText}
                </s.StyledP>
            </s.CareerDetail>
        </s.CareerDetail>
)

export default CareerCards;