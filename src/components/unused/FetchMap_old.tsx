//https://metz.tistory.com/28 참고
//useEffect에서 스크립트 생성을 하기 때문에 API 호출이 중복으로 일어나는 경우

import React, { useEffect, useRef } from "react";
import s from "../../stores/styling";

// 'Property 'kakao' does not exist on type 'Window & typeof globalThis'.' 오류에 대한 해결법.
// kakao 객체가 window에 있다고 declare로 명시한다.
declare global {
  interface Window {
    kakao: any;
  }
}

interface FetchMapProps {
  id: string;
  latitude: number;
  longitude: number;
}

const FetchMap: React.FC<FetchMapProps> = ({ id, latitude, longitude }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  //useEffect를 통해 컴포넌트 마운트 될 때 <script>태그를 동적으로 추가하는 법
  useEffect(() => {
    const loadKakaoMapScript = () => {
      return new Promise<void>((resolve, reject) => {
       
        const script = document.createElement("script"); // <script>태그 생성
        script.type = "text/javascript";
        //api키는 프로젝트 루트 디렉토리 .env 파일에 저장. CRA 보안 정책
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}&libraries=services&autoload=false`;
        //onload (then 역할)와 onerror (catch 역할)은 <script>요소의 이벤트 핸들러 속성으로 제공됨.
        script.onload = () => {
          //성공
          resolve();
        };
        script.onerror = () => {
          //실패
          reject(new Error("Kakao Map script loading error"));
        };
        document.head.appendChild(script); //생성된 <script>를 HTML <head>에 추가
      });
    };

    //지도 초기화
    const initMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error("Kakao maps library is not loaded.");
        return;
      }

      if (mapContainerRef.current) {
        const container = mapContainerRef.current; // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude), // 위도, 경도
          level: 2, // 지도의 레벨(확대, 축소 정도)
        };
        // kakao 객체가 window 하위 객체라고 정의해야하므로 window.kakao라고 표기
        new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      }
    };

    loadKakaoMapScript()
      .then(() => {
        //지도 로드 성공 시, 지도 초기화
        window.kakao.maps.load(initMap); // TypeError: window.kakao.maps.LatLng is not a constructor 에러 해결지점
      })
      .catch((error) => {
        console.error(error); //지도 로드 실패 시, 로그 메세지
      });
  }, [id, latitude, longitude]); // props가 변경될 때마다 리렌더링

  return <s.Map ref={mapContainerRef} id={id} className="map" />;
};

export default FetchMap;
