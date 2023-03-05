import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";

import "./SearchResultCard.scss";
import { duration } from "../../utils/duration";

const SearchResultCard = ({ data }) => {
  const { channel, type, video } = data || {};

  return type === "channel" ? (
    <div className="search-result search-result-channel">
      <Link to={`/channel/${channel?.channelId}`} className="placeholder">
        {
          channel?.avatar?.map((img, i) => (
            <img src={img?.url} alt={channel?.title} key={i} />
          ))[channel?.avatar?.length - 1]
        }
      </Link>
      <div className="content">
        <Link to={`/channel/${channel?.channelId}`} className="channel-title">
          {channel?.title}
          {channel?.badges?.map((badge, i) =>
            badge?.type === "VERIFIED_CHANNEL" ? (
              <AiFillCheckCircle key={i} />
            ) : (
              <span key={i}>{badge.text}</span>
            )
          )}
        </Link>

        <div className="channel-stats">
          <span>{channel?.username}</span>
          <span>{channel?.stats?.subscribersText}</span>
        </div>

        <span className="channel-desc">{channel?.descriptionSnippet}</span>
      </div>
    </div>
  ) : type === "video" ? (
    <div className="search-result search-result-video">
      <Link to={`/video/${video?.videoId}`} className="placeholder">
        {
          video?.thumbnails?.map((img, i) => (
            <img src={img?.url} alt={video?.title} key={i} />
          ))[video?.thumbnails?.length - 1]
        }
        <span className="duration">{duration(video?.lengthSeconds)}</span>
      </Link>
      <div className="content">
        <Link className="video-title" to={`/video/${video?.videoId}`}>
          {video?.title}
        </Link>
        <div className="video-stats">
          <span>{parseInt(video?.stats?.views / 1000)}K views</span>
          <span>{video?.publishedTimeText}</span>
        </div>
        <Link className="author" to={`/channel/${video?.author?.channelId}`}>
          {
            video?.author?.avatar?.map((img, i) => (
              <img
                className="author-img"
                src={img?.url}
                alt={video?.title}
                key={i}
              />
            ))[video?.author?.avatar?.length - 1]
          }

          <span>{video?.author?.title}</span>

          {video?.author?.badges.map((badge, i) =>
            badge?.type === "VERIFIED_CHANNEL" ? (
              <AiFillCheckCircle key={i} />
            ) : (
              <span key={i}>{badge.text}</span>
            )
          )}
        </Link>
        <span className="video-desc">{video?.descriptionSnippet}</span>
        <div className="badges">
          {video?.badges?.map((badge, i) => (
            <span className="badge" key={i}>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};
export default SearchResultCard;
