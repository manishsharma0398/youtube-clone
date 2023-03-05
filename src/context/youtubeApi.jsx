import { createContext, useState } from "react";
import { makeRequest } from "../utils/APIRequest";

const YoutubeContext = createContext();

export const YoutubeProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [channelData, setChannelData] = useState([]);
  const [channelVideos, setChannelVideos] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [videoComments, setVideoComments] = useState([]);

  const getVideoDetails = async (videoId) => {
    const response = await makeRequest.get(`/video/details/`, {
      params: {
        id: videoId,
      },
    });
    setVideoData(response.data);
    const response2 = await makeRequest.get(`/video/related-contents/`, {
      params: {
        id: videoId,
      },
    });
    setRelatedVideos(response2?.data);
    const response3 = await makeRequest.get(`/video/comments/`, {
      params: {
        id: videoId,
      },
    });
    setVideoComments(response3?.data);

    console.log({ response, response2, response3 });
  };

  const searchYoutubeVideos = async (searchItem) => {
    const response = await makeRequest.get(`/search/`, {
      params: {
        q: searchItem,
      },
    });
    console.log(response.data);
    setSearchResults(response.data);
  };

  const getChannelDetails = async (channelId) => {
    const response1 = await makeRequest.get(`/channel/details/`, {
      params: {
        id: channelId,
      },
    });
    setChannelData(response1.data);
    const response2 = await makeRequest.get(`/channel/videos/`, {
      params: {
        id: channelId,
      },
    });
    setChannelVideos(response2.data);
  };

  const value = {
    channelData,
    searchResults,
    channelVideos,
    videoData,
    videoComments,
    relatedVideos,
    getChannelDetails,
    searchYoutubeVideos,
    getVideoDetails,
  };

  return (
    <YoutubeContext.Provider value={value}>{children}</YoutubeContext.Provider>
  );
};

export default YoutubeContext;

// const options = {
//   method: "GET",
//   url: "https://youtube138.p.rapidapi.com/search/",
//   params: { q: "despacito", hl: "en", gl: "US" },
//   headers: {
//     "X-RapidAPI-Key": "ccd2bbd356msh2f520b93dc00d4cp1d27a9jsn5a95cd8aad1f",
//     "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
