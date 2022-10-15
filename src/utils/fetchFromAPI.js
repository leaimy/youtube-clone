import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
    regionCode: "VN",
  },
  headers: {
    "X-RapidAPI-Key": "826ad7d916msh80c9fc386a84754p1a4882jsn101277b860f1",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
