import React from "react";

import Navigation from "../components/Navigation";

export default {
  title: "Navigation",
  component: Navigation
}

export const Navigate = (args) => <Navigation {...args} />
Navigate.args = {
  tabs: [
    {
      title: "我的",
      path: "/personal",
      icon: ""
    },
    {
      title: "发现",
      path: "/new",
      icon: ""
    },
    {
      title: "电台",
      path: "/audio",
      icon: ""
    },
    {
      title: "视频",
      path: "/video"
    }
  ]
}
