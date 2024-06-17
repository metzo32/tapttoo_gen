import s from "../stores/styling";

interface ContactScrollButtonProps {
  index: number;
  totalButtons: number;
  onClick: (scrollPosition: number) => void;
}

const ContactScrollButton:React.FC<ContactScrollButtonProps> = ({ index, totalButtons, onClick }) => {

  const handleClick = () => {
      const scrollPosition = (( index / totalButtons ) + 1) % 1;
      onClick(scrollPosition)
  }
    return ( 
    <s.Button onClick={handleClick}>{index + 1}</s.Button>
  )
}

  export default ContactScrollButton;
