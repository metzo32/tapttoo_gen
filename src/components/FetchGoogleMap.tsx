import React, { useEffect, useRef } from 'react';
import s from '../stores/styling';

// 글로벌 google 객체와 initMap 함수 선언
declare global {
  namespace google {
    namespace maps {
      class Map {
        constructor(element: HTMLElement, options: MapOptions);
      }

      interface MapOptions {
        center: LatLng | LatLngLiteral;
        zoom: number;
      }

      class LatLng {
        constructor(lat: number, lng: number);
      }

      interface LatLngLiteral {
        lat: number;
        lng: number;
      }
    }
  }

  interface Window {
    initMap: () => void;
  }
}

// Google Maps API 로더 함수
const loadGoogleMapsScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const existingScript = document.getElementById('googleMaps');

    if (existingScript) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.id = 'googleMaps';
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error('Google Maps JavaScript API could not load.'));
    script.onload = () => resolve();

    document.head.appendChild(script);
  });
};

interface FetchGoogleMapProps {
  id: string;
  lat: number;
  lng: number;
  zoom: number;
}

const FetchGoogleMap: React.FC<FetchGoogleMapProps> = ({ id, lat, lng, zoom }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (mapRef.current) {
        new google.maps.Map(mapRef.current, {
          center: { lat, lng },
          zoom,
        });
      }
    };

    // window.initMap 함수 설정
    window.initMap = initializeMap;

    // Google Maps API 스크립트 로드
    loadGoogleMapsScript().catch((error) => {
      console.error(error);
    });
  }, [lat, lng, zoom]);

  return <s.Map ref={mapRef} id={id}/>;
};

export default FetchGoogleMap;
