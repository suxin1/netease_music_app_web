import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";

class FullPageLayout extends Component {
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
        {/* <Redirect to="/home" /> */}
      </Switch>
    );
  }

  render() {
    const { routes } = this.props;
    return <>{this.renderSwitch(routes)}</>;
  }
}

export default FullPageLayout;
