import numeral from "numeral";
import { useParams } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";

import YoutubeContext from "../../context/youtubeApi";

import Video from "../../components/video/Video";
import Spinner from "../../components/spinner/Spinner";

import "./Channel.scss";

const Channel = () => {
  const [showChannelBodySection, setShowChannelBodySection] =
    useState("videos");

  const channelBodyHandler = (opt) => {
    setShowChannelBodySection(opt);
  };

  const channelId = useParams().channelId;

  const { channelData, getChannelDetails, channelVideos, isLoading } =
    useContext(YoutubeContext);

  useEffect(() => {
    getChannelDetails(channelId);
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
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
        <div className="channel-body-actions">
          <button
            className={showChannelBodySection === "videos" ? "active" : ""}
            onClick={() => channelBodyHandler("videos")}
          >
            Videos
          </button>
          <button
            className={showChannelBodySection === "about" ? "active" : ""}
            onClick={() => channelBodyHandler("about")}
          >
            About
          </button>
        </div>
        {showChannelBodySection === "videos" && (
          <div className="channel-body__videos">
            {channelVideos?.contents?.map((video, i) => (
              <Video channelVideo={true} data={video} key={i} />
            ))}
          </div>
        )}
        {showChannelBodySection === "about" && (
          <div className="channel-body__about">
            <div className="left">
              <span className="head">Description</span>
              <span className="channel-desc">{channelData?.description}</span>

              <hr />
              <span className="head">Details</span>
              <span>Location: {channelData?.country}</span>
              <hr />
              <span className="head">Links</span>
              {channelData?.links?.map((link, i) => (
                <a key={i} href={link?.targetUrl} target="_blank">
                  {link?.title}
                </a>
              ))}
              <hr />
            </div>
            <div className="right">
              <span className="head">Stats</span>
              <hr />
              <span className="right-stats">{channelData?.joinedDateText}</span>
              <hr />
              <span className="right-stats">
                {numeral(channelData?.stats?.views).format(",")} Views
              </span>
              <hr />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Channel;
