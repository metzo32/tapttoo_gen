import React from "react";
import s from "../stores/styling";
import { useState, useEffect } from "react";
import loading01 from "../assets/images/loading01.jpg";
import loading02 from "../assets/images/loading02.jpg";
import loading03 from "../assets/images/loading03.jpg";
import loading04 from "../assets/images/loading04.jpg";
import loading05 from "../assets/images/loading05.jpg";

export default function Loading() {
  const [selectedImage, setSelectedImage] = useState("");

  const images = [loading01, loading02, loading03, loading04, loading05];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  useEffect(() => {
    const randomImage = getRandomImage();
    setSelectedImage(randomImage);
  }, []);

  return (
    <s.Loading>
      <s.Image src={selectedImage} alt="image" />
    </s.Loading>
  );
}
