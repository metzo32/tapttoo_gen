import React, { useState, useEffect, useRef } from "react";
import GenerateImageApi from "../components/api/GenerateImageApi";
import {
  Div,
  H1,
  H2,
  H3,
  Button,
  P,
  Label,
  Input,
  Form,
  CheckboxBeforeIcon,
  CheckboxAfterIcon,
} from "./GenerateImage.styles";
import HoverButton from "../components/HoverButton/HoverButton";
import {
  CircleAnimation,
  PopUpBelow,
} from "../components/FramerMotions/scrollMotions";
import Water from "../components/loading_water/Water";
import StartFromTop from "../components/StartFromTop";
import LoadCounter from "../components/loading_water/LoadCounter";

export default function GenerateImage() {
  const [prompt, setPrompt] = useState("");
  const [color, setColor] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [check, setCheck] = useState(false);
  const [waterAnimationDone, setWaterAnimationDone] = useState(false);
  const [fadeOutTriggered, setFadeOutTriggered] = useState(false);
  const [look, setLook] = useState(false);
  const [scaleFrame, setScaleFrame] = useState(1);
  const [showButtons, setShowButtons] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault(); // 기본 동작 막기

    if (isSubmitted) return; // 이미 제출된 경우 리턴

    try {
      const url = await GenerateImageApi(
        `${prompt}?t=${new Date().getTime()}`,
        color
      ); // 캐시 무효화
      setImageUrl(url);
    } catch (error) {
      console.error("Image generation failed:", error);
    }
  };

  const handleCreate = (e: React.MouseEvent) => {
    e.preventDefault();
    if (prompt.trim().length === 0) {
      alert("키워드를 입력해주세요.");
      if (inputRef.current) {
        inputRef.current.focus();
      }
      return;
    }
    handleSubmit(e);
    setIsSubmitted(true);

    // Water 애니메이션이 끝난 후 확인하기 버튼 표시
    setTimeout(() => {
      setWaterAnimationDone(true);
    }, 12000);
  };

  const handleCheck = () => {
    setCheck(true);
    setFadeOutTriggered(true);

    setLook(!look);
    // 버튼을 눌렀을 때 프레임을 0.8만큼 줄였다가 1로 복원
    setScaleFrame(1.05);
    setTimeout(() => {
      setScaleFrame(1); // 0.3초 후 원래 크기로 복원
    }, 300);
  };

  useEffect(() => {
    if (check) {
      const timer = setTimeout(() => {
        setShowButtons(true);
      }, 1000);

      // cleanup 함수
      return () => clearTimeout(timer);
    } else {
      setShowButtons(false);
    }
  }, [check]);

  const handleSaveImage = () => {
    window.open(imageUrl, "_blank");
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <StartFromTop />
      <Div className="wrapper">
        <Div className="gen-title-wrapper">
          <PopUpBelow>
            <H2>Exclusive Design</H2>
          </PopUpBelow>
          <PopUpBelow delay={0.2}>
            <H1>
              Create <br />
              your own
            </H1>
          </PopUpBelow>

          <Div className="gen-semi-title-container">
            <Div className="gen-column">
              <PopUpBelow delay={0.4}>
                <H3 className="gen-semi-title steady-dark-title">Since 2024</H3>
              </PopUpBelow>

              <PopUpBelow delay={0.4}>
                <H3 className="gen-semi-title steady-dark-title">
                  Whenever you need
                </H3>
              </PopUpBelow>
            </Div>

            <Div className="gen-column">
              <PopUpBelow delay={0.6}>
                <H3 className="gen-semi-title steady-dark-title">
                  Specific ideas
                </H3>
              </PopUpBelow>

              <PopUpBelow delay={0.6}>
                <H3 className="gen-semi-title steady-dark-title">
                  Just for you
                </H3>
              </PopUpBelow>
            </Div>
          </Div>

          <PopUpBelow delay={0.8}>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              sunt deleniti, non sit labore ullam, id quia voluptates qui
              nostrum alias incidunt odit praesentium accusantium reiciendis
              officiis aliquam? Aspernatur, maxime.
            </P>
          </PopUpBelow>

          <PopUpBelow delay={1.0}>
            <Form
              className={`img-gen-form ${isSubmitted ? "submit-hidden" : ""}`}
            >
              <Div className="gen-input-container">
                <Input
                  ref={inputRef}
                  className="prompt-input"
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Type your idea"
                  required
                />

                <Label className="colorCheck">
                  <Input
                    type="checkbox"
                    checked={color}
                    onChange={(e) => setColor(e.target.checked)}
                    className="input-hide"
                  />
                  {color ? (
                    <CheckboxAfterIcon className="checkbox-icon-checked" />
                  ) : (
                    <CheckboxBeforeIcon className="checkbox-icon" />
                  )}
                  Color
                </Label>
              </Div>

              <HoverButton
                type="submit"
                circle={true}
                text="디자인 생성하기"
                onClick={handleCreate}
              />
            </Form>
          </PopUpBelow>

          {isSubmitted && (
              <CircleAnimation
                look={look}
                scaleFrame={scaleFrame}
                onClick={handleCheck}
              >
                <>
                  {isSubmitted && (
                    <Div className={`water-box ${check ? "fadeout-box" : ""}`}>
                      <LoadCounter />
                      {waterAnimationDone && !check && (
                        <Button className="water-btn" onClick={handleCheck}>
                          확인하기
                        </Button>
                      )}
                      <Water />
                    </Div>
                  )}

                  {imageUrl && <img src={imageUrl} alt="Generated" />}
                </>
              </CircleAnimation>
          )}

          {check && showButtons && (
            <PopUpBelow>
              <Div className="gen-button-container">
                <HoverButton
                  type="button"
                  circle={false}
                  text="저장하기"
                  onClick={handleSaveImage}
                />
                <HoverButton
                  type="button"
                  circle={false}
                  text="다시 하기"
                  onClick={handleRefresh}
                />
              </Div>
            </PopUpBelow>
          )}
        </Div>
      </Div>
    </>
  );
}
