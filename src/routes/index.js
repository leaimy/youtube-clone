import { ChannelDetail, Feed, SearchFeed, VideoDetail } from "../components";

const routers = [
  {
    path: "/",
    exact: true,
    component: <Feed />,
  },
  {
    path: "/video/:id",
    exact: true,
    component: <VideoDetail />,
  },
  {
    path: "/channel/:id",
    exact: true,
    component: <ChannelDetail />,
  },
  {
    path: "/search/:searchTerm",
    exact: true,
    component: <SearchFeed />,
  },
];

export default routers;
