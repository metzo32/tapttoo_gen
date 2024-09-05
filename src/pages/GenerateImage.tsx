import React, { useState } from "react";
import GenerateImageApi from "../components/api/GenerateImageApi";
import s from "../stores/styling";
import bgImage from "../assets/images/tattoo_50.jpg";
import HoverButton from "../components/HoverButton";
import { CircleAnimation } from "../components/FramerMotions/scrollMotions";

const GenerateImage: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [color, setColor] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  return (
    <s.GenDiv className="gen-wrapper">
      <s.GenDiv className="gen-bg-wrapper">
        <s.Image className="gen-bg" src={bgImage} alt="photo" />

        <s.DotMask className="base">
          <s.DotMask className="angled"/>
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
            <s.StyledH3 className="gen-semi-title">Since 2024</s.StyledH3>
            <s.StyledH3 className="gen-semi-title">
              Whenever you need
            </s.StyledH3>
          </s.GenDiv>
          <s.GenDiv className="gen-column">
            <s.StyledH3 className="gen-semi-title">Specific ideas</s.StyledH3>
            <s.StyledH3 className="gen-semi-title">Just for you</s.StyledH3>
          </s.GenDiv>
        </s.GenDiv>
        <s.StyledP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt
          deleniti, non sit labore ullam, id quia voluptates qui nostrum alias
          incidunt odit praesentium accusantium reiciendis officiis aliquam?
          Aspernatur, maxime.
        </s.StyledP>

        <s.Form onSubmit={handleSubmit} className={`img-gen-form ${isSubmitted ? "submit-hidden" : ""}`}>
          <s.GenDiv className="gen-input-container">
            <s.Input
              className="prompt-input"
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Type your idea in a word"
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

          <HoverButton type="submit" circle={true} text="디자인 생성하기" onClick={handleButtonClick}/>
        </s.Form>
        <CircleAnimation/>
        <s.GenDiv className="gen-image-box">
          {imageUrl && <img src={imageUrl} alt="Generated" />}
            <s.Water/>
        </s.GenDiv>
      </s.GenDiv>
    </s.GenDiv>
  );
};

export default GenerateImage;