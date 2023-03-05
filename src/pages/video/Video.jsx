import React from "react";
import moment from "moment/moment";
import ReactPlayer from "react-player/youtube";
import { Link, useParams } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";

import YoutubeContext from "../../context/youtubeApi";
import { duration, viewCount } from "../../utils/duration";

import Comment from "../../components/comment/Comment";
import Spinner from "../../components/spinner/Spinner";

import "./Video.scss";

const Video = () => {
  const [isDescExpanded, setIsDescExpanded] = useState(false);

  const {
    videoData,
    getVideoDetails,
    relatedVideos,
    videoComments,
    isLoading,
  } = useContext(YoutubeContext);

  const videoId = useParams().videoId;

  useEffect(() => {
    getVideoDetails(videoId);
  }, [videoId]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="video-page">
      <div className="video-page__data-video">
        <div className="video-page__data-video-main">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            playing={true}
            pip={true}
            width="100%"
            height="100%"
            volume={0.5}
          />
        </div>
        <h3 className="video-title">{videoData?.title}</h3>
        <div className="video-page__data-video-channel">
          <Link to={`/channel/${videoData?.author?.channelId}`}>
            {
              videoData?.author?.avatar?.map((pic, i) => (
                <img src={pic?.url} alt={videoData?.title} key={i} />
              ))[videoData?.author?.avatar?.length - 1]
            }
          </Link>
          <div className="video-page__data-video-channel-details">
            <Link
              to={`/channel/${videoData?.author?.channelId}`}
              className="channel-name"
            >
              {videoData?.author?.title}
            </Link>
            <span className="channel-stats">
              {videoData?.author?.stats?.subscribersText}
            </span>
          </div>
          {videoData?.author?.badges?.map((badge, i) => {
            return (
              badge?.type === "VERIFIED_CHANNEL" && (
                <AiFillCheckCircle color="#606060" key={i} />
              )
            );
          })}
        </div>
        <div className="video-page__data-video-desc">
          <div className="video-stats">
            <span className="video-views">
              {viewCount(videoData?.stats?.views)} views
            </span>
            <span className="video-date">
              {moment(videoData?.publishedDate).fromNow()}
            </span>
          </div>
          <p className={`video-desc ${!isDescExpanded ? "expanded" : ""}`}>
            {videoData?.description}
          </p>
          <button
            onClick={() => setIsDescExpanded(!isDescExpanded)}
            className="desc-toggler"
          >
            {isDescExpanded ? "Show less..." : "Show more..."}
          </button>
        </div>
      </div>
      <div className="video-page__data-related">
        {relatedVideos?.contents?.map((relatedVideo) => {
          const {
            video: {
              author,
              isLiveNow,
              lengthSeconds,
              publishedTimeText,
              stats,
              thumbnails,
              title,
              videoId,
            },
          } = relatedVideo || {};

          return (
            <div key={videoId} className="related-video">
              <Link to={`/video/${videoId}`} className="related-video__image">
                {thumbnails?.map((pic, i) => <img key={i} src={pic?.url} />)[0]}
                <div className="duration">{duration(lengthSeconds)}</div>
              </Link>
              <div className="realted-video__text-content">
                <Link
                  to={`/video/${videoId}`}
                  className="related-video__text-content-title"
                >
                  {title}
                </Link>

                <div className="related-video__text-content__meta">
                  <span className="channel-name">{author?.title}</span>
                  <div className="related-video__text-content__meta-stats">
                    <span className="views">
                      {viewCount(stats?.views)} views
                    </span>
                    <span className="time">{publishedTimeText}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* </div> */}
      <div className="video-page__comments">
        <div className="comment-count">
          {videoComments?.totalCommentsCount} Comments
        </div>
        {videoComments?.comments?.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
    </div>
  );
};
export default Video;
