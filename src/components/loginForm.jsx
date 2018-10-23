import React, { Component } from "react"
import Input from "./common/input"
import Form from "./common/form"
import Joi from "joi-browser"

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" }, //property that get all the data
    errors: {} // property that get errors
  }

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  }

  doSubmit = () => {
    // call the server
    console.log("submitted")
  }

  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-8">
            <h1>Login(s)</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username", "username")}
              {this.renderInput("password", "Password", "password", "password")}
              {this.renderButton("login")}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
