import React from 'react';

import Home from "../../page/Home";

export const layoutTypes = {
  "full": Symbol("full page"),
  "mainNav": Symbol("main navigation bar")
};

export const routes = [
  {
    name: "首页",
    path: "/",
    component: Home,
    layout: layoutTypes.mainNav,
    children: [
      {
        name: ""
      }
    ]
  },
  {
    name: "歌单",
    path: "public_collections",
    component: () => <div>歌单</div>,
    layout: layoutTypes.mainNav
  },
  {
    name: "歌单详情",
    path: "public_collections/:collectionId",
    component: () => <div>歌单详情</div>,
    layout: layoutTypes.full
  }
];