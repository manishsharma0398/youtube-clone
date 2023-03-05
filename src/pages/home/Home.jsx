import { useContext, useEffect } from "react";

import YoutubeContext from "../../context/youtubeApi";

import Tag from "../../components/tag/Tag";
import Video from "../../components/video/Video";
import Spinner from "../../components/spinner/Spinner";

import "./Home.scss";

const Home = () => {
  const { searchResults, searchYoutubeVideos, isLoading } =
    useContext(YoutubeContext);

  useEffect(() => {
    searchYoutubeVideos("Nepali Songs");
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="home">
      <div className="tags">
        {searchResults?.refinements?.map((refine, i) => (
          <Tag key={i} tag={refine} />
        ))}
      </div>
      <div className="home-videos">
        {searchResults?.contents &&
          searchResults?.contents?.map((video, i) => (
            <Video data={video} key={i} />
          ))}
      </div>
    </div>
  );
};
export default Home;
