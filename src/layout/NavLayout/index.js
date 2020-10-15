import React, { Component, Fragment } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import { Navigation } from "../../components/Navigation";

const NAV_CONFIG = [
  {
    title: "我的",
    path: "/personal",
    icon: "",
  },
  {
    title: "发现",
    path: "/new",
    icon: "",
  },
  {
    title: "电台",
    path: "/audio",
    icon: "",
  },
  {
    title: "视频",
    path: "/video",
  },
];

class Layout extends Component {
  renderSwitch(routes) {
    return (
      <Switch>
        {routes.map((r) => {
          return (
            <Route
              path={r.path}
              key={r.path}
              component={r.component}
              exact={r.exact}
            />
          );
        })}
      </Switch>
    );
  }

  render() {
    const { routes } = this.props;
    return (
      <Fragment>
        {this.renderSwitch(routes)}
        <Navigation tabs={NAV_CONFIG} />
      </Fragment>
    );
  }
}

export default Layout;
