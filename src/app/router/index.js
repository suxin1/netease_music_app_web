import React from 'react';
// Layout
import FullPage from "../../layout/FullPage";
import NavLayout from "../../layout/NavLayout";

import Home from "../../page/Home";

export const LAYOUT_TYPES = {
  "full": "full",
  "mainNav": "mainNav"
};

export const routes = [
  {
    name: "首页",
    path: "/",
    component: Home,
    layout: LAYOUT_TYPES.mainNav,
  },
  {
    name: "歌单",
    path: "/public_collections",
    component: () => <div>歌单</div>,
    layout: LAYOUT_TYPES.mainNav,
    children: [
      {
        name: "歌单详情",
        path: "/:collectionId",
        component: () => <div>歌单详情</div>,
        layout: LAYOUT_TYPES.full
      }
    ],
  },
];


export function flat(routes, parentUri = "", result = []) {
  for (let i = 0; i < routes.length; i++) {
    let temp = {...routes[i], path: parentUri + routes[i].path};
    delete temp.children;
    result.push(temp);
    if (routes[i].children) {
      flat(routes[i].children, routes[i].path, result);
    }
  }
  return result;
}


export function clssify(routes) {
  let res = {};
  for(let key of Object.keys(LAYOUT_TYPES)) {
    res[key] = [];
  }
  for (let i=0;i<routes.length;i++) {
    let item = {...routes[i]};
    res[item.layout].push(item);
  }
  return res;
}

function routesFactory(typedRoutes) {

}
