import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Comment from "../../components/comment/Comment";
import YoutubeContext from "../../context/youtubeApi";
import "./Video.scss";
import React from "react";
import ReactPlayer from "react-player/youtube";

const Video = () => {
  const { videoData, getVideoDetails, relatedVideos, videoComments } =
    useContext(YoutubeContext);
  const videoId = useParams().videoId;

  // console.log(vide)

  useEffect(() => {
    getVideoDetails(videoId);
    // console.log(videoData);
    // console.log(relatedVideos);
  }, []);

  return (
    <div className="video-page">
      {/* <div className="video-page__data"> */}
      <div className="video-page__data-video">
        {/* TODO: video */}
        <div className="video-page__data-video-main">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            playing={true}
            pip={true}
            width="100%"
            volume={0.5}
            // height="max-content"
          />
        </div>
        <h3 className="video-title">{videoData?.title}</h3>
        <div className="video-page__data-video-channel">
          {
            videoData?.author?.avatar?.map((pic) => (
              <img src={pic?.url} alt={videoData?.title} />
            ))[videoData?.author?.avatar?.length - 1]
          }
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
          right
        </div>
        <div className="video-page__data-video-desc">
          <div className="video-stats">
            <span className="video-views">{videoData?.stats?.views} views</span>
            <span className="video-date">{videoData?.publishedDate}</span>
          </div>
          <p>{videoData?.description}</p>
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
                    <span className="views">{stats?.views} views</span>
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
        {videoComments?.comments?.map((comment) => (
          <Comment comment={comment} key={comment?.id} />
        ))}
      </div>
    </div>
  );
};
export default Video;
