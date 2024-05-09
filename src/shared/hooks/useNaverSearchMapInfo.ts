import axios from "axios";

export type fetchNaverSearchMapInfoQueryType = {
  query: string;
  display: number;
  sort: "random";
};

export const useNaverSearchMapInfo = () => {
  const fetchNaverSearchMapInfo = async (
    props: fetchNaverSearchMapInfoQueryType
  ) => {
    const { query, display, sort } = props;

    try {
      //const url = `http://43.202.126.199:15048/search/local?query=${query}&display=${display}&sort=${sort}`;
      const url = `http://localhost:3000/search/local?query=${query}&display=${display}&sort=${sort}`;
      const response = await axios.get(url);
      console.log("Data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  return {
    fetchNaverSearchMapInfo,
  };
};
