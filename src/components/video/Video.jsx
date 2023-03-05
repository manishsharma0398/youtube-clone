import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

import "./Video.scss";

const Video = ({ data, channelVideo }) => {
  const { type, video } = data;
  return (
    type === "video" && (
      <div className={`video ${channelVideo && "channel-video"}`}>
        <Link to={`/video/${video?.videoId}`} className="video-placeholder">
          {
            video?.thumbnails?.map((thumbnail, i) => (
              <img src={thumbnail?.url} key={i} alt={video?.title} />
            ))[video?.thumbnails?.length - 1]
          }

          <span className="duration">
            {parseInt(video?.lengthSeconds / 60) +
              ":" +
              (video?.lengthSeconds % 60 === 0
                ? "00"
                : video?.lengthSeconds % 60)}
          </span>
        </Link>
        <div className="video-text">
          <Link
            to={`/channel/${video?.author?.channelId}`}
            className="channel-image"
          >
            {
              video?.author?.avatar?.map((pic, i) => (
                <img src={pic?.url} key={i} alt={video?.author?.title} />
              ))[video?.author?.avatar?.length - 1]
            }
          </Link>
          <div className="video-text__content">
            <Link to={`/video/${video?.videoId}`} className="video-name">
              {video?.title}{" "}
            </Link>

            <div className="video-meta__data">
              <Link
                to={`/channel/${video?.author?.channelId}`}
                className="channel-name"
              >
                {video?.author?.title}{" "}
                {video?.author?.badges?.map((badge, i) => {
                  return (
                    badge?.type === "VERIFIED_CHANNEL" && (
                      <AiFillCheckCircle key={i} />
                    )
                  );
                })}
              </Link>
              <span className="video-stats">
                <span className="views">
                  {parseInt(video?.stats?.views / 1000)}K views
                </span>

                <span className="time">{video?.publishedTimeText}</span>
              </span>
            </div>
          </div>
          <button>
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>
    )
  );
};
export default Video;
