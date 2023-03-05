import axios from "axios";

const base_url = "https://youtube138.p.rapidapi.com";

export const makeRequest = axios.create({
  baseURL: base_url,
  // for man06101999@gmail.com
  // headers: {
  //   "X-RapidAPI-Key": "ccd2bbd356msh2f520b93dc00d4cp1d27a9jsn5a95cd8aad1f",
  //   "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  // },
  // for webdev
  headers: {
    "X-RapidAPI-Key": "1ba0ca7390mshe26aa055078e4e7p1867fajsnb1d4b61b096e",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
  params: {
    hl: "en",
    gl: "IN",
  },
});
