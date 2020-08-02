import React, { Component } from "react";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props.location
    return (
      <div className="container">
        <p>
          {data}
        </p>
      </div>
    );
  }
}