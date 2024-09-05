import { useState, useRef, useEffect } from "react";
import {
  useInView,
  useAnimation,
  motion,
  useScroll,
  stagger,
} from "framer-motion";
import styled from "styled-components";

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
  const isInView = useInView(ref, { once: true }); // 뷰포트 진입할 때마다 애니메이션 실행
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
        className="title-container"
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: delay }}
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

export const PopUpRight = ({ children, duration, delay }: Props) => {
  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <AnimatedComponent duration={duration} delay={delay} variants={variants}>
      {children}
    </AnimatedComponent>
  );
};

export const ScrollEvent = ({ children }: Props) => {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.10 1"], // "뷰포트 최하단 타겟 최상단", "뷰포트 10% 진입 타겟 최상단" -> 애니메이션 트리거 정적 값
  });

  const controls = useAnimation(); //controls 객체를 통해 애니메이션 제어

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      // latest: scrollYProgress의 현재값
      if (latest > 0.1) {
        // 스크롤 진행도. 0 ~ 1 사이 값으로 표현
        controls.start("visible");
        setIsSticky(true);
      } else {
        controls.start("hidden");
        setIsSticky(false);
      }
    });
  }, [scrollYProgress, controls]);

  return (
    <div ref={ref}>
      <motion.div
        className={`scroll-motion ${isSticky ? "sticky" : ""}`}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const LinearDraw = ({
  children,
  duration = 0.8,
  delay = 0.3,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      className="title-container"
      style={{ position: "absolute", left: 0, top: 0 }}
      variants={{
        hidden: { opacity: 0, width: "0%" }, // hidden 상태에서 너비 0%
        visible: { opacity: 1, width: "100%" }, // visible 상태에서 너비 100%
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: duration, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

const ScreenOnlySpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const EachTextPopUp = ({ duration, delay, text }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });

  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <ScreenOnlySpan>{text}</ScreenOnlySpan>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }} //각 애니메이션의 딜레이를 부모 요소의 transition에서 설정. 부모, 자식 모두 initial과 animate 있어야함
        aria-hidden
      >
        {text?.split("").map((char) => (
          <motion.span className="inline-block" variants={variants}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </>
  );
};



export const CircleAnimation = () => {
  const [isCircle, setIsCircle] = useState(false); // 원 상태를 관리하는 상태

  const handleButtonClick = () => {
    setIsCircle(!isCircle); // 클릭 시 상태 변경
  };

  return (
    <div>
      <motion.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "skyblue",
        }}
        animate={{
          borderRadius: isCircle ? "50%" : "0%", // 원 상태에 따라 애니메이션
        }}
        transition={{ duration: 0.5 }} // 애니메이션 지속 시간
      />
      <button onClick={handleButtonClick}>
        {isCircle ? "사각형으로" : "원으로"} 변환
      </button>
    </div>
  );
};
