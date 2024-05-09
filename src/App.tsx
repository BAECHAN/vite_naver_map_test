import { MouseEventHandler, useState } from "react";
import "./App.css";
import NaverMap from "./NaverMap";
import { Button } from "./shared/components/Button";
import {
  fetchNaverSearchMapInfoQueryType,
  useNaverSearchMapInfo,
} from "./shared/hooks/useNaverSearchMapInfo";

type SearchLocalDataType = {
  lastBuildDate: string | Date;
  total: number;
  start: number;
  display: number;
  items: SearchLocalDataItemType[];
};

export type SearchLocalDataItemType = {
  title: string;
  link: string;
  category: string;
  description: string;
  telephone: string;
  address: string;
  roadAddress: string;
  mapx: string;
  mapy: string;
};

function App() {
  const { fetchNaverSearchMapInfo } = useNaverSearchMapInfo();

  const [localData, setLocalData] = useState<SearchLocalDataType | null>(null);

  const getNaverSearchMapInfo = async (
    payload: fetchNaverSearchMapInfoQueryType
  ) => {
    return await fetchNaverSearchMapInfo(payload);
  };

  const handleClickButton: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const data = await getNaverSearchMapInfo({
      query: "가산디지털단지",
      display: 5,
      sort: "random",
    });

    console.log(data);

    setLocalData(data);
  };

  return (
    <div className="App">
      <h1>네이버 맵 예제</h1>
      <NaverMap markers={localData?.items || []} />
      <Button onClick={handleClickButton} />
      <pre style={{ textAlign: "left" }}>
        {JSON.stringify(localData, null, 2)}
      </pre>
    </div>
  );
}

export default App;
