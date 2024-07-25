import { useEffect, useRef, useState } from "react";
import s from "../stores/styling";

export default function CareerMarketing() {
  const divRef = useRef<(HTMLDivElement | null)[]>([]); //생성된 모든 div를 포함한 배열
  const [observerOn, setObserverOn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      //entries: intersectionObserver의 콜백함수로 받는 배열. 관찰 중인 각 요소의 상태를 포함.
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //화면 상에 나타나는 경우
          console.log("등장");
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
        // entries: 관찰할 전체 요소
        // entry: 그 중 하나하나. 여기서는 각 div
        // 단수, 복수 표기를 통해 intersectionObserver API가 자동으로 해당 배열을 추적한다.
        else {
          console.log("사라짐");
          entry.target.classList.remove("animate");
          observer.unobserve(entry.target);
        }
      });
    });

    divRef.current.forEach((div) => {
      // 현재 divRef 배열이 가리키고 있는 div의 경우
      if (div !== null && div !== undefined) {
        // div가 있다면
        observer.observe(div); // 관찰 시작
      }
    });

    // 클린업 함수. 컴포넌트가 unmount되는 경우 divRef가 null로 돌아가기 때문에 이 점을 감안해야한다.
    return () => {
      divRef.current.forEach((div) => {
        // 현재 divRef 배열이 가리키고 있는 div의 경우
        if (div !== null && div !== undefined) {
          // div가 있었다면
          observer.unobserve(div); // 옵저버 제거
        }
      });
    };
  }, []);

  return (
  <>
      {[...Array(10)].map((_, index) => (
        <s.Test
          key={index}
          className="gradient"
          ref={(el) => (divRef.current[index] = el)}
        >{index}</s.Test>
      ))}
      <s.Test className="hidden">
        hello
      </s.Test>
    </>
  );
}
