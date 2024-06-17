import React, { useState } from 'react'
import s from '../stores/styling'

interface AccordionTitleProps {
    number: string;
    header: string;
    onClick: () => void;
}

const CareerAccordionTitle:React.FC<AccordionTitleProps> = ({ number, header, onClick }) => (
    <>
        <s.CareerDetail className='accordion-border'>
            {/* 내용없음 */}
        </s.CareerDetail>
        <s.CareerDetail className="accordion-wrapper" onClick={onClick}>
            <s.CareerDetail className='item-box'>
                <s.StyledP className='accordion-number'>
                    {number}
                </s.StyledP>
                <s.StyledH2 className='accordion-title2'>
                    {header}
                </s.StyledH2>
            </s.CareerDetail>
        </s.CareerDetail>
    </>
  )

  export default CareerAccordionTitle;
