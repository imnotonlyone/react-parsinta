import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "ilham",
      absen: 12,
    };
  }

  render() {
    const name = this.state.name;
    const absen = this.state.absen;
    return (
      <div>
        <h1>Nama : {name}</h1>
        <h2>Absen : {absen}</h2>
      </div>
    );
  }
}

export default App;
