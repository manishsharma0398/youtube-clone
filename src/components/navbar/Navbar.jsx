import { ImMic } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BiVideoPlus } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

import NavbarToggler from "../navbar-toggler/NavbarToggler";

import ProfilePic from "../../assets/unnamed.jpg";

import "./Navbar.scss";
import { useContext, useRef } from "react";
import YoutubeContext from "../../context/youtubeApi";

const Navbar = () => {
  const { searchYoutubeVideos } = useContext(YoutubeContext);
  const navigate = useNavigate();

  const inputValue = useRef("");

  const handleSearch = (e) => {
    e.preventDefault();

    const searchTerm = inputValue.current.value;

    if (searchTerm.length > 1) {
      searchYoutubeVideos(searchTerm);
      return navigate("/search-results");
    }
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-left">
          <NavbarToggler />
        </div>

        <div className="navbar-center">
          <form onSubmit={handleSearch}>
            <input
              ref={inputValue}
              placeholder="Search"
              type="search"
              name=""
              id=""
            />
            <button type="submit">
              <FiSearch />
            </button>
          </form>
          <button className="microphone">
            <ImMic />
          </button>
        </div>

        <div className="navbar-right">
          <button className="video-add">
            <BiVideoPlus />{" "}
          </button>
          <div className="notification">
            <IoMdNotificationsOutline />
          </div>
          <img src={ProfilePic} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
