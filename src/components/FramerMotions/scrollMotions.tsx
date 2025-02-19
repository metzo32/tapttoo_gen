import { useRef, useEffect } from "react";
import {
  useInView,
  useAnimation,
  motion,
} from "framer-motion";

import styled from "styled-components";

export const GenImageCircle = styled(motion.div)`
  &.circle-wrapper {
    border: 1px solid white;

    border-radius: 50%;

    width: 80%;
    max-width: 512px;
    aspect-ratio: 1/1;
    margin: 0 auto;
    overflow: hidden;

    opacity: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
  }
`;

interface Props {
  children?: JSX.Element;
  duration?: number;
  delay?: number | undefined;
  variants?: {
    hidden: { opacity?: number; x?: number; y?: number };
    visible: { opacity?: number; x?: number; y?: number };
  };
  text?: string;
}

const AnimatedComponent = ({
  children,
  duration = 0.5,
  delay = 0,
  variants,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // 뷰포트 진입할 때마다 애니메이션 실행
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: delay }}
        style={{ display: "flex" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedComponent;



export const PopUpBelow = ({ children, duration, delay }: Props) => {
  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatedComponent duration={duration} delay={delay} variants={variants}>
      {children}
    </AnimatedComponent>
  );
};


interface CircleAnimationProps {
  children: JSX.Element;
  look: boolean;
  scaleFrame: number;
  // onClick: () => void;
}

export const CircleAnimation: React.FC<CircleAnimationProps> = ({
  children,
  look,
  scaleFrame,
}) => {
  return (
    <>
      <GenImageCircle
        className="circle-wrapper"
        initial={{ scale: 0.1 }} // 초기 scale 값을 설정
        animate={{
          scale: scaleFrame, // 프레임 크기 애니메이션 추가
          borderRadius: look ? "0%" : "50%", // look 상태에 따라 모양 변화
        }}
        transition={{
          duration: 0.3, // 애니메이션 시간 설정
          ease: [0.25, 0.1, 0.25, 1], // 부드러운 애니메이션
        }}
      >
        {children}
      </GenImageCircle>
    </>
  );
};
