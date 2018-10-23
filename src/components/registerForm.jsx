import React from "react"
import Form from "./common/form"
import Joi from "joi-browser"

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" }, //property that get all the data
    errors: {} // property that get errors
  }

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
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
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username", "username")}
              {this.renderInput("password", "Password", "password", "password")}
              {this.renderInput("name", "Name", "name", "name")}
              {this.renderButton("Register")}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterForm
