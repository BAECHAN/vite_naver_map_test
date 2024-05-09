import React, { useEffect, useRef, useState } from "react";
import { SearchLocalDataItemType } from "./App";

const NaverMap = ({ markers }: { markers: SearchLocalDataItemType[] }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [saveMap, setSaveMap] = useState<naver.maps.Map | null>(null);

  useEffect(() => {
    if (markers.length > 0) {
      const newMarkers = markers.map((data) => {
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            Number(data.mapy) / 1e7,
            Number(data.mapx) / 1e7
          ),
          map: saveMap as naver.maps.Map,
          title: data.title,
        });

        console.log("marker : ", marker);

        return marker;
      });
    }
  }, [markers]);

  useEffect(() => {
    if (mapRef.current) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;

          const mapOptions = {
            center: new naver.maps.LatLng(latitude, longitude),
            zoom: 13,
          };

          const map = new naver.maps.Map(
            mapRef.current as HTMLDivElement,
            mapOptions
          );

          // 추가 마커 위치 배열
          const markerPositions = [
            { lat: latitude, lng: longitude, title: "현재 위치" },
            { lat: 37.5665, lng: 126.978, title: "서울시청" }, // 예시 위치 1
            { lat: 37.5796, lng: 126.977, title: "경복궁" }, // 예시 위치 2
            {
              lat: 35.8359027,
              lng: 129.2118391,
              title: "경상북도 경주시 황남동 228-1",
            }, // 예시 위치 2
          ];

          // 추가 마커 설정
          markerPositions.forEach((position) => {
            new naver.maps.Marker({
              position: new naver.maps.LatLng(position.lat, position.lng),
              map: map,
              title: position.title,
            });
          });

          setSaveMap(map);
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }
  }, []);

  return (
    <div
      className="map-box"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div ref={mapRef} style={{ width: "50vw", height: "80vh" }} />
    </div>
  );
};

export default NaverMap;
