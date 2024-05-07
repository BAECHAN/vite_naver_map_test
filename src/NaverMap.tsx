import React, { useEffect, useRef, useState } from "react";

const NaverMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (mapRef.current) {
  //     const mapOptions = {
  //       center: new naver.maps.LatLng(37.3595704, 127.105399),
  //       zoom: 13,
  //     };

  //     new naver.maps.Map(mapRef.current, mapOptions);
  //   }
  // }, []);

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

          const markerOptions = {
            position: new naver.maps.LatLng(latitude, longitude),
            map: map,
          };

          //const marker = new naver.maps.Marker(markerOptions);
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
