import React, { useState, useEffect } from "react";
import GenerateImageApi from "../components/api/GenerateImageApi";
import s from "../stores/styling";
import bgImage from "../assets/images/tattoo_50.jpg";
import HoverButton from "../components/HoverButton";
import { CircleAnimation } from "../components/FramerMotions/scrollMotions";

const Nothing: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [color, setColor] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [showButton, setShowButton] = useState(false); // 버튼 상태를 관리하는 상태
  const [check, setCheck] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = await GenerateImageApi(prompt, color);
      setImageUrl(url);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleButtonClick = () => {
    if (prompt.trim().length === 0) {
      return; // 아무것도 입력되지 않으면
    }
    setIsSubmitted(true);
  };

  const handleCheck = () => {
    setCheck(true);
  };

  return (
    <s.GenDiv className="gen-wrapper">
      <s.Form
        onSubmit={handleSubmit}
        className={`img-gen-form ${isSubmitted ? "submit-hidden" : ""}`}
      >
        <s.GenDiv className="gen-input-container">
          <s.Input
            className="prompt-input"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your idea"
            required
          />
          <s.Label className="check-label">
            <s.Input
              type="checkbox"
              checked={color}
              onChange={(e) => setColor(e.target.checked)}
              className="input-hide"
            />
            {color ? (
              <s.CheckboxAfterIcon className="checkbox-icon-checked large" />
            ) : (
              <s.CheckboxBeforeIcon className="checkbox-icon large" />
            )}
            Color
          </s.Label>
        </s.GenDiv>
        <HoverButton
          type="submit"
          circle={true}
          text="디자인 생성하기"
          onClick={handleButtonClick}
        />
      </s.Form>

      <CircleAnimation>
        <>
          {imageUrl && <img src={imageUrl} alt="Generated" />}
          {/* <s.Water className="hide-water"/> */}
          <s.Water/>
          {!check && (
            <s.Button
              className={`water-btn ${check ? "hide-water-btn" : ""}`}
              onClick={handleCheck}
            >
              확인하기
            </s.Button>
          )}
        </>
      </CircleAnimation>
    </s.GenDiv>
  );
};

export default Nothing;