import { MouseEventHandler, useState } from "react";
import "./App.css";
import NaverMap from "./NaverMap";
import { Button } from "./shared/components/Button";
import {
  fetchNaverSearchMapInfoQueryType,
  useNaverSearchMapInfo,
} from "./shared/hooks/useNaverSearchMapInfo";

function App() {
  const { fetchNaverSearchMapInfo } = useNaverSearchMapInfo();

  const [localData, setLocalData] = useState<any | null>(null);

  const getNaverSearchMapInfo = async (
    payload: fetchNaverSearchMapInfoQueryType
  ) => {
    return await fetchNaverSearchMapInfo(payload);
  };

  const handleClickButton: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const data = await getNaverSearchMapInfo({
      query: "갈비찜",
      display: 5,
      sort: "random",
    });

    console.log(data);

    setLocalData(data);
  };

  return (
    <div className="App">
      <h1>네이버 맵 예제</h1>
      <NaverMap />
      <Button onClick={handleClickButton} />
      <pre style={{ textAlign: "left" }}>
        {JSON.stringify(localData, null, 2)}
      </pre>
    </div>
  );
}

export default App;
