import { useEffect, useRef } from "react";
import s from "../stores/styling";
import ArtistData from "../assets/datas/artitst_data";
import { PopUpBelow, LinearDraw } from "./FramerMotions/scrollMotions";

export default function SearchEventProfile() {
  const eventData = ArtistData.slice(71, 76);
  const customTitles = ["Aug 1", "Sep 3", "Sep 26", "Oct 10", "Nov 7"];

  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const animationFrameIds = useRef<number[]>([]); // 각 이미지의 애니메이션을 추적하는 requestAnimationFrame의 id를 저장. 이 배열을 통해 각 이미지의 애니메이션 취소
  const positions = useRef(
    eventData.map(() => ({
      // 각 요소의 목표 위치, 현재 위치 저장
      target: { x: 0, y: 0 },
      current: { x: 0, y: 0 },
    }))
  );

  useEffect(() => {
    //클린업. 언마운트 될 때 requestAnimationFrame으로 예약된 애니메이션이 있다면 모두 취소
    return () => {
      animationFrameIds.current.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  const handleMouseMove =
    (index: number) => (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      const img = imgRefs.current[index]; //현재 이미지
      const { offsetX: x, offsetY: y } = e.nativeEvent; //마우스가 이 대상의 중심점에서 얼마나 떨어졌는지
      if (!img) return;

      const { clientWidth: imgWidth, clientHeight: imgHeight } = img;

      positions.current[index].target = {
        x: (x - imgWidth / 2) * 0.2,
        y: (y - imgHeight / 2) * 0.2,
      };

      startAnimation(index);
    };

  const handleMouseLeave = (index: number) => () => {
    positions.current[index].target = { x: 0, y: 0 }; // 제자리로 초기화
    startAnimation(index);
  };

  const startAnimation = (index: number) => {
    if (animationFrameIds.current[index]) return;

    const animate = () => {
      const pos = positions.current[index];
      pos.current.x += (pos.target.x - pos.current.x) * 0.1;
      pos.current.y += (pos.target.y - pos.current.y) * 0.1;

      if (imgRefs.current[index]) {
        imgRefs.current[
          index
        ]!.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      if (
        Math.abs(pos.target.x - pos.current.x) > 0.1 ||
        Math.abs(pos.target.y - pos.current.y) > 0.1
      ) {
        animationFrameIds.current[index] = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationFrameIds.current[index]);
        animationFrameIds.current[index] = 0;
      }
    };

    animate();
  };

  return (
    <s.Search className="top-container column">
      <PopUpBelow>
        <s.StyledH3 className="search-title upcoming">
          UPCOMING EVENTS
        </s.StyledH3>
      </PopUpBelow>

      <s.Search className="line-box">
        <s.Search className="event-wrapper">
          <LinearDraw>
            <s.Line className="horizontal dark" />
          </LinearDraw>
        </s.Search>

        {eventData.map((profile, index) => (
          <s.Search className="event-wrapper" key={profile.id}>
            <s.Search className="event-container">
              <s.Search className="event-title-box">
                <PopUpBelow>
                  <s.StyledH4 className="event-title">
                    {customTitles[index]}
                  </s.StyledH4>
                </PopUpBelow>
              </s.Search>

              <PopUpBelow delay={index * 0.2}>
                <s.Image
                  src={profile.randomImage}
                  alt={profile.nickname}
                  className="search-circle-profile"
                  onMouseMove={handleMouseMove(index)}
                  onMouseLeave={handleMouseLeave(index)}
                  ref={(el) => (imgRefs.current[index] = el)}
                />
              </PopUpBelow>

              <s.Search className="event-text-box">
                <PopUpBelow delay={index * 0.2}>
                  <s.StyledH3 className="name">{profile.nickname}</s.StyledH3>
                </PopUpBelow>
                <PopUpBelow delay={index * 0.2}>
                  <s.StyledP className="event-address">
                    {profile.street_address}, {profile.city}
                  </s.StyledP>
                </PopUpBelow>
              </s.Search>
            </s.Search>
            <LinearDraw delay={index * 0.2}>
              <s.Line className="horizontal dark" />
            </LinearDraw>
          </s.Search>
        ))}
      </s.Search>
    </s.Search>
  );
}
