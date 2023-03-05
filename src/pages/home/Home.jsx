import { useContext, useEffect } from "react";

import YoutubeContext from "../../context/youtubeApi";

import Tag from "../../components/tag/Tag";
import Video from "../../components/video/Video";

import "./Home.scss";

const Home = () => {
  const { searchResults, searchYoutubeVideos } = useContext(YoutubeContext);

  useEffect(() => {
    searchYoutubeVideos("Nepali Songs");
  }, []);

  return (
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
