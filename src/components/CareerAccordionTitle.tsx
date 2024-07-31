import s from '../stores/styling'

interface AccordionTitleProps {
    number: string;
    header: string;
    onClick: () => void;
}

const CareerAccordionTitle:React.FC<AccordionTitleProps> = ({ number, header, onClick }) => (
    <s.Accordion className='border-container'>
        <s.Accordion className='accordion-border'/>

        <s.Accordion className="accordion-title-wrapper" onClick={onClick}>
                <s.StyledP className='accordion-number'>
                    {number}
                </s.StyledP>
                <s.StyledH2 className='accordion-title2'>
                    {header}
                </s.StyledH2>
        </s.Accordion>
    </s.Accordion>
  )

  export default CareerAccordionTitle;
