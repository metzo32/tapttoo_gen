import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";
import s from "../stores/styling";
import image from "../assets/images/gen-background.jpg"

export default function ScrollTest() {
  const { ref: pizzaRef, inView: enterView } = useInView({
    threshold: 0.7,
    rootMargin: "30% 0px -30% 0px", // 들어올 때 70% 보여야 함
  });

  const { ref: exitRef, inView: exitView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px -70% 0px", // 나갈 때 30% 지점에 도달하면
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (enterView) {
      setVisible(true);
    } else if (exitView) {
      setVisible(false);
    }
  }, [enterView, exitView]);

  return (
    <>
      <s.Div className="test" ref={pizzaRef}>
        <s.Span className={visible ? "FadeIn" : "FadeOut"}>
          🍕
        </s.Span>
      </s.Div>
      <s.Image className="test" src={image} alt="photo" ref={exitRef} />
    </>
  );
}