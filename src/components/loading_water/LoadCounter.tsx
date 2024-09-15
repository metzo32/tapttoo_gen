import React, { useEffect, useState } from "react";
import s from "../../stores/styling";

const easeInOut = (t: number) => {
    return t < 0.5
      ? 8 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const LoadCounter: React.FC = () => {
  const [count, setCount] = useState(1);
  const [isComplete, setIsComplete] = useState(false); // 애니메이션 완료 여부

  useEffect(() => {
    let start: number | null = null;
    const duration = 10000; // 10초 동안 실행
    const maxCount = 100;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const easedProgress = easeInOut(progress / duration);
      const newCount = Math.min(Math.floor(easedProgress * (maxCount - 1)) + 1, maxCount);

      setCount(newCount);

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setIsComplete(true); // 카운트가 완료되면 상태를 true로 변경
      }
    };

    requestAnimationFrame(step); // 애니메이션 시작

    return () => {}; // cleanup은 필요 없음
  }, []);

  return (
    <s.StyledH4
      className={`loading-counter ${isComplete ? "move-counter" : ""}`}> {/* 조건부로 클래스 추가 */}
      {count}%
    </s.StyledH4>
  );
};

export default LoadCounter;
