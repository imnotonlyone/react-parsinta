import React, { Component } from "react";

export default class FormHandling extends Component {
  constructor() {
    super();

    this.state = {
      firstname: "",
      lastname: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      name: `${this.state.firstname} ${this.state.lastname}`,
    });

    this.state.firstname = "";
    this.state.lastname = "";
  };

  render() {
    const { name } = this.state;
    return (
      <div className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header"> Learn React Js</div>
                <div className="card-body">
                  <form onSubmit={this.submitHandler}>
                    <div className="mb-4">
                      <label htmlFor="firstname" className="form-label">
                        Firstname
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        className="form-control"
                        onChange={this.changeHandler}
                        value={this.state.firstname}
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="lastname" className="form-label">
                        lastname
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        className="form-control"
                        onChange={this.changeHandler}
                        value={this.state.lastname}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      Submit
                    </button>
                  </form>
                </div>

                <div className="card-footer">
                  My name is {name ? name : "..."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
