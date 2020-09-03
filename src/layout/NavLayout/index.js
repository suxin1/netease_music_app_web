import React, {Component, Fragment} from 'react';
import {
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import {withRouter} from "react-router";


class Layout extends Component {

  renderSwitch(routes) {
    return (
      <Switch>
        {routes.map(r => {
          return <Route path={r.path} key={r.path} component={r.component} exact={r.exact}/>
        })}
      </Switch>
    )
  }

  render() {
    const {routes} = this.props;
    return (
      <Fragment>
        {this.renderSwitch(routes)}
        <div>
          <NavLink to="/">我的</NavLink>
          <NavLink to="public_collections">歌单</NavLink>
        </div>
      </Fragment>
    );
  }
}

export default Layout;
