import React, { useState, useEffect, useMemo } from "react";
import GenerateImageApi from "../components/api/GenerateImageApi";
import s from "../stores/styling";
import bgImage from "../assets/images/tattoo_50.jpg";
import HoverButton from "../components/HoverButton";
import {
  CircleAnimation,
  PopUpBelow,
} from "../components/FramerMotions/scrollMotions";

import Water from "../components/loading_water/Water";

const GenerateImage: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [color, setColor] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showButton, setShowButton] = useState(false); // 버튼 상태를 관리하는 상태
  const [check, setCheck] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitted) return;
  
    console.log("Image request initiated..."); // 이미지 요청 시작 로그
  
    try {
      const url = await GenerateImageApi(`${prompt}?t=${new Date().getTime()}`, color); // 캐시 무효화
      console.log("Image successfully generated:", url); // 이미지 생성 성공 로그
      setImageUrl(url);
    } catch (error) {
      console.error("Image generation failed:", error); // 이미지 생성 실패 로그
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
      <s.GenDiv className="gen-bg-wrapper">
        <s.Image className="gen-bg" src={bgImage} alt="photo" />

        <s.DotMask className="base">
          <s.DotMask className="angled" />
        </s.DotMask>
      </s.GenDiv>

      <s.GenDiv className="gen-title-wrapper">
        <s.StyledH2 className="gen-top-title">Exclusive Design</s.StyledH2>
        <s.StyledH1 className="gen-title">
          Create <br />
          your own
        </s.StyledH1>

        <s.GenDiv className="gen-semi-title-container">
          <s.GenDiv className="gen-column">
            <s.StyledH3 className="gen-semi-title steady-dark-title">
              Since 2024
            </s.StyledH3>
            <s.StyledH3 className="gen-semi-title steady-dark-title">
              Whenever you need
            </s.StyledH3>
          </s.GenDiv>
          <s.GenDiv className="gen-column">
            <s.StyledH3 className="gen-semi-title steady-dark-title">
              Specific ideas
            </s.StyledH3>
            <s.StyledH3 className="gen-semi-title steady-dark-title">
              Just for you
            </s.StyledH3>
          </s.GenDiv>
        </s.GenDiv>
        <s.StyledP className="steady-dark-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt
          deleniti, non sit labore ullam, id quia voluptates qui nostrum alias
          incidunt odit praesentium accusantium reiciendis officiis aliquam?
          Aspernatur, maxime.
        </s.StyledP>
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

            <s.Label className="steady-dark">
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

        {isSubmitted && (
          <PopUpBelow>
            <CircleAnimation>
              <>
                {imageUrl && <img src={imageUrl} alt="Generated" />}
                <Water />
                {/* <s.Button className="water-btn" onClick={handleCheck}>
                  확인하기
                </s.Button> */}
              </>
            </CircleAnimation>
          </PopUpBelow>
        )}

      </s.GenDiv>
    </s.GenDiv>
  );
};

export default GenerateImage;
