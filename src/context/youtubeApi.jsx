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
  const [isLoading, setIsLoading] = useState(false);

  const getVideoDetails = async (videoId) => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  const searchYoutubeVideos = async (searchItem) => {
    setIsLoading(true);
    const response = await makeRequest.get(`/search/`, {
      params: {
        q: searchItem,
      },
    });
    setSearchResults(response.data);
    setIsLoading(false);
  };

  const getChannelDetails = async (channelId) => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  const value = {
    channelData,
    searchResults,
    channelVideos,
    videoData,
    videoComments,
    relatedVideos,
    isLoading,
    getChannelDetails,
    searchYoutubeVideos,
    getVideoDetails,
  };

  return (
    <YoutubeContext.Provider value={value}>{children}</YoutubeContext.Provider>
  );
};

export default YoutubeContext;
