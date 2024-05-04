import React, { useEffect, useRef } from "react";

const NaverMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 13,
      };

      new naver.maps.Map(mapRef.current, mapOptions);
    }
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default NaverMap;
