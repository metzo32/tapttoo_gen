import { keyframes } from "styled-components";

export const drawLetter = keyframes`
  0% {
    stroke-dashoffset: 1642;
     fill: transparent;

  80% {
    stroke-dashoffset: 3284;
    fill: transparent;
  }

  }
  100% {
    stroke-dashoffset: 3284;
    fill: green;
  }
`;

export const fadeInRotate = keyframes`
  0% {
    opacity: 0;
    transform: rotate(0deg) translateX(150px);
  }
  100% {
    opacity: 1;
    transform: rotate(calc(var(--char-index) * 30deg)) translateX(150px);
  }
`;

export const openDrop = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const closeDrop = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(20px);
    opacity: 0;
  }
`;

export const infiniteSlideLeft = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const animateIn = keyframes`
  from {
    transform: translateY(150px);
    opacity: 0;
  }
  to {
    transform: translateY(150px);
    opacity: 1;
  }
`;

export const animateOut = keyframes`
  from {
    transform: translateY(150px);
    opacity: 1;
  }
  to {
    transform: translateY(150px);
    opacity: 0;
  }
`;

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const slideUp = keyframes`
 from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const slideDown = keyframes`
 from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(30px);
    }
`;

export const shaking = keyframes`
 0% { transform: translateX(0) }
 25% { transform: translateX(2px) }
 50% { transform: translateX(-2px) }
 75% { transform: translateX(2px) }
 100% { transform: translateX(0) }
`;

export const pulse00 = keyframes` 
0% { transform: translate(-50%, -97%) scale(1.0) }
10% { transform: translate(-50%, -97%) scale(1.1) }
100% { transform: translate(-50%, -97%) scale(1) }
`;

export const pulse01 = keyframes` 
0% { transform: translate(-50%, -88%) scale(1.0) }
20% { transform: translate(-50%, -88%) scale(1.1) }
100% { transform: translate(-50%, -88%) scale(1) }
`;

export const pulse02 = keyframes` 
0% { transform: translate(-50%, -81%) scale(1) }
30% { transform: translate(-50%, -81%) scale(1.1) }
100% { transform: translate(-50%, -81%) scale(1) }
`;

export const pulse03 = keyframes` 
0% { transform: translate(-50%, -76%) scale(1) }
40% { transform: translate(-50%, -76%) scale(1.1) }
100% { transform: translate(-50%, -76%) scale(1) }
`;

export const moveUp = keyframes`
  0% {
    transform: translateY(-100vh);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ClickAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
`;
