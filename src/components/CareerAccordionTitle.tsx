import s from '../stores/styling'

interface AccordionTitleProps {
    number: string;
    header: string;
    onClick: () => void;
}

const CareerAccordionTitle:React.FC<AccordionTitleProps> = ({ number, header, onClick }) => (
    <>
        <s.Accordion className='accordion-border'>
            {/* 내용없음 */}
        </s.Accordion>
        <s.Accordion className="accordion-title-wrapper" onClick={onClick}>
            <s.Accordion className='item-box'>
                <s.StyledP className='accordion-number'>
                    {number}
                </s.StyledP>
                <s.StyledH2 className='accordion-title2'>
                    {header}
                </s.StyledH2>
            </s.Accordion>
        </s.Accordion>
    </>
  )

  export default CareerAccordionTitle;
