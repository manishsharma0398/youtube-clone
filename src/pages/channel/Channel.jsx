import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YoutubeContext from "../../context/youtubeApi";
import { AiFillCheckCircle } from "react-icons/ai";

import "./Channel.scss";
import Video from "../../components/video/Video";

const Channel = () => {
  const [showChannelBodySection, setShowChannelBodySection] =
    useState("videos");

  const channelBodyHandler = (opt) => {
    setShowChannelBodySection(opt);
  };

  const channelId = useParams().channelId;

  const { channelData, getChannelDetails, channelVideos } =
    useContext(YoutubeContext);

  useEffect(() => {
    getChannelDetails(channelId);
  }, []);

  return (
    <div className="channel">
      <div className="channel__banner-section">
        {
          channelData?.banner?.desktop?.map((data) => <img src={data?.url} />)[
            channelData?.banner?.desktop?.length - 1
          ]
        }
      </div>
      <div className="channel-details">
        <div className="channel-details__image">
          {
            channelData?.avatar?.map((pic, i) => (
              <img src={pic?.url} key={i} />
            ))[channelData?.avatar?.length - 1]
          }
        </div>
        <div className="channel-details__content">
          <div className="channel-details__content-title">
            <h3 className="channel-name">{channelData?.title}</h3>
            {channelData?.badges?.map(
              (badge, i) =>
                badge?.type === "VERIFIED_CHANNEL" && (
                  <AiFillCheckCircle key={i} />
                )
            )}
          </div>
          <div className="channel-details__content-stats">
            <span className="username">{channelData?.username}</span>

            <span>{channelData?.stats?.subscribersText}</span>

            <span>{channelData?.stats?.videosText}</span>
          </div>
          <div className="channel-details__content-desc">
            <span>{channelData?.description}</span>
            {/* TODO: Create arrow won click go to about section */}
          </div>
        </div>
      </div>
      <div className="channel-body">
        <button onClick={() => channelBodyHandler("videos")}>Videos</button>
        <button onClick={() => channelBodyHandler("about")}>About</button>
        {showChannelBodySection === "videos" && (
          <div className="channel-body__videos">
            {channelVideos?.contents?.map((video, i) => (
              <Video channelVideo={true} data={video} key={i} />
            ))}
          </div>
        )}
        {showChannelBodySection === "about" && (
          <div className="channel-body__about">
            <h3>About</h3>
            <div className="left">
              <h3>Description</h3>
              {channelData?.description}
              <hr />
              <h3>Details</h3>
              Loation: {channelData?.country}
              <hr />
              <h3>Links</h3>
              {channelData?.links?.map((link) => (
                <a href={link?.targetUrl} target="_blank">
                  {link?.title}
                </a>
              ))}
              <hr />
            </div>
            <div className="right">
              Stats
              <hr />
              {channelData?.joinedDateText}
              <hr />
              {channelData?.stats?.views} Views
              <hr />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Channel;
