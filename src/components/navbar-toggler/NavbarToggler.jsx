import { Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";

import YoutubeLogo from "../../assets/YouTube-Logo.png";

import "./NavbarToggler.scss";
import { useContext } from "react";
import SidebarContext from "../../context/sidebarContext";

const NavbarLeft = () => {
  const { sidebarHandler } = useContext(SidebarContext);

  return (
    <div className="navbar-toggler">
      <button onClick={sidebarHandler} className="sidebar-toggler">
        <RxHamburgerMenu className="hamburger" />
      </button>
      <Link title="Youtube Home" to="/" className="navbar-toggler__logo">
        <img className="logo" src={YoutubeLogo} alt="Youtube Logo" />
        <span className="country">IN</span>
      </Link>
    </div>
  );
};
export default NavbarLeft;
