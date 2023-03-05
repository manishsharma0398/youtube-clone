import { useContext } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { SidebarContext } from "../context/sidebarContext";

const Layout = () => {
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <div>
      {isSidebarOpen && <Sidebar />}
      {/* <Sidebar /> */}
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Layout;
