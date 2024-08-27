import React, { useState } from "react";
import GenerateImageApi from "../components/api/GenerateImageApi";
import s from "../stores/styling";

const GenerateImage: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [color, setColor] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = await GenerateImageApi(prompt, color);
      setImageUrl(url);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <s.GenDiv className="gen-wrapper">
      {/* <s.GenDiv className="gen-image-box">
        {imageUrl && <img src={imageUrl} alt="Generated" />}
        이미지
      </s.GenDiv> */}

      <s.GenDiv className="gen-grad-wrapper01">
      <s.GenDiv className="gen-grad-wrapper02">
        <s.StyledH1 className="gen-title">
          Create
        </s.StyledH1>
        <s.StyledH1 className="gen-title">
          your own
        </s.StyledH1>
      </s.GenDiv>
      </s.GenDiv>

      {/* <s.Form onSubmit={handleSubmit} className="img-gen-form">
        <s.GenDiv className="gen-input-container">
          <s.Input
            className="prompt-input"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt"
            required
          />
          <s.Label>
            <s.Input
              type="checkbox"
              checked={color}
              onChange={(e) => setColor(e.target.checked)}
            />
            Color
          </s.Label>
        </s.GenDiv>

        <s.Button className="Round " type="submit">
          Generate Image
        </s.Button>
      </s.Form> */}
    </s.GenDiv>
  );
};

export default GenerateImage;
