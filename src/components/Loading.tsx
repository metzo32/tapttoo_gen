import React from "react";
import s from "../stores/styling";
import { useState, useEffect } from "react";
import loading01 from "../assets/images/loading01.jpg";
import loading02 from "../assets/images/loading02.jpg";
import loading03 from "../assets/images/loading03.jpg";
import loading04 from "../assets/images/loading04.jpg";
import loading05 from "../assets/images/loading05.jpg";
import loading06 from "../assets/images/loading06.jpg";
import loading07 from "../assets/images/loading07.jpg";
import loading08 from "../assets/images/loading08.jpg";

export default function Loading() {
  const [selectedImage, setSelectedImage] = useState("");

  const images = [
    loading01,
    loading02,
    loading03,
    loading04,
    loading05,
    loading06,
    loading07,
    loading08,
  ];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  useEffect(() => {
    const randomImage = getRandomImage();
    setSelectedImage(randomImage);
  }, []);

  return (
    <s.Loading className="loading-wrapper">

      <s.MaskText className="text-contatiner">
        <s.MaskText className="full-box"/>
        <s.MaskText className="text">Tapttoo</s.MaskText>
      </s.MaskText>
      <s.Image className="loading-image" src={selectedImage} alt="image" />
      {/* <s.StyledP className="loading-text01">Paragraph</s.StyledP> */}
    </s.Loading>
  );
}
