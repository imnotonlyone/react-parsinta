import React, { Component } from "react";
import axios from "axios";

export default class FetchingApi extends Component {
  constructor() {
    super();

    this.state = {
      user: [],
    };
  }

  getUser = async () => {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    this.setState({
      user: response.data,
    });
  };

  componentDidMount() {
    this.getUser();
  }
  render() {
    const { user } = this.state.user;
    return (
      <div>
        <div>{user.name}</div>
        <div>{user.username}</div>
      </div>
    );
  }
}
