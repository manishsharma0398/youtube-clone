import { useContext } from "react";
import { Link } from "react-router-dom";
import SidebarContext from "../../context/sidebarContext";
import { categories } from "../categories/Categories";
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
        <div className="bottom">
          <span className="header">Explore</span>
          {categories.map((category, i) => (
            <Link
              className="category"
              key={i}
              to={`/search/${category?.label}`}
            >
              <span className="icon">{category?.icon}</span>

              <span className="label">{category?.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="sidebar-right" />
    </div>
  );
};
export default Sidebar;
