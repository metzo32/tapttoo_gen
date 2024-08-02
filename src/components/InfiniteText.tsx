import s from "../stores/styling";

interface InfiniteTextProps {
  text: string;
  repeat: number;
}

const InfiniteText: React.FC<InfiniteTextProps> = ({ text, repeat = 10 }) => {
  const repeatedText = new Array(repeat).fill(text).join(" ");

  return (
    <s.StyledP className="infinite-text">{repeatedText}</s.StyledP>
  );
};

export default InfiniteText;
