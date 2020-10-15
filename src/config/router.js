import React from "react";
import { Redirect } from "react-router";
import { matchPath } from "react-router";

// Layout
import FullPage from "../layout/FullPage";
import NavLayout from "../layout/NavLayout";

// Page
import Personal from "../page/Personal";
import Login from "../page/Login";
import { New } from "../page/New";

export const LAYOUT_TYPES = {
  full: Symbol("Full page"),
  mainNav: Symbol("Page with navigation"),
};

export const routes = [
  {
    path: "/",
    exact: true,
    layout: LAYOUT_TYPES.full,
    component: () => <Redirect to="/personal" />,
  },
  {
    path: "/login",
    exact: true,
    layout: LAYOUT_TYPES.full,
    component: Login,
  },
  {
    name: "我的",
    path: "/personal",
    component: Personal,
    exact: true,
    layout: LAYOUT_TYPES.mainNav,
  },
  {
    name: "发现",
    path: "/new",
    component: New,
    layout: LAYOUT_TYPES.mainNav,
    children: [
      {
        name: "歌单详情",
        path: "/:collectionId",
        component: () => <div>歌单详情</div>,
        layout: LAYOUT_TYPES.full,
      },
    ],
  },
];

function flat(routes, parentUri = "", result = []) {
  for (let i = 0; i < routes.length; i++) {
    let temp = { ...routes[i], path: parentUri + routes[i].path };
    delete temp.children;
    result.push(temp);
    if (routes[i].children) {
      flat(routes[i].children, routes[i].path, result);
    }
  }
  return result;
}

export const flatRoutes = flat(routes);

// 路径到布局（layout）的映射
export const pathname2layoutMap = (function (routes) {
  let res = {};
  for (let i = 0; i < routes.length; i++) {
    const { path, layout } = routes[i];

    switch (layout) {
      case LAYOUT_TYPES.mainNav: {
        res[path] = [NavLayout, LAYOUT_TYPES.mainNav];
        break;
      }
      default: {
        res[path] = [FullPage, LAYOUT_TYPES.full];
      }
    }
  }
  return res;
})(flatRoutes);

// 布局到对应路由的映射
const layout2routeMap = (function (routes) {
  let map = {};
  for (let r of routes) {
    if (!map[r.layout]) {
      map[r.layout] = [];
    }
    map[r.layout].push(r);
  }
  return map;
})(flatRoutes);

/**
 * 根据路由选取适当的界面布局
 * @param props
 * @returns {*}
 */
export function layoutPicker({ location }) {
  const { pathname } = location;

  let target = Object.keys(pathname2layoutMap).find((r) => {
    let match = matchPath(pathname, r);
    if (match) return match.isExact;
  });

  const [Layout, key] = pathname2layoutMap[target] || [];
  return Layout ? (
    <Layout routes={layout2routeMap[key]} />
  ) : (
    <h2>无效路由，请检查路由配置</h2>
  );
}
