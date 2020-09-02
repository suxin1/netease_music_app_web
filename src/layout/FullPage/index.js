import React, {Component, Fragment} from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";
import {withRouter} from "react-router";


class FullPageLayout extends Component {

  renderSwitch(routes) {
    return (
      <Switch>
        {routes.map(r => {
          return <Route path={r.path} key={r.path}>{r.component}</Route>
        })}
      </Switch>
    )
  }

  render() {
    const {routes} = this.props;
    return (
      <Fragment>
        {this.renderSwitch(routes)}
      </Fragment>
    );
  }
}

export default withRouter(FullPageLayout);