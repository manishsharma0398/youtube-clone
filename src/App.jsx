import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { YoutubeProvider } from "./context/youtubeApi";
import { SidebarProvider } from "./context/sidebarContext";

import Layout from "./layout/Layout";

import Home from "./pages/home/Home";
import Video from "./pages/video/Video";
import Search from "./pages/search/Search";
import Channel from "./pages/channel/Channel";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="">
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search-results" element={<Search />} />
            <Route path="channel/:channelId" element={<Channel />} />
            <Route path="video/:videoId" element={<Video />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return (
    <SidebarProvider>
      <YoutubeProvider>
        <RouterProvider router={router} />
      </YoutubeProvider>
    </SidebarProvider>
  );
};

export default App;
