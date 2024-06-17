import React from 'react'
import s from '../stores/styling'

interface DescriptionProps {
    alignRight: boolean;
    title: React.ReactNode;
    text: string;
  }

export default function Description({ alignRight, title, text }: DescriptionProps) {
  return (
    <s.SectionWrapper className={alignRight ? 'alignRight' : ''}>
      <s.ColumnWrapper >
          <s.StyledH4 className='SemiTitle'>
            {title}
          </s.StyledH4>
          <s.StyledP className='section-p'>
            {text}
          </s.StyledP>
      </s.ColumnWrapper>
    </s.SectionWrapper>
    )
}

