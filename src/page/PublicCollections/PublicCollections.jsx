import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class PublicCollection extends Component {
  render() {
    return (
      <div>
        <NavLink to="/public_collections/12312412">详情</NavLink>
      </div>
    );
  }
}

export default PublicCollection;
