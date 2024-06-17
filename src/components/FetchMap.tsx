import React, { useEffect, useRef } from "react";
import s from "../stores/styling";

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

let isScriptLoaded = false; // 스크립트 로드 상태 관리 (초기값 false)
const scriptLoadPromise = loadKakaoMapScript();

function loadKakaoMapScript() {
  // useEffect 바깥에서 Promise 객체를 생성, 전역으로 관리
  return new Promise<void>((resolve, reject) => {
    if (isScriptLoaded) { //이미 스크립트 로드가 돼있다면 이 과정을 스킵
      resolve();
      return;
    } 
    else { //스크립트 로드가 안돼있는 경우
      const script = document.createElement("script"); //script 태그 추가 (아직 추가되지 않고, JS 객체로 존재)
      script.type = "text/javascript";
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}&libraries=services&autoload=false`;
      //src속성으로 로드할 외부 JS파일 url 지정
      script.onload = () => { //script 태그의 onload 이벤트 핸들러 설정
        //스크립트 로드 시도
        isScriptLoaded = true; //성공 시 true
        resolve();
      };

      script.onerror = () => { //실패 시 에러 처리
        reject(new Error("Kakao Map script loading error"));
      };
      document.head.appendChild(script);  //세부사항 성공, 실패 여부 상관없이 script태그 추가
    }
  });
}

const FetchMap: React.FC<FetchMapProps> = ({ id, latitude, longitude }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initMap = () => { //지도 초기화
      if (!window.kakao || !window.kakao.maps) {  //라이브러리가 올바르게 초기화 됐는지 확인하고, 안됐다면 에러 처리
        console.error("Kakao maps library is not loaded.");
        return;
      }

      if (mapContainerRef.current) {  
        const container = mapContainerRef.current; //HTML에 접근. current는 레퍼런스가 가리키는 실제 DOM 요소이다.
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: 2,
        };
        new window.kakao.maps.Map(container, options);
      }
    };

    scriptLoadPromise //스크립트가 로드된 상태가 확인되면
      .then(() => { //지도를 초기화한다.
        window.kakao.maps.load(initMap);
      })
      .catch((error) => { //로드가 안됐다면 에러 처리
        console.error(error);
      });
  }, [id, latitude, longitude]);  // id값, 위도, 경도가 바뀔 때마다 실행 (여러개의 지도 생성 가능)

  return <s.Map ref={mapContainerRef} id={id} className="map" />; // 
  // useRef를 쓰지 않고 그냥 div를 사용하면? --> 컴포넌트 마운트 전에 DOM요소에 접근해 문제 발생.
  // useRef는 마운트 이후에도 DOM 요소에 직접 접근할 수 있게 해준다.
};

export default FetchMap;
