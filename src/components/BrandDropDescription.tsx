import React from "react";
import s from "../stores/styling";
import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  title: JSX.Element | string;
  text: JSX.Element | string;
}

export default function BrandDropDescription({ title, text }: Props) {
  const [openMore, setOpenMore] = useState<boolean | null>(null);
  const [isRotated, setIsRotated] = useState(false);

  const toggleMore = () => {
    setOpenMore((prev) => (prev === null ? true : !prev));
    setIsRotated((prev) => !prev);
  };

  return (
    <s.AboutDiv className="mid-description">
      <s.StyledH3>{title}</s.StyledH3>

      <s.Button className="more" onClick={toggleMore}>
        {openMore ? "간략히" : "더보기"}
        <motion.div
          className="block"
          animate={{
            rotate: isRotated ? 180 : 0,
          }}
        >
          <s.MoreIcon className={isRotated ? "rotated" : "none"} />
        </motion.div>
      </s.Button>

      <s.StyledP
        className={`section-p ${
          openMore ? "open-drop-more" : "close-drop-more"
        }`}
      >
        {text}
      </s.StyledP>
    </s.AboutDiv>
  );
}
