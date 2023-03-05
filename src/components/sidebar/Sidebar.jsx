import { useContext } from "react";
import SidebarContext from "../../context/sidebarContext";
import NavbarToggler from "../navbar-toggler/NavbarToggler";

import "./Sidebar.scss";

const Sidebar = () => {
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <div className="sidebar">
      <div className={`sidebar-left ${isSidebarOpen ? "is-open" : "is-close"}`}>
        <div className="top">
          <NavbarToggler />
        </div>
        <div className="bottom"></div>
      </div>
      <div className="sidebar-right" />
    </div>
  );
};
export default Sidebar;
